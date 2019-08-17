import { expect } from 'chai';
import ApiService, { baseUrl } from './api.service';
import fetch from 'node-fetch';

describe('ApiService', () => {

    let api = new ApiService('testMethod');

    it('Returns the expected endpoint', () => {
        expect(api.getEndpointUrl()).to.equal(`${baseUrl}testMethod`)
    })

    it('Returns JSON from get as expected', async () => {
        fetch.mockResponse(JSON.stringify({ fake: 'api', response: 'json' }));
        let result = await api.get();
        expect(result).to.deep.equal({ fake: 'api', response: 'json' });
    });

});