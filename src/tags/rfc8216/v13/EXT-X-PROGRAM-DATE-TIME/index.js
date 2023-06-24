import { MEDIA_SEGMENT_APPLY_NEXT_MEDIA_TYPE_ID } from '@parser/const';
import { tag } from '@parser/node/tag';
import { EXT_X_PROGRAM_DATE_TIME_ID } from '@tags/const';

export const EXT_X_PROGRAM_DATE_TIME = () => {
    return tag(
        EXT_X_PROGRAM_DATE_TIME_ID,
        undefined,
        MEDIA_SEGMENT_APPLY_NEXT_MEDIA_TYPE_ID,
    );
};
