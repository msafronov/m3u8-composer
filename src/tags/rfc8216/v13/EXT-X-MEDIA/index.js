import { tagAttributeListMultiple } from '@parser/node/tag-attribute-list-multiple';
import { EXT_X_MEDIA_ID } from '@tags/const';

export const EXT_X_MEDIA = (attributes) => {
    return tagAttributeListMultiple(EXT_X_MEDIA_ID, attributes);
};
