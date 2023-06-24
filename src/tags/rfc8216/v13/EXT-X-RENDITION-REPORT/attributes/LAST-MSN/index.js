import { attribute } from '@parser/node/attribute';
import { LAST_MSN_ID } from '@tags/const';

export const LAST_MSN = () => {
    return attribute(LAST_MSN_ID);
};
