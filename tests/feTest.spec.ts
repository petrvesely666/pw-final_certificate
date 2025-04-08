import { expect, test } from '@playwright/test'
import { LoginPage } from '../src/pom/loginClass'
import dotenv from 'dotenv'
import { TestConfig, TestSecrets } from '../src/types/globalTypes'
import {storeSelectors} from '../data/00_storeSelectors'

test.describe("Test Suite", () => {

    dotenv.config({ override: true })

    const env = process.env.ENV || 'dev'
    const testConfig: TestConfig = require(`../data/envs/config_${env}.json`)

    const testSecrets: TestSecrets = {
        username: process.env.UNAME,
        password: process.env.PWORD        
    }
    test("@smoke @regression FE test s využitím POM struktury", async({ page }) => {      

        await test.step ("Otevřít stránku www.demoblaze.com", async () => {
            const loginPage = new LoginPage(page, test, testConfig, testSecrets)
            await loginPage.openHomepage();
        })

        await test.step ("Visibilita a vybrané vlastnosti prvku Home buttton/logo", async() =>{                       
            await expect (page.locator(storeSelectors.homeButtonSelector)).toBeVisible()
            await expect(page.locator(storeSelectors.homeButtonSelector)).toContainText('PRODUCT STORE')
            await expect(page.locator(storeSelectors.homeButtonSelector)).toHaveAttribute('href')
        })
       
        await test.step ("Visibilita vybraného tlačítka v menu - tlačítko 'Log in'", async() =>{                            
            await expect (page.locator(storeSelectors.loginMenuSelector)).toBeVisible()
            await expect (page.locator(storeSelectors.loginMenuSelector)).toContainText('Log in')           
        })

        await test.step ("Přihlášení se do portálu s využitím Secrets prvků", async() =>{         
            await page.locator(storeSelectors.loginMenuSelector).click()
            await expect(page.locator(storeSelectors.modalSelector)).toBeVisible()
            await page.locator(storeSelectors.usernameSelector).fill(testSecrets.username ,{timeout: 3000})
            await page.locator(storeSelectors.passwordModal).fill(testSecrets.password,{timeout: 3000});           
            await page.locator(storeSelectors.loginButtonSelector).nth(2).click()
            await expect (page.locator(storeSelectors.nameOfUserSelector)).toHaveText('Welcome '+ testSecrets.username)
        })        
    })
})
    
