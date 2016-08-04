"use strict";

var langObj = [{ code: "ab", name: "Abkhaz", nativeName: "аҧсуа", value: "abkhaz", verified: false, level: 0 }, { code: "aa", name: "Afar", nativeName: "Afaraf", value: "afar", verified: false, level: 0 }, { code: "af", name: "Afrikaans", nativeName: "Afrikaans", value: "afrikaans", verified: false, level: 0 }, { code: "ak", name: "Akan", nativeName: "Akan", value: "akan", verified: false, level: 0 }, { code: "sq", name: "Albanian", nativeName: "Shqip", value: "albanian", verified: false, level: 0 }, { code: "am", name: "Amharic", nativeName: "አማርኛ", value: "amharic", verified: false, level: 0 }, { code: "ar", name: "Arabic", nativeName: "العربية", value: "arabic", verified: false, level: 0 }, { code: "an", name: "Aragonese", nativeName: "Aragonés", value: "aragonese", verified: false, level: 0 }, { code: "hy", name: "Armenian", nativeName: "Հայերեն", value: "armenian", verified: false, level: 0 }, { code: "as", name: "Assamese", nativeName: "অসমীয়া", value: "assamese", verified: false, level: 0 }, { code: "av", name: "Avaric", nativeName: "авар мацӀ, магӀарул мацӀ", value: "avaric", verified: false, level: 0 }, { code: "ae", name: "Avestan", nativeName: "avesta", value: "avestan", verified: false, level: 0 }, { code: "ay", name: "Aymara", nativeName: "aymar aru", value: "aymara", verified: false, level: 0 }, { code: "az", name: "Azerbaijani", nativeName: "azərbaycan dili", value: "azerbaijani", verified: false, level: 0 }, { code: "bm", name: "Bambara", nativeName: "bamanankan", value: "bambara", verified: false, level: 0 }, { code: "ba", name: "Bashkir", nativeName: "башҡорт теле", value: "bashkir", verified: false, level: 0 }, { code: "eu", name: "Basque", nativeName: "euskara, euskera", value: "basque", verified: false, level: 0 }, { code: "be", name: "Belarusian", nativeName: "Беларуская", value: "belarusian", verified: false, level: 0 }, { code: "bn", name: "Bengali", nativeName: "বাংলা", value: "bengali", verified: false, level: 0 }, { code: "bh", name: "Bihari", nativeName: "भोजपुरी", value: "bihari", verified: false, level: 0 }, { code: "bi", name: "Bislama", nativeName: "Bislama", value: "bislama", verified: false, level: 0 }, { code: "bs", name: "Bosnian", nativeName: "bosanski jezik", value: "bosnian", verified: false, level: 0 }, { code: "br", name: "Breton", nativeName: "brezhoneg", value: "breton", verified: false, level: 0 }, { code: "bg", name: "Bulgarian", nativeName: "български език", value: "bulgarian", verified: false, level: 0 }, { code: "my", name: "Burmese", nativeName: "ဗမာစာ", value: "burmese", verified: false, level: 0 }, { code: "ca", name: "Catalan; Valencian", nativeName: "Català", value: "catalan", verified: false, level: 0 }, { code: "ch", name: "Chamorro", nativeName: "Chamoru", value: "chamorro", verified: false, level: 0 }, { code: "ce", name: "Chechen", nativeName: "нохчийн мотт", value: "chechen", verified: false, level: 0 }, { code: "ny", name: "Chichewa; Chewa; Nyanja", nativeName: "chiCheŵa, chinyanja", value: "chichewa", verified: false, level: 0 }, { code: "zh", name: "Chinese", nativeName: "中文 (Zhōngwén), 汉语, 漢語", value: "chinese", verified: false, level: 0 }, { code: "cv", name: "Chuvash", nativeName: "чӑваш чӗлхи", value: "chuvash", verified: false, level: 0 }, { code: "kw", name: "Cornish", nativeName: "Kernewek", value: "cornish", verified: false, level: 0 }, { code: "co", name: "Corsican", nativeName: "corsu, lingua corsa", value: "corsican", verified: false, level: 0 }, { code: "cr", name: "Cree", nativeName: "ᓀᐦᐃᔭᐍᐏᐣ", value: "cree", verified: false, level: 0 }, { code: "hr", name: "Croatian", nativeName: "hrvatski", value: "croatian", verified: false, level: 0 }, { code: "cs", name: "Czech", nativeName: "česky, čeština", value: "czech", verified: false, level: 0 }, { code: "da", name: "Danish", nativeName: "dansk", value: "danish", verified: false, level: 0 }, { code: "dv", name: "Divehi; Dhivehi; Maldivian;", nativeName: "ދިވެހި", value: "divehi", verified: false, level: 0 }, { code: "nl", name: "Dutch", nativeName: "Nederlands, Vlaams", value: "dutch", verified: false, level: 0 }, { code: "en", name: "English", nativeName: "English", value: "english", verified: false, level: 0 }, { code: "eo", name: "Esperanto", nativeName: "Esperanto", value: "esperanto", verified: false, level: 0 }, { code: "et", name: "Estonian", nativeName: "eesti, eesti keel", value: "estonian", verified: false, level: 0 }, { code: "ee", name: "Ewe", nativeName: "Eʋegbe", value: "ewe", verified: false, level: 0 }, { code: "fo", name: "Faroese", nativeName: "føroyskt", value: "faroese", verified: false, level: 0 }, { code: "fj", name: "Fijian", nativeName: "vosa Vakaviti", value: "fijian", verified: false, level: 0 }, { code: "fi", name: "Finnish", nativeName: "suomi, suomen kieli", value: "finnish", verified: false, level: 0 }, { code: "fr", name: "French", nativeName: "français, langue française", value: "french", verified: false, level: 0 }, { code: "ff", name: "Fula; Fulah; Pulaar; Pular", nativeName: "Fulfulde, Pulaar, Pular", value: "fula", verified: false, level: 0 }, { code: "gl", name: "Galician", nativeName: "Galego", value: "galician", verified: false, level: 0 }, { code: "ka", name: "Georgian", nativeName: "ქართული", value: "georgian", verified: false, level: 0 }, { code: "de", name: "German", nativeName: "Deutsch", value: "german", verified: false, level: 0 }, { code: "el", name: "Greek, Modern", nativeName: "Ελληνικά", value: "greek", verified: false, level: 0 }, { code: "gn", name: "Guaraní", nativeName: "Avañeẽ", value: "guaraní", verified: false, level: 0 }, { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", value: "gujarati", verified: false, level: 0 }, { code: "ht", name: "Haitian; Haitian Creole", nativeName: "Kreyòl ayisyen", value: "haitian", verified: false, level: 0 }, { code: "ha", name: "Hausa", nativeName: "Hausa, هَوُسَ", value: "hausa", verified: false, level: 0 }, { code: "he", name: "Hebrew (modern)", nativeName: "עברית", value: "hebrew", verified: false, level: 0 }, { code: "hz", name: "Herero", nativeName: "Otjiherero", value: "herero", verified: false, level: 0 }, { code: "hi", name: "Hindi", nativeName: "हिन्दी, हिंदी", value: "hindi", verified: false, level: 0 }, { code: "ho", name: "Hiri Motu", nativeName: "Hiri Motu", value: "hiri", verified: false, level: 0 }, { code: "hu", name: "Hungarian", nativeName: "Magyar", value: "hungarian", verified: false, level: 0 }, { code: "ia", name: "Interlingua", nativeName: "Interlingua", value: "interlingua", verified: false, level: 0 }, { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", value: "indonesian", verified: false, level: 0 }, { code: "ga", name: "Irish", nativeName: "Gaeilge", value: "irish", verified: false, level: 0 }, { code: "ig", name: "Igbo", nativeName: "Asụsụ Igbo", value: "igbo", verified: false, level: 0 }, { code: "ik", name: "Inupiaq", nativeName: "Iñupiaq, Iñupiatun", value: "inupiaq", verified: false, level: 0 }, { code: "io", name: "Ido", nativeName: "Ido", value: "ido", verified: false, level: 0 }, { code: "is", name: "Icelandic", nativeName: "Íslenska", value: "icelandic", verified: false, level: 0 }, { code: "it", name: "Italian", nativeName: "Italiano", value: "italian", verified: false, level: 0 }, { code: "iu", name: "Inuktitut", nativeName: "ᐃᓄᒃᑎᑐᑦ", value: "inuktitut", verified: false, level: 0 }, { code: "ja", name: "Japanese", nativeName: "日本語 (にほんご／にっぽんご)", value: "japanese", verified: false, level: 0 }, { code: "jv", name: "Javanese", nativeName: "basa Jawa", value: "javanese", verified: false, level: 0 }, { code: "kl", name: "Kalaallisut, Greenlandic", nativeName: "kalaallisut", value: "kalaallisut", verified: false, level: 0 }, { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", value: "kannada", verified: false, level: 0 }, { code: "kr", name: "Kanuri", nativeName: "Kanuri", value: "kanuri", verified: false, level: 0 }, { code: "ks", name: "Kashmiri", nativeName: "कश्मीरी, كشميري‎", value: "kashmiri", verified: false, level: 0 }, { code: "kk", name: "Kazakh", nativeName: "Қазақ тілі", value: "kazakh", verified: false, level: 0 }, { code: "km", name: "Khmer", nativeName: "ភាសាខ្មែរ", value: "khmer", verified: false, level: 0 }, { code: "ki", name: "Kikuyu, Gikuyu", nativeName: "Gĩkũyũ", value: "kikuyu", verified: false, level: 0 }, { code: "rw", name: "Kinyarwanda", nativeName: "Ikinyarwanda", value: "kinyarwanda", verified: false, level: 0 }, { code: "ky", name: "Kirghiz, Kyrgyz", nativeName: "кыргыз тили", value: "kirghiz", verified: false, level: 0 }, { code: "kv", name: "Komi", nativeName: "коми кыв", value: "komi", verified: false, level: 0 }, { code: "kg", name: "Kongo", nativeName: "KiKongo", value: "kongo", verified: false, level: 0 }, { code: "ko", name: "Korean", nativeName: "한국어 (韓國語), 조선말 (朝鮮語)", value: "korean", verified: false, level: 0 }, { code: "ku", name: "Kurdish", nativeName: "Kurdî, كوردی‎", value: "kurdish", verified: false, level: 0 }, { code: "kj", name: "Kwanyama, Kuanyama", nativeName: "Kuanyama", value: "kwanyama", verified: false, level: 0 }, { code: "la", name: "Latin", nativeName: "latine, lingua latina", value: "latin", verified: false, level: 0 }, { code: "lb", name: "Luxembourgish, Letzeburgesch", nativeName: "Lëtzebuergesch", value: "luxembourgish", verified: false, level: 0 }, { code: "lg", name: "Luganda", nativeName: "Luganda", value: "luganda", verified: false, level: 0 }, { code: "li", name: "Limburgish, Limburgan, Limburger", nativeName: "Limburgs", value: "limburgish", verified: false, level: 0 }, { code: "ln", name: "Lingala", nativeName: "Lingála", value: "lingala", verified: false, level: 0 }, { code: "lo", name: "Lao", nativeName: "ພາສາລາວ", value: "lao", verified: false, level: 0 }, { code: "lt", name: "Lithuanian", nativeName: "lietuvių kalba", value: "lithuanian", verified: false, level: 0 }, { code: "lu", name: "Luba-Katanga", nativeName: "", value: "luba", verified: false, level: 0 }, { code: "lv", name: "Latvian", nativeName: "latviešu valoda", value: "latvian", verified: false, level: 0 }, { code: "gv", name: "Manx", nativeName: "Gaelg, Gailck", value: "manx", verified: false, level: 0 }, { code: "mk", name: "Macedonian", nativeName: "македонски јазик", value: "macedonian", verified: false, level: 0 }, { code: "mg", name: "Malagasy", nativeName: "Malagasy fiteny", value: "malagasy", verified: false, level: 0 }, { code: "ms", name: "Malay", nativeName: "bahasa Melayu, بهاس ملايو‎", value: "malay", verified: false, level: 0 }, { code: "ml", name: "Malayalam", nativeName: "മലയാളം", value: "malayalam", verified: false, level: 0 }, { code: "mt", name: "Maltese", nativeName: "Malti", value: "maltese", verified: false, level: 0 }, { code: "mi", name: "Māori", nativeName: "te reo Māori", value: "māori", verified: false, level: 0 }, { code: "mr", name: "Marathi (Marāṭhī)", nativeName: "मराठी", value: "marathi", verified: false, level: 0 }, { code: "mh", name: "Marshallese", nativeName: "Kajin M̧ajeļ", value: "marshallese", verified: false, level: 0 }, { code: "mn", name: "Mongolian", nativeName: "монгол", value: "mongolian", verified: false, level: 0 }, { code: "na", name: "Nauru", nativeName: "Ekakairũ Naoero", value: "nauru", verified: false, level: 0 }, { code: "nv", name: "Navajo, Navaho", nativeName: "Diné bizaad, Dinékʼehǰí", value: "navajo", verified: false, level: 0 }, { code: "nb", name: "Norwegian Bokmål", nativeName: "Norsk bokmål", value: "norwegian", verified: false, level: 0 }, { code: "nd", name: "North Ndebele", nativeName: "isiNdebele", value: "north ndebele", verified: false, level: 0 }, { code: "ne", name: "Nepali", nativeName: "नेपाली", value: "nepali", verified: false, level: 0 }, { code: "ng", name: "Ndonga", nativeName: "Owambo", value: "ndonga", verified: false, level: 0 }, { code: "nn", name: "Norwegian Nynorsk", nativeName: "Norsk nynorsk", value: "norwegian nynorsk", verified: false, level: 0 }, { code: "no", name: "Norwegian", nativeName: "Norsk", value: "norwegian", verified: false, level: 0 }, { code: "ii", name: "Nuosu", nativeName: "ꆈꌠ꒿ Nuosuhxop", value: "nuosu", verified: false, level: 0 }, { code: "nr", name: "South Ndebele", nativeName: "isiNdebele", value: "south ndebele", verified: false, level: 0 }, { code: "oc", name: "Occitan", nativeName: "Occitan", value: "occitan", verified: false, level: 0 }, { code: "oj", name: "Ojibwe, Ojibwa", nativeName: "ᐊᓂᔑᓈᐯᒧᐎᓐ", value: "ojibwe", verified: false, level: 0 }, { code: "om", name: "Oromo", nativeName: "Afaan Oromoo", value: "oromo", verified: false, level: 0 }, { code: "or", name: "Oriya", nativeName: "ଓଡ଼ିଆ", value: "oriya", verified: false, level: 0 }, { code: "os", name: "Ossetian, Ossetic", nativeName: "ирон æвзаг", value: "ossetian", verified: false, level: 0 }, { code: "pa", name: "Panjabi, Punjabi", nativeName: "ਪੰਜਾਬੀ, پنجابی‎", value: "panjabi", verified: false, level: 0 }, { code: "pi", name: "Pāli", nativeName: "पाऴि", value: "pāli", verified: false, level: 0 }, { code: "fa", name: "Persian", nativeName: "فارسی", value: "persian", verified: false, level: 0 }, { code: "pl", name: "Polish", nativeName: "polski", value: "polish", verified: false, level: 0 }, { code: "ps", name: "Pashto, Pushto", nativeName: "پښتو", value: "pashto", verified: false, level: 0 }, { code: "pt", name: "Portuguese", nativeName: "Português", value: "portuguese", verified: false, level: 0 }, { code: "qu", name: "Quechua", nativeName: "Runa Simi, Kichwa", value: "quechua", verified: false, level: 0 }, { code: "rm", name: "Romansh", nativeName: "rumantsch grischun", value: "romansh", verified: false, level: 0 }, { code: "rn", name: "Kirundi", nativeName: "kiRundi", value: "kirundi", verified: false, level: 0 }, { code: "ro", name: "Romanian, Moldavian, Moldovan", nativeName: "română", value: "romanian", verified: false, level: 0 }, { code: "ru", name: "Russian", nativeName: "русский язык", value: "russian", verified: false, level: 0 }, { code: "sa", name: "Sanskrit (Saṁskṛta)", nativeName: "संस्कृतम्", value: "sanskrit", verified: false, level: 0 }, { code: "sc", name: "Sardinian", nativeName: "sardu", value: "sardinian", verified: false, level: 0 }, { code: "sd", name: "Sindhi", nativeName: "सिन्धी, سنڌي، سندھی‎", value: "sindhi", verified: false, level: 0 }, { code: "se", name: "Northern Sami", nativeName: "Davvisámegiella", value: "sorthern sami", verified: false, level: 0 }, { code: "sm", name: "Samoan", nativeName: "gagana faa Samoa", value: "samoan", verified: false, level: 0 }, { code: "sg", name: "Sango", nativeName: "yângâ tî sängö", value: "sango", verified: false, level: 0 }, { code: "sr", name: "Serbian", nativeName: "српски језик", value: "serbian", verified: false, level: 0 }, { code: "gd", name: "Scottish Gaelic; Gaelic", nativeName: "Gàidhlig", value: "scottish", verified: false, level: 0 }, { code: "sn", name: "Shona", nativeName: "chiShona", value: "shona", verified: false, level: 0 }, { code: "si", name: "Sinhala, Sinhalese", nativeName: "සිංහල", value: "sinhala", verified: false, level: 0 }, { code: "sk", name: "Slovak", nativeName: "slovenčina", value: "slovak", verified: false, level: 0 }, { code: "sl", name: "Slovene", nativeName: "slovenščina", value: "slovene", verified: false, level: 0 }, { code: "so", name: "Somali", nativeName: "Soomaaliga, af Soomaali", value: "somali", verified: false, level: 0 }, { code: "st", name: "Southern Sotho", nativeName: "Sesotho", value: "southern sotho", verified: false, level: 0 }, { code: "es", name: "Spanish", nativeName: "español", value: "spanish", verified: false, level: 0 }, { code: "su", name: "Sundanese", nativeName: "Basa Sunda", value: "sundanese", verified: false, level: 0 }, { code: "sw", name: "Swahili", nativeName: "Kiswahili", value: "swahili", verified: false, level: 0 }, { code: "ss", name: "Swati", nativeName: "SiSwati", value: "swati", verified: false, level: 0 }, { code: "sv", name: "Swedish", nativeName: "svenska", value: "swedish", verified: false, level: 0 }, { code: "ta", name: "Tamil", nativeName: "தமிழ்", value: "tamil", verified: false, level: 0 }, { code: "te", name: "Telugu", nativeName: "తెలుగు", value: "telugu", verified: false, level: 0 }, { code: "tg", name: "Tajik", nativeName: "тоҷикӣ, toğikī, تاجیکی‎", value: "tajik", verified: false, level: 0 }, { code: "th", name: "Thai", nativeName: "ไทย", value: "thai", verified: false, level: 0 }, { code: "ti", name: "Tigrinya", nativeName: "ትግርኛ", value: "tigrinya", verified: false, level: 0 }, { code: "bo", name: "Tibetan Standard, Tibetan, Central", nativeName: "བོད་ཡིག", value: "tibetan", verified: false, level: 0 }, { code: "tk", name: "Turkmen", nativeName: "Türkmen, Түркмен", value: "turkmen", verified: false, level: 0 }, { code: "tl", name: "Tagalog", nativeName: "Wikang Tagalog", value: "tagalog", verified: false, level: 0 }, { code: "tn", name: "Tswana", nativeName: "Setswana", value: "tswana", verified: false, level: 0 }, { code: "to", name: "Tonga (Tonga Islands)", nativeName: "faka Tonga", value: "tonga", verified: false, level: 0 }, { code: "tr", name: "Turkish", nativeName: "Türkçe", value: "turkish", verified: false, level: 0 }, { code: "ts", name: "Tsonga", nativeName: "Xitsonga", value: "tsonga", verified: false, level: 0 }, { code: "tt", name: "Tatar", nativeName: "татарча, tatarça, تاتارچا‎", value: "tatar", verified: false, level: 0 }, { code: "tw", name: "Twi", nativeName: "Twi", value: "twi", verified: false, level: 0 }, { code: "ty", name: "Tahitian", nativeName: "Reo Tahiti", value: "tahitian", verified: false, level: 0 }, { code: "ug", name: "Uighur, Uyghur", nativeName: "Uyƣurqə, ئۇيغۇرچە‎", value: "uighur", verified: false, level: 0 }, { code: "uk", name: "Ukrainian", nativeName: "українська", value: "ukrainian", verified: false, level: 0 }, { code: "ur", name: "Urdu", nativeName: "اردو", value: "urdu", verified: false, level: 0 }, { code: "uz", name: "Uzbek", nativeName: "zbek, Ўзбек, أۇزبېك‎", value: "uzbek", verified: false, level: 0 }, { code: "ve", name: "Venda", nativeName: "Tshivenḓa", value: "venda", verified: false, level: 0 }, { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", value: "vietnamese", verified: false, level: 0 }, { code: "vo", name: "Volapük", nativeName: "Volapük", value: "volapük", verified: false, level: 0 }, { code: "wa", name: "Walloon", nativeName: "Walon", value: "walloon", verified: false, level: 0 }, { code: "cy", name: "Welsh", nativeName: "Cymraeg", value: "welsh", verified: false, level: 0 }, { code: "wo", name: "Wolof", nativeName: "Wollof", value: "wolof", verified: false, level: 0 }, { code: "fy", name: "Western Frisian", nativeName: "Frysk", value: "western", verified: false, level: 0 }, { code: "xh", name: "Xhosa", nativeName: "isiXhosa", value: "xhosa", verified: false, level: 0 }, { code: "yi", name: "Yiddish", nativeName: "ייִדיש", value: "yiddish", verified: false, level: 0 }, { code: "yo", name: "Yoruba", nativeName: "Yorùbá", value: "yoruba", verified: false, level: 0 }, { code: "za", name: "Zhuang, Chuang", nativeName: "Saɯ cueŋƅ, Saw cuengh", value: "zhuang", verified: false, level: 0 }];
'use strict';

