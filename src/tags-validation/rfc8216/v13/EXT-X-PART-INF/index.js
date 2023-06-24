import { EXT_X_PART_INF_ID } from '@tags/const';

export const EXT_X_PART_INF_V13 = (tag) => {
    tag[EXT_X_PART_INF_ID].validate = (schema, data, dataAll) => {
        if (dataAll.length > 1) {
            schema.logs['0x1220'] = data;
        }
    };

    return tag;
};
