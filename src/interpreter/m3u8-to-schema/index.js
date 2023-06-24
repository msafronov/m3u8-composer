import { parser } from '@parser/m3u8-to-schema';
import { validator } from '@validator/m3u8-to-schema';

export const interpreter = (data, schema) => {
    parser(data, schema);
    validator(schema);
};