$(document).ready(function () {
  $('.modal-trigger').leanModal();
});

var _isNotMobile = function () {
  var check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return !check;
}();

var app = angular.module('myApp', ['ui.router', 'satellizer', 'ngMaterial', 'ngMap']);

app.config(function ($stateProvider, $urlRouterProvider, $authProvider) {

  $stateProvider.state('login', {
    url: '/login',
    templateUrl: '/html/login.html',
    controller: 'loginCtrl'
  }).state('registerNav', {
    url: '/register',
    templateUrl: '/html/register/registerNav.html'
  }).state('registerNav.registerLang', {
    url: '/languages',
    templateUrl: '/html/register/registerLang.html',
    controller: 'registerCtrl'
  }).state('registerNav.registerInterests', {
    url: '/interests',
    templateUrl: '/html/register/registerInterests.html',
    controller: 'registerCtrl'
  }).state('registerNav.registerLocation', {
    url: '/location',
    templateUrl: '/html/register/registerLocation.html',
    controller: 'registerCtrl'
  }).state('registerNav.confirm', {
    url: '/confirm',
    templateUrl: '/html/register/regConfirm.html',
    controller: 'registerCtrl'
  }).state('home', {
    url: '/',
    templateUrl: '/html/landing/home.html',
    controller: 'homeCtrl'
  }).state('dashboard', {
    url: '/dash',
    templateUrl: '/html/dash/dash.html',
    controller: 'dashCtrl',
    resolve: {
      user: function user(User) {
        return User.getUser();
      }
    }
  }).state('dashboard.profile', {
    url: '/profile',
    templateUrl: '/html/dash/profile.html',
    controller: 'dashCtrl'
  }).state('dashboard.guideIntro', {
    url: '/guide/intro',
    templateUrl: '/html/dash/guideIntro.html',
    controller: 'dashCtrl'
  }).state('dashboard.guide', {
    url: '/guide',
    templateUrl: '/html/dash/guide.html',
    controller: 'dashCtrl'
  }).state('dashboard.places', {
    url: '/places',
    templateUrl: '/html/dash/places.html',
    controller: 'dashCtrl'
  }).state('connect', {
    url: '/connect',
    templateUrl: '/html/connect/connect.html',
    controller: 'connectCtrl',
    resolve: {
      mobile: function mobile() {
        return _isNotMobile;
      },
      users: function users(User) {
        return User.getAll({ query: {}, page: 0 });
      }
    }
  }).state('profileView', {
    url: '/profile/:id',
    templateUrl: '/html/profile/profile.html',
    controller: 'profileCtrl',
    resolve: {
      profile: function profile(User, $stateParams) {
        return User.getOne($stateParams.id).then(function (res) {
          return res.data;
        });
      }
    }
  });

  $urlRouterProvider.otherwise('/');

  $authProvider.google({
    clientId: '50096600078-riejkgcrs9iqkhbdmbfg07neh3ksodvg.apps.googleusercontent.com'
  });
  $authProvider.facebook({
    clientId: '1255637804476855',
    responseType: 'token'
  });
});
'use strict';

