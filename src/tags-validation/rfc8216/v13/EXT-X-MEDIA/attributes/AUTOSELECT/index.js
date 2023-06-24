import { AUTOSELECT_ID } from '@tags/const';

export const AUTOSELECT_V13 = (attribute) => {
    attribute[AUTOSELECT_ID].validate = (schema, data) => {};

    return attribute;
};
