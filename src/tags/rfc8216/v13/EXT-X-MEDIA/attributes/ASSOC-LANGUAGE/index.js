import { attribute } from '@parser/node/attribute';
import { ASSOC_LANGUAGE_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const ASSOC_LANGUAGE = () => {
    const attributeNode = attribute(ASSOC_LANGUAGE_ID);

    attributeNode[ASSOC_LANGUAGE_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