// var app = angular.module('myApp');

app.controller('mainCtrl', function ($scope, $state, $mdDialog, $auth, User) {

  $scope.openDialog = function ($event) {
    $mdDialog.show({
      targetEvent: $event,
      templateUrl: '../html/landing/login.html',
      controller: 'mainCtrl'
    });
  };

  $scope.isAuthenticated = function () {
    return $auth.isAuthenticated();
  };

  $scope.authenticate = function (provider) {
    $auth.authenticate(provider).then(function (res) {
      User.storeUser(res.data.user);
      $mdDialog.hide();
      if (!res.data.user.registered) {
        $state.go('registerNav.registerLang');
      } else {
        $state.go('dashboard');
      }
    }).catch(function (err) {
      console.log('err', err);
    });
  };

  $scope.loginUser = function () {
    $auth.login($scope.login).then(function (res) {
      User.storeUser(res.data.user);
      $mdDialog.hide();
      if (!res.data.user.registered) {
        $state.go('registerNav.registerLang');
      } else {
        $state.go('dashboard');
      }
    });
  };

  $scope.logout = function () {
    $auth.logout();
    $state.go('home');
  };
});

app.controller('loginCtrl', function ($scope, User, $state) {
  console.log('yo');
});

app.controller('homeCtrl', function ($scope) {
  $scope.imgLoaded = false;
});
'use strict';

