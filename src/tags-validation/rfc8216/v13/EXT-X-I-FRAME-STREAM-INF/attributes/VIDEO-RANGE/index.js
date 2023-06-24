import { VIDEO_RANGE_ID } from '@tags/const';

export const VIDEO_RANGE_V13 = (attribute) => {
    attribute[VIDEO_RANGE_ID].validate = (schema, data) => {};

    return attribute;
};
