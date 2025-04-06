import { test } from '@playwright/test'
import { LoginPage } from '../src/pom/feClass'

const url = "https://www.seznam.cz"

test("Sample Frontend", async({ page })=>{
    const loginPage = new LoginPage(page, test)
    
    await loginPage.openHomepage(url)
})