app.service('User', function ($http, $state) {
  var _this = this;

  this.currentUser = {};

  this.getAll = function (selectObj) {
    return $http.put('api/users', selectObj).then(function (res) {
      return res.data;
    });
  };

  this.getOne = function (id) {
    return $http.get('api/users/one/' + id);
  };

  this.storeUser = function (user) {
    _this.currentUser = user;
  };

  this.login = function (user) {
    return $http.post('api/users/authenticate', user);
  };

  this.register = function (user) {
    return $http.post('api/users/register', user);
  };

  this.logout = function () {
    return $http.post('api/users/logout');
  };

  this.isLoggedIn = function () {
    return $http.get('/api/users/check').then(function (res) {
      _this.currentUser = res.data;
      return _this.currentUser;
    }).catch(function (err) {
      console.log('err', err);
    });
  };

  this.getUser = function () {
    if (!Object.keys(_this.currentUser).length) {
      return _this.isLoggedIn();
    }
    return _this.currentUser;
  };

  this.saveLangs = function (langs) {
    _this.currentUser.languages = langs;
  };

  this.saveInterests = function (interests) {
    _this.currentUser.interests = interests;
  };

  this.saveLocation = function (location, verified) {
    _this.currentUser.location = {
      location: location,
      verified: verified
    };
  };

  this.confirm = function (name) {
    var updateObj = {
      languages: _this.currentUser.languages,
      interests: _this.currentUser.interests,
      location: _this.currentUser.location
    };

    if (name) updateObj.name = name;

    $http.put('/api/users/register', updateObj).then(function (user) {
      _this.currentUser = user.data;
      $state.go('dashboard');
    }).catch(function (err) {
      return console.log('err', err);
    });
  };

  this.savePlace = function (place) {
    return $http.put('/api/users/place', place).then(function (user) {
      _this.currentUser = user.data;
    }).catch(function (err) {
      return console.log('err', err);
    });
  };

  this.becomeGuide = function () {
    return $http.put('/api/users/guide');
  };

  this.saveGuide = function (trip) {
    return $http.put('/api/users/update', trip).then(function (res) {
      return res.data;
    }).catch(function (err) {
      console.log('err', err);
    });
  };
});

