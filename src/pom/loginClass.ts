import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page, expect } from "@playwright/test";
import { TestConfig, TestSecrets } from "../types/globalTypes";
import { FeUtils } from "../lib/frontend";


export class LoginPage extends FeUtils {
    protected _testConfig: TestConfig
    protected _testSecrets: TestSecrets

    constructor(
        page: Page,
        test: TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
        testConfig: TestConfig,
        testSecrets: TestSecrets
    ) {
        super(page, test)
        this._testConfig = testConfig
        this._testSecrets = testSecrets
    }

    //metody
    public async openHomepage() {
        await this._goTo(this._testConfig.endpointUrl)
        await expect(this._page).toHaveURL(this._testConfig.endpointUrl)
    }

}
 