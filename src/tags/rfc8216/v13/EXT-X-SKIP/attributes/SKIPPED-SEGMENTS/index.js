import { attribute } from '@parser/node/attribute';
import { SKIPPED_SEGMENTS_ID } from '@tags/const';

export const SKIPPED_SEGMENTS = () => {
    return attribute(SKIPPED_SEGMENTS_ID);
};
