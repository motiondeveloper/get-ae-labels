// Solution comes from Justin Taylor
// https://community.adobe.com/t5/after-effects-discussions/reading-the-label-colors-from-preferences-file/m-p/12135463

/**
 *
 * @returns An array of the current labels, each label is an object containing the labels name and color value. `{ name: string, value: string }`
 * Note the color value doesn't include the "#"
 */
function getLabels() {
  // Encoding must be default
  $.appEncoding = "CP1252";

  /**
    The color strings are in CP1252 or Windows-1252 encoding.

    For example the character "ž" in ASCII is 382, which is out of range for 0-255, while the Windows-1252 value is 158, the correct value.

    So we use this object to map the out of range ASCI values to the correct Windows-1252 values
   */
  var windows1252Map = {
    161: 161,
    162: 162,
    163: 163,
    164: 164,
    165: 165,
    166: 166,
    167: 167,
    168: 168,
    169: 169,
    170: 170,
    171: 171,
    172: 172,
    174: 174,
    175: 175,
    176: 176,
    177: 177,
    178: 178,
    179: 179,
    180: 180,
    181: 181,
    182: 182,
    183: 183,
    184: 184,
    185: 185,
    186: 186,
    187: 187,
    188: 188,
    189: 189,
    190: 190,
    191: 191,
    192: 192,
    193: 193,
    194: 194,
    195: 195,
    196: 196,
    197: 197,
    198: 198,
    199: 199,
    200: 200,
    201: 201,
    202: 202,
    203: 203,
    204: 204,
    205: 205,
    206: 206,
    207: 207,
    208: 208,
    209: 209,
    210: 210,
    211: 211,
    212: 212,
    213: 213,
    214: 214,
    215: 215,
    216: 216,
    217: 217,
    218: 218,
    219: 219,
    220: 220,
    221: 221,
    222: 222,
    223: 223,
    224: 224,
    225: 225,
    226: 226,
    227: 227,
    228: 228,
    229: 229,
    230: 230,
    231: 231,
    232: 232,
    233: 233,
    234: 234,
    235: 235,
    236: 236,
    237: 237,
    238: 238,
    239: 239,
    240: 240,
    241: 241,
    242: 242,
    243: 243,
    244: 244,
    245: 245,
    246: 246,
    247: 247,
    248: 248,
    249: 249,
    250: 250,
    251: 251,
    252: 252,
    253: 253,
    254: 254,
    255: 255,
    338: 140,
    339: 156,
    352: 138,
    353: 154,
    376: 159,
    381: 142,
    382: 158,
    402: 131,
    710: 136,
    732: 152,
    8211: 150,
    8212: 151,
    8216: 145,
    8217: 146,
    8218: 130,
    8220: 147,
    8221: 148,
    8222: 132,
    8224: 134,
    8225: 135,
    8226: 149,
    8230: 133,
    8240: 137,
    8249: 139,
    8250: 155,
    8364: 128,
    8482: 153,
    65533173: 173,
  };

  var colorValueSectionName = "Label Preference Color Section 5";
  var colorNameSectionName = "Label Preference Text Section 7";
  var prefFile = PREFType.PREF_Type_MACHINE_INDEPENDENT;

  var resArray = [];

  for (var i = 1; i <= 16; i++) {
    var colorValueKeyName = "Label Color ID 2 # " + i.toString();
    var colorValuePref = app.preferences.getPrefAsString(
      colorValueSectionName,
      colorValueKeyName,
      prefFile
    );

    var colorNameKeyName = "Label Text ID 2 # " + i.toString();
    var colorName = app.preferences.getPrefAsString(
      colorNameSectionName,
      colorNameKeyName,
      prefFile
    );

    var colorValue = "";
    for (var j = 1; j < colorValuePref.length; j++) {
      var charCode = colorValuePref.charCodeAt(j);
      if (charCode > 254) {
        charCode = windows1252Map[charCode];
      }

      var newCode = charCode.toString(16).toUpperCase();
      if (newCode.toString().length === 1) {
        newCode = "0" + newCode;
      }

      colorValue += newCode;
    }
    resArray.push({ value: colorValue, name: colorName });
  }

  return resArray;
}
