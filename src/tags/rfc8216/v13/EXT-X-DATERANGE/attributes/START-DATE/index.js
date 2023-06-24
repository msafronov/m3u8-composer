import { attribute } from '@parser/node/attribute';
import { START_DATE_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const START_DATE = () => {
    const attributeNode = attribute(START_DATE_ID);

    attributeNode[START_DATE_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
