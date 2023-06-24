import { attribute } from '@parser/node/attribute';
import { FRAME_RATE_ID } from '@tags/const';

export const FRAME_RATE = () => {
    return attribute(FRAME_RATE_ID);
};
