import { attribute } from '@parser/node/attribute';
import { BYTERANGE_ID } from '@tags/const';
import { quotedString } from '@tags/rfc8216/v13/common/quoted-string';

export const BYTERANGE = () => {
    const attributeNode = attribute(BYTERANGE_ID);

    attributeNode[BYTERANGE_ID].parse = (value) => {
        const parsedValue = quotedString(value);
        const atSignCharPos = parsedValue.indexOf('@');

        if (atSignCharPos === -1) {
            return {
                length: parsedValue,
                offset: '',
            };
        }

        return {
            length: parsedValue.slice(0, atSignCharPos),
            offset: parsedValue.slice(atSignCharPos + 1, parsedValue.length),
        };
    };

    return attributeNode;
};
