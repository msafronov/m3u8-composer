import { decimalFloatingPointV13 } from '@tags-validation/rfc8216/v13/common/decimal-floating-point';
import { CAN_SKIP_UNTIL_ID } from '@tags/const';

export const CAN_SKIP_UNTIL_V13 = (attribute) => {
    attribute[CAN_SKIP_UNTIL_ID].validate = (schema, data) => {
        decimalFloatingPointV13(schema, data);

        // TODO:
        // The Skip Boundary MUST be at least six times the Target Duration.
    };
    
    return attribute;
};
