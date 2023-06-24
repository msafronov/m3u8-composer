import { ValidationSchema as ValidationSchemaDefault } from '@validator/schema';

import {
    MULTIVARIANT_PLAYLIST_ID,
    EXT_X_CONTENT_STEERING_ID,
    EXT_X_I_FRAME_STREAM_INF_ID,
    EXT_X_MEDIA_ID,
    EXT_X_SESSION_DATA_ID,
    EXT_X_SESSION_KEY_ID,
    EXT_X_STREAM_INF_ID,
    EXTM3U_ID,
    EXT_X_TARGETDURATION_ID,
    EXT_X_ENDLIST_ID,
    EXT_X_PRELOAD_HINT_ID,
} from '@tags/const';

export const ValidationSchema = (schema) => {
    const validationSchema = ValidationSchemaDefault(schema);

    validationSchema.validate = (schema) => {
        if (
            schema.playlist[EXT_X_MEDIA_ID] !== undefined ||
            schema.variantStreams.find((variantStream) => {
                return variantStream[EXT_X_STREAM_INF_ID] !== undefined;
            }) !== undefined ||
            schema.playlist[EXT_X_I_FRAME_STREAM_INF_ID] !== undefined ||
            schema.playlist[EXT_X_SESSION_DATA_ID] !== undefined ||
            schema.playlist[EXT_X_SESSION_KEY_ID] !== undefined ||
            schema.playlist[EXT_X_CONTENT_STEERING_ID] !== undefined
        ) {
            schema.metadata[MULTIVARIANT_PLAYLIST_ID] = true;
        }

        if (schema.playlist[EXTM3U_ID] === undefined) {
            schema.logs['0x1001'] = {
                row: 0,
                col: 0,
                value: null,
                isValidated: true,
            };
        }

        if (schema.metadata[MULTIVARIANT_PLAYLIST_ID] === false) {
            if (schema.playlist[EXT_X_TARGETDURATION_ID] === undefined) {
                schema.logs['0x1100'] = {
                    row: 0,
                    col: 0,
                    value: null,
                    isValidated: true,
                };
            }

            if (
                schema.playlist[EXT_X_ENDLIST_ID] === true &&
                schema.playlist[EXT_X_PRELOAD_HINT_ID] !== undefined
            ) {
                schema.logs['0x1161'] = {
                    row: 0,
                    col: 0,
                    value: null,
                    isValidated: true,
                };
            }
        }
    };

    return validationSchema;
};
