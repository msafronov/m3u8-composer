import { EXT_X_BITRATE_ID } from '@tags/const';

export const EXT_X_BITRATE_V13 = (tag) => {
    tag[EXT_X_BITRATE_ID].validate = (schema, data) => {};

    return tag;
};
