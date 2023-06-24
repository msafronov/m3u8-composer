import { ATTRIBUTE_TYPE_ID } from '@parser/const';

export const attribute = (attributeName) => {
    return {
        [attributeName]: {
            type: ATTRIBUTE_TYPE_ID,
            parse: (value) => {
                return value;
            },
        },
    };
};
