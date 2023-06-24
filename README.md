# M3U8 Composer

<p align="center">
  <img height="128" src="./.readme/logo.jpg">
</p>

Flexible library for working with m3u8 and HLS playlists (parsing, validation and other stuff).

This library is:

- **Composable**. You can build your own parser from small modules to selectively parse and/or validate only the necessary tags and attributes, increasing performance.

- **Tree-shakable**. Take from the library only what you need for work to reduce bundle size.

- **Scalable**. Convenient creation of non-standard tags and attributes.

- **Informative**. Detailed logging system with descriptions for deep analysis.


## Fast Example (Parsing and Validation)

```js
const { interpreter } = require('m3u8-composer/interpreter/m3u8-to-schema');
const { createSchema } = require('m3u8-composer/schema/rfc8216-v13');

const data = `
#EXTM3U
#EXT-X-VERSION:1

# variants
#EXT-X-STREAM-INF:BANDWIDTH=493000,CODECS="mp4a.40.2,avc1.66.30",RESOLUTION=224x100,FRAME-RATE=24
low.m3u8

#EXT-X-STREAM-INF:BANDWIDTH=932000,CODECS="avc1.64002a",RESOLUTION=448x200,FRAME-RATE=24
medium.m3u8`;

const schema = createSchema();

interpreter(data, schema);


console.log(schema);

/*
{
  ...<system data>

  playlist: {
    '#EXTM3U': true,
    '#EXT-X-VERSION': '1'
  },
  mediaSegments: [],
  variantStreams: [
    {
      '#EXT-X-STREAM-INF': {
        BANDWIDTH: '493000',
        CODECS: [ 'mp4a.40.2', 'avc1.66.30' ],
        RESOLUTION: '224x100',
        'FRAME-RATE': '24'
      },
      URI: 'low.m3u8'
    },
    {
      '#EXT-X-STREAM-INF': {
        BANDWIDTH: '932000',
        CODECS:  [ 'avc1.64002a' ],
        RESOLUTION: '448x200',
        'FRAME-RATE': '24'
      },
      URI: 'medium.m3u8'
    }
  ],
  metadata: {
    multivariantPlaylist: true,
  },
  logs: {
    '0x1001': {
      value: true,
      row: 1,
      col: 0,
      isValidated: true,
    },
  },
  validate: [Function (anonymous)],
}
*/
```

## Guideline

