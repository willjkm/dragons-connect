function getData () {
    var vocabData = [
        {
          "id": 1,
          "character": "你",
          "pinyin": "nǐ",
          "english": "you",
          "lesson": 1
        },
        {
          "id": 2,
          "character": "好",
          "pinyin": "hǎo",
          "english": "good",
          "lesson": 1
        },
        {
          "id": 3,
          "character": "你好",
          "pinyin": "nǐ hǎo",
          "english": "hello",
          "lesson": 1
        },
        {
          "id": 4,
          "character": "吗",
          "pinyin": "ma",
          "english": "question word",
          "lesson": 1
        },
        {
          "id": 5,
          "character": "我",
          "pinyin": "wǒ",
          "english": "I",
          "lesson": 1
        },
        {
          "id": 6,
          "character": "很",
          "pinyin": "hěn",
          "english": "very",
          "lesson": 1
        },
        {
          "id": 7,
          "character": "再见",
          "pinyin": "zàijiàn",
          "english": "goodbye",
          "lesson": 1
        },
        {
          "id": 8,
          "character": "谢谢",
          "pinyin": "xièxie",
          "english": "thank you",
          "lesson": 1
        },
        {
          "id": 9,
          "character": "去",
          "pinyin": "qù",
          "english": "go",
          "lesson": 2
        },
        {
          "id": 10,
          "character": "哪儿",
          "pinyin": "nǎr",
          "english": "where",
          "lesson": 2
        },
        {
          "id": 11,
          "character": "商店",
          "pinyin": "shāngdiàn",
          "english": "shop",
          "lesson": 2
        },
        {
          "id": 12,
          "character": "公园",
          "pinyin": "gōngyuán",
          "english": "park",
          "lesson": 2
        },
        {
          "id": 13,
          "character": "学校",
          "pinyin": "xuéxiào",
          "english": "school",
          "lesson": 2
        },
        {
          "id": 14,
          "character": "咖啡馆",
          "pinyin": "kāfēiguǎn",
          "english": "cafe",
          "lesson": 2
        },
        {
          "id": 15,
          "character": "回",
          "pinyin": "huí",
          "english": "return",
          "lesson": 2
        },
        {
          "id": 16,
          "character": "家",
          "pinyin": "jiā",
          "english": "home",
          "lesson": 2
        },
        {
          "id": 17,
          "character": "有",
          "pinyin": "yǒu",
          "english": "have",
          "lesson": 3
        },
        {
          "id": 18,
          "character": "书",
          "pinyin": "shū",
          "english": "book",
          "lesson": 3
        },
        {
          "id": 19,
          "character": "笔",
          "pinyin": "bǐ",
          "english": "pen",
          "lesson": 3
        },
        {
          "id": 20,
          "character": "水",
          "pinyin": "shuǐ",
          "english": "water",
          "lesson": 3
        },
        {
          "id": 21,
          "character": "手机",
          "pinyin": "shǒujī",
          "english": "mobile phone",
          "lesson": 3
        },
        {
          "id": 22,
          "character": "没有",
          "pinyin": "méiyǒu",
          "english": "not have",
          "lesson": 3
        },
        {
          "id": 23,
          "character": "一",
          "pinyin": "yī",
          "english": "one",
          "lesson": 4
        },
        {
          "id": 24,
          "character": "二",
          "pinyin": "èr",
          "english": "two",
          "lesson": 4
        },
        {
          "id": 25,
          "character": "三",
          "pinyin": "sān",
          "english": "three",
          "lesson": 4
        },
        {
          "id": 26,
          "character": "四",
          "pinyin": "sì",
          "english": "four",
          "lesson": 4
        },
        {
          "id": 27,
          "character": "五",
          "pinyin": "wǔ",
          "english": "five",
          "lesson": 4
        },
        {
          "id": 28,
          "character": "六",
          "pinyin": "liù",
          "english": "six",
          "lesson": 4
        },
        {
          "id": 29,
          "character": "七",
          "pinyin": "qī",
          "english": "seven",
          "lesson": 4
        },
        {
          "id": 30,
          "character": "八",
          "pinyin": "bā",
          "english": "eight",
          "lesson": 4
        },
        {
          "id": 31,
          "character": "九",
          "pinyin": "jiǔ",
          "english": "nine",
          "lesson": 4
        },
        {
          "id": 32,
          "character": "十",
          "pinyin": "shí",
          "english": "ten",
          "lesson": 4
        },
        {
          "id": 33,
          "character": "老师",
          "pinyin": "lǎoshī",
          "english": "teacher",
          "lesson": 4
        },
        {
          "id": 34,
          "character": "球",
          "pinyin": "qiú",
          "english": "ball",
          "lesson": 4
        },
        {
          "id": 35,
          "character": "你们",
          "pinyin": "nǐmen",
          "english": "you plural",
          "lesson": 4
        },
        {
          "id": 36,
          "character": "我们",
          "pinyin": "wǒmen",
          "english": "we",
          "lesson": 4
        },
        {
          "id": 37,
          "character": "他",
          "pinyin": "tā",
          "english": "he",
          "lesson": 5
        },
        {
          "id": 38,
          "character": "她",
          "pinyin": "tā",
          "english": "she",
          "lesson": 5
        },
        {
          "id": 39,
          "character": "是",
          "pinyin": "shì",
          "english": "to be",
          "lesson": 5
        },
        {
          "id": 40,
          "character": "谁",
          "pinyin": "shéi",
          "english": "who",
          "lesson": 5
        },
        {
          "id": 41,
          "character": "爸爸",
          "pinyin": "bàba",
          "english": "dad",
          "lesson": 5
        },
        {
          "id": 42,
          "character": "妈妈",
          "pinyin": "māma",
          "english": "mum",
          "lesson": 5
        },
        {
          "id": 43,
          "character": "王",
          "pinyin": "wáng",
          "english": "king",
          "lesson": 5
        },
        {
          "id": 44,
          "character": "朋友",
          "pinyin": "péngyou",
          "english": "friend",
          "lesson": 5
        },
        {
          "id": 45,
          "character": "这",
          "pinyin": "zhè",
          "english": "this",
          "lesson": 5
        },
        {
          "id": 46,
          "character": "叫",
          "pinyin": "jiào",
          "english": "called",
          "lesson": 6
        },
        {
          "id": 47,
          "character": "什么",
          "pinyin": "shénme",
          "english": "what",
          "lesson": 6
        },
        {
          "id": 48,
          "character": "名字",
          "pinyin": "míngzi",
          "english": "name",
          "lesson": 6
        },
        {
          "id": 49,
          "character": "几",
          "pinyin": "jǐ",
          "english": "how many",
          "lesson": 6
        },
        {
          "id": 50,
          "character": "岁",
          "pinyin": "suì",
          "english": "years",
          "lesson": 6
        }
    ];
    return vocabData;
}

