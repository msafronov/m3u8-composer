import {
    MULTIVARIANT_PLAYLIST_ID,
    EXT_X_KEY_ID,
    EXT_X_VERSION_ID,
    EXT_X_BYTERANGE_ID,
    EXT_X_I_FRAMES_ONLY_ID,
    EXT_X_MAP_ID,
    EXT_X_MEDIA_ID,
    EXT_X_DEFINE_ID,
    EXT_X_SKIP_ID,
    IV_ID,
    METHOD_ID,
    KEYFORMAT_ID,
    KEYFORMATVERSIONS_ID,
    INSTREAM_ID_ID,
    QUERYPARAM_ID,
} from '@tags/const';

export const EXT_X_VERSION_V13 = (tag) => {
    tag[EXT_X_VERSION_ID].validate = (schema, data, dataAll) => {
        // TODO: 4.4.1.2 It MUST appear in all Playlists containing tags or attributes that...

        if (dataAll.length > 1) {
            schema.logs['0x1021'] = data;
        }

        if (schema.metadata[MULTIVARIANT_PLAYLIST_ID] === true) {
            if (
                schema.playlist[EXT_X_VERSION_ID] < 7 &&
                schema.playlist[EXT_X_MEDIA_ID] !== undefined &&
                schema.playlist[EXT_X_MEDIA_ID].find((attributeList) => {
                    return attributeList[INSTREAM_ID_ID] === 'SERVICE';
                })
            ) {
                schema.logs['0x102A'] = data;
            }
        } else {
            if (
                schema.playlist[EXT_X_VERSION_ID] < 2 &&
                (
                    schema[EXT_X_KEY_ID] !== undefined &&
                    schema[EXT_X_KEY_ID].data.find((attributeList) => {
                        return attributeList[IV_ID] !== undefined;
                    })
                )
            ) {
                schema.logs['0x1022'] = data;
            }

            // TODO: Floating-point EXTINF duration values
            // 0x1023

            if (
                schema.playlist[EXT_X_VERSION_ID] < 4
            ) {
                if (
                    schema[EXT_X_BYTERANGE_ID] !== undefined &&
                    schema[EXT_X_BYTERANGE_ID].data.length !== 0
                ) {
                    schema.logs['0x1024'] = data;
                }

                if (schema.playlist[EXT_X_I_FRAMES_ONLY_ID] !== undefined) {
                    schema.logs['0x1025'] = data;
                }
            }

            if (schema.playlist[EXT_X_VERSION_ID] < 5) {
                if (schema[EXT_X_KEY_ID] !== undefined) {
                    schema[EXT_X_KEY_ID].data.find((attributeList) => {
                        if (
                            attributeList[METHOD_ID] !== undefined &&
                            attributeList[METHOD_ID].value === 'SAMPLE-AES'
                        ) {
                            schema.logs['0x1026'] = data;
                        }

                        if (
                            attributeList[KEYFORMAT_ID] !== undefined ||
                            attributeList[KEYFORMATVERSIONS_ID] !== undefined
                        ) {
                            schema.logs['0x1027'] = data;
                        }
                    });
                }

                if (
                    schema[EXT_X_MAP_ID] !== undefined &&
                    schema[EXT_X_MAP_ID].data.length !== 0
                ) {
                    schema.logs['0x1028'] = data;
                }
            }

            if (
                schema.playlist[EXT_X_VERSION_ID] < 6 &&
                schema[EXT_X_MAP_ID] !== undefined &&
                schema[EXT_X_MAP_ID].data.length !== 0 &&
                schema.playlist[EXT_X_I_FRAMES_ONLY_ID] === undefined
            ) {
                schema.logs['0x1029'] = data;
            }

            if (
                schema.playlist[EXT_X_VERSION_ID] < 8 &&
                schema.playlist[EXT_X_DEFINE_ID] !== undefined
            ) {
                schema.logs['0x102B'] = data;
            }

            if (
                schema.playlist[EXT_X_VERSION_ID] < 9 &&
                schema.playlist[EXT_X_SKIP_ID] !== undefined
            ) {
                schema.logs['0x102C'] = data;
            }

            // TODO: An EXT-X-SKIP tag that replaces EXT-X-DATERANGE tags in a Playlist Delta Update
            // 0x102D

            if (
                schema.playlist[EXT_X_VERSION_ID] < 11 &&
                schema.playlist[EXT_X_DEFINE_ID] !== undefined &&
                schema.playlist[EXT_X_DEFINE_ID].find((attributeList) => {
                    return attributeList[QUERYPARAM_ID] !== undefined;
                })
            ) {
                schema.logs['0x102E'] = data;
            }

            // TODO: An attribute whose name starts with "REQ-".
            // 0x102F
        }
    };

    return tag;
};
