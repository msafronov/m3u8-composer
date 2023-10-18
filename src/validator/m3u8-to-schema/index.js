export const validator = (schema) => {
    // schema validation

    if (schema.validate !== undefined) {
        schema.validate(schema, schema, schema, 0);
    }

    const schemaKeys = Object.keys(schema);

    for (let idx = 0; idx < schemaKeys.length; idx++) {
        const tagKey = schemaKeys[idx];
        const tag = schema[tagKey];

        // tags validation

        if (tag.data !== undefined) {
            const tagAttributesKeys = Object.keys(tag);

            const validatorsDictionary = {};

            for (let idx2 = 0; idx2 < tagAttributesKeys.length; idx2++) {
                const tagAttributesKey = tagAttributesKeys[idx2];
                const tagAttribute = tag[tagAttributesKey];

                if (tagAttribute.validate !== undefined) {
                    validatorsDictionary[tagAttributesKey] = tagAttribute.validate;
                }
            }

            const validatorsDictionaryKeys = Object.keys(validatorsDictionary);

            for (let idx2 = 0; idx2 < tag.data.length; idx2++) {
                const dataItem = tag.data[idx2];

                if (dataItem.isValidated === true) {
                    continue;
                }

                if (tag.validate !== undefined) {
                    tag.validate(schema, dataItem, tag.data, idx2);
                    dataItem.isValidated = true;
                }

                // attributes validation

                for (let idx3 = 0; idx3 < validatorsDictionaryKeys.length; idx3++) {
                    const validatorsDictionaryKey = validatorsDictionaryKeys[idx3];

                    if (dataItem[validatorsDictionaryKey] !== undefined) {
                        validatorsDictionary[validatorsDictionaryKey](
                            schema,
                            dataItem[validatorsDictionaryKey],
                            undefined, // tag.data,
                            idx2,
                        );
                    }
                }
            }
        }
    }
};
