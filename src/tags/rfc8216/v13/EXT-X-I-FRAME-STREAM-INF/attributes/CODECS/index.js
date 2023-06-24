import { attribute } from '@parser/node/attribute';
import { CODECS_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const CODECS = () => {
    const attributeNode = attribute(CODECS_ID);

    attributeNode[CODECS_ID].parse = (value) => {
        return quotedString(value).split(',');
    };

    return attributeNode;
};
