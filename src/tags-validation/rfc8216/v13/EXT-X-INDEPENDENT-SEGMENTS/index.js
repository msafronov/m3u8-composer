import { EXT_X_INDEPENDENT_SEGMENTS_ID } from '@tags/const';

export const EXT_X_INDEPENDENT_SEGMENTS_V13 = (tag) => {
    tag[EXT_X_INDEPENDENT_SEGMENTS_ID].validate = (schema, data, dataAll) => {
        if (dataAll.length > 1) {
            schema.logs['0x1040'] = data;
        }
    };

    return tag;
};
