import { attribute } from '@parser/node/attribute';
import { SUPPLEMENTAL_CODECS_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const SUPPLEMENTAL_CODECS = () => {
    const attributeNode = attribute(SUPPLEMENTAL_CODECS_ID);

    attributeNode[SUPPLEMENTAL_CODECS_ID].parse = (value) => {
        return quotedString(value).split(',');
    };

    return attributeNode;
};
