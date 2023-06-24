import { attribute } from '@parser/node/attribute';
import { END_ON_NEXT_ID } from '@tags/const';

export const END_ON_NEXT = () => {
    return attribute(END_ON_NEXT_ID);
};
