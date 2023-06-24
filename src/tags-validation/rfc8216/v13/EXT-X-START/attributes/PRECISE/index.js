import { PRECISE_ID } from '@tags/const';
import { enumeratedStringV13 } from '@tags-validation/rfc8216/v13/common/enumerated-string';

export const PRECISE_V13 = (attribute) => {
    const possibleValues = ['YES', 'NO'];

    attribute[PRECISE_ID].validate = (schema, data) => {
        enumeratedStringV13(schema, data);

        if (possibleValues.includes(data.value) === false) {
            schema.logs['0x1062'] = data;
        }
    };

    return attribute;
};
