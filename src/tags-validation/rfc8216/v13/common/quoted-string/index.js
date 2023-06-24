export const quotedStringV13 = (schema, data, mayBeEmpty = false) => {
    if (
        schema.logs['0x0004'] === undefined &&
        (
            mayBeEmpty === true
                ? /^\"[^\r|\n|\"]{0,}\"$/.test(data.value) !== true
                : /^\"[^\r|\n|\"]{1,}\"$/.test(data.value) !== true
        )
    ) {
        schema.logs['0x0004'] = data;
    }
};
