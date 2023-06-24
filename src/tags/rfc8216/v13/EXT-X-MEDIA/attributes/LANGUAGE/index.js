import { attribute } from '@parser/node/attribute';
import { LANGUAGE_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const LANGUAGE = () => {
    const attributeNode = attribute(LANGUAGE_ID);

    attributeNode[LANGUAGE_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
