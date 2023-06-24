import { GAP_ID } from '@tags/const';

export const GAP_V13 = (attribute) => {
    attribute[GAP_ID].validate = (schema, data) => {};

    return attribute;
};
