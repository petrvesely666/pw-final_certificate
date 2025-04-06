import { type TestType, type PlaywrightTestArgs, type PlaywrightTestOptions, type PlaywrightWorkerArgs, type PlaywrightWorkerOptions, type APIRequestContext, expect } from "@playwright/test";
import { Serializable } from "node:child_process";
import { ReadStream } from "node:fs";

export class BeUtils {
    protected _request: APIRequestContext
    protected _test: TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>

    constructor(
        request: APIRequestContext,
        test: TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
    ) {
        this._request = request
        this._test = test
    }

    // Metody
    protected async _httpGet(
        url: string,
        options?: {
            data?: string | Buffer | Serializable,
            form?: {
                [key: string]: string | number | boolean,
            } | FormData,
            headers?: {
                [key: string]: string,
            },
            multipart?: FormData | {
                [key: string]: string | number | boolean | ReadStream | {
                    name: string,
                    mimeType: string,
                    buffer: Buffer,
                };
            },
            params?: {
                [key: string]: string | number | boolean;
            } | URLSearchParams | string,
            timeout?: number
        }
    ) {
        await this._test.step("HTTP GET", async() => {
            await this._request.get(url, {
                data: options.data,
                form: options.form,
                headers: options.headers,
                multipart: options.multipart,
                params: options.params,
                timeout: options.timeout
            })
        })
    }

    protected async _httpPost(
        url: string,
        options?: {
            data?: string | Buffer | Serializable,
            form?: {
                [key: string]: string | number | boolean,
            } | FormData,
            headers?: {
                [key: string]: string,
            },
            multipart?: FormData | {
                [key: string]: string | number | boolean | ReadStream | {
                    name: string,
                    mimeType: string,
                    buffer: Buffer,
                };
            },
            params?: {
                [key: string]: string | number | boolean;
            } | URLSearchParams | string,
            timeout?: number
        }
    ) {
        await this._test.step("HTTP POST", async() => {
            await this._request.post(url, {
                data: options.data,
                form: options.form,
                headers: options.headers,
                multipart: options.multipart,
                params: options.params,
                timeout: options.timeout
            })
        })
    }

    protected async _httpDelete(
        url: string,
        options?: {
            data?: string | Buffer | Serializable,
            form?: {
                [key: string]: string | number | boolean,
            } | FormData,
            headers?: {
                [key: string]: string,
            },
            multipart?: FormData | {
                [key: string]: string | number | boolean | ReadStream | {
                    name: string,
                    mimeType: string,
                    buffer: Buffer,
                };
            },
            params?: {
                [key: string]: string | number | boolean;
            } | URLSearchParams | string,
            timeout?: number
        }
    ) {
        await this._test.step("HTTP DELETE", async() => {
            await this._request.delete(url, {
                data: options.data,
                form: options.form,
                headers: options.headers,
                multipart: options.multipart,
                params: options.params,
                timeout: options.timeout
            })
        })
    }
}
 