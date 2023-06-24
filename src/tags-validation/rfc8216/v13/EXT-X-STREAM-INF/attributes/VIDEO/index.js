import { VIDEO_ID } from '@tags/const';

export const VIDEO_V13 = (attribute) => {
    attribute[VIDEO_ID].validate = (schema, data) => {};

    return attribute;
};