app.service('Location', function ($http) {
  this.getCity = function (location) {
    return $http.post('/api/location/city', location).then(function (res) {
      return res.data;
    }).catch(function (err) {
      return console.log('err', err);
    });
  };
});

app.service('DuoLingo', function ($http) {
  this.verifyLanguages = function (languages, user) {
    return $http.post('/api/users/validate/languages', user).then(function (res) {
      if (typeof res.data === 'string') {
        return res.data;
      }
      var verifiedLangs = res.data;
      languages.forEach(function (lang) {
        if (verifiedLangs[lang.name]) {
          lang.verified = true;
          lang.level = verifiedLangs[lang.name];
        }
      });
      return languages;
    }).catch(function (err) {
      return console.log('err', err);
    });
  };
});

app.service('AirBnB', function ($http) {
  var _this2 = this;

  this.query = {};

  this.saveLocation = function (location) {
    _this2.query.location = location;
  };

  this.getResults = function (name) {
    if (_this2.name) {
      _this2.query.name = name;
    }

    return $http.put('/api/airbnb/search', _this2.query).then(function (res) {
      return res.data;
    }).catch(function (err) {
      return console.log('err', err);
    });
  };
});
'use strict';

app.controller('connectCtrl', connectCtrl);

function connectCtrl($scope, User, mobile, users) {
  $scope.mobile = mobile;
  $scope.users = users;

  console.log($scope.users);

  function userCounts() {
    var counts = {
      topic: {}
    };
    $scope.users.forEach(function (user) {
      if (user.type === 'Guide') {
        counts.guide ? counts.guide++ : counts.guide = 1;
      } else {
        counts.user ? counts.user++ : counts.user = 1;
      }
      if (user.trip.length) {
        user.interests.forEach(function (topic) {
          counts.topic[topic] ? counts.topic[topic]++ : counts.topic[topic] = 1;
        });
      }
    });
    $scope.counts = counts;
    $scope.topics = Object.keys(counts.topic);
  }

  userCounts();
}
'use strict';

