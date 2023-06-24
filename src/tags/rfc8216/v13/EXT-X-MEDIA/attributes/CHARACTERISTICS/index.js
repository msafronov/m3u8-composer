import { attribute } from '@parser/node/attribute';
import { CHARACTERISTICS_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const CHARACTERISTICS = () => {
    const attributeNode = attribute(CHARACTERISTICS_ID);

    attributeNode[CHARACTERISTICS_ID].parse = (value) => {
        return quotedString(value).split(',');
    };

    return attributeNode;
};
