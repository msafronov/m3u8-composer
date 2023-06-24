import { attribute } from '@parser/node/attribute';
import { VIDEO_RANGE_ID } from '@tags/const';

export const VIDEO_RANGE = () => {
    return attribute(VIDEO_RANGE_ID);
};
