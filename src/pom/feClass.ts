import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page } from "@playwright/test";
import { TestConfig, TestSecrets } from "../types/globalTypes";


export class LoginPage{
    protected _page: Page
    protected _test: TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>
    protected _testConfig: TestConfig
    protected _testSecrets: TestSecrets

    constructor(
        page: Page,
        test: TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
        testConfig: TestConfig,
        testSecrets: TestSecrets
    ) {
        this._page = page
        this._test = test
        this._testConfig = testConfig
        this._testSecrets = testSecrets
    }

    //metody
    public async openHomepage() {
        await this._page.goto(this._testConfig.endpointUrl)
    }

}
 