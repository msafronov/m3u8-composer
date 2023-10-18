import { MEDIA_SEGMENT_APPLY_NEXT_MEDIA_TYPE_ID } from '@parser/const';
import { tag } from '@parser/node/tag';
import { EXT_X_BYTERANGE_ID } from '@tags/const';

export const EXT_X_BYTERANGE = () => {
    const tagNode = tag(
        EXT_X_BYTERANGE_ID,
        undefined,
        MEDIA_SEGMENT_APPLY_NEXT_MEDIA_TYPE_ID,
    );

    tagNode[EXT_X_BYTERANGE_ID].parse = (value) => {
        const atSignCharPos = value.indexOf('@');

        if (atSignCharPos === -1) {
            return {
                length: value,
                offset: '',
            };
        }

        return {
            length: value.slice(0, atSignCharPos),
            offset: value.slice(atSignCharPos + 1, value.length),
        };
    };

    return tagNode;
};
