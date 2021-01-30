import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Time: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};








/** 'Module' input values */
export type ModuleInput = {
  name: Scalars['String'];
  type: Scalars['String'];
  description: Scalars['String'];
  integrationID: Scalars['ID'];
  options?: Maybe<Array<ModuleOptionInput>>;
};

/** 'ModuleOption' input values */
export type ModuleOptionInput = {
  name: Scalars['String'];
  key: Scalars['String'];
  type: Scalars['String'];
  description: Scalars['String'];
  values?: Maybe<Array<Scalars['String']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new document in the collection of 'Module' */
  createModule: Module;
  /** Update an existing document in the collection of 'Module' */
  updateModule?: Maybe<Module>;
  /** Delete an existing document in the collection of 'Module' */
  deleteModule?: Maybe<Module>;
};


export type MutationCreateModuleArgs = {
  data: ModuleInput;
};


export type MutationUpdateModuleArgs = {
  id: Scalars['ID'];
  data: ModuleInput;
};


export type MutationDeleteModuleArgs = {
  id: Scalars['ID'];
};


export type Module = {
  __typename?: 'Module';
  name: Scalars['String'];
  description: Scalars['String'];
  /** The document's ID. */
  _id: Scalars['ID'];
  integrationID: Scalars['ID'];
  options?: Maybe<Array<ModuleOption>>;
  type: Scalars['String'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

export type ModuleOption = {
  __typename?: 'ModuleOption';
  name: Scalars['String'];
  description: Scalars['String'];
  key: Scalars['String'];
  values?: Maybe<Array<Scalars['String']>>;
  type: Scalars['String'];
};

/** The pagination object for elements of type 'Module'. */
export type ModulePage = {
  __typename?: 'ModulePage';
  /** The elements of type 'Module' in this page. */
  data: Array<Maybe<Module>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Find a document from the collection of 'Module' by its id. */
  findModuleByID?: Maybe<Module>;
  allModules: ModulePage;
};


export type QueryFindModuleByIdArgs = {
  id: Scalars['ID'];
};


export type QueryAllModulesArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type AllModulesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllModulesQuery = (
  { __typename?: 'Query' }
  & { allModules: (
    { __typename?: 'ModulePage' }
    & { data: Array<Maybe<(
      { __typename?: 'Module' }
      & Pick<Module, '_id' | '_ts' | 'name' | 'type' | 'description' | 'integrationID'>
      & { options?: Maybe<Array<(
        { __typename?: 'ModuleOption' }
        & Pick<ModuleOption, 'name' | 'key' | 'type' | 'description' | 'values'>
      )>> }
    )>> }
  ) }
);

export type FindModuleByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindModuleByIdQuery = (
  { __typename?: 'Query' }
  & { findModuleByID?: Maybe<(
    { __typename?: 'Module' }
    & Pick<Module, '_id' | '_ts' | 'name' | 'type' | 'description' | 'integrationID'>
    & { options?: Maybe<Array<(
      { __typename?: 'ModuleOption' }
      & Pick<ModuleOption, 'name' | 'key' | 'type' | 'description' | 'values'>
    )>> }
  )> }
);

export type CreateModuleMutationVariables = Exact<{
  data: ModuleInput;
}>;


export type CreateModuleMutation = (
  { __typename?: 'Mutation' }
  & { createModule: (
    { __typename?: 'Module' }
    & Pick<Module, '_id' | '_ts' | 'name' | 'type' | 'description' | 'integrationID'>
    & { options?: Maybe<Array<(
      { __typename?: 'ModuleOption' }
      & Pick<ModuleOption, 'name' | 'key' | 'type' | 'description' | 'values'>
    )>> }
  ) }
);

export type UpdateModuleMutationVariables = Exact<{
  id: Scalars['ID'];
  data: ModuleInput;
}>;


export type UpdateModuleMutation = (
  { __typename?: 'Mutation' }
  & { updateModule?: Maybe<(
    { __typename?: 'Module' }
    & Pick<Module, '_id' | '_ts' | 'name' | 'type' | 'description' | 'integrationID'>
    & { options?: Maybe<Array<(
      { __typename?: 'ModuleOption' }
      & Pick<ModuleOption, 'name' | 'key' | 'type' | 'description' | 'values'>
    )>> }
  )> }
);

export type DeleteModuleMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteModuleMutation = (
  { __typename?: 'Mutation' }
  & { deleteModule?: Maybe<(
    { __typename?: 'Module' }
    & Pick<Module, '_id'>
  )> }
);


export const AllModulesDocument = gql`
    query allModules {
  allModules {
    data {
      _id
      _ts
      name
      type
      description
      integrationID
      options {
        name
        key
        type
        description
        values
      }
    }
  }
}
    `;
export const FindModuleByIdDocument = gql`
    query findModuleByID($id: ID!) {
  findModuleByID(id: $id) {
    _id
    _ts
    name
    type
    description
    integrationID
    options {
      name
      key
      type
      description
      values
    }
  }
}
    `;
export const CreateModuleDocument = gql`
    mutation createModule($data: ModuleInput!) {
  createModule(data: $data) {
    _id
    _ts
    name
    type
    description
    integrationID
    options {
      name
      key
      type
      description
      values
    }
  }
}
    `;
export const UpdateModuleDocument = gql`
    mutation updateModule($id: ID!, $data: ModuleInput!) {
  updateModule(id: $id, data: $data) {
    _id
    _ts
    name
    type
    description
    integrationID
    options {
      name
      key
      type
      description
      values
    }
  }
}
    `;
export const DeleteModuleDocument = gql`
    mutation deleteModule($id: ID!) {
  deleteModule(id: $id) {
    _id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    allModules(variables?: AllModulesQueryVariables, requestHeaders?: Headers): Promise<AllModulesQuery> {
      return withWrapper(() => client.request<AllModulesQuery>(print(AllModulesDocument), variables, requestHeaders));
    },
    findModuleByID(variables: FindModuleByIdQueryVariables, requestHeaders?: Headers): Promise<FindModuleByIdQuery> {
      return withWrapper(() => client.request<FindModuleByIdQuery>(print(FindModuleByIdDocument), variables, requestHeaders));
    },
    createModule(variables: CreateModuleMutationVariables, requestHeaders?: Headers): Promise<CreateModuleMutation> {
      return withWrapper(() => client.request<CreateModuleMutation>(print(CreateModuleDocument), variables, requestHeaders));
    },
    updateModule(variables: UpdateModuleMutationVariables, requestHeaders?: Headers): Promise<UpdateModuleMutation> {
      return withWrapper(() => client.request<UpdateModuleMutation>(print(UpdateModuleDocument), variables, requestHeaders));
    },
    deleteModule(variables: DeleteModuleMutationVariables, requestHeaders?: Headers): Promise<DeleteModuleMutation> {
      return withWrapper(() => client.request<DeleteModuleMutation>(print(DeleteModuleDocument), variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;

export default function faugra({
  secret = process.env.FAUGRA_SECRET,
  domain = process.env.FAUGRA_DOMAIN,
} = {}) {
  if (!secret) {
    throw new Error('SDK requires a secret to be defined.')
  }

  return getSdk(
    new GraphQLClient(domain || 'https://graphql.fauna.com/graphql', {
      headers: {
        authorization: secret && `Bearer ${secret}`,
      },
    })
  )
}