import { EXT_X_SESSION_DATA_ID } from '@tags/const';

export const EXT_X_SESSION_DATA_V13 = (tag) => {
    tag[EXT_X_SESSION_DATA_ID].validate = (schema, data, dataAll) => {};

    return tag;
};
