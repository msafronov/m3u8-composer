import { enumeratedStringV13 } from '@tags-validation/rfc8216/v13/common/enumerated-string';
import { CAN_SKIP_DATERANGES_ID } from '@tags/const';

export const CAN_SKIP_DATERANGES_V13 = (attribute) => {
    attribute[CAN_SKIP_DATERANGES_ID].validate = (schema, data) => {
        enumeratedStringV13(schema, data);

        if (data.value !== 'YES') {
            schema.logs['0x1241'] = data;
        }
    };

    return attribute;
};
