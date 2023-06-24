import { PLANNED_DURATION_ID } from '@tags/const';

export const PLANNED_DURATION_V13 = (attribute) => {
    attribute[PLANNED_DURATION_ID].validate = (schema, data) => {};

    return attribute;
};