app.controller('BnBController', BnBController);

function BnBController($scope, $mdDialog, AirBnB) {
  var _this = this;

  $scope.selectedListing = {};
  this.index = 0;

  AirBnB.getResults().then(function (results) {
    $scope.results = results;
  });

  $scope.newSelected = function (index) {
    $scope.results[_this.index].selected = false;
    $scope.results[index].selected = true;
    $scope.selectedListing = $scope.results[index];
    _this.index = index;
  };

  $scope.saveDialog = function (listing) {
    $mdDialog.hide(listing);
  };

  $scope.closeDialog = function () {
    $mdDialog.cancel();
  };
}
'use strict';

app.controller('dashCtrl', dashCtrl);

function dashCtrl($state, $scope, user, $location, User, Location, AirBnB, $mdDialog, $mdMedia) {
  console.log(user);
  if (!user) {
    $state.go('home');
  }
  if (!user.registered) {
    $state.go('registerNav.registerLang');
  }
  if (user.trip[0]) {
    $scope.expertise = user.trip[0].expertise;
  } else {
    $scope.expertise = [];
  }

  var self = this;

  $scope.user = user;
  $scope.loading = false;
  $scope.pending = false;
  $scope.city = 'Click on the map to add new places';
  $scope.$watch('selectedTab', function (current, old) {
    switch (current) {
      case 0:
        $location.url("/dash/profile");
        break;
      case 1:
        if (user.type === 'Guide') {
          $location.url("/dash/guide");
        } else {
          $location.url("/dash/guide/intro");
        }
        break;
      case 2:
        $location.url("/dash/places");
        break;
    }
  });

  $scope.getLocation = function (event) {
    if (!$scope.pending) {
      $scope.loading = true;
      self.location = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
      $scope.user.places.push(self.location);
      Location.getCity(self.location).then(function (res) {
        $scope.city = res;
        if (res !== 'Cant find a city there...') {
          $scope.pending = true;
          $scope.loading = false;
          self.location.name = res;
        } else {
          $scope.user.places.pop();
        }
      });
    }
  };

  $scope.savePlace = function () {
    $scope.city = 'Click on the map to add new places';
    $scope.pending = false;
    User.savePlace(self.location);
  };

  $scope.cancelPlace = function () {
    $scope.user.places.pop();
    $scope.pending = false;
    $scope.city = 'Click on the map to add new places';
  };

  $scope.newGuide = function () {
    User.becomeGuide().then(function () {
      $scope.user.type = "Guide";
      $location.url("/dash/guide");
    });
  };

  $scope.showAdvanced = function (ev) {
    if (!$scope.user.trip[0]) return $scope.err = 'Enter a location above!';
    $scope.err = null;
    var useFullScreen = $mdMedia('sm') || $mdMedia('xs');
    AirBnB.saveLocation($scope.user.trip[0].location);
    $mdDialog.show({
      controller: BnBController,
      templateUrl: '../html/dash/airbnbResults.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    }).then(function (listing) {
      $scope.user.trip[0].airBnB = listing;
    }, function () {
      console.log('Cancelled');
    });
  };

  $scope.saveGuide = function () {
    $scope.user.trip[0].expertise = $scope.expertise;
    User.saveGuide($scope.user.trip[0]).then(function (newUser) {
      console.log(newUser);
      $scope.user = newUser;
    });
  };
}
'use strict';

