import {
    EXT_X_KEY_ID,
    IV_ID,
    KEYFORMATVERSIONS_ID,
    KEYFORMAT_ID,
    METHOD_ID,
    URI_ID,
} from '@tags/const';

export const EXT_X_KEY_V13 = (tag) => {
    tag[EXT_X_KEY_ID].validate = (schema, data, dataAll) => {
        if (
            data[METHOD_ID] !== undefined &&
            data[METHOD_ID].value === 'NONE'
        ) {
            if (
                data[METHOD_ID] !== undefined ||
                data[URI_ID] !== undefined ||
                data[IV_ID] !== undefined ||
                data[KEYFORMAT_ID] !== undefined ||
                data[KEYFORMATVERSIONS_ID] !== undefined
            ) {
                schema.logs['0x1282'] = data;
            }
        } else {
            if (data[METHOD_ID] === undefined) {
                schema.logs['0x1280'] = data;
            }

            if (data[URI_ID] === undefined) {
                schema.logs['0x1283'] = data;
            }
        }
    };

    return tag;
};
