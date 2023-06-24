import { attribute } from '@parser/node/attribute';
import { DURATION_ID } from '@tags/const';

export const DURATION = () => {
    return attribute(DURATION_ID);
};
