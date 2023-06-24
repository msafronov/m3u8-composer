import { attribute } from '@parser/node/attribute';
import { AUTOSELECT_ID } from '@tags/const';

export const AUTOSELECT = () => {
    return attribute(AUTOSELECT_ID);
};
