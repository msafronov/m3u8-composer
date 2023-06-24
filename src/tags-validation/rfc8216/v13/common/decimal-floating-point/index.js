export const decimalFloatingPointV13 = (schema, data) => {
    if (
        schema.logs['0x0002'] === undefined &&
        /^[0-9]{1,}(\.[0-9]+)?$/.test(data.value) !== true
    ) {
        schema.logs['0x0002'] = data;
    }
};
