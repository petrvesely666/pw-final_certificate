import { type TestType, type PlaywrightTestArgs, type PlaywrightTestOptions, type PlaywrightWorkerArgs, type PlaywrightWorkerOptions, type Page, expect, APIRequestContext } from "@playwright/test";
import { TestConfig, TestSecrets } from "../types/globalTypes";
import { BeUtils } from "../lib/backend";



export class Component1Page extends BeUtils {
    protected _testConfig: TestConfig
    protected _testSecrets: TestSecrets

    constructor(
        request: APIRequestContext,
        test: TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
        testConfig: TestConfig,
        testSecrets: TestSecrets
    ) {
        super(request, test)
        this._testConfig = testConfig
        this._testSecrets = testSecrets       
    }

    // Metody
    public async getUsers() {
        await this._httpGet(this._testConfig.apiEndpoint + "/users")
    }
}