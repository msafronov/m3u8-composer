import { attribute } from '@parser/node/attribute';
import { TYPE_ID } from '@tags/const';

export const TYPE = () => {
    return attribute(TYPE_ID);
};
