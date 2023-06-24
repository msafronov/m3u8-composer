import { attribute } from '@parser/node/attribute';
import { NAME_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const NAME = () => {
    const attributeNode = attribute(NAME_ID);

    attributeNode[NAME_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