function getToneData () {
  var vocabData = [
    {
      "id": 1,
      "character": "你",
      "pinyin": "ni",
      "tone": 3,
      "lesson": 1
    },
    {
      "id": 2,
      "character": "好",
      "pinyin": "hao",
      "tone": 3,
      "lesson": 1
    },
    {
      "id": 3,
      "character": "我",
      "pinyin": "wo",
      "tone": 3,
      "lesson": 1
    },
    {
      "id": 4,
      "character": "很",
      "pinyin": "hen",
      "tone": 3,
      "lesson": 1
    },
    {
      "id": 5,
      "character": "再",
      "pinyin": "zai",
      "tone": 4,
      "lesson": 1
    },
    {
      "id": 6,
      "character": "见",
      "pinyin": "jian",
      "tone": 4,
      "lesson": 1
    },
    {
      "id": 7,
      "character": "谢",
      "pinyin": "xie",
      "tone": 4,
      "lesson": 1
    },
    {
      "id": 8,
      "character": "去",
      "pinyin": "qu",
      "tone": 4,
      "lesson": 2
    },
    {
      "id": 9,
      "character": "哪",
      "pinyin": "na",
      "tone": 3,
      "lesson": 2
    },
    {
      "id": 10,
      "character": "商",
      "pinyin": "shang",
      "tone": 1,
      "lesson": 2
    },
    {
      "id": 11,
      "character": "店",
      "pinyin": "dian",
      "tone": 4,
      "lesson": 2
    },
    {
      "id": 12,
      "character": "公",
      "pinyin": "gong",
      "tone": 1,
      "lesson": 2
    },
    {
      "id": 13,
      "character": "园",
      "pinyin": "yuan",
      "tone": 2,
      "lesson": 2
    },
    {
      "id": 14,
      "character": "学",
      "pinyin": "xue",
      "tone": 2,
      "lesson": 2
    },
    {
      "id": 15,
      "character": "校",
      "pinyin": "xiao",
      "tone": 4,
      "lesson": 2
    },
    {
      "id": 16,
      "character": "咖",
      "pinyin": "ka",
      "tone": 1,
      "lesson": 2
    },
    {
      "id": 17,
      "character": "啡",
      "pinyin": "fei",
      "tone": 1,
      "lesson": 2
    },
    {
      "id": 18,
      "character": "馆",
      "pinyin": "guan",
      "tone": 3,
      "lesson": 2
    },
    {
      "id": 19,
      "character": "回",
      "pinyin": "hui",
      "tone": 2,
      "lesson": 2
    },
    {
      "id": 20,
      "character": "家",
      "pinyin": "jia",
      "tone": 1,
      "lesson": 2
    },
    {
      "id": 21,
      "character": "有",
      "pinyin": "you",
      "tone": 3,
      "lesson": 3
    },
    {
      "id": 22,
      "character": "书",
      "pinyin": "shu",
      "tone": 1,
      "lesson": 3
    },
    {
      "id": 23,
      "character": "笔",
      "pinyin": "bi",
      "tone": 3,
      "lesson": 3
    },
    {
      "id": 24,
      "character": "水",
      "pinyin": "shui",
      "tone": 3,
      "lesson": 3
    },
    {
      "id": 25,
      "character": "手",
      "pinyin": "shou",
      "tone": 3,
      "lesson": 3
    },
    {
      "id": 26,
      "character": "机",
      "pinyin": "ji",
      "tone": 1,
      "lesson": 3
    },
    {
      "id": 27,
      "character": "没",
      "pinyin": "mei",
      "tone": 2,
      "lesson": 3
    },
    {
      "id": 28,
      "character": "有",
      "pinyin": "you",
      "tone": 3,
      "lesson": 3
    },
    {
      "id": 29,
      "character": "一",
      "pinyin": "yi",
      "tone": 1,
      "lesson": 4
    },
    {
      "id": 30,
      "character": "二",
      "pinyin": "er",
      "tone": 4,
      "lesson": 4
    },
    {
      "id": 31,
      "character": "三",
      "pinyin": "san",
      "tone": 1,
      "lesson": 4
    },
    {
      "id": 32,
      "character": "四",
      "pinyin": "si",
      "tone": 4,
      "lesson": 4
    },
    {
      "id": 33,
      "character": "五",
      "pinyin": "wu",
      "tone": 3,
      "lesson": 4
    },
    {
      "id": 34,
      "character": "六",
      "pinyin": "liu",
      "tone": 4,
      "lesson": 4
    },
    {
      "id": 35,
      "character": "七",
      "pinyin": "qi",
      "tone": 1,
      "lesson": 4
    },
    {
      "id": 36,
      "character": "八",
      "pinyin": "ba",
      "tone": 1,
      "lesson": 4
    },
    {
      "id": 37,
      "character": "九",
      "pinyin": "jiu",
      "tone": 3,
      "lesson": 4
    },
    {
      "id": 38,
      "character": "十",
      "pinyin": "shi",
      "tone": 2,
      "lesson": 4
    },
    {
      "id": 39,
      "character": "老",
      "pinyin": "lao",
      "tone": 3,
      "lesson": 4
    },
    {
      "id": 40,
      "character": "师",
      "pinyin": "shi",
      "tone": 1,
      "lesson": 4
    },
    {
      "id": 41,
      "character": "球",
      "pinyin": "qiu",
      "tone": 2,
      "lesson": 4
    },
    {
      "id": 42,
      "character": "他",
      "pinyin": "ta",
      "tone": 1,
      "lesson": 5
    },
    {
      "id": 43,
      "character": "她",
      "pinyin": "ta",
      "tone": 1,
      "lesson": 5
    },
    {
      "id": 44,
      "character": "是",
      "pinyin": "shi",
      "tone": 4,
      "lesson": 5
    },
    {
      "id": 45,
      "character": "谁",
      "pinyin": "shei",
      "tone": 2,
      "lesson": 5
    },
    {
      "id": 46,
      "character": "爸",
      "pinyin": "ba",
      "tone": 4,
      "lesson": 5
    },
    {
      "id": 47,
      "character": "妈",
      "pinyin": "ma",
      "tone": 1,
      "lesson": 5
    },
    {
      "id": 48,
      "character": "王",
      "pinyin": "wang",
      "tone": 2,
      "lesson": 5
    },
    {
      "id": 49,
      "character": "朋",
      "pinyin": "peng",
      "tone": 2,
      "lesson": 5
    },
    {
      "id": 50,
      "character": "友",
      "pinyin": "you",
      "tone": 3,
      "lesson": 5
    },
    {
      "id": 51,
      "character": "这",
      "pinyin": "zhe",
      "tone": 4,
      "lesson": 5
    },
    {
      "id": 52,
      "character": "叫",
      "pinyin": "jiao",
      "tone": 4,
      "lesson": 6
    },
    {
      "id": 53,
      "character": "什",
      "pinyin": "shen",
      "tone": 2,
      "lesson": 6
    },
    {
      "id": 54,
      "character": "名",
      "pinyin": "ming",
      "tone": 2,
      "lesson": 6
    },
    {
      "id": 55,
      "character": "字",
      "pinyin": "zi",
      "tone": 4,
      "lesson": 6
    },
    {
      "id": 56,
      "character": "几",
      "pinyin": "ji",
      "tone": 3,
      "lesson": 6
    },
    {
      "id": 57,
      "character": "岁",
      "pinyin": "sui",
      "tone": 4,
      "lesson": 6
    }
   ];
  return vocabData;
}
function getQuizData () {
  var quizData = [
    {
      "lesson": 1,
      "category": 0,
      "question": "What is the capital of China?",
      "answer": "Beijing",
      "wrong": ["Delhi", "Seoul", "New York", "London", "Paris"]
    },
    {
      "lesson": 1,
      "category": 1,
      "question": "Select the English word for 好.",
      "answer": "good",
      "wrong": ["bad", "very", "you", "me", "again", "see"]
    },
    {
      "lesson": 1,
      "category": 2,
      "question": "Select the correct character for qiú.",
      "answer": "球",
      "wrong": ["那", "我", "好", "在"]
    },
    {
      "lesson": 1,
      "category": 3,
      "question": "Which tone is 在 (zai)?",
      "answer": "4th",
      "wrong": ["1st", "2nd", "3rd"]
    },
    {
      "lesson": 1,
      "category": 4,
      "question": "Select the English word for 山.",
      "answer": "mountain",
      "wrong": ["river", "three", "water", "sky", "China"]
    },
    {
      "lesson": 1,
      "category": 5,
      "question": "Select the word you hear.",
      "answer": "fèi",
      "wrong": ["mǎ", "xì", "wén", "guāng", "rì"],
      "sound": "fei4"
    },
    {
      "lesson": 1,
      "category": 0,
      "question": "What is the economic capital of China?",
      "answer": "Shanghai",
      "wrong": ["Delhi", "Seoul", "New York", "London", "Paris"]
    },
    {
      "lesson": 1,
      "category": 1,
      "question": "Select the English word for 你.",
      "answer": "you",
      "wrong": ["bad", "very", "good", "me", "again", "see"]
    },
    {
      "lesson": 1,
      "category": 2,
      "question": "Select the correct character for nà.",
      "answer": "那",
      "wrong": ["球", "我", "好", "在"]
    },
    {
      "lesson": 1,
      "category": 3,
      "question": "Which tone is 我 (wo)?",
      "answer": "3rd",
      "wrong": ["1st", "2nd", "4th"]
    },
    {
      "lesson": 1,
      "category": 4,
      "question": "Select the English word for 三.",
      "answer": "three",
      "wrong": ["river", "mountain", "water", "sky", "China"]
    },
    {
      "lesson": 1,
      "category": 5,
      "question": "Select the word you hear.",
      "answer": "féi",
      "wrong": ["mǎ", "fèi", "wén", "guāng", "rì"],
      "sound": "fei2"
    }
  ]
  return quizData;
}
function getDictionaryData () {
  var dictionaryData = [
    {
      "lesson": 1,
      "character": "梅梅",
      "pinyin": "Méimei",
      "english": "Meimei",
      "part of speech": "proper noun",
      "notes": "A girl's name. Meimei means 'plum blossom'.",
      "testable": "n",
      "soundfile": "vocab1.ogg"
    },
    {
      "lesson": 1,
      "character": "你好",
      "pinyin": "nǐ hǎo",
      "english": "hello",
      "part of speech": "phrase",
      "notes": "Literally means 'you good'. It is the most common way to say hello.",
      "testable": "y",
      "soundfile": "vocab2.ogg"
    },
    {
      "lesson": 1,
      "character": "你",
      "pinyin": "nǐ",
      "english": "you",
      "part of speech": "pronoun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab3.ogg"
    },
    {
      "lesson": 1,
      "character": "好",
      "pinyin": "hǎo",
      "english": "good",
      "part of speech": "adjective",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab4.ogg"
    },
    {
      "lesson": 1,
      "character": "吗",
      "pinyin": "ma",
      "english": "(particle)",
      "part of speech": "particle",
      "notes": "This word is put at the end of a sentence to create a question.",
      "testable": "n",
      "soundfile": "vocab5.ogg"
    },
    {
      "lesson": 1,
      "character": "我",
      "pinyin": "wǒ",
      "english": "I, me",
      "part of speech": "pronoun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab6.ogg"
    },
    {
      "lesson": 1,
      "character": "很",
      "pinyin": "hěn",
      "english": "very",
      "part of speech": "adverb",
      "notes": "In Chinese we say 'this very expensive' and 'my friend very tall'.",
      "testable": "y",
      "soundfile": "vocab7.ogg"
    },
    {
      "lesson": 1,
      "character": "呢",
      "pinyin": "ne",
      "english": "(particle)",
      "part of speech": "particle",
      "notes": "This word is put at the end of a sentence to return a question that was just asked.",
      "testable": "n",
      "soundfile": "vocab8.ogg"
    },
    {
      "lesson": 1,
      "character": "天文",
      "pinyin": "Tiānwén",
      "english": "Tianwen",
      "part of speech": "proper noun",
      "notes": "A boy's name. Tianwen means 'astronomy'.",
      "testable": "n",
      "soundfile": "vocab9.ogg"
    },
    {
      "lesson": 1,
      "character": "安",
      "pinyin": "Ān",
      "english": "An",
      "part of speech": "proper noun",
      "notes": "A girl's name. An means 'peace'.",
      "testable": "n",
      "soundfile": "vocab10.ogg"
    },
    {
      "lesson": 1,
      "character": "累",
      "pinyin": "lèi",
      "english": "tired",
      "part of speech": "adjective",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab11.ogg"
    },
    {
      "lesson": 2,
      "character": "生日",
      "pinyin": "shēngrì",
      "english": "birthday",
      "part of speech": "noun",
      "notes": "The characters literally mean 'birth' and 'day'.",
      "testable": "y",
      "soundfile": "vocab12.ogg"
    },
    {
      "lesson": 2,
      "character": "快乐",
      "pinyin": "kuàilè",
      "english": "happy",
      "part of speech": "adjective",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab13.ogg"
    },
    {
      "lesson": 2,
      "character": "谢谢",
      "pinyin": "xièxie",
      "english": "thank you",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab14.ogg"
    },
    {
      "lesson": 2,
      "character": "哈哈",
      "pinyin": "hāhā",
      "english": "ha ha",
      "part of speech": "interjection",
      "notes": "",
      "testable": "n",
      "soundfile": "vocab15.ogg"
    },
    {
      "lesson": 2,
      "character": "不",
      "pinyin": "bù",
      "english": "no, not",
      "part of speech": "adverb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab16.ogg"
    },
    {
      "lesson": 2,
      "character": "客气",
      "pinyin": "kèqi",
      "english": "polite",
      "part of speech": "adjective",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab17.ogg"
    },
    {
      "lesson": 2,
      "character": "再见",
      "pinyin": "zàijiàn",
      "english": "goodbye",
      "part of speech": "phrase",
      "notes": "Literally means 'again see'. It is a common way to say goodbye.",
      "testable": "y",
      "soundfile": "vocab18.ogg"
    },
    {
      "lesson": 3,
      "character": "一",
      "pinyin": "yī",
      "english": "one",
      "part of speech": "number",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab19.ogg"
    },
    {
      "lesson": 3,
      "character": "二",
      "pinyin": "èr",
      "english": "two",
      "part of speech": "number",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab20.ogg"
    },
    {
      "lesson": 3,
      "character": "三",
      "pinyin": "sān",
      "english": "three",
      "part of speech": "number",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab21.ogg"
    },
    {
      "lesson": 3,
      "character": "四",
      "pinyin": "sì",
      "english": "four",
      "part of speech": "number",
      "notes": "Four is an unlucky number in Chinese culture.",
      "testable": "y",
      "soundfile": "vocab22.ogg"
    },
    {
      "lesson": 3,
      "character": "五",
      "pinyin": "wǔ",
      "english": "five",
      "part of speech": "number",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab23.ogg"
    },
    {
      "lesson": 3,
      "character": "六",
      "pinyin": "liù",
      "english": "six",
      "part of speech": "number",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab24.ogg"
    },
    {
      "lesson": 3,
      "character": "七",
      "pinyin": "qī",
      "english": "seven",
      "part of speech": "number",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab25.ogg"
    },
    {
      "lesson": 3,
      "character": "八",
      "pinyin": "bā",
      "english": "eight",
      "part of speech": "number",
      "notes": "Eight is a lucky number in Chinese culture.",
      "testable": "y",
      "soundfile": "vocab26.ogg"
    },
    {
      "lesson": 3,
      "character": "九",
      "pinyin": "jiǔ",
      "english": "nine",
      "part of speech": "number",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab27.ogg"
    },
    {
      "lesson": 3,
      "character": "十",
      "pinyin": "shí",
      "english": "ten",
      "part of speech": "number",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab28.ogg"
    },
    {
      "lesson": 4,
      "character": "去",
      "pinyin": "qù",
      "english": "go",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab29.ogg"
    },
    {
      "lesson": 4,
      "character": "哪儿",
      "pinyin": "nǎr",
      "english": "where",
      "part of speech": "pronoun",
      "notes": "儿 indicates an -r sound.",
      "testable": "y",
      "soundfile": "vocab30.ogg"
    },
    {
      "lesson": 4,
      "character": "商店",
      "pinyin": "shāngdiàn",
      "english": "shop",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab31.ogg"
    },
    {
      "lesson": 4,
      "character": "公园",
      "pinyin": "gōngyuán",
      "english": "public park",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab32.ogg"
    },
    {
      "lesson": 4,
      "character": "回",
      "pinyin": "huí",
      "english": "return",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab33.ogg"
    },
    {
      "lesson": 4,
      "character": "家",
      "pinyin": "jiā",
      "english": "home",
      "part of speech": "noun",
      "notes": "You can't say 'go home' in Chinese, only 'return home'.",
      "testable": "y",
      "soundfile": "vocab34.ogg"
    },
    {
      "lesson": 5,
      "character": "妈妈",
      "pinyin": "māma",
      "english": "mother",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab35.ogg"
    },
    {
      "lesson": 5,
      "character": "有",
      "pinyin": "yǒu",
      "english": "have",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab36.ogg"
    },
    {
      "lesson": 5,
      "character": "手机",
      "pinyin": "shǒujī",
      "english": "mobile phone",
      "part of speech": "noun",
      "notes": "Literally means 'hand machine'.",
      "testable": "y",
      "soundfile": "vocab37.ogg"
    },
    {
      "lesson": 5,
      "character": "钱",
      "pinyin": "qián",
      "english": "money",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab38.ogg"
    },
    {
      "lesson": 5,
      "character": "水",
      "pinyin": "shuǐ",
      "english": "water",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab39.ogg"
    },
    {
      "lesson": 5,
      "character": "没",
      "pinyin": "méi",
      "english": "don't (have)",
      "part of speech": "adverb",
      "notes": "This is a special negative word used with the verb 有 (to have).",
      "testable": "y",
      "soundfile": "vocab40.ogg"
    },
    {
      "lesson": 5,
      "character": "太好了",
      "pinyin": "tài hǎo le",
      "english": "fantastic",
      "part of speech": "phrase",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab41.ogg"
    },
    {
      "lesson": 6,
      "character": "吧",
      "pinyin": "ba",
      "english": "(particle)",
      "part of speech": "particle",
      "notes": "This word is put at the end of a sentence to create a suggestion.",
      "testable": "n",
      "soundfile": "vocab42.ogg"
    },
    {
      "lesson": 6,
      "character": "球",
      "pinyin": "qiú",
      "english": "ball",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab43.ogg"
    },
    {
      "lesson": 6,
      "character": "你们",
      "pinyin": "nǐmen",
      "english": "you plural",
      "part of speech": "pronoun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab44.ogg"
    },
    {
      "lesson": 6,
      "character": "我们",
      "pinyin": "wǒmen",
      "english": "we",
      "part of speech": "pronoun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab45.ogg"
    },
    {
      "lesson": 6,
      "character": "走",
      "pinyin": "zǒu",
      "english": "walk, leave",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab46.ogg"
    },
    {
      "lesson": 7,
      "character": "这",
      "pinyin": "zhè",
      "english": "this",
      "part of speech": "pronoun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab47.ogg"
    },
    {
      "lesson": 7,
      "character": "是",
      "pinyin": "shì",
      "english": "is",
      "part of speech": "verb",
      "notes": "This word can only be used before nouns, and not adjectives.",
      "testable": "y",
      "soundfile": "vocab48.ogg"
    },
    {
      "lesson": 7,
      "character": "爸爸",
      "pinyin": "bàba",
      "english": "father",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab49.ogg"
    },
    {
      "lesson": 7,
      "character": "她",
      "pinyin": "tā",
      "english": "she",
      "part of speech": "pronoun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab50.ogg"
    },
    {
      "lesson": 7,
      "character": "他",
      "pinyin": "tā",
      "english": "he",
      "part of speech": "pronoun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab51.ogg"
    },
    {
      "lesson": 7,
      "character": "叫",
      "pinyin": "jiào",
      "english": "called",
      "part of speech": "verb",
      "notes": "This can mean either 'to call' or 'to be called'.",
      "testable": "y",
      "soundfile": "vocab52.ogg"
    },
    {
      "lesson": 7,
      "character": "老师",
      "pinyin": "lǎoshī",
      "english": "teacher",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab53.ogg"
    },
    {
      "lesson": 7,
      "character": "哥哥",
      "pinyin": "gēge",
      "english": "older brother",
      "part of speech": "noun",
      "notes": "Chinese has a different word for younger brother: dìdi.",
      "testable": "y",
      "soundfile": "vocab54.ogg"
    },
    {
      "lesson": 7,
      "character": "姐姐",
      "pinyin": "jiějie",
      "english": "older sister",
      "part of speech": "noun",
      "notes": "Chinese has a different word for younger sister: mèimei.",
      "testable": "y",
      "soundfile": "vocab55.ogg"
    },
    {
      "lesson": 7,
      "character": "朋友",
      "pinyin": "péngyou",
      "english": "friend",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab56.ogg"
    },
    {
      "lesson": 7,
      "character": "王琴",
      "pinyin": "Wáng Qín",
      "english": "Wang Qin",
      "part of speech": "proper noun",
      "notes": "A woman's name. Qin means 'musical instrument'.",
      "testable": "n",
      "soundfile": "vocab57.ogg"
    },
    {
      "lesson": 7,
      "character": "李伟",
      "pinyin": "Lǐ Wěi",
      "english": "Li Wei",
      "part of speech": "proper noun",
      "notes": "A boy's name. Wei means 'great'.",
      "testable": "n",
      "soundfile": "vocab58.ogg"
    },
    {
      "lesson": 7,
      "character": "李静",
      "pinyin": "Lǐ Jìng",
      "english": "Li Jing",
      "part of speech": "proper noun",
      "notes": "A girl's name. Jing means 'silence'.",
      "testable": "n",
      "soundfile": "vocab59.ogg"
    },
    {
      "lesson": 8,
      "character": "吃",
      "pinyin": "chī",
      "english": "eat",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab60.ogg"
    },
    {
      "lesson": 8,
      "character": "什么",
      "pinyin": "shénme",
      "english": "what",
      "part of speech": "pronoun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab61.ogg"
    },
    {
      "lesson": 8,
      "character": "面",
      "pinyin": "miàn",
      "english": "noodles",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab62.ogg"
    },
    {
      "lesson": 8,
      "character": "喝",
      "pinyin": "hē",
      "english": "drink",
      "part of speech": "verb",
      "notes": "In Chinese, you 'drink' soup!",
      "testable": "y",
      "soundfile": "vocab63.ogg"
    },
    {
      "lesson": 8,
      "character": "可乐",
      "pinyin": "kělè",
      "english": "cola",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab64.ogg"
    },
    {
      "lesson": 8,
      "character": "米饭",
      "pinyin": "mǐfàn",
      "english": "rice",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab65.ogg"
    },
    {
      "lesson": 8,
      "character": "茶",
      "pinyin": "chá",
      "english": "tea",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab66.ogg"
    },
    {
      "lesson": 8,
      "character": "哎呀",
      "pinyin": "āiyā",
      "english": "oh no",
      "part of speech": "interjection",
      "notes": "Chinese sometimes say this when they are frustrated.",
      "testable": "n",
      "soundfile": "vocab67.ogg"
    },
    {
      "lesson": 9,
      "character": "中国",
      "pinyin": "Zhōngguó",
      "english": "China",
      "part of speech": "proper noun",
      "notes": "Literally means 'middle kingdom'.",
      "testable": "y",
      "soundfile": "vocab68.ogg"
    },
    {
      "lesson": 9,
      "character": "北京",
      "pinyin": "Běijīng",
      "english": "Beijing",
      "part of speech": "proper noun",
      "notes": "Literally means 'north capital'. China also has a southern capital, Nanjing.",
      "testable": "y",
      "soundfile": "vocab69.ogg"
    },
    {
      "lesson": 9,
      "character": "十四",
      "pinyin": "shísì",
      "english": "fourteen",
      "part of speech": "number",
      "notes": "",
      "testable": "n",
      "soundfile": "vocab70.ogg"
    },
    {
      "lesson": 9,
      "character": "十三",
      "pinyin": "shísān",
      "english": "thirteen",
      "part of speech": "number",
      "notes": "",
      "testable": "n",
      "soundfile": "vocab71.ogg"
    },
    {
      "lesson": 9,
      "character": "二十",
      "pinyin": "èrshí",
      "english": "twenty",
      "part of speech": "number",
      "notes": "",
      "testable": "n",
      "soundfile": "vocab72.ogg"
    },
    {
      "lesson": 9,
      "character": "岁",
      "pinyin": "suì",
      "english": "years old",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab73.ogg"
    },
    {
      "lesson": 9,
      "character": "也",
      "pinyin": "yě",
      "english": "also",
      "part of speech": "adverb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab74.ogg"
    },
    {
      "lesson": 9,
      "character": "住",
      "pinyin": "zhù",
      "english": "live",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab75.ogg"
    },
    {
      "lesson": 9,
      "character": "在",
      "pinyin": "zài",
      "english": "in, at, on",
      "part of speech": "preposition",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab76.ogg"
    },
    {
      "lesson": 9,
      "character": "上海",
      "pinyin": "Shànghǎi",
      "english": "Shanghai",
      "part of speech": "proper noun",
      "notes": "Literally means 'on the sea'. Shanghai is China's largest city.",
      "testable": "y",
      "soundfile": "vocab77.ogg"
    },
    {
      "lesson": 10,
      "character": "做",
      "pinyin": "zuò",
      "english": "do",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab78.ogg"
    },
    {
      "lesson": 10,
      "character": "看",
      "pinyin": "kàn",
      "english": "look, watch",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab79.ogg"
    },
    {
      "lesson": 10,
      "character": "书",
      "pinyin": "shū",
      "english": "book",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab80.ogg"
    },
    {
      "lesson": 10,
      "character": "哦",
      "pinyin": "ò",
      "english": "oh",
      "part of speech": "interjection",
      "notes": "",
      "testable": "n",
      "soundfile": "vocab81.ogg"
    },
    {
      "lesson": 10,
      "character": "发",
      "pinyin": "fā",
      "english": "send",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab82.ogg"
    },
    {
      "lesson": 10,
      "character": "短信",
      "pinyin": "duǎnxìn",
      "english": "text message",
      "part of speech": "noun",
      "notes": "Literally means 'short letter'.",
      "testable": "y",
      "soundfile": "vocab83.ogg"
    }
   ];
  return dictionaryData;
}
function getDialogData () {
  var dialogData = [
    {
      "Lesson": 1,
      "Speaker": "an",
      "Chinese": "~梅梅，~你好！",
      "English": "Hello, Meimei!",
      "Soundfile": "dialog1.ogg"
    },
    {
      "Lesson": 1,
      "Speaker": "meimei",
      "Chinese": "~你好！",
      "English": "Hello!",
      "Soundfile": "dialog2.ogg"
    },
    {
      "Lesson": 1,
      "Speaker": "an",
      "Chinese": "你好吗？",
      "English": "How are you?",
      "Soundfile": "dialog3.ogg"
    },
    {
      "Lesson": 1,
      "Speaker": "meimei",
      "Chinese": "我很好！你呢？",
      "English": "I'm good! And you?",
      "Soundfile": "dialog4.ogg"
    },
    {
      "Lesson": 1,
      "Speaker": "an",
      "Chinese": "我很好。",
      "English": "I'm good.",
      "Soundfile": "dialog5.ogg"
    },
    {
      "Lesson": 1,
      "Speaker": "an",
      "Chinese": "~天文，~你好！",
      "English": "Hello, Tianwen!",
      "Soundfile": "dialog6.ogg"
    },
    {
      "Lesson": 1,
      "Speaker": "tianwen",
      "Chinese": "安，~你好！",
      "English": "Hello, An!",
      "Soundfile": "dialog7.ogg"
    },
    {
      "Lesson": 1,
      "Speaker": "an",
      "Chinese": "你好吗？",
      "English": "How are you?",
      "Soundfile": "dialog8.ogg"
    },
    {
      "Lesson": 1,
      "Speaker": "tianwen",
      "Chinese": "我很累！",
      "English": "I'm tired!",
      "Soundfile": "dialog9.ogg"
    },
    {
      "Lesson": 2,
      "Speaker": "an",
      "Chinese": "~梅梅，~你好！",
      "English": "Hello, Meimei!",
      "Soundfile": "dialog10.ogg"
    },
    {
      "Lesson": 2,
      "Speaker": "meimei",
      "Chinese": "~你好！",
      "English": "Hello!",
      "Soundfile": "dialog11.ogg"
    },
    {
      "Lesson": 2,
      "Speaker": "an",
      "Chinese": "~生日~快乐！",
      "English": "Happy birthday!",
      "Soundfile": "dialog12.ogg"
    },
    {
      "Lesson": 2,
      "Speaker": "meimei",
      "Chinese": "~谢谢！",
      "English": "Thank you!",
      "Soundfile": "dialog13.ogg"
    },
    {
      "Lesson": 2,
      "Speaker": "an",
      "Chinese": "~哈哈！不~客气。~再见！",
      "English": "Ha ha! Don't mention it. Good bye!",
      "Soundfile": "dialog14.ogg"
    },
    {
      "Lesson": 2,
      "Speaker": "meimei",
      "Chinese": "~再见！~谢谢！",
      "English": "Good bye! Thank you!",
      "Soundfile": "dialog15.ogg"
    },
    {
      "Lesson": 3,
      "Speaker": "meimei",
      "Chinese": "一二三四五六七八九十",
      "English": "One, two, three, four, five, six, seven, eight, nine, ten.",
      "Soundfile": "dialog16.ogg"
    },
    {
      "Lesson": 4,
      "Speaker": "tianwen",
      "Chinese": "你去~哪儿？",
      "English": "Where are you going?",
      "Soundfile": "dialog17.ogg"
    },
    {
      "Lesson": 4,
      "Speaker": "an",
      "Chinese": "我去~商店。你呢？",
      "English": "I'm going to the shop. And you?",
      "Soundfile": "dialog18.ogg"
    },
    {
      "Lesson": 4,
      "Speaker": "tianwen",
      "Chinese": "我去~公园。",
      "English": "I'm going to the park.",
      "Soundfile": "dialog19.ogg"
    },
    {
      "Lesson": 4,
      "Speaker": "meimei",
      "Chinese": "~天文！你好吗？",
      "English": "Tianwen! How are you?",
      "Soundfile": "dialog20.ogg"
    },
    {
      "Lesson": 4,
      "Speaker": "tianwen",
      "Chinese": "我很好。",
      "English": "I'm good.",
      "Soundfile": "dialog21.ogg"
    },
    {
      "Lesson": 4,
      "Speaker": "meimei",
      "Chinese": "你去~哪儿？",
      "English": "Where are you going?",
      "Soundfile": "dialog22.ogg"
    },
    {
      "Lesson": 4,
      "Speaker": "tianwen",
      "Chinese": "我去~公园。你呢？",
      "English": "I'm going to the park. And you?",
      "Soundfile": "dialog23.ogg"
    },
    {
      "Lesson": 4,
      "Speaker": "meimei",
      "Chinese": "我回家。我很累！",
      "English": "I'm going home. I'm tired!",
      "Soundfile": "dialog24.ogg"
    },
    {
      "Lesson": 4,
      "Speaker": "tianwen",
      "Chinese": "~再见！",
      "English": "Good bye!",
      "Soundfile": "dialog25.ogg"
    },
    {
      "Lesson": 4,
      "Speaker": "meimei",
      "Chinese": "~再见！",
      "English": "Good bye!",
      "Soundfile": "dialog26.ogg"
    },
    {
      "Lesson": 5,
      "Speaker": "an",
      "Chinese": "~妈妈，~再见！",
      "English": "Good bye, mother!",
      "Soundfile": "dialog27.ogg"
    },
    {
      "Lesson": 5,
      "Speaker": "mama",
      "Chinese": "安，你去~哪儿？",
      "English": "An, where are you going?",
      "Soundfile": "dialog28.ogg"
    },
    {
      "Lesson": 5,
      "Speaker": "an",
      "Chinese": "我去~商店。",
      "English": "I'm going the shop.",
      "Soundfile": "dialog29.ogg"
    },
    {
      "Lesson": 5,
      "Speaker": "mama",
      "Chinese": "你有~手机吗？",
      "English": "So you have your mobile phone?",
      "Soundfile": "dialog30.ogg"
    },
    {
      "Lesson": 5,
      "Speaker": "an",
      "Chinese": "有。",
      "English": "I have it.",
      "Soundfile": "dialog31.ogg"
    },
    {
      "Lesson": 5,
      "Speaker": "mama",
      "Chinese": "你有钱吗？",
      "English": "Do you have money?",
      "Soundfile": "dialog32.ogg"
    },
    {
      "Lesson": 5,
      "Speaker": "an",
      "Chinese": "有。",
      "English": "I have some.",
      "Soundfile": "dialog33.ogg"
    },
    {
      "Lesson": 5,
      "Speaker": "mama",
      "Chinese": "你有水吗？",
      "English": "Do you have water?",
      "Soundfile": "dialog34.ogg"
    },
    {
      "Lesson": 5,
      "Speaker": "an",
      "Chinese": "没有。",
      "English": "I don't have any.",
      "Soundfile": "dialog35.ogg"
    },
    {
      "Lesson": 5,
      "Speaker": "mama",
      "Chinese": "我有水。",
      "English": "I have water.",
      "Soundfile": "dialog36.ogg"
    },
    {
      "Lesson": 5,
      "Speaker": "an",
      "Chinese": "~~太好了！~谢谢！",
      "English": "Fantastic! Thank you!",
      "Soundfile": "dialog37.ogg"
    },
    {
      "Lesson": 5,
      "Speaker": "mama",
      "Chinese": "不~客气。",
      "English": "Don't mention it.",
      "Soundfile": "dialog38.ogg"
    },
    {
      "Lesson": 6,
      "Speaker": "tianwen",
      "Chinese": "~梅梅，~我们去~公园吧！",
      "English": "Meimei, let's go to the park!",
      "Soundfile": "dialog39.ogg"
    },
    {
      "Lesson": 6,
      "Speaker": "meimei",
      "Chinese": "好！",
      "English": "OK!",
      "Soundfile": "dialog40.ogg"
    },
    {
      "Lesson": 6,
      "Speaker": "tianwen",
      "Chinese": "你有球吗？",
      "English": "Do you have a ball?",
      "Soundfile": "dialog41.ogg"
    },
    {
      "Lesson": 6,
      "Speaker": "meimei",
      "Chinese": "没有。安有球。",
      "English": "I don't have one. An has a ball.",
      "Soundfile": "dialog42.ogg"
    },
    {
      "Lesson": 6,
      "Speaker": "tianwen",
      "Chinese": "安！~你好！",
      "English": "Hello, An!",
      "Soundfile": "dialog43.ogg"
    },
    {
      "Lesson": 6,
      "Speaker": "an",
      "Chinese": "~你们好！~你们去~哪儿？",
      "English": "Hello both of you! Where are you going?",
      "Soundfile": "dialog44.ogg"
    },
    {
      "Lesson": 6,
      "Speaker": "meimei",
      "Chinese": "~我们去~公园。~我们没有球。",
      "English": "We're going to the park. We don't have a ball.",
      "Soundfile": "dialog45.ogg"
    },
    {
      "Lesson": 6,
      "Speaker": "an",
      "Chinese": "我有球！",
      "English": "I have a ball!",
      "Soundfile": "dialog46.ogg"
    },
    {
      "Lesson": 6,
      "Speaker": "tianwen",
      "Chinese": "~~太好了！~谢谢！",
      "English": "Fantastic! Thank you!",
      "Soundfile": "dialog47.ogg"
    },
    {
      "Lesson": 6,
      "Speaker": "meimei",
      "Chinese": "~我们去~公园吧！",
      "English": "Let's go to the park!",
      "Soundfile": "dialog48.ogg"
    },
    {
      "Lesson": 6,
      "Speaker": "an",
      "Chinese": "好！走吧！",
      "English": "OK! Let's go!",
      "Soundfile": "dialog49.ogg"
    },
    {
      "Lesson": 7,
      "Speaker": "meimei",
      "Chinese": "~你好！这是我~爸爸。",
      "English": "Hello! This is my father.",
      "Soundfile": "dialog50.ogg"
    },
    {
      "Lesson": 7,
      "Speaker": "meimei",
      "Chinese": "他叫~李敏。他是~老师。",
      "English": "He is called Li Min. He is a teacher.",
      "Soundfile": "dialog50.ogg"
    },
    {
      "Lesson": 7,
      "Speaker": "meimei",
      "Chinese": "这是我~妈妈。她叫~王琴。",
      "English": "This is my mother. She is called Wang Qin.",
      "Soundfile": "dialog51.ogg"
    },
    {
      "Lesson": 7,
      "Speaker": "meimei",
      "Chinese": "这是我~哥哥。他叫~李伟。",
      "English": "This is my older brother. He is called Li Wei.",
      "Soundfile": "dialog52.ogg"
    },
    {
      "Lesson": 7,
      "Speaker": "meimei",
      "Chinese": "这是我~姐姐。她叫~李静",
      "English": "This is my older sister. She is called Li Jing.",
      "Soundfile": "dialog53.ogg"
    },
    {
      "Lesson": 7,
      "Speaker": "meimei",
      "Chinese": "这是我~朋友。她叫安。",
      "English": "This is my friend. She is called An.",
      "Soundfile": "dialog54.ogg"
    },
    {
      "Lesson": 8,
      "Speaker": "tianwen",
      "Chinese": "安，~你好！你吃~什么？",
      "English": "Hello, An! What are you eating?",
      "Soundfile": "dialog55.ogg"
    },
    {
      "Lesson": 8,
      "Speaker": "an",
      "Chinese": "我吃面。你呢？",
      "English": "I'm having noodles. And you?",
      "Soundfile": "dialog56.ogg"
    },
    {
      "Lesson": 8,
      "Speaker": "tianwen",
      "Chinese": "我吃~米饭。你喝~什么？",
      "English": "I'm having rice. What are you drinking?",
      "Soundfile": "dialog57.ogg"
    },
    {
      "Lesson": 8,
      "Speaker": "an",
      "Chinese": "我喝~可乐。你呢？",
      "English": "I'm drinking cola. And you?",
      "Soundfile": "dialog58.ogg"
    },
    {
      "Lesson": 8,
      "Speaker": "tianwen",
      "Chinese": "我喝茶。安，你有钱吗？",
      "English": "I'm drinking tea. An, do you have money?",
      "Soundfile": "dialog59.ogg"
    },
    {
      "Lesson": 8,
      "Speaker": "an",
      "Chinese": "有。你没有钱吗？",
      "English": "I have some. Don't you have any money?",
      "Soundfile": "dialog60.ogg"
    },
    {
      "Lesson": 8,
      "Speaker": "tianwen",
      "Chinese": "没有。",
      "English": "I don't have any.",
      "Soundfile": "dialog61.ogg"
    },
    {
      "Lesson": 8,
      "Speaker": "an",
      "Chinese": "~哎呀！~天文！",
      "English": "Oh, Tianwen!",
      "Soundfile": "dialog62.ogg"
    },
    {
      "Lesson": 9,
      "Speaker": "meimei",
      "Chinese": "~你好！我叫~梅梅！",
      "English": "Hello! I'm called Meimei!",
      "Soundfile": "dialog63.ogg"
    },
    {
      "Lesson": 9,
      "Speaker": "meimei",
      "Chinese": "我住在~中国~北京。",
      "English": "I live in Beijing, China.",
      "Soundfile": "dialog63.ogg"
    },
    {
      "Lesson": 9,
      "Speaker": "meimei",
      "Chinese": "我~十四岁。这是我~朋友。她叫安。",
      "English": "I'm fourteen years old. This is my friend. She is called An.",
      "Soundfile": "dialog64.ogg"
    },
    {
      "Lesson": 9,
      "Speaker": "meimei",
      "Chinese": "她也住在~北京。她~十三岁。",
      "English": "She also lives in Beijing. She is thirteen years old.",
      "Soundfile": "dialog65.ogg"
    },
    {
      "Lesson": 9,
      "Speaker": "meimei",
      "Chinese": "这是我~哥哥。他叫~李伟。他~二十岁。",
      "English": "This is my older brother. He is called Li Wei. He is twenty years old.",
      "Soundfile": "dialog66.ogg"
    },
    {
      "Lesson": 9,
      "Speaker": "meimei",
      "Chinese": "他不住在~北京。他住在~上海。",
      "English": "He doesn't live in Beijing. He lives in Shanghai.",
      "Soundfile": "dialog67.ogg"
    },
    {
      "Lesson": 10,
      "Speaker": "tianwen",
      "Chinese": "~梅梅，你做~什么？",
      "English": "Meimei, what are you doing?",
      "Soundfile": "dialog68.ogg"
    },
    {
      "Lesson": 10,
      "Speaker": "meimei",
      "Chinese": "我看书。",
      "English": "I'm reading.",
      "Soundfile": "dialog69.ogg"
    },
    {
      "Lesson": 10,
      "Speaker": "tianwen",
      "Chinese": "~我们去~公园吧。",
      "English": "Let's go to the park.",
      "Soundfile": "dialog70.ogg"
    },
    {
      "Lesson": 10,
      "Speaker": "meimei",
      "Chinese": "我不去~公园。",
      "English": "I won't go to the park.",
      "Soundfile": "dialog71.ogg"
    },
    {
      "Lesson": 10,
      "Speaker": "tianwen",
      "Chinese": "哦。~再见。",
      "English": "Oh. Good bye.",
      "Soundfile": "dialog72.ogg"
    },
    {
      "Lesson": 10,
      "Speaker": "meimei",
      "Chinese": "~再见！",
      "English": "Good bye!",
      "Soundfile": "dialog73.ogg"
    },
    {
      "Lesson": 10,
      "Speaker": "tianwen",
      "Chinese": "安，你做~什么？",
      "English": "An, what are you doing?",
      "Soundfile": "dialog74.ogg"
    },
    {
      "Lesson": 10,
      "Speaker": "an",
      "Chinese": "我发~短信。",
      "English": "I'm sending a text.",
      "Soundfile": "dialog75.ogg"
    },
    {
      "Lesson": 10,
      "Speaker": "tianwen",
      "Chinese": "~我们去~公园吧。",
      "English": "Let's go to the park.",
      "Soundfile": "dialog76.ogg"
    },
    {
      "Lesson": 10,
      "Speaker": "an",
      "Chinese": "我不去~公园。",
      "English": "I won't go to the park.",
      "Soundfile": "dialog77.ogg"
    },
    {
      "Lesson": 10,
      "Speaker": "tianwen",
      "Chinese": "你也不去~公园。我回家！",
      "English": "You won't go to the park either. I'm going home!",
      "Soundfile": "dialog78.ogg"
    },
    {
      "Lesson": 10,
      "Speaker": "an",
      "Chinese": "~再见！",
      "English": "Good bye!",
      "Soundfile": "dialog79.ogg"
    },
    {
      "Lesson": 10,
      "Speaker": "tianwen",
      "Chinese": "~再见！",
      "English": "Good bye!",
      "Soundfile": "dialog80.ogg"
    }
   ];
  return dialogData;
}
