import { VALUE_ID } from '@tags/const';
import { quotedStringV13 } from '@tags-validation/rfc8216/v13/common/quoted-string';

export const VALUE_V13 = (attribute) => {
    attribute[VALUE_ID].validate = (schema, data) => {
        quotedStringV13(schema, data, true);
    };

    return attribute;
};
