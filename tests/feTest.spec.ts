import { test } from '@playwright/test'
import { LoginPage } from '../src/pom/loginClass'
import dotenv from 'dotenv'
import { TestConfig, TestSecrets } from '../src/types/globalTypes'

dotenv.config({ override: true })

const env = process.env.ENV || 'dev'
const testConfig: TestConfig = require(`../data/envs/config_${env}.json`)

const testSecrets: TestSecrets = {
    username: process.env.UNAME,
    password: process.env.PWORD
}

test("Sample Frontend", async({ page }) => {
    const loginPage = new LoginPage(page, test, testConfig, testSecrets)

    await loginPage.openHomepage()
})