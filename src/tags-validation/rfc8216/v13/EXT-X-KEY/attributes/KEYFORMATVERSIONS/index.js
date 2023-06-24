import { KEYFORMATVERSIONS_ID } from '@tags/const';

export const KEYFORMATVERSIONS_V13 = (attribute) => {
    attribute[KEYFORMATVERSIONS_ID].validate = (schema, data) => {};

    return attribute;
};
