export interface ZoteroOptions {
    authorization?: string;
    zoteroWriteToken?: string;
    ifModifiedSinceVersion?: string;
    ifUnmodifiedSinceVersion?: string;
    contentType?: string;
    collectionKey?: string;
    content?: string;
    direction?: string;
    format?: string;
    include?: string;
    includeTrashed?: string;
    itemKey?: string;
    itemQ?: string;
    itemQMode?: string;
    itemTag?: string | string[];
    itemType?: string;
    limit?: number;
    linkMode?: string;
    locale?: string;
    q?: string;
    qmode?: string;
    searchKey?: string;
    since?: number;
    sort?: string;
    start?: number;
    style?: string;
    tag?: string | string[];
    pretend?: boolean;
    resource?: {
        top?: string;
        trash?: string;
        children?: string;
        groups?: string;
        itemTypes?: string;
        itemFields?: string;
        creatorFields?: string;
        itemTypeFields?: string;
        itemTypeCreatorTypes?: string;
        library?: string;
        collections?: string;
        items?: string;
        searches?: string;
        tags?: string;
        template?: string;
    };
    method?: string;
    body?: string;
    mode?: string;
    cache?: string;
    credentials?: string;
    uploadRegisterOnly?: boolean;
    retry?: number;
    retryDelay?: number;
}
export interface ApiResponse {
    getResponseType: () => string;
    getData: () => any;
    getLinks: () => any;
    getMeta: () => any;
    getVersion: () => number;
}
export interface SingleReadResponse extends ApiResponse {
    getResponseType: () => string;
    getData: () => any;
}
export interface MultiReadResponse extends ApiResponse {
    getResponseType: () => string;
    getData: () => Array<any>;
    getLinks: () => Array<any>;
    getMeta: () => Array<any>;
    getTotalResults: () => string;
    getRelLinks: () => any;
}
export interface SingleWriteResponse extends ApiResponse {
    getResponseType: () => string;
    getData: () => any;
}
export interface MultiWriteResponse extends ApiResponse {
    getResponseType: () => string;
    isSuccess: () => boolean;
    getData: () => Array<any>;
    getLinks: () => any;
    getMeta: () => any;
    getErrors: () => any;
    getEntityByKey: (key: string) => any;
    getEntityByIndex: (index: number) => any;
}
export interface ZoteroClient {
    library: (libraryType: string, libraryId: string) => ZoteroClient;
    items: (key?: string) => ZoteroClient;
    collections: (key?: string) => ZoteroClient;
    top: () => ZoteroClient;
    attachment: (fileName?: string, file?: string, mtime?: string, md5sum?: string, patch?: string, algorithm?: string) => ZoteroClient;
    get: (opts?: ZoteroOptions) => Promise<ApiResponse>;
    pretend: (opts?: ZoteroOptions) => Promise<ApiResponse>;
}
declare function api(key: string, opts?: ZoteroOptions): ZoteroClient;
export default api;
