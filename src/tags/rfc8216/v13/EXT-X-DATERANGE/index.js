import { tagAttributeListMultiple } from '@parser/node/tag-attribute-list-multiple';
import { EXT_X_DATERANGE_ID } from '@tags/const';

export const EXT_X_DATERANGE = (attributes) => {
    return tagAttributeListMultiple(EXT_X_DATERANGE_ID, attributes);
};