app.directive('loadingImage', function () {
  return function (scope, element, a, con) {
    element.bind('load', function () {
      scope.imgLoaded = true;
      scope.$apply();
    });
  };
});
'use strict';

app.directive('navState', function ($window, $state, $rootScope) {
  return function (scope, element) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      navState($window, toState.name, element);
    });
    angular.element($window).bind("scroll", function () {
      var navSize = element[0].clientHeight;
      var imageSize = 0;

      if ($('.landingImage').length) {
        imageSize = $('.landingImage')[0].clientHeight;
      }

      var scrollLength = imageSize - navSize;
      if ($window.pageYOffset <= scrollLength) {
        element[0].style.backgroundColor = 'rgba(85,150,126, 0.05)';
      } else if ($window.pageYOffset > scrollLength || !$state.current.name) {
        element[0].style.backgroundColor = '#55967e';
      }
    });
  };
});

function navState($window, state, element) {
  var navSize = element[0].clientHeight;
  var imageSize = 0;

  if ($('.landingImage').length) {
    imageSize = $('.landingImage')[0].clientHeight;
  }

  var scrollLength = imageSize - navSize;
  if (state === '' || state === 'home') {
    element[0].style.backgroundColor = 'rgba(85,150,126, 0.05)';
  } else {
    element[0].style.backgroundColor = '#55967e';
  }
};
'use strict';

