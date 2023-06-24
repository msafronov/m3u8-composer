import { EXT_X_DISCONTINUITY_ID } from '@tags/const';

export const EXT_X_DISCONTINUITY_V13 = (tag) => {
    tag[EXT_X_DISCONTINUITY_ID].validate = (schema, data) => {};

    return tag;
};
