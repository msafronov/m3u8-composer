import { IMPORT_ID } from '@tags/const';
import { variableNameStringV13 } from '@tags-validation/rfc8216/v13/EXT-X-DEFINE/attributes/common/variable-name-string';

export const IMPORT_V13 = (attribute) => {
    attribute[IMPORT_ID].validate = (schema, data) => {
        // TODO:
        // ...and indicates that its value is that 
        // of the variable of the same name in the Multivariant Playlist
        
        if (variableNameStringV13(data.value) === false) {
            schema.logs['0x1087'] = data;
        }

        // TODO:
        // EXT-X-DEFINE tags containing the IMPORT attribute MUST NOT occur in
        // Multivariant Playlists; they are only allowed in Media Playlists
    };

    return attribute;
};
