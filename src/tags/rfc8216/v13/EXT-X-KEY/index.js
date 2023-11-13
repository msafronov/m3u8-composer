import { MEDIA_SEGMENT_APPLY_ALL_MEDIA_TYPE_ID } from '@parser/const';
import { tagAttributeListMultiple } from '@parser/node/tag-attribute-list-multiple';
import { EXT_X_KEY_ID } from '@tags/const';

export const EXT_X_KEY = (attributes) => {
    return tagAttributeListMultiple(
        EXT_X_KEY_ID,
        attributes,
        MEDIA_SEGMENT_APPLY_ALL_MEDIA_TYPE_ID,
    );
};
