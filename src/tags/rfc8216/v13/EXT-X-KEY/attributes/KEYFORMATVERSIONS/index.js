import { attribute } from '@parser/node/attribute';
import { KEYFORMATVERSIONS_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const KEYFORMATVERSIONS = () => {
    const attributeNode = attribute(KEYFORMATVERSIONS_ID);

    attributeNode[KEYFORMATVERSIONS_ID].parse = (value) => {
        return quotedString(value).split('/');
    };

    return attributeNode;
};
