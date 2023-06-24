import { SKIPPED_SEGMENTS_ID } from '@tags/const';

export const SKIPPED_SEGMENTS_V13 = (attribute) => {
    attribute[SKIPPED_SEGMENTS_ID].validate = (schema, data) => {};

    return attribute;
};
