export const signedDecimalFloatingPointV13 = (schema, data) => {
    if (
        schema.logs['0x0003'] === undefined &&
        /^-?[0-9]{1,}(\.[0-9]+)?$/.test(data.value) !== true
    ) {
        schema.logs['0x0003'] = data;
    }
};
