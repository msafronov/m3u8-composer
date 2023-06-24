import { attribute } from '@parser/node/attribute';
import { BYTERANGE_LENGTH_ID } from '@tags/const';

export const BYTERANGE_LENGTH = () => {
    return attribute(BYTERANGE_LENGTH_ID);
};
