import { attribute } from '@parser/node/attribute';
import { END_DATE_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const END_DATE = () => {
    const attributeNode = attribute(END_DATE_ID);

    attributeNode[END_DATE_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
