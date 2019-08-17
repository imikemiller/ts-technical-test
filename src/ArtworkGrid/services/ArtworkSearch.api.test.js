import { expect } from 'chai';
import fetch from 'node-fetch';
import { baseUrl } from '../../services/api.service';
import ArtworkSearchApiService from './ArtworkSearch.api';

describe('ArtworkSearchApiService', () => {

    let api = new ArtworkSearchApiService('testMethod');

    it('Returns the expected endpoint', () => {
        expect(api.getEndpointUrl()).to.equal(`${baseUrl}search`)
    })

    it('Deserialises the response correctly', async () => {
        fetch.mockResponse(JSON.stringify({ objectIDs: [1, 2, 3] }));
        let result = await api.get('?q=Sunflowers');
        expect(result).to.deep.equal([1, 2, 3]);
    });

});