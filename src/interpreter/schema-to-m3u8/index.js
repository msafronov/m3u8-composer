import { parser } from '@parser/schema-to-m3u8';
import { validator } from '@validator/schema-to-m3u8';

export const interpreter = (data, schema) => {
    parser(data, schema);
    validator(data);
};
