import { enumeratedStringV13 } from '@tags-validation/rfc8216/v13/common/enumerated-string';
import { CAN_BLOCK_RELOAD_ID } from '@tags/const';

export const CAN_BLOCK_RELOAD_V13 = (attribute) => {
    attribute[CAN_BLOCK_RELOAD_ID].validate = (schema, data) => {
        enumeratedStringV13(schema, data);

        if (data.value !== 'YES') {
            schema.logs['0x1243'] = data;
        }
    };

    return attribute;
};
