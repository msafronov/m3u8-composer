import { attribute } from '@parser/node/attribute';
import { VALUE_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const VALUE = () => {
    const attributeNode = attribute(VALUE_ID);

    attributeNode[VALUE_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
