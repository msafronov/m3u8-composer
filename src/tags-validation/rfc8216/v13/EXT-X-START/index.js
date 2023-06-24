import { EXT_X_START_ID, TIME_OFFSET_ID } from '@tags/const';

export const EXT_X_START_V13 = (tag) => {
    tag[EXT_X_START_ID].validate = (schema, data, dataAll) => {
        if (
            schema.playlist[EXT_X_START_ID] &&
            schema.playlist[EXT_X_START_ID][TIME_OFFSET_ID] === undefined
        ) {
            schema.logs['0x1060'] = data;
        }

        if (dataAll.length > 1) {
            schema.logs['0x1063'] = data;
        }
    };

    return tag;
};
