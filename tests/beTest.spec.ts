import { test } from '@playwright/test'
import dotenv from 'dotenv'
import { TestConfig, TestSecrets } from '../src/types/globalTypes'
import { Component1Page } from '../src/som/component1Class'

dotenv.config({ override: true })

const env = process.env.ENV || 'dev'
const testConfig: TestConfig = require(`../data/envs/config_${env}.json`)

const testSecrets: TestSecrets = {
    username: process.env.UNAME,
    password: process.env.PWORD
}

test("Sample Frontend", async({ request }) => {
    const cmp1 = new Component1Page(request, test, testConfig, testSecrets)

    await cmp1.getUsers()
})