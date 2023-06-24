import { SUBTITLES_ID } from '@tags/const';

export const SUBTITLES_V13 = (attribute) => {
    attribute[SUBTITLES_ID].validate = (schema, data) => {};

    return attribute;
};
