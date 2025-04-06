import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page } from "@playwright/test";

export class LoginPage{
    protected _page: Page
    protected _test: TestType<PlaywrightTestArgs & PlaywrightWorkerArgs, PlaywrightTestOptions & PlaywrightWorkerOptions>

    constructor(
        page: Page
        test: TestType<PlaywrightTestArgs & PlaywrightWorkerArgs, PlaywrightTestOptions & PlaywrightWorkerOptions>
    ) {
        this._page = page
        this._test = test
    }

    //metody
    public async openHomepage(
        url: string
    ) {
        await this._page.goto(url)
    }

}
 