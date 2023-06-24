import { ParserSchema as ParserSchemaDefault } from '@parser/schema';
import { MULTIVARIANT_PLAYLIST_ID } from '@tags/const';

export const ParserSchema = (schema) => {
    const parserSchema = ParserSchemaDefault(schema);

    if (parserSchema.metadata[MULTIVARIANT_PLAYLIST_ID] === undefined) {
        parserSchema.metadata[MULTIVARIANT_PLAYLIST_ID] = false;
    }

    return parserSchema;
};
