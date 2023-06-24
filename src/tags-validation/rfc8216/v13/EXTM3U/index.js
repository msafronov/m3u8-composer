import { EXTM3U_ID } from '@tags/const';

export const EXTM3U_V13 = (tag) => {
    tag[EXTM3U_ID].validate = (schema, data) => {
        if (data.row !== 0) {
            schema.logs['0x1001'] = data;
        }
    };

    return tag;
};
