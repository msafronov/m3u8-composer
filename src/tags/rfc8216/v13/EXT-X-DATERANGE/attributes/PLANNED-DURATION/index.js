import { attribute } from '@parser/node/attribute';
import { PLANNED_DURATION_ID } from '@tags/const';

export const PLANNED_DURATION = () => {
    return attribute(PLANNED_DURATION_ID);
};
