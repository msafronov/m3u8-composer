import { EXTINF_ID } from '@tags/const';

export const EXTINF_V13 = (tag) => {
    tag[EXTINF_ID].validate = (schema, data) => {};

    return tag;
};
