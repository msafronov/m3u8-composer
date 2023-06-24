import { attribute } from '@parser/node/attribute';
import { LAST_PART_ID } from '@tags/const';

export const LAST_PART = () => {
    return attribute(LAST_PART_ID);
};
