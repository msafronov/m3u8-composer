import { NAME_ID } from '@tags/const';
import { variableNameStringV13 } from '@tags-validation/rfc8216/v13/EXT-X-DEFINE/attributes/common/variable-name-string';

export const NAME_V13 = (attribute) => {
    attribute[NAME_ID].validate = (schema, data) => {
        if (variableNameStringV13(data.value) === false) {
            schema.logs['0x1083'] = data;
        }
    };

    return attribute;
};
