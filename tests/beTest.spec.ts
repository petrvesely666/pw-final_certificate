import { APIResponse, test, expect } from '@playwright/test'
import dotenv from 'dotenv'
import { TestConfig, TestSecrets } from '../src/types/globalTypes'


dotenv.config({ override: true })

const env = process.env.ENV || 'dev'
const testConfig: TestConfig = require(`../data/envs/config_${env}.json`)

const testSecrets: TestSecrets = {
    username: process.env.UNAME,
    password: process.env.PWORD,    
}

const user = {
    id: 50,
    userName: 'TestJméno',
    password: 'TestPřijmení'
  };

    test('@crud @regression POST Method - new user', async ({ request }) => {
        const postResponse = await request.post(testConfig.apiEndpoint + `api/v1/Users`, {
                data: user  
            });           
        console.log('POST response:', await postResponse.json());
        expect(postResponse.status()).toBe(200);
        });

    test('@crud @regression GET Method - users', async ({ request }) => {
        const getResponse = await request.get(testConfig.apiEndpoint + `api/v1/Users`);      
        expect(getResponse.status()).toBe(200);       
        });

    test('@crud GET Method - users - version user.id', async ({ request }) => {
       const getResponse = await request.get(testConfig.apiEndpoint + `api/v1/Users/${user.id}`);
       const fetchedUser = await getResponse.json();
       console.log('GET response:', fetchedUser);
       expect(getResponse.status()).toBe(200);
       expect(fetchedUser.userName).toBe(user.userName);
       });
      
    test('@crud @regression PUT Method - User update', async ({ request }) => { 
       const updatedUser = { ...user, userName: 'UpdatedUser_' + user.userName };
       const putResponse = await request.put(testConfig.apiEndpoint +`api/v1/Users/${user.id}`, {
           data: updatedUser
        });
       const updatedResponseBody = await putResponse.json();
       console.log('PUT response:', updatedResponseBody);
       expect(putResponse.status()).toBe(200);
       expect(updatedResponseBody.userName).toBe(updatedUser.userName);
      });

    test('@crud DELETE Method - User delete', async ({ request }) => {
      const deleteResponse = await request.delete(testConfig.apiEndpoint + `api/v1/Users/${user.id}`);
       console.log('DELETE response status:', deleteResponse.status());
       expect(deleteResponse.status()).toBe(200);
      });