import { tagAttributeListMultiple } from '@parser/node/tag-attribute-list-multiple';
import { EXT_X_DEFINE_ID } from '@tags/const';

export const EXT_X_DEFINE = (attributes) => {
    return tagAttributeListMultiple(EXT_X_DEFINE_ID, attributes);
};
