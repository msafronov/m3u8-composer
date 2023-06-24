import { GROUP_ID_ID } from '@tags/const';

export const GROUP_ID_V13 = (attribute) => {
    attribute[GROUP_ID_ID].validate = (schema, data) => {};

    return attribute;
};
