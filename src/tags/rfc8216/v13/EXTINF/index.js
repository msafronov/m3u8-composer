import { MEDIA_SEGMENT_APPLY_NEXT_MEDIA_TYPE_ID } from '@parser/const';
import { tag } from '@parser/node/tag';
import { EXTINF_ID } from '@tags/const';

export const EXTINF = () => {
    const tagNode = tag(
        EXTINF_ID,
        undefined,
        MEDIA_SEGMENT_APPLY_NEXT_MEDIA_TYPE_ID,
    );

    tagNode[EXTINF_ID].parse = (value) => {
        const commaCharPos = value.indexOf(',');

        return {
            duration: value.slice(0, commaCharPos),
            title: value.slice(commaCharPos + 1, value.length),
        };
    };

    return tagNode;
};
