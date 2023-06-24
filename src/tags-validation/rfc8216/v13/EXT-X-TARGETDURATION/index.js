import { EXT_X_TARGETDURATION_ID } from '@tags/const';
import { decimalIntegerV13 } from '../common/decimal-integer';

export const EXT_X_TARGETDURATION_V13 = (tag) => {
    tag[EXT_X_TARGETDURATION_ID].validate = (schema, data, dataAll) => {
        if (dataAll.length > 1) {
            schema.logs['0x1101'] = data;
        }

        decimalIntegerV13(schema, data);
    };

    return tag;
};
