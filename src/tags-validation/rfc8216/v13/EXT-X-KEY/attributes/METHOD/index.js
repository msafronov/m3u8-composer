import { METHOD_ID } from '@tags/const';

export const METHOD_V13 = (attribute) => {
    const possibleValues = ['NONE', 'AES-128', 'SAMPLE-AES'];

    attribute[METHOD_ID].validate = (schema, data) => {
        if (possibleValues.includes(data.value) === false) {
            schema.logs['0x1281'] = data;
        }
    };

    return attribute;
};
