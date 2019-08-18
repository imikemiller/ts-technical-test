import ApiService from "../../services/api.service";
import { pick } from 'lodash';

const fields = ['title', 'primaryImageSmall', 'artistDisplayName', 'artistDisplayBio'];
class ArtworkTileApiService extends ApiService {

    resource = 'objects'

    deserialiseResult(json) {
        return pick(json, fields)
    }
}

export const artworkFields = fields;
export const artworkTileApi = new ArtworkTileApiService();
export default ArtworkTileApiService;