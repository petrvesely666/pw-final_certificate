import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv'
 
dotenv.config({ override: true })
 
const LOCALES = process.env.LOCALES || 'cs-CZ'
 
const TIMEOUTS = {
    TEST_TIMEOUT: 90_000,
    ACTION_TIMEOUT: 20_000
};
 
const DEFAULT_VIEWPORT = {
    width: 1920,
    height: 1080
}
 
export default defineConfig({
    timeout: TIMEOUTS.TEST_TIMEOUT,
    globalTimeout: undefined,
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 2 : 4,
    reporter: [
        ['html'],
        ['list'],
    ],
    use: {
        testIdAttribute: 'data-testId',
        actionTimeout: TIMEOUTS.ACTION_TIMEOUT,
        navigationTimeout: TIMEOUTS.ACTION_TIMEOUT,
        video: 'off',
        trace: 'off',
        headless: true,
        ignoreHTTPSErrors: true
    },
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                viewport: DEFAULT_VIEWPORT,
                locale: LOCALES
            },
        },
        {
            name: 'edge',
            use: {
                ...devices['Desktop Edge'],
                viewport: DEFAULT_VIEWPORT,
                locale: LOCALES
            },
        },
        {
            name: 'firefox',
            use: {
                ...devices['Desktop Firefox'],
                viewport: DEFAULT_VIEWPORT,
                locale: LOCALES
            },
        },
        {
            name: 'webkit',
            use: {
                ...devices['Desktop Safari'],
                viewport: DEFAULT_VIEWPORT,
                locale: LOCALES
            },
        }
    ]
});