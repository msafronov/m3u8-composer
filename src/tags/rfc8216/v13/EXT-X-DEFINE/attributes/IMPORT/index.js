import { attribute } from '@parser/node/attribute';
import { IMPORT_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const IMPORT = () => {
    const attributeNode = attribute(IMPORT_ID);

    attributeNode[IMPORT_ID].parse = (value) => {
        return quotedString(value);
    };

    return attributeNode;
};
