import { attribute } from '@parser/node/attribute';
import { TIME_OFFSET_ID } from '@tags/const';

export const TIME_OFFSET = () => {
    return attribute(TIME_OFFSET_ID);
};
