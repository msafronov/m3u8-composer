import { attribute } from '@parser/node/attribute';
import { BYTERANGE_START_ID } from '@tags/const';

export const BYTERANGE_START = () => {
    return attribute(BYTERANGE_START_ID);
};
