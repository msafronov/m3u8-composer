import { ALLOWED_CPC_ID } from '@tags/const';

export const ALLOWED_CPC_V13 = (attribute) => {
    attribute[ALLOWED_CPC_ID].validate = (schema, data) => {};

    return attribute;
};
