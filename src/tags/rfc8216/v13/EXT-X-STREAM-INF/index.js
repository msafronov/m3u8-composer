import { VARIANT_STREAM_APPLY_NEXT_MEDIA_TYPE_ID } from '@parser/const';
import { tagAttributeList } from '@parser/node/tag-attribute-list';
import { EXT_X_STREAM_INF_ID } from '@tags/const';

export const EXT_X_STREAM_INF = (attributes) => {
    return tagAttributeList(
        EXT_X_STREAM_INF_ID,
        attributes,
        VARIANT_STREAM_APPLY_NEXT_MEDIA_TYPE_ID,
    );
};
