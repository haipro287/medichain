/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
export var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));
export class HttpClient {
    constructor(apiConfig = {}) {
        this.baseUrl = "";
        this.securityData = null;
        this.securityWorker = null;
        this.abortControllers = new Map();
        this.baseApiParams = {
            credentials: "same-origin",
            headers: {},
            redirect: "follow",
            referrerPolicy: "no-referrer",
        };
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.contentFormatters = {
            [ContentType.Json]: (input) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
            [ContentType.FormData]: (input) => Object.keys(input || {}).reduce((data, key) => {
                data.append(key, input[key]);
                return data;
            }, new FormData()),
            [ContentType.UrlEncoded]: (input) => this.toQueryString(input),
        };
        this.createAbortSignal = (cancelToken) => {
            if (this.abortControllers.has(cancelToken)) {
                const abortController = this.abortControllers.get(cancelToken);
                if (abortController) {
                    return abortController.signal;
                }
                return void 0;
            }
            const abortController = new AbortController();
            this.abortControllers.set(cancelToken, abortController);
            return abortController.signal;
        };
        this.abortRequest = (cancelToken) => {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                abortController.abort();
                this.abortControllers.delete(cancelToken);
            }
        };
        this.request = ({ body, secure, path, type, query, format = "json", baseUrl, cancelToken, ...params }) => {
            const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const queryString = query && this.toQueryString(query);
            const payloadFormatter = this.contentFormatters[type || ContentType.Json];
            return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
                ...requestParams,
                headers: {
                    ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
                    ...(requestParams.headers || {}),
                },
                signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
                body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
            }).then(async (response) => {
                const r = response;
                r.data = null;
                r.error = null;
                const data = await response[format]()
                    .then((data) => {
                    if (r.ok) {
                        r.data = data;
                    }
                    else {
                        r.error = data;
                    }
                    return r;
                })
                    .catch((e) => {
                    r.error = e;
                    return r;
                });
                if (cancelToken) {
                    this.abortControllers.delete(cancelToken);
                }
                if (!response.ok)
                    throw data;
                return data;
            });
        };
        Object.assign(this, apiConfig);
    }
    addQueryParam(query, key) {
        const value = query[key];
        return (encodeURIComponent(key) +
            "=" +
            encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`));
    }
    toQueryString(rawQuery) {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
        return keys
            .map((key) => typeof query[key] === "object" && !Array.isArray(query[key])
            ? this.toQueryString(query[key])
            : this.addQueryParam(query, key))
            .join("&");
    }
    addQueryParams(rawQuery) {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }
    mergeRequestParams(params1, params2) {
        return {
            ...this.baseApiParams,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...(this.baseApiParams.headers || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }
}
/**
 * @title medichain/admin.proto
 * @version version not set
 */
export class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Query
         * @name QueryAdminAll
         * @summary Queries a list of admin items.
         * @request GET:/sota/medichain/medichain/admin
         */
        this.queryAdminAll = (query, params = {}) => this.request({
            path: `/sota/medichain/medichain/admin`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryAdmin
         * @summary Queries a admin by id.
         * @request GET:/sota/medichain/medichain/admin/{id}
         */
        this.queryAdmin = (id, params = {}) => this.request({
            path: `/sota/medichain/medichain/admin/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryCheckServiceUser
         * @summary Queries a list of checkServiceUser items.
         * @request GET:/sota/medichain/medichain/checkServiceUser
         */
        this.queryCheckServiceUser = (query, params = {}) => this.request({
            path: `/sota/medichain/medichain/checkServiceUser`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryCheckSharing
         * @summary Queries a list of checkSharing items.
         * @request GET:/sota/medichain/medichain/checkSharing
         */
        this.queryCheckSharing = (query, params = {}) => this.request({
            path: `/sota/medichain/medichain/checkSharing`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryServiceAll
         * @summary Queries a list of service items.
         * @request GET:/sota/medichain/medichain/service
         */
        this.queryServiceAll = (query, params = {}) => this.request({
            path: `/sota/medichain/medichain/service`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryService
         * @summary Queries a service by index.
         * @request GET:/sota/medichain/medichain/service/{index}
         */
        this.queryService = (index, params = {}) => this.request({
            path: `/sota/medichain/medichain/service/${index}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryServiceUserAll
         * @summary Queries a list of serviceUser items.
         * @request GET:/sota/medichain/medichain/serviceUser
         */
        this.queryServiceUserAll = (query, params = {}) => this.request({
            path: `/sota/medichain/medichain/serviceUser`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryServiceUser
         * @summary Queries a serviceUser by index.
         * @request GET:/sota/medichain/medichain/serviceUser/{index}
         */
        this.queryServiceUser = (index, params = {}) => this.request({
            path: `/sota/medichain/medichain/serviceUser/${index}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QuerySharingAll
         * @summary Queries a list of sharing items.
         * @request GET:/sota/medichain/medichain/sharing
         */
        this.querySharingAll = (query, params = {}) => this.request({
            path: `/sota/medichain/medichain/sharing`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QuerySharing
         * @summary Queries a sharing by index.
         * @request GET:/sota/medichain/medichain/sharing/{index}
         */
        this.querySharing = (index, params = {}) => this.request({
            path: `/sota/medichain/medichain/sharing/${index}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryUserAll
         * @summary Queries a list of user items.
         * @request GET:/sota/medichain/medichain/user
         */
        this.queryUserAll = (query, params = {}) => this.request({
            path: `/sota/medichain/medichain/user`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryUser
         * @summary Queries a user by index.
         * @request GET:/sota/medichain/medichain/user/{index}
         */
        this.queryUser = (index, params = {}) => this.request({
            path: `/sota/medichain/medichain/user/${index}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryUserService
         * @summary Queries a list of userService items.
         * @request GET:/sota/medichain/medichain/userService
         */
        this.queryUserService = (query, params = {}) => this.request({
            path: `/sota/medichain/medichain/userService`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
    }
}
