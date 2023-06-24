import { MEDIA_SEGMENT_APPLY_ALL_MEDIA_TYPE_ID } from '@parser/const';
import { tagAttributeList } from '@parser/node/tag-attribute-list';
import { EXT_X_MAP_ID } from '@tags/const';

export const EXT_X_MAP = (attributes) => {
    return tagAttributeList(
        EXT_X_MAP_ID,
        attributes,
        MEDIA_SEGMENT_APPLY_ALL_MEDIA_TYPE_ID,
    );
};
