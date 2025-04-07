import { expect, test } from '@playwright/test'
import { LoginPage } from '../src/pom/loginClass'
import dotenv from 'dotenv'
import { TestConfig, TestSecrets } from '../src/types/globalTypes'

test.describe("Test Suite", () => {

    dotenv.config({ override: true })

    const env = process.env.ENV || 'dev'
    const testConfig: TestConfig = require(`../data/envs/config_${env}.json`)

    const testSecrets: TestSecrets = {
        username: process.env.UNAME,
        password: process.env.PWORD        
    }
    test("Header section tests", async({ page }) => {      

        await test.step ("Otevřít stránku www.demoblaze.com", async () => {
            const loginPage = new LoginPage(page, test, testConfig, testSecrets)
            await loginPage.openHomepage();
        })

        await test.step ("Home buttton/logo", async() =>{
            const homeButtonSelector = 'a#nava'            
            await expect (page.locator(homeButtonSelector)).toBeVisible()
            await expect (page.locator(homeButtonSelector)).toContainText('PRODUCT STORE')
            await expect (page.locator(homeButtonSelector)).toHaveAttribute('href')
        })
       
        await test.step ("Ovládací prvky záhlaví - tlačítko 'Log in'", async() =>{
            const loginMenuSelector = '#login2'                  
            await expect (page.locator(loginMenuSelector)).toBeVisible()
            await expect (page.locator(loginMenuSelector)).toContainText('Log in')           
        })

        await test.step ("Akce přihlásit se včetně vyplnění jména a hesla'", async() =>{
            const loginMenuSelector = '#login2'
            const modalSelector = '#logInModal'
            const usernameSelector = '#loginusername'  
            const passwordModal = "#loginpassword"
            const loginButtonSelector = 'button.btn.btn-primary'
            const nameOfUserSelector = 'a#nameofuser'                                                         
            await (page.locator(loginMenuSelector)).click()
            await expect (page.locator(modalSelector)).toBeVisible()
            await (page.locator(usernameSelector)).fill(`Postolka`,{timeout: 3000})
            await (page.locator(passwordModal)).fill('Letidomu',{timeout: 3000})
            await (page.locator(loginButtonSelector)).nth(2).click()
            await expect (page.locator(nameOfUserSelector)).toContainText('Welcome ')
        })        
    })
})
    
