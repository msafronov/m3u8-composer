import { tagAttributeListMultiple } from '@parser/node/tag-attribute-list-multiple';
import { EXT_X_SESSION_DATA_ID } from '@tags/const';

export const EXT_X_SESSION_DATA = (attributes) => {
    return tagAttributeListMultiple(EXT_X_SESSION_DATA_ID, attributes);
};
