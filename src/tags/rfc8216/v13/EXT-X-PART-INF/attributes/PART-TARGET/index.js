import { attribute } from '@parser/node/attribute';
import { PART_TARGET_ID } from '@tags/const';

export const PART_TARGET = () => {
    return attribute(PART_TARGET_ID);
};
