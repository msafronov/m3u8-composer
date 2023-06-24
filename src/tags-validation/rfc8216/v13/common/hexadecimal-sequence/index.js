export const hexadecimalSequenceV13 = (schema, data) => {
    if (
        schema.logs['0x0001'] === undefined &&
        /^0(x|X)[0-9A-F]+$/.test(data.value) !== true
    ) {
        schema.logs['0x0001'] = data;
    }
};
