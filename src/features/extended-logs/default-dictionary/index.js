export const defaultDictionary = {
    /******************************

        Errors

        (0x0000 - 0x4FFF)

        Keywords:

        - MUST / REQUIRED / SHALL
        - MUST NOT / SHALL NOT
        - '' (without keyword)

    ******************************/

    '0x0000': {
        relatesTo: 'Attribute Lists',
        keyword: '',
        message: 'decimal-integer invalid',
        origin: 'rfc8216 v13',
    },
    '0x0001': {
        relatesTo: 'Attribute Lists',
        keyword: '',
        message: 'hexadecimal-sequence invalid',
        origin: 'rfc8216 v13',
    },
    '0x0002': {
        relatesTo: 'Attribute Lists',
        keyword: '',
        message: 'decimal-floating-point invalid',
        origin: 'rfc8216 v13',
    },
    '0x0003': {
        relatesTo: 'Attribute Lists',
        keyword: '',
        message: 'signed-decimal-floating-point invalid',
        origin: 'rfc8216 v13',
    },
    '0x0004': {
        relatesTo: 'Attribute Lists',
        keyword: '',
        message: 'quoted-string invalid',
        origin: 'rfc8216 v13',
    },
    '0x0005': {
        relatesTo: 'Attribute Lists',
        keyword: '',
        message: 'enumerated-string invalid',
        origin: 'rfc8216 v13',
    },
    '0x0006': {
        relatesTo: 'Attribute Lists',
        keyword: '',
        message: 'enumerated-string-list invalid',
        origin: 'rfc8216 v13',
    },
    '0x0007': {
        relatesTo: 'Attribute Lists',
        keyword: '',
        message: 'decimal-resolution invalid',
        origin: 'rfc8216 v13',
    },

    '0x1000': {
        relatesTo: '',
        keyword: '',
        message: '<RESERVED>',
        origin: '',
    },

    '0x1001': {
        relatesTo: '#EXTM3U',
        keyword: 'MUST',
        message: 'It MUST be the first line of every Media Playlist and every Multivariant Playlist',
        origin: 'rfc8216 v13',
    },

    '0x1020': {
        relatesTo: '#EXT-X-VERSION',
        keyword: '',
        message: '<RESERVED>',
        origin: 'rfc8216 v13',
    },
    '0x1021': {
        relatesTo: '#EXT-X-VERSION',
        keyword: 'MUST NOT',
        message: 'A Playlist file MUST NOT contain more than one EXT-X-VERSION tag',
        origin: 'rfc8216 v13',
    },
    '0x1022': {
        relatesTo: '#EXT-X-VERSION',
        keyword: 'MUST',
        message: 'A Media Playlist MUST indicate an EXT-X-VERSION of 2 or higher if it contains: The IV attribute of the EXT-X-KEY tag',
        origin: 'rfc8216 v13',
    },
    '0x1023': {
        relatesTo: '#EXT-X-VERSION',
        keyword: 'MUST',
        message: 'A Media Playlist MUST indicate an EXT-X-VERSION of 3 or higher if it contains: Floating-point EXTINF duration values',
        origin: 'rfc8216 v13',
    },
    '0x1024': {
        relatesTo: '#EXT-X-VERSION',
        keyword: 'MUST',
        message: 'A Media Playlist MUST indicate an EXT-X-VERSION of 4 or higher if it contains: The EXT-X-BYTERANGE tag',
        origin: 'rfc8216 v13',
    },
    '0x1025': {
        relatesTo: '#EXT-X-VERSION',
        keyword: 'MUST',
        message: 'A Media Playlist MUST indicate an EXT-X-VERSION of 4 or higher if it contains: The EXT-X-I-FRAMES-ONLY tag',
        origin: 'rfc8216 v13',
    },
    '0x1026': {
        relatesTo: '#EXT-X-VERSION',
        keyword: 'MUST',
        message: 'A Media Playlist MUST indicate an EXT-X-VERSION of 5 or higher if it contains: An EXT-X-KEY tag with a METHOD of SAMPLE-AES',
        origin: 'rfc8216 v13',
    },
    '0x1027': {
        relatesTo: '#EXT-X-VERSION',
        keyword: 'MUST',
        message: 'A Media Playlist MUST indicate an EXT-X-VERSION of 5 or higher if it contains: The KEYFORMAT and KEYFORMATVERSIONS attributes of the EXT-X-KEY tag',
        origin: 'rfc8216 v13',
    },
    '0x1028': {
        relatesTo: '#EXT-X-VERSION',
        keyword: 'MUST',
        message: 'A Media Playlist MUST indicate an EXT-X-VERSION of 5 or higher if it contains: The EXT-X-MAP tag',
        origin: 'rfc8216 v13',
    },
    '0x1029': {
        relatesTo: '#EXT-X-VERSION',
        keyword: 'MUST',
        message: 'A Media Playlist MUST indicate an EXT-X-VERSION of 6 or higher if it contains: The EXT-X-MAP tag in a Media Playlist that does not contain EXT-X-I-FRAMES-ONLY',
        origin: 'rfc8216 v13',
    },
    '0x102A': {
        relatesTo: '#EXT-X-VERSION',
        keyword: 'MUST',
        message: 'A Multivariant Playlist MUST indicate an EXT-X-VERSION of 7 or higher if it contains: "SERVICE" values for the INSTREAM-ID attribute of the EXT-X-MEDIA tag',
        origin: 'rfc8216 v13',
    },
    '0x102B': {
        relatesTo: '#EXT-X-VERSION',
        keyword: 'MUST',
        message: 'A Playlist MUST indicate an EXT-X-VERSION of 8 or higher if it contains: Variable substitution (EXT-X-DEFINE tag)',
        origin: 'rfc8216 v13',
    },
    '0x102C': {
        relatesTo: '#EXT-X-VERSION',
        keyword: 'MUST',
        message: 'A Playlist MUST indicate an EXT-X-VERSION of 9 or higher if it contains: The EXT-X-SKIP tag',
        origin: 'rfc8216 v13',
    },
    '0x102D': {
        relatesTo: '#EXT-X-VERSION',
        keyword: 'MUST',
        message: 'A Playlist MUST indicate an EXT-X-VERSION of 10 or higher if it contains: An EXT-X-SKIP tag that replaces EXT-X-DATERANGE tags in a Playlist Delta Update',
        origin: 'rfc8216 v13',
    },
    '0x102E': {
        relatesTo: '#EXT-X-VERSION',
        keyword: 'MUST',
        message: 'A Playlist MUST indicate an EXT-X-VERSION of 11 or higher if it contains: An EXT-X-DEFINE tag with a QUERYPARAM attribute',
        origin: 'rfc8216 v13',
    },
    '0x102F': {
        relatesTo: '#EXT-X-VERSION',
        keyword: 'MUST',
        message: 'A Playlist MUST indicate an EXT-X-VERSION of 12 or higher if it contains: An attribute whose name starts with "REQ-"',
        origin: 'rfc8216 v13',
    },

    '0x1040': {
        relatesTo: '#EXT-X-INDEPENDENT-SEGMENTS',
        keyword: 'MUST NOT',
        message: 'Tags in this section MUST NOT appear more than once in a Playlist',
        origin: 'rfc8216 v13',
    },

    '0x1060': {
        relatesTo: '#EXT-X-START, TIME-OFFSET',
        keyword: 'REQUIRED',
        message: 'This attribute is REQUIRED',
        origin: 'rfc8216 v13',
    },
    '0x1061': {
        relatesTo: '#EXT-X-START',
        keyword: '',
        message: '<RESERVED>',
        origin: '',
    },
    '0x1062': {
        relatesTo: '#EXT-X-START, PRECISE',
        keyword: '',
        message: 'The value is an enumerated-string; valid strings are YES and NO',
        origin: 'rfc8216 v13',
    },
    '0x1063': {
        relatesTo: '#EXT-X-START',
        keyword: 'MUST NOT',
        message: 'Tags in this section MUST NOT appear more than once in a Playlist',
        origin: 'rfc8216 v13',
    },

    '0x1080': {
        relatesTo: '#EXT-X-DEFINE',
        keyword: '',
        message: 'Reserved',
        origin: 'rfc8216 v13',
    },
    '0x1081': {
        relatesTo: '#EXT-X-DEFINE, VALUE',
        keyword: 'REQUIRED',
        message: 'This attribute is REQUIRED if the EXT-X-DEFINE tag has a NAME attribute',
        origin: 'rfc8216 v13',
    },
    '0x1082': {
        relatesTo: '#EXT-X-DEFINE',
        keyword: '',
        message: 'Reserved',
        origin: 'rfc8216 v13',
    },
    '0x1083': {
        relatesTo: '#EXT-X-DEFINE, NAME',
        keyword: 'MUST',
        message: 'All characters in the quoted-string MUST be from the following set: [a..z], [A..Z], [0..9], \'-\', and \'_\'',
        origin: 'rfc8216 v13',
    },
    '0x1084': {
        relatesTo: '#EXT-X-DEFINE, VALUE',
        keyword: 'REQUIRED',
        message: 'This attribute is REQUIRED if the EXT-X-DEFINE tag has a NAME attribute',
        origin: 'rfc8216 v13',
    },
    '0x1085': {
        relatesTo: '#EXT-X-DEFINE, VALUE',
        keyword: '',
        message: 'The value is a quoted-string which specifies the Variable Value',
        origin: 'rfc8216 v13',
    },
    '0x1086': {
        relatesTo: '#EXT-X-DEFINE',
        keyword: '',
        message: 'Reserved',
        origin: 'rfc8216 v13',
    },
    '0x1087': {
        relatesTo: '#EXT-X-DEFINE, IMPORT',
        keyword: '',
        message: 'The valid character set for the quoted-string is the same as for the NAME attribute',
        origin: 'rfc8216 v13',
    },
    '0x1088': {
        relatesTo: '#EXT-X-DEFINE, IMPORT',
        keyword: '',
        message: 'Reserved',
        origin: 'rfc8216 v13',
    },
    '0x1089': {
        relatesTo: '#EXT-X-DEFINE, IMPORT',
        keyword: '',
        message: 'Reserved',
        origin: 'rfc8216 v13',
    },
    '0x108A': {
        relatesTo: '#EXT-X-DEFINE',
        keyword: '',
        message: 'Reserved',
        origin: 'rfc8216 v13',
    },
    '0x108B': {
        relatesTo: '#EXT-X-DEFINE, QUERYPARAM',
        keyword: '',
        message: 'The valid character set for the quoted-string is the same as for the NAME attribute',
        origin: 'rfc8216 v13',
    },
    '0x108C': {
        relatesTo: '#EXT-X-DEFINE',
        keyword: 'MUST',
        message: 'An EXT-X-DEFINE tag MUST contain either a NAME, an IMPORT, or a QUERYPARAM attribute, but only one of the three',
        origin: 'rfc8216 v13',
    },
    '0x108D': {
        relatesTo: '#EXT-X-DEFINE',
        keyword: 'MUST NOT',
        message: 'An EXT-X-DEFINE tag MUST NOT specify the same Variable Name as any other EXT-X-DEFINE tag in the same Playlist',
        origin: 'rfc8216 v13',
    },

    '0x1100': {
        relatesTo: '#EXT-X-TARGETDURATION',
        keyword: 'REQUIRED',
        message: 'The EXT-X-TARGETDURATION tag is REQUIRED',
        origin: 'rfc8216 v13',
    },
    '0x1101': {
        relatesTo: '#EXT-X-TARGETDURATION',
        keyword: 'MUST NOT',
        message: 'There MUST NOT be more than one Media Playlist tag of each type in any Media Playlist',
        origin: 'rfc8216 v13',
    },

    '0x1120': {
        relatesTo: '#EXT-X-MEDIA-SEQUENCE',
        keyword: 'MUST NOT',
        message: 'There MUST NOT be more than one Media Playlist tag of each type in any Media Playlist',
        origin: 'rfc8216 v13',
    },

    '0x1140': {
        relatesTo: '#EXT-X-DISCONTINUITY-SEQUENCE',
        keyword: 'MUST NOT',
        message: 'There MUST NOT be more than one Media Playlist tag of each type in any Media Playlist',
        origin: 'rfc8216 v13',
    },

    '0x1160': {
        relatesTo: '#EXT-X-ENDLIST',
        keyword: 'MUST NOT',
        message: 'There MUST NOT be more than one Media Playlist tag of each type in any Media Playlist',
        origin: 'rfc8216 v13',
    },
    '0x1161': {
        relatesTo: '#EXT-X-ENDLIST',
        keyword: 'MUST NOT',
        message: 'A Playlist containing an EXT-X-ENDLIST tag MUST NOT contain an EXT-X-PRELOAD-HINT tag',
        origin: 'rfc8216 v13',
    },

    '0x1180': {
        relatesTo: '#EXT-X-PLAYLIST-TYPE',
        keyword: 'MUST NOT',
        message: 'There MUST NOT be more than one Media Playlist tag of each type in any Media Playlist',
        origin: 'rfc8216 v13',
    },
    '0x1181': {
        relatesTo: '#EXT-X-PLAYLIST-TYPE',
        keyword: 'MUST NOT',
        message: 'where type-enum is either EVENT or VOD',
        origin: 'rfc8216 v13',
    },

    '0x1200': {
        relatesTo: '#EXT-X-I-FRAMES-ONLY',
        keyword: 'MUST NOT',
        message: 'There MUST NOT be more than one Media Playlist tag of each type in any Media Playlist',
        origin: 'rfc8216 v13',
    },

    '0x1220': {
        relatesTo: '#EXT-X-PART-INF',
        keyword: 'MUST NOT',
        message: 'There MUST NOT be more than one Media Playlist tag of each type in any Media Playlist',
        origin: 'rfc8216 v13',
    },

    '0x1240': {
        relatesTo: '#EXT-X-SERVER-CONTROL',
        keyword: 'MUST NOT',
        message: 'There MUST NOT be more than one Media Playlist tag of each type in any Media Playlist',
        origin: 'rfc8216 v13',
    },
    '0x1241': {
        relatesTo: '#EXT-X-SERVER-CONTROL, CAN-SKIP-DATERANGES',
        keyword: '',
        message: 'The value is an enumerated-string whose value is YES if the Server can produce Playlist Delta Updates',
        origin: 'rfc8216 v13',
    },
    '0x1242': {
        relatesTo: '#EXT-X-SERVER-CONTROL, CAN-SKIP-DATERANGES',
        keyword: 'REQUIRED',
        message: 'It REQUIRES the presence of the CAN-SKIP-UNTIL attribute',
        origin: 'rfc8216 v13',
    },
    '0x1243': {
        relatesTo: '#EXT-X-SERVER-CONTROL, CAN-BLOCK-RELOAD',
        keyword: '',
        message: 'The value is an enumerated-string whose value is YES if the server supports Blocking Playlist Reload',
        origin: 'rfc8216 v13',
    },
    '0x1260': {
        relatesTo: '#EXTINF',
        keyword: 'REQUIRED',
        message: 'This tag is REQUIRED for each Media Segment',
        origin: 'rfc8216 v13',
    },
    '0x1261': {
        relatesTo: '#EXTINF, #EXT-X-TARGETDURATION',
        keyword: 'MUST',
        message: 'The EXTINF duration of each Media Segment in a Playlist file, ..., MUST be less than or equal to the Target Duration',
        origin: 'rfc8216 v13',
    },
    '0x1280': {
        relatesTo: '#EXT-X-KEY, METHOD',
        keyword: 'REQUIRED',
        message: 'This attribute is REQUIRED',
        origin: 'rfc8216 v13',
    },
    '0x1281': {
        relatesTo: '#EXT-X-KEY, METHOD',
        keyword: '',
        message: 'The methods defined are: NONE, AES-128, and SAMPLE-AES',
        origin: 'rfc8216 v13',
    },
    '0x1282': {
        relatesTo: '#EXT-X-KEY, METHOD',
        keyword: 'MUST NOT',
        message: 'If the encryption method is NONE, other attributes MUST NOT be present',
        origin: 'rfc8216 v13',
    },
    '0x1283': {
        relatesTo: '#EXT-X-KEY, URI',
        keyword: 'REQUIRED',
        message: 'This attribute is REQUIRED unless the METHOD is NONE',
        origin: 'rfc8216 v13',
    },

    /******************************

        Optionals

        (0x5000 - 0x9FFF)

        Keywords:

        - SHOULD / RECOMMENDED
        - SHOULD NOT / NOT RECOMMENDED
        - MAY / OPTIONAL

    ******************************/

    '0x5000': {
        relatesTo: '',
        keyword: '',
        message: '<RESERVED>',
        origin: 'rfc8216 v13',
    },
};
