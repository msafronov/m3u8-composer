import { EXT_X_PLAYLIST_TYPE_ID } from '@tags/const';

export const EXT_X_PLAYLIST_TYPE_V13 = (tag) => {    
    const possibleValues = ['EVENT', 'VOD'];

    tag[EXT_X_PLAYLIST_TYPE_ID].validate = (schema, data, dataAll) => {
        if (dataAll.length > 1) {
            schema.logs['0x1180'] = data;
        }

        if (possibleValues.includes(data.value) === false) {
            schema.logs['0x1181'] = data;
        }

        // TODO:
        // A Live Playlist MUST NOT contain the EXT-X-PLAYLIST-TYPE tag, as no..
    };

    return tag;
};
