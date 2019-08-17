import { expect } from 'chai';
import { pick } from 'lodash';
import fetch from 'node-fetch';
import { baseUrl } from '../../services/api.service';
import ArtworkTileApiService, { artworkFields } from './ArtworkTile.api';
describe('ArtworkTileApiService', () => {

    let api = new ArtworkTileApiService('testMethod');

    it('Returns the expected endpoint', () => {
        expect(api.getEndpointUrl()).to.equal(`${baseUrl}objects`)
    })

    it('Deserialises the response correctly', async () => {
        fetch.mockResponse(exampleResponseString);
        let result = await api.get('/436535');
        expect(result).to.deep.equal(pick(JSON.parse(exampleResponseString), artworkFields));
    });

});

const exampleResponseString = `{
  "objectID": 436535,
  "isHighlight": true,
  "accessionNumber": "1993.132",
  "isPublicDomain": true,
  "primaryImage": "https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg",
  "primaryImageSmall": "https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg",
  "additionalImages": [
    "https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-004.jpg",
    "https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-003.jpg",
    "https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-002.jpg",
    "https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-001.jpg"
  ],  
  "constituents": [
    {
      "role": "Artist",
      "name": "Vincent van Gogh"
    }
  ],
  "department": "European Paintings",
  "objectName": "Painting",
  "title": "Wheat Field with Cypresses",
  "culture": "",
  "period": "",
  "dynasty": "",
  "reign": "",
  "portfolio": "",
  "artistRole": "Artist",
  "artistPrefix": "",
  "artistDisplayName": "Vincent van Gogh",
  "artistDisplayBio": "Dutch, Zundert 1853–1890 Auvers-sur-Oise",
  "artistSuffix": "",
  "artistAlphaSort": "Gogh, Vincent van",
  "artistNationality": "Dutch",
  "artistBeginDate": "1853",
  "artistEndDate": "1890",
  "objectDate": "1889",
  "objectBeginDate": 1889,
  "objectEndDate": 1889,
  "medium": "Oil on canvas",
  "dimensions": "28 7/8 × 36 3/4 in. (73.2 × 93.4 cm)",
  "creditLine": "Purchase, The Annenberg Foundation Gift, 1993",
  "geographyType": "",
  "city": "",
  "state": "",
  "county": "",
  "country": "",
  "region": "",
  "subregion": "",
  "locale": "",
  "locus": "",
  "excavation": "",
  "river": "",
  "classification": "Paintings",
  "rightsAndReproduction": "",
  "linkResource": "",
  "metadataDate": "2018-10-19T14:00:42.01Z",
  "repository": "Metropolitan Museum of Art, New York, NY",
  "objectURL": "https://www.metmuseum.org/art/collection/search/436535",
  "tags":["Landscapes","Cypresses","Summer"]
}`