- [Supported Tags and Attributes](#supported-tags-and-attributes)
- [Installation](#installation)
- [Creating your own parser](#creating-your-own-parser)
- [Schema](#schema)
  - [Playlist](#playlist)
  - [Media Segments](#media-segments)
  - [Variant Streams](#variant-streams)
  - [Logs](#logs)
  - [Extended Logs](#extended-logs)
- [Custom tag and attributes creation](#custom-tag-and-attributes-creation)
- [Custom validation](#custom-validation)
- [Schema tag modifying](#schema-tag-modifying)
- [Parser algorithms](#parser-algorithms)
  - [tag](#tag)
  - [tagAttributeList](#tagattributelist)
  - [tagAttributeListMultiple](#tagattributelistmultiple)
  - [attribute](#attribute)
- [Media Type](#media-type)
- [Features](#features)
- [Playlist creation from the schema](#playlist-creation-from-the-schema)
- [Tags versioning](#tags-versioning)

---

### Supported Tags and Attributes

Click to open detailed list:

- [rfc8216 v13](./docs/tags-and-attributes-support/rfc8216-v13.md)

### Installation

```sh
npm install m3u8-composer
```

### Creating your own parser

Let's try to parse and validate *Media Playlist* according to the [rfc8216 v13 specification](https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis-13) rules.

For parsing we need a Schema. In [the example above](#fast-example-parsing-and-validation), we used ready-made Schema (it includes [all tags and validators](./src/schema/rfc8216-v13/index.js)), but now let's build our own one to understand how it works:

```js
const { interpreter } = require('m3u8-composer/interpreter/m3u8-to-schema');

// parser tags
const { ParserSchema } = require('m3u8-composer/tags/rfc8216/v13/schema');

const { EXTM3U } = require('m3u8-composer/tags/rfc8216/v13/EXTM3U');
const { EXT_X_MEDIA_SEQUENCE } = require('m3u8-composer/tags/rfc8216/v13/EXT-X-MEDIA-SEQUENCE');
const { EXT_X_PLAYLIST_TYPE } = require('m3u8-composer/tags/rfc8216/v13/EXT-X-PLAYLIST-TYPE');
const { EXT_X_MAP } = require('m3u8-composer/tags/rfc8216/v13/EXT-X-MAP');
const { URI } = require('m3u8-composer/tags/rfc8216/v13/EXT-X-MAP/attributes/URI');
const { BYTERANGE } = require('m3u8-composer/tags/rfc8216/v13/EXT-X-MAP/attributes/BYTERANGE');
const { EXT_X_BYTERANGE } = require('m3u8-composer/tags/rfc8216/v13/EXT-X-BYTERANGE');
const { EXTINF } = require('m3u8-composer/tags/rfc8216/v13/EXTINF');

// validations
const { ValidationSchema } = require('m3u8-composer/tags-validation/rfc8216/v13/schema');
const { EXT_X_PLAYLIST_TYPE_V13 } = require('m3u8-composer/tags-validation/rfc8216/v13/EXT-X-PLAYLIST-TYPE');


// build schema

const schema = ValidationSchema(ParserSchema({
  ...EXTM3U(),
  ...EXT_X_MEDIA_SEQUENCE(),
  ...EXT_X_PLAYLIST_TYPE_V13(EXT_X_PLAYLIST_TYPE()), // we will validate only this tag
  ...EXT_X_MAP({
    ...URI(),
    ...BYTERANGE(),
  }),
  ...EXT_X_BYTERANGE(),
  ...EXTINF(),
}));

// playlist as a string

const data = `#EXTM3U
#EXT-X-TARGETDURATION:6
#EXT-X-VERSION:7
#EXT-X-MEDIA-SEQUENCE:1
#EXT-X-PLAYLIST-TYPE:BAD_VALUE
#EXT-X-MAP:URI="main.mp4",BYTERANGE="719@0"
#EXTINF:6.00000,
#EXT-X-BYTERANGE:1508000@719
main.mp4
#EXTINF:6.00000,
#EXT-X-BYTERANGE:1510244@1508719
main.mp4
#EXTINF:6.00000,test_name
#EXT-X-BYTERANGE:1504861@3018963
main.mp4`;

// interpretation..

interpreter(data, schema);

// after that, the results will appear in the Schema object

```

### Schema

#### Playlist

A "playlist" object stores general tags, that don't belong to *Media Segments* or *Variant Stream*. Only those tags that are in the Schema are recorded:

```js
console.log(schema.playlist);

/*
{
  '#EXTM3U': true,
  '#EXT-X-MEDIA-SEQUENCE': '1',
  '#EXT-X-PLAYLIST-TYPE': 'BAD_VALUE'
}
*/
```

#### Media Segments

*Media Segments* are written to the "mediaSegments" array of the Schema in the order in which they are declared in the playlist. All tags and their attributes from the Schema are added to each *Media Segment* according to the specification (with URI):

```js
console.log(schema.mediaSegments);

/*
[                                                             
  {                                                                 
    '#EXTINF': { duration: '6.00000', title: '' },                  
    '#EXT-X-BYTERANGE': '1508000@719',                              
    '#EXT-X-MAP': { URI: 'main.mp4', BYTERANGE: '719@0' },          
    URI: 'main.mp4'                                                 
  },                                                                
  {                                                                 
    '#EXTINF': { duration: '6.00000', title: '' },                  
    '#EXT-X-BYTERANGE': '1510244@1508719',                          
    '#EXT-X-MAP': { URI: 'main.mp4', BYTERANGE: '719@0' },          
    URI: 'main.mp4'                                                 
  },                                                                
  {                                                                 
    '#EXTINF': { duration: '6.00000', title: 'test_name' },         
    '#EXT-X-BYTERANGE': '1504861@3018963',                          
    '#EXT-X-MAP': { URI: 'main.mp4', BYTERANGE: '719@0' },          
    URI: 'main.mp4'                                                 
  }                                                                 
]                                                                   
*/
```

#### Variant Streams

*Variant Streams* are written to the "variantStreams" array, but it is empty now because we didn't parse any *Multivariant Playlist* tags:

```js
console.log(schema.variantStreams);

// []
```

#### Logs

A "logs" object contains records of all events that occurred during the interpretation process. Let's look at the result:

```js
console.log(schema.logs);

/*
{
  '0x1100': {
    row: 0,
    col: 0,
    value: null,
    isValidated: true
  },
  '0x1181': {
    value: 'BAD_VALUE',
    row: 4,
    col: 0,
    isValidated: true
  }
}
*/
```

In this case we recorded two events (All event codes [can be found here](./src/features/extended-logs/default-dictionary/index.js)):

`0x1100`: indicates that the *REQUIRED* tag `#EXT-X-TARGETDURATION` is missing because we didn't add it to the Schema. That is, in this case it is our fault.

`0x1181`: Here we see that in the 4-th row (numbering starts from zero) of the playlist an invalid value "BAD_VALUE" was added in the `#EXT-X-PLAYLIST-TYPE` tag. According to the specification, this tag only accepts "EVENT" or "VOD".


#### Extended Logs

In the `features` folder you can find a function that adds an extended description of error codes in the `logs` object:

```js
const { extendedLogsFeature } = require('m3u8-composer/features/extended-logs');

...

console.log(extendedLogsFeature(schema));

/*
{
  logs: {
    '0x1100': {
      relatesTo: '#EXT-X-TARGETDURATION',
      keyword: 'REQUIRED',
      message: 'The EXT-X-TARGETDURATION tag is REQUIRED',
      origin: 'rfc8216 v13',
      row: 0,
      col: 0,
      value: null,
      isValidated: true
    },
    '0x1181': {
      relatesTo: '#EXT-X-PLAYLIST-TYPE',
      keyword: 'MUST NOT',
      message: 'where type-enum is either EVENT or VOD',
      origin: 'rfc8216 v13',
      value: 'BAD_VALUE',
      row: 4,
      col: 0,
      isValidated: true
    }
}
*/
```

Be careful: error descriptions increase the size of your application bundle. It is not recommended to use this in production builds.

### Custom tag and attributes creation

Let's create a custom tag `#EXT-X-IMAGE-STREAM-INF` as an example for Trick Play support, with additional `URI` and `BANDWIDTH` attributes:

```js
const { interpreter } = require('m3u8-composer/interpreter/m3u8-to-schema');
const { ParserSchema } = require('m3u8-composer/tags/rfc8216/v13/schema');

const { tagAttributeList } = require('m3u8-composer/parser/node/tag-attribute-list');
const { attribute } = require('m3u8-composer/parser/node/attribute');

const EXT_X_IMAGE_STREAM_INF = (attributes) => {
  return tagAttributeList('#EXT-X-IMAGE-STREAM-INF', attributes);
};

const URI = () => {
  return attribute('URI');
};

const BANDWIDTH = () => {
  return attribute('BANDWIDTH');
};

// now let's build the Schema

const schema = ParserSchema({
  ...EXT_X_IMAGE_STREAM_INF({
    ...URI(),
    ...BANDWIDTH(),
  })
});

// ok! Now we can parse a playlist with the tag "#EXT-X-IMAGE-STREAM-INF"

const data = `#EXT-X-IMAGE-STREAM-INF:URI="test.m3u8",BANDWIDTH=29729`;

interpreter(data, schema);

console.log(schema.playlist);

/*
{
  '#EXT-X-IMAGE-STREAM-INF': {
    URI: '"test.m3u8"',
    BANDWIDTH: '29729'
  }
}
*/
```

We used `node` entities (`tagAttributeList` and `attribute`) from the system parser. This means that we set a specific algorithms for parsing tags and attributes for the system parser. [Here](#parser-algorithms) you will find a list of all algorithms with descriptions.

Now let's look at the result of the `URI` attribute:
```js
{ URI: '"test.m3u8"' }
```

Let's say we want to write values as `quoted-string` from the rfc8216 v13. Let's use ready-made tools for this and rewrite the  `URI` attribute code:

```js
const { quotedString } = require('m3u8-composer/tags/rfc8216/v13/common/quoted-string');

const URI = () => {
  const attributeNode = attribute('URI');

  attributeNode['URI'].parse = (value) => {
    return quotedString(value);
  };

  return attributeNode;
};
```

That is, we have overridden the `parse` method of the `URI` attribute, and the result will now look like:

```js
{ URI: 'test.m3u8' }
```

Any tag or attribute must have a `parse` method, it is called by the parser. The method takes the original value as input and returns the processed one.

### Custom validation

Let's now create our own validator for the `URI` attribute from the example above. For example, if the value does not contain the substring ".m3u8", then we will display a warning in the console:

```js
const URI_VALIDATION = (tag) => {
    tag['URI'].validate = (schema, data, dataAll) => {
      if (data.value.indexOf('.m3u8') === -1) {
        console.warn('unsupported playlist!');
      }
    };

    return tag;
};
```

Here we have overridden the `validate` method. Every tag and attribute also has this method, it is empty by default. It takes 3 arguments: 


|Argument|Type|Description|
|---|---|---|
|**schema**|object|Entire Schema object|
|**data**|object|Raw data from the parser { value: string, row: number, col: number, isValidated: boolean, ...attributes }, where "attributes" are nested objects in the same format|
|**dataAll**|array / object|Set of "data", described above|


Now let's add the validator to the Schema as a decorator, wrapping a `URI`:

```js
const schema = ParserSchema({
  ...EXT_X_IMAGE_STREAM_INF({
    ...URI_VALIDATION(URI()), // validate only the URI attribute
    ...BANDWIDTH(),
  })
});

interpreter(data, schema);

...
```

You can also reuse default `AttributeValue` validators like `decimal-integer` and all the others:

```js
import { decimalIntegerV13 } from 'm3u8-composer/tags-validation/rfc8216/v13/common/decimal-integer';

const URI_VALIDATION = (tag) => {
    tag['URI'].validate = (schema, data) => {
      decimalIntegerV13(schema, data);
    };

    return tag;
};
```

In this case we will get `0x0000` error in the `schema.logs` because URI value is a string.

### Schema tag modifying

A schema is a javascript object, so:

```js
// you can delete a tag by key
delete(schema['#EXTINF']);

// you can remove the tag attribute
delete(schema['#EXT-X-PART']['DURATION']);

// you can override validation for a specific tag
schema['#EXTM3U'].validate = () => {};

// and so on..
```

---

### Parser algorithms

#### tag

|||
|---|---|
|**Description:**|Parses tags without a value or with a single value after the `:` character|
|**Examples:**|`#EXT3MU`<br />`#EXT-X-VERSION:9`|
|**Results:**| { '#EXT3MU': true }<br />{ '#EXT-X-VERSION': '9' } |

For tags without a value the result is `true` if the tag is in the playlist. If the tag is not in the playlist, the value is not recorded

If a tag appears twice in a playlist, the value of the second will overwrite the value of the first

#### tagAttributeList

|||
|---|---|
|**Description:**|Parses tags with attributes|
|**Example:**|`#EXT-X-MAP:URI="main.mp4",BYTERANGE="560@0"`|
|**Result:**| { '#EXT-X-MAP': { URI: '"main.mp4"', BYTERANGE: '"560@0"' } } |

The result is an object whose keys are *AttributeName* and whose values are *AttributeValue*.

If a tag appears twice in a playlist, the value of the second will overwrite the value of the first. If the tag is not in the playlist, the value is not recorded.

#### tagAttributeListMultiple

|||
|---|---|
|**Description:**|Same as [tagAttributeList](#tagattributelist), but the result is an array |
|**Example:**|`#EXT-X-DEFINE:NAME="test",VALUE="value"`<br />`#EXT-X-DEFINE:NAME="test2",VALUE="value2"`|
|**Result:**| { '#EXT-X-DEFINE': [{ NAME: '"test"', VALUE: '"value"' }, { NAME: '"test2"', VALUE: '"value2"' }] } |


the values are simply added to the array. If the tag is not in the playlist, the value is not recorded.

#### attribute

|||
|---|---|
|**Описание:**|Attribute|
|**Пример:**|`#EXT-X-START:TIME-OFFSET=25`|
|**Результат:**| { '#EXT-X-START': { TIME-OFFSET: 25 } } |

The attribute in the example above is `TIME-OFFSET`. If a tag in the playlist does not have an attribute, the attribute value is not recorded.


### Media Type

Each tag additionally has a `mediaType` which defines the algorithm of parsing according to URI logic from the specification (*Media Segments* / *Variant Streams*):


|Name|Description|
|---|---|
|**none-media-type-id**|Media type missing (by default)|
|**media-segment-apply-next-media-type-id**|The tag is applied to the next URI, the result is written to `mediaSegments`|
|**media-segment-apply-all-media-type-id**|The tag applies to all URIs, the result is written to `mediaSegments`|
|**variant-stream-apply-next-media-type-id**|The tag is applied to the next URI, the result is written to `variantStreams`|

Here's an example of how to pass this ID to a tag:

```js
const { MEDIA_SEGMENT_APPLY_NEXT_MEDIA_TYPE_ID } = require('m3u8-composer/parser/const');
const { tag } = require('m3u8-composer/parser/node/tag');
const { EXT_X_BYTERANGE_ID } = require('m3u8-composer/tags/const');

const EXT_X_BYTERANGE = () => {
    return tag(
        EXT_X_BYTERANGE_ID,
        undefined,
        MEDIA_SEGMENT_APPLY_NEXT_MEDIA_TYPE_ID,
    );
};
```

### Features

You can perform additional actions on the final playlist:

|name|description|
|---|---|
|**extendedLogsFeature**|Adds additional information to event codes in `schema.logs`|


*[WIP] Additional features will be added in the future, such as `Delta Updates`, `Variable Substitution`.*

### Playlist creation from the schema

*[WIP] In the future, it will be possible to create a playlist from a schema.*

### Tags versioning

*[WIP] All tags and their validations will be versioned and placed in the corresponding folders, as is now done for `rfc8216 v13`. In the future, it is planned to collect a huge database of tags, including non-standard tags.*
