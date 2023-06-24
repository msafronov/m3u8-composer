import { LAST_PART_ID } from '@tags/const';

export const LAST_PART_V13 = (attribute) => {
    attribute[LAST_PART_ID].validate = (schema, data) => {};

    return attribute;
};
