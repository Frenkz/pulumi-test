import * as gcp from '@pulumi/gcp'
import * as pulumi from '@pulumi/pulumi'
const sdk = require('./sdk/sdk')
const testTopic = new gcp.pubsub.Topic(
  'test.topic',
)

const config = new pulumi.Config()

const apiKey: string = config.require<string>(
  'apiKey'
)

testTopic.onMessagePublished(
  'test.topic.triggered',
  async (data: any) => {
    const input: {
        moduleID: string
    } = JSON.parse(
      Buffer.from(data.data, 'base64').toString()
    )

    const _sdk = sdk({
      secret: apiKey,
    })

    const moduleQuery = await _sdk.findModuleByID({
      id: input.moduleID,
    })

    console.log(moduleQuery)
  }
)

export const testTopicName = testTopic.name
