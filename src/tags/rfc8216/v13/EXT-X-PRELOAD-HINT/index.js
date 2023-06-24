import { tagAttributeListMultiple } from '@parser/node/tag-attribute-list-multiple';
import { EXT_X_PRELOAD_HINT_ID } from '@tags/const';

export const EXT_X_PRELOAD_HINT = (attributes) => {
    return tagAttributeListMultiple(EXT_X_PRELOAD_HINT_ID, attributes);
};
