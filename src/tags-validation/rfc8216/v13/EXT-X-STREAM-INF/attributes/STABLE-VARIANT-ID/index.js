import { STABLE_VARIANT_ID_ID } from '@tags/const';

export const STABLE_VARIANT_ID_V13 = (attribute) => {
    attribute[STABLE_VARIANT_ID_ID].validate = (schema, data) => {};

    return attribute;
};
