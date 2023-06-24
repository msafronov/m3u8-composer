import { SCORE_ID } from '@tags/const';

export const SCORE_V13 = (attribute) => {
    attribute[SCORE_ID].validate = (schema, data) => {};

    return attribute;
};
