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
    
    public async productStoreButtonIsVisible(){
       await expect (this._page.locator('a#nava')).toBeVisible()
    }

    public async productStoreButtonContainText(){
        await expect (this._page.locator('a#nava')).toContainText('PRODUCT')
     }

    public async loginButtonIsVisible(){
        await expect (this._page.locator('#login2')).toBeVisible()
     }
 
    public async loginButtonContainText(){
         await expect (this._page.locator('#login2')).toHaveText('Log in')
    }
    public async loginButtonClick (){
        await this._clickBySelector('#login2')
     }
 
    

}
 