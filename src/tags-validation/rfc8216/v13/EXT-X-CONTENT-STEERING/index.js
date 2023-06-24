import { EXT_X_CONTENT_STEERING_ID } from '@tags/const';

export const EXT_X_CONTENT_STEERING_V13 = (tag) => {
    tag[EXT_X_CONTENT_STEERING_ID].validate = (schema, data, dataAll) => {};

    return tag;
};
