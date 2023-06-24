import { QUERYPARAM_ID } from '@tags/const';
import { variableNameStringV13 } from '@tags-validation/rfc8216/v13/EXT-X-DEFINE/attributes/common/variable-name-string';

export const QUERYPARAM_V13 = (attribute) => {
    attribute[QUERYPARAM_ID].validate = (schema, data) => {
        if (variableNameStringV13(data.value) === false) {
            schema.logs['0x108B'] = data;
        }
    };

    return attribute;
};
