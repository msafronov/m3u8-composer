import { MEDIA_SEGMENT_APPLY_NEXT_MEDIA_TYPE_ID } from '@parser/const';
import { tag } from '@parser/node/tag';
import { EXT_X_DISCONTINUITY_ID } from '@tags/const';

export const EXT_X_DISCONTINUITY = (attributes) => {
    return tag(
        EXT_X_DISCONTINUITY_ID,
        attributes,
        MEDIA_SEGMENT_APPLY_NEXT_MEDIA_TYPE_ID,
    );
};
