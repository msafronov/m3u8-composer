import { attribute } from '@parser/node/attribute';
import { INSTREAM_ID_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const INSTREAM_ID = () => {
    const attributeNode = attribute(INSTREAM_ID_ID);

    attributeNode[INSTREAM_ID_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
