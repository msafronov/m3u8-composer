import { PATHWAY_ID_ID } from '@tags/const';

export const PATHWAY_ID_V13 = (attribute) => {
    attribute[PATHWAY_ID_ID].validate = (schema, data) => {};

    return attribute;
};
