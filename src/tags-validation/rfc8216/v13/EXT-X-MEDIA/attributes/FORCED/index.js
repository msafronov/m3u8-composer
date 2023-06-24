import { FORCED_ID } from '@tags/const';

export const FORCED_V13 = (attribute) => {
    attribute[FORCED_ID].validate = (schema, data) => {};

    return attribute;
};
