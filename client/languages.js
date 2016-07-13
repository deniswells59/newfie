const langObj = [
  {code:"ab",name:"Abkhaz",nativeName:"аҧсуа", value: "abkhaz", verified: false, level: 0},
  {code:"aa",name:"Afar",nativeName:"Afaraf", value: "afar", verified: false, level: 0},
  {code:"af",name:"Afrikaans",nativeName:"Afrikaans", value: "afrikaans", verified: false, level: 0},
  {code:"ak",name:"Akan",nativeName:"Akan", value: "akan", verified: false, level: 0},
  {code:"sq",name:"Albanian",nativeName:"Shqip", value: "albanian", verified: false, level: 0},
  {code:"am",name:"Amharic",nativeName:"አማርኛ", value: "amharic", verified: false, level: 0},
  {code:"ar",name:"Arabic",nativeName:"العربية", value: "arabic", verified: false, level: 0},
  {code:"an",name:"Aragonese",nativeName:"Aragonés", value: "aragonese", verified: false, level: 0},
  {code:"hy",name:"Armenian",nativeName:"Հայերեն", value: "armenian", verified: false, level: 0},
  {code:"as",name:"Assamese",nativeName:"অসমীয়া", value: "assamese", verified: false, level: 0},
  {code:"av",name:"Avaric",nativeName:"авар мацӀ, магӀарул мацӀ", value: "avaric", verified: false, level: 0},
  {code:"ae",name:"Avestan",nativeName:"avesta", value: "avestan", verified: false, level: 0},
  {code:"ay",name:"Aymara",nativeName:"aymar aru", value: "aymara", verified: false, level: 0},
  {code:"az",name:"Azerbaijani",nativeName:"azərbaycan dili", value: "azerbaijani", verified: false, level: 0},
  {code:"bm",name:"Bambara",nativeName:"bamanankan", value: "bambara", verified: false, level: 0},
  {code:"ba",name:"Bashkir",nativeName:"башҡорт теле", value: "bashkir", verified: false, level: 0},
  {code:"eu",name:"Basque",nativeName:"euskara, euskera", value: "basque", verified: false, level: 0},
  {code:"be",name:"Belarusian",nativeName:"Беларуская", value: "belarusian", verified: false, level: 0},
  {code:"bn",name:"Bengali",nativeName:"বাংলা", value: "bengali", verified: false, level: 0},
  {code:"bh",name:"Bihari",nativeName:"भोजपुरी", value: "bihari", verified: false, level: 0},
  {code:"bi",name:"Bislama",nativeName:"Bislama", value: "bislama", verified: false, level: 0},
  {code:"bs",name:"Bosnian",nativeName:"bosanski jezik", value: "bosnian", verified: false, level: 0},
  {code:"br",name:"Breton",nativeName:"brezhoneg", value: "breton", verified: false, level: 0},
  {code:"bg",name:"Bulgarian",nativeName:"български език", value: "bulgarian", verified: false, level: 0},
  {code:"my",name:"Burmese",nativeName:"ဗမာစာ", value: "burmese", verified: false, level: 0},
  {code:"ca",name:"Catalan; Valencian",nativeName:"Català", value: "catalan", verified: false, level: 0},
  {code:"ch",name:"Chamorro",nativeName:"Chamoru", value: "chamorro", verified: false, level: 0},
  {code:"ce",name:"Chechen",nativeName:"нохчийн мотт", value: "chechen", verified: false, level: 0},
  {code:"ny",name:"Chichewa; Chewa; Nyanja",nativeName:"chiCheŵa, chinyanja", value: "chichewa", verified: false, level: 0},
  {code:"zh",name:"Chinese",nativeName:"中文 (Zhōngwén), 汉语, 漢語", value: "chinese", verified: false, level: 0},
  {code:"cv",name:"Chuvash",nativeName:"чӑваш чӗлхи", value: "chuvash", verified: false, level: 0},
  {code:"kw",name:"Cornish",nativeName:"Kernewek", value: "cornish", verified: false, level: 0},
  {code:"co",name:"Corsican",nativeName:"corsu, lingua corsa", value: "corsican", verified: false, level: 0},
  {code:"cr",name:"Cree",nativeName:"ᓀᐦᐃᔭᐍᐏᐣ", value: "cree", verified: false, level: 0},
  {code:"hr",name:"Croatian",nativeName:"hrvatski", value: "croatian", verified: false, level: 0},
  {code:"cs",name:"Czech",nativeName:"česky, čeština", value: "czech", verified: false, level: 0},
  {code:"da",name:"Danish",nativeName:"dansk", value: "danish", verified: false, level: 0},
  {code:"dv",name:"Divehi; Dhivehi; Maldivian;",nativeName:"ދިވެހި", value: "divehi", verified: false, level: 0},
  {code:"nl",name:"Dutch",nativeName:"Nederlands, Vlaams", value: "dutch", verified: false, level: 0},
  {code:"en",name:"English",nativeName:"English", value: "english", verified: false, level: 0},
  {code:"eo",name:"Esperanto",nativeName:"Esperanto", value: "esperanto", verified: false, level: 0},
  {code:"et",name:"Estonian",nativeName:"eesti, eesti keel", value: "estonian", verified: false, level: 0},
  {code:"ee",name:"Ewe",nativeName:"Eʋegbe", value: "ewe", verified: false, level: 0},
  {code:"fo",name:"Faroese",nativeName:"føroyskt", value: "faroese", verified: false, level: 0},
  {code:"fj",name:"Fijian",nativeName:"vosa Vakaviti", value: "fijian", verified: false, level: 0},
  {code:"fi",name:"Finnish",nativeName:"suomi, suomen kieli", value: "finnish", verified: false, level: 0},
  {code:"fr",name:"French",nativeName:"français, langue française", value: "french", verified: false, level: 0},
  {code:"ff",name:"Fula; Fulah; Pulaar; Pular",nativeName:"Fulfulde, Pulaar, Pular", value: "fula", verified: false, level: 0},
  {code:"gl",name:"Galician",nativeName:"Galego", value: "galician", verified: false, level: 0},
  {code:"ka",name:"Georgian",nativeName:"ქართული", value: "georgian", verified: false, level: 0},
  {code:"de",name:"German",nativeName:"Deutsch", value: "german", verified: false, level: 0},
  {code:"el",name:"Greek, Modern",nativeName:"Ελληνικά", value: "greek", verified: false, level: 0},
  {code:"gn",name:"Guaraní",nativeName:"Avañeẽ", value: "guaraní", verified: false, level: 0},
  {code:"gu",name:"Gujarati",nativeName:"ગુજરાતી", value: "gujarati", verified: false, level: 0},
  {code:"ht",name:"Haitian; Haitian Creole",nativeName:"Kreyòl ayisyen", value: "haitian", verified: false, level: 0},
  {code:"ha",name:"Hausa",nativeName:"Hausa, هَوُسَ", value: "hausa", verified: false, level: 0},
  {code:"he",name:"Hebrew (modern)",nativeName:"עברית", value: "hebrew", verified: false, level: 0},
  {code:"hz",name:"Herero",nativeName:"Otjiherero", value: "herero", verified: false, level: 0},
  {code:"hi",name:"Hindi",nativeName:"हिन्दी, हिंदी", value: "hindi", verified: false, level: 0},
  {code:"ho",name:"Hiri Motu",nativeName:"Hiri Motu", value: "hiri", verified: false, level: 0},
  {code:"hu",name:"Hungarian",nativeName:"Magyar", value: "hungarian", verified: false, level: 0},
  {code:"ia",name:"Interlingua",nativeName:"Interlingua", value: "interlingua", verified: false, level: 0},
  {code:"id",name:"Indonesian",nativeName:"Bahasa Indonesia", value: "indonesian", verified: false, level: 0},
  {code:"ga",name:"Irish",nativeName:"Gaeilge", value: "irish", verified: false, level: 0},
  {code:"ig",name:"Igbo",nativeName:"Asụsụ Igbo", value: "igbo", verified: false, level: 0},
  {code:"ik",name:"Inupiaq",nativeName:"Iñupiaq, Iñupiatun", value: "inupiaq", verified: false, level: 0},
  {code:"io",name:"Ido",nativeName:"Ido", value: "ido", verified: false, level: 0},
  {code:"is",name:"Icelandic",nativeName:"Íslenska", value: "icelandic", verified: false, level: 0},
  {code:"it",name:"Italian",nativeName:"Italiano", value: "italian", verified: false, level: 0},
  {code:"iu",name:"Inuktitut",nativeName:"ᐃᓄᒃᑎᑐᑦ", value: "inuktitut", verified: false, level: 0},
  {code:"ja",name:"Japanese",nativeName:"日本語 (にほんご／にっぽんご)", value: "japanese", verified: false, level: 0},
  {code:"jv",name:"Javanese",nativeName:"basa Jawa", value: "javanese", verified: false, level: 0},
  {code:"kl",name:"Kalaallisut, Greenlandic",nativeName:"kalaallisut", value: "kalaallisut", verified: false, level: 0},
  {code:"kn",name:"Kannada",nativeName:"ಕನ್ನಡ", value: "kannada", verified: false, level: 0},
  {code:"kr",name:"Kanuri",nativeName:"Kanuri", value: "kanuri", verified: false, level: 0},
  {code:"ks",name:"Kashmiri",nativeName:"कश्मीरी, كشميري‎", value: "kashmiri", verified: false, level: 0},
  {code:"kk",name:"Kazakh",nativeName:"Қазақ тілі", value: "kazakh", verified: false, level: 0},
  {code:"km",name:"Khmer",nativeName:"ភាសាខ្មែរ", value: "khmer", verified: false, level: 0},
  {code:"ki",name:"Kikuyu, Gikuyu",nativeName:"Gĩkũyũ", value: "kikuyu", verified: false, level: 0},
  {code:"rw",name:"Kinyarwanda",nativeName:"Ikinyarwanda", value: "kinyarwanda", verified: false, level: 0},
  {code:"ky",name:"Kirghiz, Kyrgyz",nativeName:"кыргыз тили", value: "kirghiz", verified: false, level: 0},
  {code:"kv",name:"Komi",nativeName:"коми кыв", value: "komi", verified: false, level: 0},
  {code:"kg",name:"Kongo",nativeName:"KiKongo", value: "kongo", verified: false, level: 0},
  {code:"ko",name:"Korean",nativeName:"한국어 (韓國語), 조선말 (朝鮮語)", value: "korean", verified: false, level: 0},
  {code:"ku",name:"Kurdish",nativeName:"Kurdî, كوردی‎", value: "kurdish", verified: false, level: 0},
  {code:"kj",name:"Kwanyama, Kuanyama",nativeName:"Kuanyama", value: "kwanyama", verified: false, level: 0},
  {code:"la",name:"Latin",nativeName:"latine, lingua latina", value: "latin", verified: false, level: 0},
  {code:"lb",name:"Luxembourgish, Letzeburgesch",nativeName:"Lëtzebuergesch", value: "luxembourgish", verified: false, level: 0},
  {code:"lg",name:"Luganda",nativeName:"Luganda", value: "luganda", verified: false, level: 0},
  {code:"li",name:"Limburgish, Limburgan, Limburger",nativeName:"Limburgs", value: "limburgish", verified: false, level: 0},
  {code:"ln",name:"Lingala",nativeName:"Lingála", value: "lingala", verified: false, level: 0},
  {code:"lo",name:"Lao",nativeName:"ພາສາລາວ", value: "lao", verified: false, level: 0},
  {code:"lt",name:"Lithuanian",nativeName:"lietuvių kalba", value: "lithuanian", verified: false, level: 0},
  {code:"lu",name:"Luba-Katanga",nativeName:"", value: "luba", verified: false, level: 0},
  {code:"lv",name:"Latvian",nativeName:"latviešu valoda", value: "latvian", verified: false, level: 0},
  {code:"gv",name:"Manx",nativeName:"Gaelg, Gailck", value: "manx", verified: false, level: 0},
  {code:"mk",name:"Macedonian",nativeName:"македонски јазик", value: "macedonian", verified: false, level: 0},
  {code:"mg",name:"Malagasy",nativeName:"Malagasy fiteny", value: "malagasy", verified: false, level: 0},
  {code:"ms",name:"Malay",nativeName:"bahasa Melayu, بهاس ملايو‎", value: "malay", verified: false, level: 0},
  {code:"ml",name:"Malayalam",nativeName:"മലയാളം", value: "malayalam", verified: false, level: 0},
  {code:"mt",name:"Maltese",nativeName:"Malti", value: "maltese", verified: false, level: 0},
  {code:"mi",name:"Māori",nativeName:"te reo Māori", value: "māori", verified: false, level: 0},
  {code:"mr",name:"Marathi (Marāṭhī)",nativeName:"मराठी", value: "marathi", verified: false, level: 0},
  {code:"mh",name:"Marshallese",nativeName:"Kajin M̧ajeļ", value: "marshallese", verified: false, level: 0},
  {code:"mn",name:"Mongolian",nativeName:"монгол", value: "mongolian", verified: false, level: 0},
  {code:"na",name:"Nauru",nativeName:"Ekakairũ Naoero", value: "nauru", verified: false, level: 0},
  {code:"nv",name:"Navajo, Navaho",nativeName:"Diné bizaad, Dinékʼehǰí", value: "navajo", verified: false, level: 0},
  {code:"nb",name:"Norwegian Bokmål",nativeName:"Norsk bokmål", value: "norwegian", verified: false, level: 0},
  {code:"nd",name:"North Ndebele",nativeName:"isiNdebele", value: "north ndebele", verified: false, level: 0},
  {code:"ne",name:"Nepali",nativeName:"नेपाली", value: "nepali", verified: false, level: 0},
  {code:"ng",name:"Ndonga",nativeName:"Owambo", value: "ndonga", verified: false, level: 0},
  {code:"nn",name:"Norwegian Nynorsk",nativeName:"Norsk nynorsk", value: "norwegian nynorsk", verified: false, level: 0},
  {code:"no",name:"Norwegian",nativeName:"Norsk", value: "norwegian", verified: false, level: 0},
  {code:"ii",name:"Nuosu",nativeName:"ꆈꌠ꒿ Nuosuhxop", value: "nuosu", verified: false, level: 0},
  {code:"nr",name:"South Ndebele",nativeName:"isiNdebele", value: "south ndebele", verified: false, level: 0},
  {code:"oc",name:"Occitan",nativeName:"Occitan", value: "occitan", verified: false, level: 0},
  {code:"oj",name:"Ojibwe, Ojibwa",nativeName:"ᐊᓂᔑᓈᐯᒧᐎᓐ", value: "ojibwe", verified: false, level: 0},
  {code:"om",name:"Oromo",nativeName:"Afaan Oromoo", value: "oromo", verified: false, level: 0},
  {code:"or",name:"Oriya",nativeName:"ଓଡ଼ିଆ", value: "oriya", verified: false, level: 0},
  {code:"os",name:"Ossetian, Ossetic",nativeName:"ирон æвзаг", value: "ossetian", verified: false, level: 0},
  {code:"pa",name:"Panjabi, Punjabi",nativeName:"ਪੰਜਾਬੀ, پنجابی‎", value: "panjabi", verified: false, level: 0},
  {code:"pi",name:"Pāli",nativeName:"पाऴि", value: "pāli", verified: false, level: 0},
  {code:"fa",name:"Persian",nativeName:"فارسی", value: "persian", verified: false, level: 0},
  {code:"pl",name:"Polish",nativeName:"polski", value: "polish", verified: false, level: 0},
  {code:"ps",name:"Pashto, Pushto",nativeName:"پښتو", value: "pashto", verified: false, level: 0},
  {code:"pt",name:"Portuguese",nativeName:"Português", value: "portuguese", verified: false, level: 0},
  {code:"qu",name:"Quechua",nativeName:"Runa Simi, Kichwa", value: "quechua", verified: false, level: 0},
  {code:"rm",name:"Romansh",nativeName:"rumantsch grischun", value: "romansh", verified: false, level: 0},
  {code:"rn",name:"Kirundi",nativeName:"kiRundi", value: "kirundi", verified: false, level: 0},
  {code:"ro",name:"Romanian, Moldavian, Moldovan",nativeName:"română", value: "romanian", verified: false, level: 0},
  {code:"ru",name:"Russian",nativeName:"русский язык", value: "russian", verified: false, level: 0},
  {code:"sa",name:"Sanskrit (Saṁskṛta)",nativeName:"संस्कृतम्", value: "sanskrit", verified: false, level: 0},
  {code:"sc",name:"Sardinian",nativeName:"sardu", value: "sardinian", verified: false, level: 0},
  {code:"sd",name:"Sindhi",nativeName:"सिन्धी, سنڌي، سندھی‎", value: "sindhi", verified: false, level: 0},
  {code:"se",name:"Northern Sami",nativeName:"Davvisámegiella", value: "sorthern sami", verified: false, level: 0},
  {code:"sm",name:"Samoan",nativeName:"gagana faa Samoa", value: "samoan", verified: false, level: 0},
  {code:"sg",name:"Sango",nativeName:"yângâ tî sängö", value: "sango", verified: false, level: 0},
  {code:"sr",name:"Serbian",nativeName:"српски језик", value: "serbian", verified: false, level: 0},
  {code:"gd",name:"Scottish Gaelic; Gaelic",nativeName:"Gàidhlig", value: "scottish", verified: false, level: 0},
  {code:"sn",name:"Shona",nativeName:"chiShona", value: "shona", verified: false, level: 0},
  {code:"si",name:"Sinhala, Sinhalese",nativeName:"සිංහල", value: "sinhala", verified: false, level: 0},
  {code:"sk",name:"Slovak",nativeName:"slovenčina", value: "slovak", verified: false, level: 0},
  {code:"sl",name:"Slovene",nativeName:"slovenščina", value: "slovene", verified: false, level: 0},
  {code:"so",name:"Somali",nativeName:"Soomaaliga, af Soomaali", value: "somali", verified: false, level: 0},
  {code:"st",name:"Southern Sotho",nativeName:"Sesotho", value: "southern sotho", verified: false, level: 0},
  {code:"es",name:"Spanish",nativeName:"español", value: "spanish", verified: false, level: 0},
  {code:"su",name:"Sundanese",nativeName:"Basa Sunda", value: "sundanese", verified: false, level: 0},
  {code:"sw",name:"Swahili",nativeName:"Kiswahili", value: "swahili", verified: false, level: 0},
  {code:"ss",name:"Swati",nativeName:"SiSwati", value: "swati", verified: false, level: 0},
  {code:"sv",name:"Swedish",nativeName:"svenska", value: "swedish", verified: false, level: 0},
  {code:"ta",name:"Tamil",nativeName:"தமிழ்", value: "tamil", verified: false, level: 0},
  {code:"te",name:"Telugu",nativeName:"తెలుగు", value: "telugu", verified: false, level: 0},
  {code:"tg",name:"Tajik",nativeName:"тоҷикӣ, toğikī, تاجیکی‎", value: "tajik", verified: false, level: 0},
  {code:"th",name:"Thai",nativeName:"ไทย", value: "thai", verified: false, level: 0},
  {code:"ti",name:"Tigrinya",nativeName:"ትግርኛ", value: "tigrinya", verified: false, level: 0},
  {code:"bo",name:"Tibetan Standard, Tibetan, Central",nativeName:"བོད་ཡིག", value: "tibetan", verified: false, level: 0},
  {code:"tk",name:"Turkmen",nativeName:"Türkmen, Түркмен", value: "turkmen", verified: false, level: 0},
  {code:"tl",name:"Tagalog",nativeName:"Wikang Tagalog", value: "tagalog", verified: false, level: 0},
  {code:"tn",name:"Tswana",nativeName:"Setswana", value: "tswana", verified: false, level: 0},
  {code:"to",name:"Tonga (Tonga Islands)",nativeName:"faka Tonga", value: "tonga", verified: false, level: 0},
  {code:"tr",name:"Turkish",nativeName:"Türkçe", value: "turkish", verified: false, level: 0},
  {code:"ts",name:"Tsonga",nativeName:"Xitsonga", value: "tsonga", verified: false, level: 0},
  {code:"tt",name:"Tatar",nativeName:"татарча, tatarça, تاتارچا‎", value: "tatar", verified: false, level: 0},
  {code:"tw",name:"Twi",nativeName:"Twi", value: "twi", verified: false, level: 0},
  {code:"ty",name:"Tahitian",nativeName:"Reo Tahiti", value: "tahitian", verified: false, level: 0},
  {code:"ug",name:"Uighur, Uyghur",nativeName:"Uyƣurqə, ئۇيغۇرچە‎", value: "uighur", verified: false, level: 0},
  {code:"uk",name:"Ukrainian",nativeName:"українська", value: "ukrainian", verified: false, level: 0},
  {code:"ur",name:"Urdu",nativeName:"اردو", value: "urdu", verified: false, level: 0},
  {code:"uz",name:"Uzbek",nativeName:"zbek, Ўзбек, أۇزبېك‎", value: "uzbek", verified: false, level: 0},
  {code:"ve",name:"Venda",nativeName:"Tshivenḓa", value: "venda", verified: false, level: 0},
  {code:"vi",name:"Vietnamese",nativeName:"Tiếng Việt", value: "vietnamese", verified: false, level: 0},
  {code:"vo",name:"Volapük",nativeName:"Volapük", value: "volapük", verified: false, level: 0},
  {code:"wa",name:"Walloon",nativeName:"Walon", value: "walloon", verified: false, level: 0},
  {code:"cy",name:"Welsh",nativeName:"Cymraeg", value: "welsh", verified: false, level: 0},
  {code:"wo",name:"Wolof",nativeName:"Wollof", value: "wolof", verified: false, level: 0},
  {code:"fy",name:"Western Frisian",nativeName:"Frysk", value: "western", verified: false, level: 0},
  {code:"xh",name:"Xhosa",nativeName:"isiXhosa", value: "xhosa", verified: false, level: 0},
  {code:"yi",name:"Yiddish",nativeName:"ייִדיש", value: "yiddish", verified: false, level: 0},
  {code:"yo",name:"Yoruba",nativeName:"Yorùbá", value: "yoruba", verified: false, level: 0},
  {code:"za",name:"Zhuang, Chuang",nativeName:"Saɯ cueŋƅ, Saw cuengh", value: "zhuang", verified: false, level: 0}
];
