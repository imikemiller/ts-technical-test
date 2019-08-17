import fetch from 'node-fetch';

const metCollection = 'https://collectionapi.metmuseum.org/public/collection/v1/';
class ApiService {

    /**
     * Service baseUrl
     */
    _baseUrl = metCollection;

    /**
     * The method URI - to be implemented by the child classes
     */
    resource = '';

    /**
     * @param {String} resource 
     */
    constructor(resource = '') {
        this.resource = resource;
    }

    /**
     * To retrieve the concatenated URL to fetch
     *
     * @param {String} params
     * @return {String}
     */
    getEndpointUrl(params = '') {
        return `${this._baseUrl}${this.resource}${params}`
    }

    /**
     * Perform fetch on the endpoint URL
     *
     * @param {String} params
     * @return {Promise<Object>}
     */
    get(params = '') {
        return fetch(this.getEndpointUrl(params)).then(data => data.json()).then(this.deserialiseResult)
    }

    /**
     * Method is available to be overwritten to allow child classes to implement a serialiser
     * suited to the method response format.
     * 
     * @param {Promise<Object>} json
     * @return {Promise<Object>} 
     */
    deserialiseResult(json) {
        return json;
    }

}
export const baseUrl = metCollection;
export default ApiService;