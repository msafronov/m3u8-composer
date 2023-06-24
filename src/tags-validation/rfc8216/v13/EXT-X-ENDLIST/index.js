import { EXT_X_ENDLIST_ID } from '@tags/const';

export const EXT_X_ENDLIST_V13 = (tag) => {
    tag[EXT_X_ENDLIST_ID].validate = (schema, data, dataAll) => {
        if (dataAll.length > 1) {
            schema.logs['0x1160'] = data;
        }
    };

    return tag;
};
