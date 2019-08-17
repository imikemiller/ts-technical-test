import ApiService from "../../services/api.service";

class ArtworkSearchApiService extends ApiService {

    resource = 'search'

    deserialiseResult(json) {
        return json.objectIDs;
    }
}

export default ArtworkSearchApiService;