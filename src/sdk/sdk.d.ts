import { GraphQLClient } from 'graphql-request';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
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
export declare type ModuleInput = {
    name: Scalars['String'];
    type: Scalars['String'];
    description: Scalars['String'];
    integrationID: Scalars['ID'];
    options?: Maybe<Array<ModuleOptionInput>>;
};
/** 'ModuleOption' input values */
export declare type ModuleOptionInput = {
    name: Scalars['String'];
    key: Scalars['String'];
    type: Scalars['String'];
    description: Scalars['String'];
    values?: Maybe<Array<Scalars['String']>>;
};
export declare type Mutation = {
    __typename?: 'Mutation';
    /** Create a new document in the collection of 'Module' */
    createModule: Module;
    /** Update an existing document in the collection of 'Module' */
    updateModule?: Maybe<Module>;
    /** Delete an existing document in the collection of 'Module' */
    deleteModule?: Maybe<Module>;
};
export declare type MutationCreateModuleArgs = {
    data: ModuleInput;
};
export declare type MutationUpdateModuleArgs = {
    id: Scalars['ID'];
    data: ModuleInput;
};
export declare type MutationDeleteModuleArgs = {
    id: Scalars['ID'];
};
export declare type Module = {
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
export declare type ModuleOption = {
    __typename?: 'ModuleOption';
    name: Scalars['String'];
    description: Scalars['String'];
    key: Scalars['String'];
    values?: Maybe<Array<Scalars['String']>>;
    type: Scalars['String'];
};
/** The pagination object for elements of type 'Module'. */
export declare type ModulePage = {
    __typename?: 'ModulePage';
    /** The elements of type 'Module' in this page. */
    data: Array<Maybe<Module>>;
    /** A cursor for elements coming after the current page. */
    after?: Maybe<Scalars['String']>;
    /** A cursor for elements coming before the current page. */
    before?: Maybe<Scalars['String']>;
};
export declare type Query = {
    __typename?: 'Query';
    /** Find a document from the collection of 'Module' by its id. */
    findModuleByID?: Maybe<Module>;
    allModules: ModulePage;
};
export declare type QueryFindModuleByIdArgs = {
    id: Scalars['ID'];
};
export declare type QueryAllModulesArgs = {
    _size?: Maybe<Scalars['Int']>;
    _cursor?: Maybe<Scalars['String']>;
};
export declare type AllModulesQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type AllModulesQuery = ({
    __typename?: 'Query';
} & {
    allModules: ({
        __typename?: 'ModulePage';
    } & {
        data: Array<Maybe<({
            __typename?: 'Module';
        } & Pick<Module, '_id' | '_ts' | 'name' | 'type' | 'description' | 'integrationID'> & {
            options?: Maybe<Array<({
                __typename?: 'ModuleOption';
            } & Pick<ModuleOption, 'name' | 'key' | 'type' | 'description' | 'values'>)>>;
        })>>;
    });
});
export declare type FindModuleByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;
export declare type FindModuleByIdQuery = ({
    __typename?: 'Query';
} & {
    findModuleByID?: Maybe<({
        __typename?: 'Module';
    } & Pick<Module, '_id' | '_ts' | 'name' | 'type' | 'description' | 'integrationID'> & {
        options?: Maybe<Array<({
            __typename?: 'ModuleOption';
        } & Pick<ModuleOption, 'name' | 'key' | 'type' | 'description' | 'values'>)>>;
    })>;
});
export declare type CreateModuleMutationVariables = Exact<{
    data: ModuleInput;
}>;
export declare type CreateModuleMutation = ({
    __typename?: 'Mutation';
} & {
    createModule: ({
        __typename?: 'Module';
    } & Pick<Module, '_id' | '_ts' | 'name' | 'type' | 'description' | 'integrationID'> & {
        options?: Maybe<Array<({
            __typename?: 'ModuleOption';
        } & Pick<ModuleOption, 'name' | 'key' | 'type' | 'description' | 'values'>)>>;
    });
});
export declare type UpdateModuleMutationVariables = Exact<{
    id: Scalars['ID'];
    data: ModuleInput;
}>;
export declare type UpdateModuleMutation = ({
    __typename?: 'Mutation';
} & {
    updateModule?: Maybe<({
        __typename?: 'Module';
    } & Pick<Module, '_id' | '_ts' | 'name' | 'type' | 'description' | 'integrationID'> & {
        options?: Maybe<Array<({
            __typename?: 'ModuleOption';
        } & Pick<ModuleOption, 'name' | 'key' | 'type' | 'description' | 'values'>)>>;
    })>;
});
export declare type DeleteModuleMutationVariables = Exact<{
    id: Scalars['ID'];
}>;
export declare type DeleteModuleMutation = ({
    __typename?: 'Mutation';
} & {
    deleteModule?: Maybe<({
        __typename?: 'Module';
    } & Pick<Module, '_id'>)>;
});
export declare const AllModulesDocument: import("graphql").DocumentNode;
export declare const FindModuleByIdDocument: import("graphql").DocumentNode;
export declare const CreateModuleDocument: import("graphql").DocumentNode;
export declare const UpdateModuleDocument: import("graphql").DocumentNode;
export declare const DeleteModuleDocument: import("graphql").DocumentNode;
export declare type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    allModules(variables?: AllModulesQueryVariables, requestHeaders?: Headers): Promise<AllModulesQuery>;
    findModuleByID(variables: FindModuleByIdQueryVariables, requestHeaders?: Headers): Promise<FindModuleByIdQuery>;
    createModule(variables: CreateModuleMutationVariables, requestHeaders?: Headers): Promise<CreateModuleMutation>;
    updateModule(variables: UpdateModuleMutationVariables, requestHeaders?: Headers): Promise<UpdateModuleMutation>;
    deleteModule(variables: DeleteModuleMutationVariables, requestHeaders?: Headers): Promise<DeleteModuleMutation>;
};
export declare type Sdk = ReturnType<typeof getSdk>;
export default function faugra({ secret, domain, }?: {
    secret?: string;
    domain?: string;
}): {
    allModules(variables?: Exact<{
        [key: string]: never;
    }>, requestHeaders?: Headers): Promise<AllModulesQuery>;
    findModuleByID(variables: Exact<{
        id: string;
    }>, requestHeaders?: Headers): Promise<FindModuleByIdQuery>;
    createModule(variables: Exact<{
        data: ModuleInput;
    }>, requestHeaders?: Headers): Promise<CreateModuleMutation>;
    updateModule(variables: Exact<{
        id: string;
        data: ModuleInput;
    }>, requestHeaders?: Headers): Promise<UpdateModuleMutation>;
    deleteModule(variables: Exact<{
        id: string;
    }>, requestHeaders?: Headers): Promise<DeleteModuleMutation>;
};
//# sourceMappingURL=automation-system-sdk.d.ts.map