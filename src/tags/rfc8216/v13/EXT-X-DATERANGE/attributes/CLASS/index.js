import { attribute } from '@parser/node/attribute';
import { CLASS_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const CLASS = () => {
    const attributeNode = attribute(CLASS_ID);

    attributeNode[CLASS_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