app.controller('profileCtrl', profileCtrl);

function profileCtrl(profile, $scope) {
  var self = this;

  $scope.profile = profile;
}
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

app.controller('registerCtrl', registerCtrl);

function registerCtrl($timeout, $q, $log, $scope, $state, $auth, User, DuoLingo, Location, NgMap, $rootScope) {
  if (!$auth.isAuthenticated()) {
    $state.go('home');
  }

  var self = this;

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    self.breadCrumb = toState.url;
  });

  self.breadCrumb = '/languages';
  self.simulateQuery = true;
  self.languages = langObj;
  self.querySearch = querySearch;
  self.selectedItemChange = selectedItemChange;
  self.removeLang = removeLang;
  self.nextClicked = nextClicked;
  self.addCustom = addCustom;
  self.mapCallback = mapCallback;
  self.replaceMarker = replaceMarker;
  self.verifyDuoUser = verifyDuoUser;
  self.confirmUser = confirmUser;
  self.interests = ['Food', 'Nature', 'Attractions', 'City', 'Home Life', 'Party Life'];
  self.user = User.getUser();
  self.waiting = true;
  self.checking = false;
  self.done = false;
  self.selectedLangs = [];
  self.selectedInterests = [];
  self.city = '';
  self.customCity = '';
  self.lng = 0;
  self.lat = 0;
  self.searchTerm;
  self.customInterest = '';

  console.log(self.user);

  function nextClicked(bool) {
    if (self.selectedLangs.length) {
      User.saveLangs(self.selectedLangs);
    }
    if (self.selectedInterests.length) {
      User.saveInterests(self.selectedInterests);
    }
    if (self.city && bool) {
      User.saveLocation(self.city, bool);
    } else if (self.customCity) {
      User.saveLocation(self.customCity, false);
    }
  }

  function querySearch(query) {
    var results = query ? self.languages.filter(createFilterFor(query)) : self.languages,
        deferred = void 0;
    if (self.simulateQuery) {
      deferred = $q.defer();
      $timeout(function () {
        deferred.resolve(results);
      }, Math.random() * 1000, false);
      return deferred.promise;
    } else {
      return results;
    }
  }

  function createFilterFor(query) {
    return function filterFn(language) {
      return language.value.indexOf(query) === 0;
    };
  }

  function selectedItemChange(lang) {
    if (lang) {
      self.selectedLangs.push(angular.copy(lang));
    }
  }

  function removeLang(language) {
    var index = void 0;
    self.selectedLangs.some(function (lang, idx) {
      if (lang.name === language) {
        index = idx;
        return true;
      }
    });
    self.selectedLangs.splice(index, 1);
  }

  function verifyDuoUser() {
    self.duoErr = null;
    self.waiting = false;
    self.checking = true;
    DuoLingo.verifyLanguages(self.selectedLangs, self.duoUser).then(function (verified) {
      self.checking = false;
      if ((typeof verified === 'undefined' ? 'undefined' : _typeof(verified)) === 'object') {
        self.done = true;
        self.selectedLangs = verified;
      } else {
        self.waiting = true;
        self.duoErr = verified;
        console.log(self.duoErr);
      }
    });
  }

  function addCustom() {
    self.selectedInterests.push(angular.copy(self.customInterest));
    self.customInterest = '';
  }

  NgMap.getMap().then(function (map) {
    map.addListener('tilesloaded', mapCallback);
    self.map = map;
  });

  function mapCallback() {
    var location = self.map.getCenter();
    self.lat = location.lat();
    self.lng = location.lng();
    Location.getCity({ lat: self.lat, lng: self.lng }).then(function (res) {
      self.city = res;
    });
  }

  function replaceMarker(event) {
    self.lat = event.latLng.lat();
    self.lng = event.latLng.lng();
    Location.getCity({ lat: self.lat, lng: self.lng }).then(function (res) {
      self.city = res;
    });
  }

  function confirmUser() {
    User.confirm(self.regName);
  }
};