import { RECENTLY_REMOVED_DATERANGES_ID } from '@tags/const';

export const RECENTLY_REMOVED_DATERANGES_V13 = (attribute) => {
    attribute[RECENTLY_REMOVED_DATERANGES_ID].validate = (schema, data) => {};

    return attribute;
};
