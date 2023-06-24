import { MEDIA_SEGMENT_APPLY_ALL_MEDIA_TYPE_ID } from '@parser/const';
import { tag } from '@parser/node/tag';
import { EXT_X_BITRATE_ID } from '@tags/const';

export const EXT_X_BITRATE = () => {
    return tag(
        EXT_X_BITRATE_ID,
        undefined,
        MEDIA_SEGMENT_APPLY_ALL_MEDIA_TYPE_ID,
    );
};
