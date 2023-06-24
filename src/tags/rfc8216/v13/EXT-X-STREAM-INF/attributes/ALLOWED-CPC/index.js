import { attribute } from '@parser/node/attribute';
import { ALLOWED_CPC_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const ALLOWED_CPC = () => {
    const attributeNode = attribute(ALLOWED_CPC_ID);

    attributeNode[ALLOWED_CPC_ID].parse = (value) => {
        const result = {};

        quotedString(value).split(',').forEach((entry) => {
            const [keyformat, CPCs] = entry.split(':');

            result[keyformat] = CPCs.split('/');
        });

        return result;
    };

    return attributeNode;
};
