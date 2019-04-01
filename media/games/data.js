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
      "soundfile": "vocab-1.ogg"
    },
    {
      "lesson": 1,
      "character": "你好",
      "pinyin": "nǐ hǎo",
      "english": "hello",
      "part of speech": "phrase",
      "notes": "Literally means 'you good'. A common way to say hello.",
      "testable": "y",
      "soundfile": "vocab-2.ogg"
    },
    {
      "lesson": 1,
      "character": "你",
      "pinyin": "nǐ",
      "english": "you",
      "part of speech": "pronoun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-3.ogg"
    },
    {
      "lesson": 1,
      "character": "好",
      "pinyin": "hǎo",
      "english": "good",
      "part of speech": "adjective",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-4.ogg"
    },
    {
      "lesson": 1,
      "character": "吗",
      "pinyin": "ma",
      "english": "(particle)",
      "part of speech": "particle",
      "notes": "This word is put at the end of a sentence to create a question.",
      "testable": "n",
      "soundfile": "vocab-5.ogg"
    },
    {
      "lesson": 1,
      "character": "我",
      "pinyin": "wǒ",
      "english": "I, me",
      "part of speech": "pronoun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-6.ogg"
    },
    {
      "lesson": 1,
      "character": "很",
      "pinyin": "hěn",
      "english": "very",
      "part of speech": "adverb",
      "notes": "In Chinese we say 'this very expensive' and 'my friend very tall'.",
      "testable": "y",
      "soundfile": "vocab-7.ogg"
    },
    {
      "lesson": 1,
      "character": "呢",
      "pinyin": "ne",
      "english": "(particle)",
      "part of speech": "particle",
      "notes": "Used to return a question that was just asked.",
      "testable": "n",
      "soundfile": "vocab-8.ogg"
    },
    {
      "lesson": 1,
      "character": "天文",
      "pinyin": "Tiānwén",
      "english": "Tianwen",
      "part of speech": "proper noun",
      "notes": "A boy's name. Tianwen means 'astronomy'.",
      "testable": "n",
      "soundfile": "vocab-9.ogg"
    },
    {
      "lesson": 1,
      "character": "安",
      "pinyin": "Ān",
      "english": "An",
      "part of speech": "proper noun",
      "notes": "A girl's name. An means 'peace'.",
      "testable": "n",
      "soundfile": "vocab-10.ogg"
    },
    {
      "lesson": 1,
      "character": "累",
      "pinyin": "lèi",
      "english": "tired",
      "part of speech": "adjective",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-11.ogg"
    },
    {
      "lesson": 2,
      "character": "生日",
      "pinyin": "shēngrì",
      "english": "birthday",
      "part of speech": "noun",
      "notes": "The characters literally mean 'birth' and 'day'.",
      "testable": "y",
      "soundfile": "vocab-12.ogg"
    },
    {
      "lesson": 2,
      "character": "快乐",
      "pinyin": "kuàilè",
      "english": "happy",
      "part of speech": "adjective",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-13.ogg"
    },
    {
      "lesson": 2,
      "character": "谢谢",
      "pinyin": "xièxie",
      "english": "thank you",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-14.ogg"
    },
    {
      "lesson": 2,
      "character": "哈哈",
      "pinyin": "hāhā",
      "english": "ha ha",
      "part of speech": "interjection",
      "notes": "",
      "testable": "n",
      "soundfile": "vocab-15.ogg"
    },
    {
      "lesson": 2,
      "character": "不",
      "pinyin": "bù",
      "english": "no, not",
      "part of speech": "adverb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-16.ogg"
    },
    {
      "lesson": 2,
      "character": "客气",
      "pinyin": "kèqi",
      "english": "polite",
      "part of speech": "adjective",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-17.ogg"
    },
    {
      "lesson": 2,
      "character": "再见",
      "pinyin": "zàijiàn",
      "english": "goodbye",
      "part of speech": "phrase",
      "notes": "Literally means 'again see'. A common way to say goodbye.",
      "testable": "y",
      "soundfile": "vocab-18.ogg"
    },
    {
      "lesson": 3,
      "character": "一",
      "pinyin": "yī",
      "english": "one",
      "part of speech": "number",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-19.ogg"
    },
    {
      "lesson": 3,
      "character": "二",
      "pinyin": "èr",
      "english": "two",
      "part of speech": "number",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-20.ogg"
    },
    {
      "lesson": 3,
      "character": "三",
      "pinyin": "sān",
      "english": "three",
      "part of speech": "number",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-21.ogg"
    },
    {
      "lesson": 3,
      "character": "四",
      "pinyin": "sì",
      "english": "four",
      "part of speech": "number",
      "notes": "Four is an unlucky number in Chinese culture.",
      "testable": "y",
      "soundfile": "vocab-22.ogg"
    },
    {
      "lesson": 3,
      "character": "五",
      "pinyin": "wǔ",
      "english": "five",
      "part of speech": "number",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-23.ogg"
    },
    {
      "lesson": 3,
      "character": "六",
      "pinyin": "liù",
      "english": "six",
      "part of speech": "number",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-24.ogg"
    },
    {
      "lesson": 3,
      "character": "七",
      "pinyin": "qī",
      "english": "seven",
      "part of speech": "number",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-25.ogg"
    },
    {
      "lesson": 3,
      "character": "八",
      "pinyin": "bā",
      "english": "eight",
      "part of speech": "number",
      "notes": "Eight is a lucky number in Chinese culture.",
      "testable": "y",
      "soundfile": "vocab-26.ogg"
    },
    {
      "lesson": 3,
      "character": "九",
      "pinyin": "jiǔ",
      "english": "nine",
      "part of speech": "number",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-27.ogg"
    },
    {
      "lesson": 3,
      "character": "十",
      "pinyin": "shí",
      "english": "ten",
      "part of speech": "number",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-28.ogg"
    },
    {
      "lesson": 4,
      "character": "去",
      "pinyin": "qù",
      "english": "go",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-29.ogg"
    },
    {
      "lesson": 4,
      "character": "哪儿",
      "pinyin": "nǎr",
      "english": "where",
      "part of speech": "pronoun",
      "notes": "儿 indicates an -r ending.",
      "testable": "y",
      "soundfile": "vocab-30.ogg"
    },
    {
      "lesson": 4,
      "character": "商店",
      "pinyin": "shāngdiàn",
      "english": "shop",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-31.ogg"
    },
    {
      "lesson": 4,
      "character": "公园",
      "pinyin": "gōngyuán",
      "english": "public park",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-32.ogg"
    },
    {
      "lesson": 4,
      "character": "回",
      "pinyin": "huí",
      "english": "return",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-33.ogg"
    },
    {
      "lesson": 4,
      "character": "家",
      "pinyin": "jiā",
      "english": "home",
      "part of speech": "noun",
      "notes": "You can't say 'go home' in Chinese, only 'return home'.",
      "testable": "y",
      "soundfile": "vocab-34.ogg"
    },
    {
      "lesson": 5,
      "character": "妈妈",
      "pinyin": "māma",
      "english": "mother",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-35.ogg"
    },
    {
      "lesson": 5,
      "character": "有",
      "pinyin": "yǒu",
      "english": "have",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-36.ogg"
    },
    {
      "lesson": 5,
      "character": "手机",
      "pinyin": "shǒujī",
      "english": "mobile phone",
      "part of speech": "noun",
      "notes": "Literally means 'hand machine'.",
      "testable": "y",
      "soundfile": "vocab-37.ogg"
    },
    {
      "lesson": 5,
      "character": "钱",
      "pinyin": "qián",
      "english": "money",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-38.ogg"
    },
    {
      "lesson": 5,
      "character": "水",
      "pinyin": "shuǐ",
      "english": "water",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-39.ogg"
    },
    {
      "lesson": 5,
      "character": "没",
      "pinyin": "méi",
      "english": "don't (have)",
      "part of speech": "adverb",
      "notes": "This is a special negative word used with the verb 有 (to have).",
      "testable": "y",
      "soundfile": "vocab-40.ogg"
    },
    {
      "lesson": 5,
      "character": "太好了",
      "pinyin": "tài hǎo le",
      "english": "fantastic",
      "part of speech": "phrase",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-41.ogg"
    },
    {
      "lesson": 6,
      "character": "吧",
      "pinyin": "ba",
      "english": "(particle)",
      "part of speech": "particle",
      "notes": "This word is put at the end of a sentence to create a suggestion.",
      "testable": "n",
      "soundfile": "vocab-42.ogg"
    },
    {
      "lesson": 6,
      "character": "球",
      "pinyin": "qiú",
      "english": "ball",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-43.ogg"
    },
    {
      "lesson": 6,
      "character": "你们",
      "pinyin": "nǐmen",
      "english": "you plural",
      "part of speech": "pronoun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-44.ogg"
    },
    {
      "lesson": 6,
      "character": "我们",
      "pinyin": "wǒmen",
      "english": "we",
      "part of speech": "pronoun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-45.ogg"
    },
    {
      "lesson": 6,
      "character": "走",
      "pinyin": "zǒu",
      "english": "walk, leave",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-46.ogg"
    },
    {
      "lesson": 7,
      "character": "这",
      "pinyin": "zhè",
      "english": "this",
      "part of speech": "pronoun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-47.ogg"
    },
    {
      "lesson": 7,
      "character": "是",
      "pinyin": "shì",
      "english": "is",
      "part of speech": "verb",
      "notes": "This word can only be used before nouns, and not adjectives.",
      "testable": "y",
      "soundfile": "vocab-48.ogg"
    },
    {
      "lesson": 7,
      "character": "爸爸",
      "pinyin": "bàba",
      "english": "father",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-49.ogg"
    },
    {
      "lesson": 7,
      "character": "她",
      "pinyin": "tā",
      "english": "she",
      "part of speech": "pronoun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-50.ogg"
    },
    {
      "lesson": 7,
      "character": "他",
      "pinyin": "tā",
      "english": "he",
      "part of speech": "pronoun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-50.ogg"
    },
    {
      "lesson": 7,
      "character": "叫",
      "pinyin": "jiào",
      "english": "called",
      "part of speech": "verb",
      "notes": "This can mean either 'to call' or 'to be called'.",
      "testable": "y",
      "soundfile": "vocab-51.ogg"
    },
    {
      "lesson": 7,
      "character": "李敏",
      "pinyin": "Lǐ Mǐn",
      "english": "Li Min",
      "part of speech": "proper noun",
      "notes": "A man's name. Min means 'intelligent'.",
      "testable": "n",
      "soundfile": "vocab-52.ogg"
    },
    {
      "lesson": 7,
      "character": "老师",
      "pinyin": "lǎoshī",
      "english": "teacher",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-53.ogg"
    },
    {
      "lesson": 7,
      "character": "哥哥",
      "pinyin": "gēge",
      "english": "older brother",
      "part of speech": "noun",
      "notes": "Chinese has a different word for younger brother: dìdi.",
      "testable": "y",
      "soundfile": "vocab-54.ogg"
    },
    {
      "lesson": 7,
      "character": "姐姐",
      "pinyin": "jiějie",
      "english": "older sister",
      "part of speech": "noun",
      "notes": "Chinese has a different word for younger sister: mèimei.",
      "testable": "y",
      "soundfile": "vocab-55.ogg"
    },
    {
      "lesson": 7,
      "character": "朋友",
      "pinyin": "péngyou",
      "english": "friend",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-56.ogg"
    },
    {
      "lesson": 7,
      "character": "王琴",
      "pinyin": "Wáng Qín",
      "english": "Wang Qin",
      "part of speech": "proper noun",
      "notes": "A woman's name. Qin means 'musical instrument'.",
      "testable": "n",
      "soundfile": "vocab-57.ogg"
    },
    {
      "lesson": 7,
      "character": "李伟",
      "pinyin": "Lǐ Wěi",
      "english": "Li Wei",
      "part of speech": "proper noun",
      "notes": "A boy's name. Wei means 'great'.",
      "testable": "n",
      "soundfile": "vocab-58.ogg"
    },
    {
      "lesson": 7,
      "character": "李静",
      "pinyin": "Lǐ Jìng",
      "english": "Li Jing",
      "part of speech": "proper noun",
      "notes": "A girl's name. Jing means 'silence'.",
      "testable": "n",
      "soundfile": "vocab-59.ogg"
    },
    {
      "lesson": 8,
      "character": "吃",
      "pinyin": "chī",
      "english": "eat",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-60.ogg"
    },
    {
      "lesson": 8,
      "character": "什么",
      "pinyin": "shénme",
      "english": "what",
      "part of speech": "pronoun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-61.ogg"
    },
    {
      "lesson": 8,
      "character": "面",
      "pinyin": "miàn",
      "english": "noodles",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-62.ogg"
    },
    {
      "lesson": 8,
      "character": "喝",
      "pinyin": "hē",
      "english": "drink",
      "part of speech": "verb",
      "notes": "In Chinese, you 'drink' soup!",
      "testable": "y",
      "soundfile": "vocab-63.ogg"
    },
    {
      "lesson": 8,
      "character": "可乐",
      "pinyin": "kělè",
      "english": "cola",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-64.ogg"
    },
    {
      "lesson": 8,
      "character": "米饭",
      "pinyin": "mǐfàn",
      "english": "rice",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-65.ogg"
    },
    {
      "lesson": 8,
      "character": "茶",
      "pinyin": "chá",
      "english": "tea",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-66.ogg"
    },
    {
      "lesson": 8,
      "character": "哎呀",
      "pinyin": "āiyā",
      "english": "oh no",
      "part of speech": "interjection",
      "notes": "Chinese sometimes say this when they are frustrated.",
      "testable": "n",
      "soundfile": "vocab-67.ogg"
    },
    {
      "lesson": 9,
      "character": "中国",
      "pinyin": "Zhōngguó",
      "english": "China",
      "part of speech": "proper noun",
      "notes": "Literally means 'middle kingdom'.",
      "testable": "y",
      "soundfile": "vocab-68.ogg"
    },
    {
      "lesson": 9,
      "character": "北京",
      "pinyin": "Běijīng",
      "english": "Beijing",
      "part of speech": "proper noun",
      "notes": "Literally means 'north capital'.",
      "testable": "y",
      "soundfile": "vocab-69.ogg"
    },
    {
      "lesson": 9,
      "character": "十四",
      "pinyin": "shísì",
      "english": "fourteen",
      "part of speech": "number",
      "notes": "",
      "testable": "n",
      "soundfile": "vocab-70.ogg"
    },
    {
      "lesson": 9,
      "character": "十三",
      "pinyin": "shísān",
      "english": "thirteen",
      "part of speech": "number",
      "notes": "",
      "testable": "n",
      "soundfile": "vocab-71.ogg"
    },
    {
      "lesson": 9,
      "character": "二十",
      "pinyin": "èrshí",
      "english": "twenty",
      "part of speech": "number",
      "notes": "",
      "testable": "n",
      "soundfile": "vocab-72.ogg"
    },
    {
      "lesson": 9,
      "character": "岁",
      "pinyin": "suì",
      "english": "years old",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-73.ogg"
    },
    {
      "lesson": 9,
      "character": "也",
      "pinyin": "yě",
      "english": "also",
      "part of speech": "adverb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-74.ogg"
    },
    {
      "lesson": 9,
      "character": "住",
      "pinyin": "zhù",
      "english": "live",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-75.ogg"
    },
    {
      "lesson": 9,
      "character": "在",
      "pinyin": "zài",
      "english": "in, at, on",
      "part of speech": "preposition",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-76.ogg"
    },
    {
      "lesson": 9,
      "character": "上海",
      "pinyin": "Shànghǎi",
      "english": "Shanghai",
      "part of speech": "proper noun",
      "notes": "China's largest city. Literally means 'on the sea'.",
      "testable": "y",
      "soundfile": "vocab-77.ogg"
    },
    {
      "lesson": 10,
      "character": "做",
      "pinyin": "zuò",
      "english": "do",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-78.ogg"
    },
    {
      "lesson": 10,
      "character": "看",
      "pinyin": "kàn",
      "english": "look, watch",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-79.ogg"
    },
    {
      "lesson": 10,
      "character": "书",
      "pinyin": "shū",
      "english": "book",
      "part of speech": "noun",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-80.ogg"
    },
    {
      "lesson": 10,
      "character": "哦",
      "pinyin": "ò",
      "english": "oh",
      "part of speech": "interjection",
      "notes": "",
      "testable": "n",
      "soundfile": "vocab-81.ogg"
    },
    {
      "lesson": 10,
      "character": "发",
      "pinyin": "fā",
      "english": "send",
      "part of speech": "verb",
      "notes": "",
      "testable": "y",
      "soundfile": "vocab-82.ogg"
    },
    {
      "lesson": 10,
      "character": "短信",
      "pinyin": "duǎnxìn",
      "english": "text message",
      "part of speech": "noun",
      "notes": "Literally means 'short letter'.",
      "testable": "y",
      "soundfile": "vocab-83.ogg"
    }
   ];
  return dictionaryData;
}
function getDialogData () {
  var dialogData = [
    {
      "lesson": 1,
      "speaker": "an",
      "chinese": "~梅梅，~你好！",
      "english": "Hello, Meimei!",
      "soundfile": "leah-1.ogg"
    },
    {
      "lesson": 1,
      "speaker": "meimei",
      "chinese": "~你好！",
      "english": "Hello!",
      "soundfile": "dan-1.ogg"
    },
    {
      "lesson": 1,
      "speaker": "an",
      "chinese": "你好吗？",
      "english": "How are you?",
      "soundfile": "leah-2.ogg"
    },
    {
      "lesson": 1,
      "speaker": "meimei",
      "chinese": "我很好！你呢？",
      "english": "I'm good! And you?",
      "soundfile": "dan-2.ogg"
    },
    {
      "lesson": 1,
      "speaker": "an",
      "chinese": "我很好。",
      "english": "I'm good.",
      "soundfile": "leah-3.ogg"
    },
    {
      "lesson": 1,
      "speaker": "an",
      "chinese": "~天文，~你好！",
      "english": "Hello, Tianwen!",
      "soundfile": "leah-4.ogg"
    },
    {
      "lesson": 1,
      "speaker": "tianwen",
      "chinese": "安，~你好！",
      "english": "Hello, An!",
      "soundfile": "jerry-1.ogg"
    },
    {
      "lesson": 1,
      "speaker": "an",
      "chinese": "你好吗？",
      "english": "How are you?",
      "soundfile": "leah-5.ogg"
    },
    {
      "lesson": 1,
      "speaker": "tianwen",
      "chinese": "我很累！",
      "english": "I'm tired!",
      "soundfile": "jerry-2.ogg"
    },
    {
      "lesson": 2,
      "speaker": "an",
      "chinese": "~梅梅，~你好！",
      "english": "Hello, Meimei!",
      "soundfile": "leah-6.ogg"
    },
    {
      "lesson": 2,
      "speaker": "meimei",
      "chinese": "~你好！",
      "english": "Hello!",
      "soundfile": "dan-3.ogg"
    },
    {
      "lesson": 2,
      "speaker": "an",
      "chinese": "~生日~快乐！",
      "english": "Happy birthday!",
      "soundfile": "leah-7.ogg"
    },
    {
      "lesson": 2,
      "speaker": "meimei",
      "chinese": "~谢谢！",
      "english": "Thank you!",
      "soundfile": "dan-4.ogg"
    },
    {
      "lesson": 2,
      "speaker": "an",
      "chinese": "~哈哈！不~客气。~再见！",
      "english": "Ha ha! Don't mention it. Good bye!",
      "soundfile": "leah-8.ogg"
    },
    {
      "lesson": 2,
      "speaker": "meimei",
      "chinese": "~再见！~谢谢！",
      "english": "Good bye! Thank you!",
      "soundfile": "dan-5.ogg"
    },
    {
      "lesson": 3,
      "speaker": "meimei",
      "chinese": "一二三四五六七八九十",
      "english": "One, two, three, four, five, six, seven, eight, nine, ten.",
      "soundfile": "dan-6.ogg"
    },
    {
      "lesson": 4,
      "speaker": "tianwen",
      "chinese": "你去~哪儿？",
      "english": "Where are you going?",
      "soundfile": "jerry-3.ogg"
    },
    {
      "lesson": 4,
      "speaker": "an",
      "chinese": "我去~商店。你呢？",
      "english": "I'm going to the shop. And you?",
      "soundfile": "leah-9.ogg"
    },
    {
      "lesson": 4,
      "speaker": "tianwen",
      "chinese": "我去~公园。",
      "english": "I'm going to the park.",
      "soundfile": "jerry-4.ogg"
    },
    {
      "lesson": 4,
      "speaker": "meimei",
      "chinese": "~天文！你好吗？",
      "english": "Tianwen! How are you?",
      "soundfile": "dan-7.ogg"
    },
    {
      "lesson": 4,
      "speaker": "tianwen",
      "chinese": "我很好。",
      "english": "I'm good.",
      "soundfile": "jerry-5.ogg"
    },
    {
      "lesson": 4,
      "speaker": "meimei",
      "chinese": "你去~哪儿？",
      "english": "Where are you going?",
      "soundfile": "dan-8.ogg"
    },
    {
      "lesson": 4,
      "speaker": "tianwen",
      "chinese": "我去~公园。你呢？",
      "english": "I'm going to the park. And you?",
      "soundfile": "jerry-6.ogg"
    },
    {
      "lesson": 4,
      "speaker": "meimei",
      "chinese": "我回家。我很累！",
      "english": "I'm going home. I'm tired!",
      "soundfile": "dan-9.ogg"
    },
    {
      "lesson": 4,
      "speaker": "tianwen",
      "chinese": "~再见！",
      "english": "Good bye!",
      "soundfile": "jerry-7.ogg"
    },
    {
      "lesson": 4,
      "speaker": "meimei",
      "chinese": "~再见！",
      "english": "Good bye!",
      "soundfile": "dan-10.ogg"
    },
    {
      "lesson": 5,
      "speaker": "an",
      "chinese": "~妈妈，~再见！",
      "english": "Good bye, mother!",
      "soundfile": "leah-10.ogg"
    },
    {
      "lesson": 5,
      "speaker": "mama",
      "chinese": "安，你去~哪儿？",
      "english": "An, where are you going?",
      "soundfile": "dan-11.ogg"
    },
    {
      "lesson": 5,
      "speaker": "an",
      "chinese": "我去~商店。",
      "english": "I'm going the shop.",
      "soundfile": "leah-11.ogg"
    },
    {
      "lesson": 5,
      "speaker": "mama",
      "chinese": "你有~手机吗？",
      "english": "So you have your mobile phone?",
      "soundfile": "dan-12.ogg"
    },
    {
      "lesson": 5,
      "speaker": "an",
      "chinese": "有。",
      "english": "I have it.",
      "soundfile": "leah-12.ogg"
    },
    {
      "lesson": 5,
      "speaker": "mama",
      "chinese": "你有钱吗？",
      "english": "Do you have money?",
      "soundfile": "dan-13.ogg"
    },
    {
      "lesson": 5,
      "speaker": "an",
      "chinese": "有。",
      "english": "I have some.",
      "soundfile": "leah-13.ogg"
    },
    {
      "lesson": 5,
      "speaker": "mama",
      "chinese": "你有水吗？",
      "english": "Do you have water?",
      "soundfile": "dan-14.ogg"
    },
    {
      "lesson": 5,
      "speaker": "an",
      "chinese": "没有。",
      "english": "I don't have any.",
      "soundfile": "leah-14.ogg"
    },
    {
      "lesson": 5,
      "speaker": "mama",
      "chinese": "我有水。",
      "english": "I have water.",
      "soundfile": "dan-15.ogg"
    },
    {
      "lesson": 5,
      "speaker": "an",
      "chinese": "~~太好了！~谢谢！",
      "english": "Fantastic! Thank you!",
      "soundfile": "leah-15.ogg"
    },
    {
      "lesson": 5,
      "speaker": "mama",
      "chinese": "不~客气。",
      "english": "Don't mention it.",
      "soundfile": "dan-16.ogg"
    },
    {
      "lesson": 6,
      "speaker": "tianwen",
      "chinese": "~梅梅，~我们去~公园吧！",
      "english": "Meimei, let's go to the park!",
      "soundfile": "jerry-8.ogg"
    },
    {
      "lesson": 6,
      "speaker": "meimei",
      "chinese": "好！",
      "english": "OK!",
      "soundfile": "dan-17.ogg"
    },
    {
      "lesson": 6,
      "speaker": "tianwen",
      "chinese": "你有球吗？",
      "english": "Do you have a ball?",
      "soundfile": "jerry-9.ogg"
    },
    {
      "lesson": 6,
      "speaker": "meimei",
      "chinese": "没有。安有球。",
      "english": "I don't have one. An has a ball.",
      "soundfile": "dan-18.ogg"
    },
    {
      "lesson": 6,
      "speaker": "tianwen",
      "chinese": "安！~你好！",
      "english": "Hello, An!",
      "soundfile": "jerry-10.ogg"
    },
    {
      "lesson": 6,
      "speaker": "an",
      "chinese": "~你们好！~你们去~哪儿？",
      "english": "Hello both of you! Where are you going?",
      "soundfile": "leah-16.ogg"
    },
    {
      "lesson": 6,
      "speaker": "meimei",
      "chinese": "~我们去~公园。~我们没有球。",
      "english": "We're going to the park. We don't have a ball.",
      "soundfile": "dan-19.ogg"
    },
    {
      "lesson": 6,
      "speaker": "an",
      "chinese": "我有球！",
      "english": "I have a ball!",
      "soundfile": "leah-17.ogg"
    },
    {
      "lesson": 6,
      "speaker": "tianwen",
      "chinese": "~~太好了！~谢谢！",
      "english": "Fantastic! Thank you!",
      "soundfile": "jerry-11.ogg"
    },
    {
      "lesson": 6,
      "speaker": "meimei",
      "chinese": "~我们去~公园吧！",
      "english": "Let's go to the park!",
      "soundfile": "dan-20.ogg"
    },
    {
      "lesson": 6,
      "speaker": "an",
      "chinese": "好！走吧！",
      "english": "OK! Let's go!",
      "soundfile": "leah-18.ogg"
    },
    {
      "lesson": 7,
      "speaker": "meimei",
      "chinese": "~你好！这是我~爸爸。",
      "english": "Hello! This is my father.",
      "soundfile": "dan-21.ogg"
    },
    {
      "lesson": 7,
      "speaker": "meimei",
      "chinese": "他叫~李敏。他是~老师。",
      "english": "He is called Li Min. He is a teacher.",
      "soundfile": "dan-22.ogg"
    },
    {
      "lesson": 7,
      "speaker": "meimei",
      "chinese": "这是我~妈妈。她叫~王琴。",
      "english": "This is my mother. She is called Wang Qin.",
      "soundfile": "dan-23.ogg"
    },
    {
      "lesson": 7,
      "speaker": "meimei",
      "chinese": "这是我~哥哥。他叫~李伟。",
      "english": "This is my older brother. He is called Li Wei.",
      "soundfile": "dan-24.ogg"
    },
    {
      "lesson": 7,
      "speaker": "meimei",
      "chinese": "这是我~姐姐。她叫~李静",
      "english": "This is my older sister. She is called Li Jing.",
      "soundfile": "dan-25.ogg"
    },
    {
      "lesson": 7,
      "speaker": "meimei",
      "chinese": "这是我~朋友。她叫安。",
      "english": "This is my friend. She is called An.",
      "soundfile": "dan-26.ogg"
    },
    {
      "lesson": 8,
      "speaker": "tianwen",
      "chinese": "安，~你好！你吃~什么？",
      "english": "Hello, An! What are you eating?",
      "soundfile": "jerry-12.ogg"
    },
    {
      "lesson": 8,
      "speaker": "an",
      "chinese": "我吃面。你呢？",
      "english": "I'm having noodles. And you?",
      "soundfile": "leah-19.ogg"
    },
    {
      "lesson": 8,
      "speaker": "tianwen",
      "chinese": "我吃~米饭。你喝~什么？",
      "english": "I'm having rice. What are you drinking?",
      "soundfile": "jerry-13.ogg"
    },
    {
      "lesson": 8,
      "speaker": "an",
      "chinese": "我喝~可乐。你呢？",
      "english": "I'm drinking cola. And you?",
      "soundfile": "leah-20.ogg"
    },
    {
      "lesson": 8,
      "speaker": "tianwen",
      "chinese": "我喝茶。安，你有钱吗？",
      "english": "I'm drinking tea. An, do you have money?",
      "soundfile": "jerry-14.ogg"
    },
    {
      "lesson": 8,
      "speaker": "an",
      "chinese": "有。你没有钱吗？",
      "english": "I have some. Don't you have any money?",
      "soundfile": "leah-21.ogg"
    },
    {
      "lesson": 8,
      "speaker": "tianwen",
      "chinese": "没有。",
      "english": "I don't have any.",
      "soundfile": "jerry-15.ogg"
    },
    {
      "lesson": 8,
      "speaker": "an",
      "chinese": "~哎呀！~天文！",
      "english": "Oh, Tianwen!",
      "soundfile": "leah-22.ogg"
    },
    {
      "lesson": 9,
      "speaker": "meimei",
      "chinese": "~你好！我叫~梅梅！我住在~中国~北京。",
      "english": "Hello! I'm called Meimei! I live in Beijing, China.",
      "soundfile": "dan-27.ogg"
    },
    {
      "lesson": 9,
      "speaker": "meimei",
      "chinese": "我~十四岁。这是我~朋友。她叫安。",
      "english": "I'm fourteen years old. This is my friend. She is called An.",
      "soundfile": "dan-28.ogg"
    },
    {
      "lesson": 9,
      "speaker": "meimei",
      "chinese": "她也住在~北京。她~十三岁。",
      "english": "She also lives in Beijing. She is thirteen years old.",
      "soundfile": "dan-29.ogg"
    },
    {
      "lesson": 9,
      "speaker": "meimei",
      "chinese": "这是我~哥哥。他叫~李伟。他~二十岁。",
      "english": "This is my older brother. He is called Li Wei. He is twenty years old.",
      "soundfile": "dan-30.ogg"
    },
    {
      "lesson": 9,
      "speaker": "meimei",
      "chinese": "他不住在~北京。他住在~上海。",
      "english": "He doesn't live in Beijing. He lives in Shanghai.",
      "soundfile": "dan-31.ogg"
    },
    {
      "lesson": 10,
      "speaker": "tianwen",
      "chinese": "~梅梅，你做~什么？",
      "english": "Meimei, what are you doing?",
      "soundfile": "jerry-16.ogg"
    },
    {
      "lesson": 10,
      "speaker": "meimei",
      "chinese": "我看书。",
      "english": "I'm reading.",
      "soundfile": "dan-32.ogg"
    },
    {
      "lesson": 10,
      "speaker": "tianwen",
      "chinese": "~我们去~公园吧。",
      "english": "Let's go to the park.",
      "soundfile": "jerry-17.ogg"
    },
    {
      "lesson": 10,
      "speaker": "meimei",
      "chinese": "我不去~公园。",
      "english": "I won't go to the park.",
      "soundfile": "dan-33.ogg"
    },
    {
      "lesson": 10,
      "speaker": "tianwen",
      "chinese": "哦。~再见。",
      "english": "Oh. Good bye.",
      "soundfile": "jerry-18.ogg"
    },
    {
      "lesson": 10,
      "speaker": "meimei",
      "chinese": "~再见！",
      "english": "Good bye!",
      "soundfile": "dan-34.ogg"
    },
    {
      "lesson": 10,
      "speaker": "tianwen",
      "chinese": "安，你做~什么？",
      "english": "An, what are you doing?",
      "soundfile": "jerry-19.ogg"
    },
    {
      "lesson": 10,
      "speaker": "an",
      "chinese": "我发~短信。",
      "english": "I'm sending a text.",
      "soundfile": "leah-23.ogg"
    },
    {
      "lesson": 10,
      "speaker": "tianwen",
      "chinese": "~我们去~公园吧。",
      "english": "Let's go to the park.",
      "soundfile": "jerry-20.ogg"
    },
    {
      "lesson": 10,
      "speaker": "an",
      "chinese": "我不去~公园。",
      "english": "I won't go to the park.",
      "soundfile": "leah-24.ogg"
    },
    {
      "lesson": 10,
      "speaker": "tianwen",
      "chinese": "你也不去~公园。我回家！",
      "english": "You won't go to the park either. I'm going home!",
      "soundfile": "jerry-21.ogg"
    },
    {
      "lesson": 10,
      "speaker": "an",
      "chinese": "~再见！",
      "english": "Good bye!",
      "soundfile": "leah-25.ogg"
    },
    {
      "lesson": 10,
      "speaker": "tianwen",
      "chinese": "~再见！",
      "english": "Good bye!",
      "soundfile": "jerry-22.ogg"
    }
   ];
  return dialogData;
}

function getPinyinData () {
  slideData = [
    {
      "lesson": 1,
      "title": "First Tone",
      "blurb": "The first tone sounds like singing a note.",
      "sounds": ["shēng", "yī", "sān", "qī"]
    },
    {
      "lesson": 1,
      "title": "Second Tone",
      "blurb": "To make the second tone, raise your voice like asking a question.",
      "sounds": ["yuán", "huí", "qián", "shí"]
    },
    {
      "lesson": 1,
      "title": "Third Tone",
      "blurb": "The third tone is very low, like a growl.",
      "sounds": ["nǐ", "hǎo", "wǒ", "hěn"]
    },
    {
      "lesson": 1,
      "title": "Fourth Tone",
      "blurb": "The fourth tone starts high and ends low, like shouting 'ouch'!",
      "sounds": ["lèi", "rì", "kuài", "lè"]
    },
    {
      "lesson": 1,
      "title": "Distinguish the sounds",
      "blurb": "Can you hear the difference between these sounds?",
      "sounds": ["mā", "má", "mǎ", "mà"]
    },
    {
      "lesson": 1,
      "title": "Distinguish the sounds",
      "blurb": "Can you hear the difference between these sounds?",
      "sounds": ["qī", "qí", "qǐ", "qì"]
    },
    {
      "lesson": 2,
      "title": "The C sound",
      "blurb": "",
      "sounds": ["cā", "cán", "cǎi", "cè"]
    },
    {
      "lesson": 2,
      "title": "The Z sound",
      "blurb": "",
      "sounds": ["zài", "zuò", "zǒu", "zǐ"]
    },
    {
      "lesson": 2,
      "title": "Distinguish the sounds",
      "blurb": "",
      "sounds": ["zǎi", "zài", "cǎi", "cài"]
    },
    {
      "lesson": 2,
      "title": "Distinguish the sounds",
      "blurb": "",
      "sounds": ["zhā", "zhá", "chā", "chá"]
    },
    {
      "lesson": 3,
      "title": "The X sound",
      "blurb": "",
      "sounds": ["xī", "xiè", "xìn", "xǔ"]
    },
    {
      "lesson": 3,
      "title": "The Q sound",
      "blurb": "",
      "sounds": ["qī", "qián", "qiú", "qù"]
    },
    {
      "lesson": 3,
      "title": "Distinguish the sounds",
      "blurb": "",
      "sounds": ["xǐ", "xí", "qǐ", "qí"]
    },
    {
      "lesson": 3,
      "title": "Distinguish the sounds",
      "blurb": "",
      "sounds": ["xū", "xù", "qū", "qù"]
    },
    {
      "lesson": 4,
      "title": "The -e sound",
      "blurb": "",
      "sounds": ["gē", "chē", "hē", "kě"]
    },
    {
      "lesson": 4,
      "title": "The -en sound",
      "blurb": "",
      "sounds": ["gēn", "hěn", "shén", "wèn"]
    },
    {
      "lesson": 4,
      "title": "Distinguish the sounds",
      "blurb": "",
      "sounds": ["chā", "chà", "chē", "chè"]
    },
    {
      "lesson": 4,
      "title": "Distinguish the sounds",
      "blurb": "",
      "sounds": ["shǎn", "shàn", "shěn", "shèn"]
    },
    {
      "lesson": 5,
      "title": "The -i sound",
      "blurb": "",
      "sounds": ["bǐ", "mí", "nǐ", "qì"]
    },
    {
      "lesson": 5,
      "title": "The special -i sound",
      "blurb": "",
      "sounds": ["shī", "sì", "chī", "zǐ"]
    },
    {
      "lesson": 5,
      "title": "Distinguish the sounds",
      "blurb": "",
      "sounds": ["zhī", "zhí", "jī", "jí"]
    },
    {
      "lesson": 5,
      "title": "Distinguish the sounds",
      "blurb": "",
      "sounds": ["sī", "sì", "xī", "xì"]
    },
    {
      "lesson": 6,
      "title": "The -ou sound",
      "blurb": "",
      "sounds": ["gǒu", "zhōu", "lóu", "tóu"]
    },
    {
      "lesson": 6,
      "title": "The -uo sound",
      "blurb": "",
      "sounds": ["luò", "guò", "shuō", "cuò"]
    },
    {
      "lesson": 6,
      "title": "Distinguish the sounds",
      "blurb": "",
      "sounds": ["tuō", "tuó", "tōu", "tóu"]
    },
    {
      "lesson": 6,
      "title": "Distinguish the sounds",
      "blurb": "",
      "sounds": ["guǒ", "guò", "gǒu", "gòu"]
    },
    {
      "lesson": 7,
      "title": "The Y sound",
      "blurb": "",
      "sounds": ["yán", "yuè", "yě", "yú"]
    },
    {
      "lesson": 7,
      "title": "The W sound",
      "blurb": "",
      "sounds": ["wā", "wú", "wān", "wèn"]
    },
    {
      "lesson": 7,
      "title": "Distinguish the sounds",
      "blurb": "",
      "sounds": ["yā", "yá", "yē", "yé"]
    },
    {
      "lesson": 7,
      "title": "Distinguish the sounds",
      "blurb": "",
      "sounds": ["wǔ", "wù", "yǔ", "yù"]
    },
    {
      "lesson": 8,
      "title": "The -u sound",
      "blurb": "",
      "sounds": ["bù", "tú", "chū", "gǔ"]
    },
    {
      "lesson": 8,
      "title": "The -ü sound",
      "blurb": "",
      "sounds": ["yú", "xú", "jù", "qù"]
    },
    {
      "lesson": 8,
      "title": "Distinguish the sounds",
      "blurb": "",
      "sounds": ["chū", "chù", "qū", "qù"]
    },
    {
      "lesson": 8,
      "title": "Distinguish the sounds",
      "blurb": "",
      "sounds": ["jú", "jǔ", "zhú", "zhǔ"]
    },
    {
      "lesson": 9,
      "title": "The -ui sound",
      "blurb": "",
      "sounds": ["duì", "huí", "shuǐ", "guì"]
    },
    {
      "lesson": 9,
      "title": "The -iu sound",
      "blurb": "",
      "sounds": ["diū", "qiú", "jiǔ", "niú"]
    },
    {
      "lesson": 9,
      "title": "Distinguish the sounds",
      "blurb": "",
      "sounds": ["chuī", "chuí", "qiū", "qiú"]
    },
    {
      "lesson": 9,
      "title": "Distinguish the sounds",
      "blurb": "",
      "sounds": ["shuǐ", "shuì", "xiǔ", "xiù"]
    },
    {
      "lesson": 10,
      "title": "The Zh sound",
      "blurb": "",
      "sounds": ["zhàn", "zhāng", "zhòng", "zhēng"]
    },
    {
      "lesson": 10,
      "title": "The R sound",
      "blurb": "",
      "sounds": ["rè", "rì", "rén", "ràng"]
    },
    {
      "lesson": 10,
      "title": "Distinguish the sounds",
      "blurb": "",
      "sounds": ["rè", "rì", "zhè", "zhì"]
    },
    {
      "lesson": 10,
      "title": "Distinguish the sounds",
      "blurb": "",
      "sounds": ["zhāng", "zhàng", "zhēng", "zhèng"]
    }
  ]
  return slideData;
}


function getFireworksData () {
  slideData = [
    {
      "lesson": 1,
      "sounds": ["bāo", "báo", "bǎo", "bào"]
    },
    {
      "lesson": 1,
      "sounds": ["fāng", "fáng", "fǎng", "fàng"]
    },
    {
      "lesson": 1,
      "sounds": ["mā", "má", "mǎ", "mà"]
    },
    {
      "lesson": 1,
      "sounds": ["qī", "qí", "qǐ", "qì"]
    },
    {
      "lesson": 2,
      "sounds": ["zǎi", "zài", "cǎi", "cài"]
    },
    {
      "lesson": 2,
      "sounds": ["zhā", "zhá", "chā", "chá"]
    },
    {
      "lesson": 3,
      "sounds": ["xǐ", "xí", "qǐ", "qí"]
    },
    {
      "lesson": 3,
      "sounds": ["xū", "xù", "qū", "qù"]
    },
    {
      "lesson": 4,
      "sounds": ["chā", "chà", "chē", "chè"]
    },
    {
      "lesson": 4,
      "sounds": ["shǎn", "shàn", "shěn", "shèn"]
    },
    {
      "lesson": 5,
      "sounds": ["zhī", "zhí", "jī", "jí"]
    },
    {
      "lesson": 5,
      "sounds": ["sī", "sì", "xī", "xì"]
    },
    {
      "lesson": 6,
      "sounds": ["tuō", "tuó", "tōu", "tóu"]
    },
    {
      "lesson": 6,
      "sounds": ["guǒ", "guò", "gǒu", "gòu"]
    },
    {
      "lesson": 7,
      "sounds": ["yā", "yá", "yē", "yé"]
    },
    {
      "lesson": 7,
      "sounds": ["wǔ", "wù", "yǔ", "yù"]
    },
    {
      "lesson": 8,
      "sounds": ["chū", "chù", "qū", "qù"]
    },
    {
      "lesson": 8,
      "sounds": ["jú", "jǔ", "zhú", "zhǔ"]
    },
    {
      "lesson": 9,
      "sounds": ["chuī", "chuí", "qiū", "qiú"]
    },
    {
      "lesson": 9,
      "sounds": ["shuǐ", "shuì", "xiǔ", "xiù"]
    },
    {
      "lesson": 10,
      "sounds": ["rè", "rì", "zhè", "zhì"]
    },
    {
      "lesson": 10,
      "sounds": ["zhāng", "zhàng", "zhēng", "zhèng"]
    }
  ]
  return slideData;
}


function getPinyinSoundFiles() {
  var data = [
    {
      "pinyin": "shēng",
      "file": "pinyin-1.ogg"
    },
    {
      "pinyin": "yuán",
      "file": "pinyin-2.ogg"
    },
    {
      "pinyin": "rì",
      "file": "pinyin-3.ogg"
    },
    {
      "pinyin": "kuài",
      "file": "pinyin-4.ogg"
    },
    {
      "pinyin": "lè",
      "file": "pinyin-5.ogg"
    },
    {
      "pinyin": "mā",
      "file": "pinyin-6.ogg"
    },
    {
      "pinyin": "má",
      "file": "pinyin-7.ogg"
    },
    {
      "pinyin": "mǎ",
      "file": "pinyin-8.ogg"
    },
    {
      "pinyin": "mà",
      "file": "pinyin-9.ogg"
    },
    {
      "pinyin": "qí",
      "file": "pinyin-10.ogg"
    },
    {
      "pinyin": "qǐ",
      "file": "pinyin-11.ogg"
    },
    {
      "pinyin": "qì",
      "file": "pinyin-12.ogg"
    },
    {
      "pinyin": "bāo",
      "file": "pinyin-13.ogg"
    },
    {
      "pinyin": "báo",
      "file": "pinyin-14.ogg"
    },
    {
      "pinyin": "bǎo",
      "file": "pinyin-15.ogg"
    },
    {
      "pinyin": "bào",
      "file": "pinyin-16.ogg"
    },
    {
      "pinyin": "fāng",
      "file": "pinyin-17.ogg"
    },
    {
      "pinyin": "fáng",
      "file": "pinyin-18.ogg"
    },
    {
      "pinyin": "fǎng",
      "file": "pinyin-19.ogg"
    },
    {
      "pinyin": "fàng",
      "file": "pinyin-20.ogg"
    },
    {
      "pinyin": "cā",
      "file": "pinyin-21.ogg"
    },
    {
      "pinyin": "cán",
      "file": "pinyin-22.ogg"
    },
    {
      "pinyin": "cǎi",
      "file": "pinyin-23.ogg"
    },
    {
      "pinyin": "cè",
      "file": "pinyin-24.ogg"
    },
    {
      "pinyin": "zǐ",
      "file": "pinyin-25.ogg"
    },
    {
      "pinyin": "zǎi",
      "file": "pinyin-26.ogg"
    },
    {
      "pinyin": "cài",
      "file": "pinyin-27.ogg"
    },
    {
      "pinyin": "zhā",
      "file": "pinyin-28.ogg"
    },
    {
      "pinyin": "zhá",
      "file": "pinyin-29.ogg"
    },
    {
      "pinyin": "chā",
      "file": "pinyin-30.ogg"
    },
    {
      "pinyin": "xī",
      "file": "pinyin-31.ogg"
    },
    {
      "pinyin": "xiè",
      "file": "pinyin-32.ogg"
    },
    {
      "pinyin": "xìn",
      "file": "pinyin-33.ogg"
    },
    {
      "pinyin": "xǔ",
      "file": "pinyin-34.ogg"
    },
    {
      "pinyin": "xǐ",
      "file": "pinyin-35.ogg"
    },
    {
      "pinyin": "xí",
      "file": "pinyin-36.ogg"
    },
    {
      "pinyin": "xū",
      "file": "pinyin-37.ogg"
    },
    {
      "pinyin": "xù",
      "file": "pinyin-38.ogg"
    },
    {
      "pinyin": "qū",
      "file": "pinyin-39.ogg"
    },
    {
      "pinyin": "gē",
      "file": "pinyin-40.ogg"
    },
    {
      "pinyin": "chē",
      "file": "pinyin-41.ogg"
    },
    {
      "pinyin": "kě",
      "file": "pinyin-42.ogg"
    },
    {
      "pinyin": "gēn",
      "file": "pinyin-43.ogg"
    },
    {
      "pinyin": "shén",
      "file": "pinyin-44.ogg"
    },
    {
      "pinyin": "wèn",
      "file": "pinyin-45.ogg"
    },
    {
      "pinyin": "chà",
      "file": "pinyin-46.ogg"
    },
    {
      "pinyin": "chè",
      "file": "pinyin-47.ogg"
    },
    {
      "pinyin": "shǎn",
      "file": "pinyin-48.ogg"
    },
    {
      "pinyin": "shàn",
      "file": "pinyin-49.ogg"
    },
    {
      "pinyin": "shěn",
      "file": "pinyin-50.ogg"
    },
    {
      "pinyin": "shèn",
      "file": "pinyin-51.ogg"
    },
    {
      "pinyin": "bǐ",
      "file": "pinyin-52.ogg"
    },
    {
      "pinyin": "mí",
      "file": "pinyin-53.ogg"
    },
    {
      "pinyin": "shī",
      "file": "pinyin-54.ogg"
    },
    {
      "pinyin": "zhī",
      "file": "pinyin-55.ogg"
    },
    {
      "pinyin": "zhí",
      "file": "pinyin-56.ogg"
    },
    {
      "pinyin": "jī",
      "file": "pinyin-57.ogg"
    },
    {
      "pinyin": "jí",
      "file": "pinyin-58.ogg"
    },
    {
      "pinyin": "sī",
      "file": "pinyin-59.ogg"
    },
    {
      "pinyin": "xì",
      "file": "pinyin-60.ogg"
    },
    {
      "pinyin": "gǒu",
      "file": "pinyin-61.ogg"
    },
    {
      "pinyin": "zhōu",
      "file": "pinyin-62.ogg"
    },
    {
      "pinyin": "lóu",
      "file": "pinyin-63.ogg"
    },
    {
      "pinyin": "tóu",
      "file": "pinyin-64.ogg"
    },
    {
      "pinyin": "luò",
      "file": "pinyin-65.ogg"
    },
    {
      "pinyin": "guò",
      "file": "pinyin-66.ogg"
    },
    {
      "pinyin": "shuō",
      "file": "pinyin-67.ogg"
    },
    {
      "pinyin": "cuò",
      "file": "pinyin-68.ogg"
    },
    {
      "pinyin": "tuō",
      "file": "pinyin-69.ogg"
    },
    {
      "pinyin": "tuó",
      "file": "pinyin-70.ogg"
    },
    {
      "pinyin": "tōu",
      "file": "pinyin-71.ogg"
    },
    {
      "pinyin": "guǒ",
      "file": "pinyin-72.ogg"
    },
    {
      "pinyin": "gòu",
      "file": "pinyin-73.ogg"
    },
    {
      "pinyin": "yán",
      "file": "pinyin-74.ogg"
    },
    {
      "pinyin": "yuè",
      "file": "pinyin-75.ogg"
    },
    {
      "pinyin": "yú",
      "file": "pinyin-76.ogg"
    },
    {
      "pinyin": "wā",
      "file": "pinyin-77.ogg"
    },
    {
      "pinyin": "wú",
      "file": "pinyin-78.ogg"
    },
    {
      "pinyin": "wān",
      "file": "pinyin-79.ogg"
    },
    {
      "pinyin": "yā",
      "file": "pinyin-80.ogg"
    },
    {
      "pinyin": "yá",
      "file": "pinyin-81.ogg"
    },
    {
      "pinyin": "yē",
      "file": "pinyin-82.ogg"
    },
    {
      "pinyin": "yé",
      "file": "pinyin-83.ogg"
    },
    {
      "pinyin": "wù",
      "file": "pinyin-84.ogg"
    },
    {
      "pinyin": "yǔ",
      "file": "pinyin-85.ogg"
    },
    {
      "pinyin": "yù",
      "file": "pinyin-86.ogg"
    },
    {
      "pinyin": "tú",
      "file": "pinyin-87.ogg"
    },
    {
      "pinyin": "chū",
      "file": "pinyin-88.ogg"
    },
    {
      "pinyin": "gǔ",
      "file": "pinyin-89.ogg"
    },
    {
      "pinyin": "xú",
      "file": "pinyin-90.ogg"
    },
    {
      "pinyin": "jù",
      "file": "pinyin-91.ogg"
    },
    {
      "pinyin": "chù",
      "file": "pinyin-92.ogg"
    },
    {
      "pinyin": "jú",
      "file": "pinyin-93.ogg"
    },
    {
      "pinyin": "jǔ",
      "file": "pinyin-94.ogg"
    },
    {
      "pinyin": "zhú",
      "file": "pinyin-95.ogg"
    },
    {
      "pinyin": "zhǔ",
      "file": "pinyin-96.ogg"
    },
    {
      "pinyin": "duì",
      "file": "pinyin-97.ogg"
    },
    {
      "pinyin": "guì",
      "file": "pinyin-98.ogg"
    },
    {
      "pinyin": "diū",
      "file": "pinyin-99.ogg"
    },
    {
      "pinyin": "niú",
      "file": "pinyin-100.ogg"
    },
    {
      "pinyin": "chuī",
      "file": "pinyin-101.ogg"
    },
    {
      "pinyin": "chuí",
      "file": "pinyin-102.ogg"
    },
    {
      "pinyin": "qiū",
      "file": "pinyin-103.ogg"
    },
    {
      "pinyin": "shuì",
      "file": "pinyin-104.ogg"
    },
    {
      "pinyin": "xiǔ",
      "file": "pinyin-105.ogg"
    },
    {
      "pinyin": "xiù",
      "file": "pinyin-106.ogg"
    },
    {
      "pinyin": "zhàn",
      "file": "pinyin-107.ogg"
    },
    {
      "pinyin": "zhāng",
      "file": "pinyin-108.ogg"
    },
    {
      "pinyin": "zhòng",
      "file": "pinyin-109.ogg"
    },
    {
      "pinyin": "zhēng",
      "file": "pinyin-110.ogg"
    },
    {
      "pinyin": "rè",
      "file": "pinyin-111.ogg"
    },
    {
      "pinyin": "rén",
      "file": "pinyin-112.ogg"
    },
    {
      "pinyin": "ràng",
      "file": "pinyin-113.ogg"
    },
    {
      "pinyin": "zhì",
      "file": "pinyin-114.ogg"
    },
    {
      "pinyin": "zhàng",
      "file": "pinyin-115.ogg"
    },
    {
      "pinyin": "zhèng",
      "file": "pinyin-116.ogg"
    },
    {
      "pinyin": "yī",
      "file": "vocab-19.ogg"
    },
    {
      "pinyin": "sān",
      "file": "vocab-21.ogg"
    },
    {
      "pinyin": "qī",
      "file": "vocab-25.ogg"
    },
    {
      "pinyin": "huí",
      "file": "vocab-33.ogg"
    },
    {
      "pinyin": "qián",
      "file": "vocab-38.ogg"
    },
    {
      "pinyin": "shí",
      "file": "vocab-28.ogg"
    },
    {
      "pinyin": "nǐ",
      "file": "vocab-3.ogg"
    },
    {
      "pinyin": "hǎo",
      "file": "vocab-4.ogg"
    },
    {
      "pinyin": "wǒ",
      "file": "vocab-6.ogg"
    },
    {
      "pinyin": "hěn",
      "file": "vocab-7.ogg"
    },
    {
      "pinyin": "lèi",
      "file": "vocab-11.ogg"
    },
    {
      "pinyin": "zài",
      "file": "vocab-76.ogg"
    },
    {
      "pinyin": "zuò",
      "file": "vocab-78.ogg"
    },
    {
      "pinyin": "zǒu",
      "file": "vocab-46.ogg"
    },
    {
      "pinyin": "chá",
      "file": "vocab-66.ogg"
    },
    {
      "pinyin": "qiú",
      "file": "vocab-43.ogg"
    },
    {
      "pinyin": "qù",
      "file": "vocab-29.ogg"
    },
    {
      "pinyin": "hē",
      "file": "vocab-63.ogg"
    },
    {
      "pinyin": "sì",
      "file": "vocab-22.ogg"
    },
    {
      "pinyin": "chī",
      "file": "vocab-60.ogg"
    },
    {
      "pinyin": "yě",
      "file": "vocab-74.ogg"
    },
    {
      "pinyin": "wǔ",
      "file": "vocab-23.ogg"
    },
    {
      "pinyin": "shuǐ",
      "file": "vocab-39.ogg"
    },
    {
      "pinyin": "jiǔ",
      "file": "vocab-27.ogg"
    },
    {
      "pinyin": "zhè",
      "file": "vocab-47.ogg"
    }
   ]
  return data;
}  
  
function getCharacterData() {
  var data = [
    {
      "lesson": 1,
      "character": "一",
      "pinyin": "yī",
      "english": "one",
      "soundfile": "vocab-19.ogg"
    },
    {
      "lesson": 1,
      "character": "二",
      "pinyin": "èr",
      "english": "two",
      "soundfile": "vocab-20.ogg"
    },
    {
      "lesson": 1,
      "character": "三",
      "pinyin": "sān",
      "english": "three",
      "soundfile": "vocab-21.ogg"
    },
    {
      "lesson": 1,
      "character": "四",
      "pinyin": "sì",
      "english": "four",
      "soundfile": "vocab-22.ogg"
    },
    {
      "lesson": 1,
      "character": "五",
      "pinyin": "wǔ",
      "english": "five",
      "soundfile": "vocab-23.ogg"
    },
    {
      "lesson": 2,
      "character": "六",
      "pinyin": "liù",
      "english": "six",
      "soundfile": "vocab-24.ogg"
    },
    {
      "lesson": 2,
      "character": "七",
      "pinyin": "qī",
      "english": "seven",
      "soundfile": "vocab-25.ogg"
    },
    {
      "lesson": 2,
      "character": "八",
      "pinyin": "bā",
      "english": "eight",
      "soundfile": "vocab-26.ogg"
    },
    {
      "lesson": 2,
      "character": "九",
      "pinyin": "jiǔ",
      "english": "nine",
      "soundfile": "vocab-27.ogg"
    },
    {
      "lesson": 2,
      "character": "十",
      "pinyin": "shí",
      "english": "ten",
      "soundfile": "vocab-28.ogg"
    },
    {
      "lesson": 3,
      "character": "人",
      "pinyin": "rén",
      "english": "person",
      "soundfile": "zi-1.ogg"
    },
    {
      "lesson": 3,
      "character": "大",
      "pinyin": "dà",
      "english": "big",
      "soundfile": "zi-2.ogg"
    },
    {
      "lesson": 3,
      "character": "小",
      "pinyin": "xiǎo",
      "english": "small",
      "soundfile": "zi-3.ogg"
    },
    {
      "lesson": 3,
      "character": "中",
      "pinyin": "zhōng",
      "english": "middle",
      "soundfile": "zi-4.ogg"
    },
    {
      "lesson": 3,
      "character": "马",
      "pinyin": "mǎ",
      "english": "horse",
      "soundfile": "zi-5.ogg"
    },
    {
      "lesson": 4,
      "character": "口",
      "pinyin": "kǒu",
      "english": "mouth",
      "soundfile": "zi-6.ogg"
    },
    {
      "lesson": 4,
      "character": "水",
      "pinyin": "shuǐ",
      "english": "water",
      "soundfile": "zi-7.ogg"
    },
    {
      "lesson": 4,
      "character": "木",
      "pinyin": "mù",
      "english": "tree",
      "soundfile": "zi-8.ogg"
    },
    {
      "lesson": 4,
      "character": "日",
      "pinyin": "rì",
      "english": "sun",
      "soundfile": "zi-9.ogg"
    },
    {
      "lesson": 4,
      "character": "月",
      "pinyin": "yuè",
      "english": "moon",
      "soundfile": "zi-10.ogg"
    },
    {
      "lesson": 5,
      "character": "上",
      "pinyin": "shàng",
      "english": "up",
      "soundfile": "zi-11.ogg"
    },
    {
      "lesson": 5,
      "character": "下",
      "pinyin": "xià",
      "english": "down",
      "soundfile": "zi-12.ogg"
    },
    {
      "lesson": 5,
      "character": "山",
      "pinyin": "shān",
      "english": "mountain",
      "soundfile": "zi-13.ogg"
    },
    {
      "lesson": 5,
      "character": "天",
      "pinyin": "tiān",
      "english": "heaven",
      "soundfile": "zi-14.ogg"
    },
    {
      "lesson": 5,
      "character": "土",
      "pinyin": "tǔ",
      "english": "earth",
      "soundfile": "zi-15.ogg"
    },
    {
      "lesson": 6,
      "character": "女",
      "pinyin": "nǚ",
      "english": "female",
      "soundfile": "zi-16.ogg"
    },
    {
      "lesson": 6,
      "character": "子",
      "pinyin": "zǐ",
      "english": "child",
      "soundfile": "zi-17.ogg"
    },
    {
      "lesson": 6,
      "character": "你",
      "pinyin": "nǐ",
      "english": "you",
      "soundfile": "zi-18.ogg"
    },
    {
      "lesson": 6,
      "character": "好",
      "pinyin": "hǎo",
      "english": "good",
      "soundfile": "zi-19.ogg"
    },
    {
      "lesson": 6,
      "character": "文",
      "pinyin": "wén",
      "english": "language",
      "soundfile": "zi-20.ogg"
    },
    {
      "lesson": 7,
      "character": "火",
      "pinyin": "huǒ",
      "english": "fire",
      "soundfile": "zi-21.ogg"
    },
    {
      "lesson": 7,
      "character": "牛",
      "pinyin": "niú",
      "english": "cow",
      "soundfile": "zi-22.ogg"
    },
    {
      "lesson": 7,
      "character": "目",
      "pinyin": "mù",
      "english": "eye",
      "soundfile": "zi-23.ogg"
    },
    {
      "lesson": 7,
      "character": "朋",
      "pinyin": "péng",
      "english": "friend",
      "soundfile": "zi-24.ogg"
    },
    {
      "lesson": 7,
      "character": "友",
      "pinyin": "yǒu",
      "english": "friend",
      "soundfile": "zi-25.ogg"
    },
    {
      "lesson": 8,
      "character": "我",
      "pinyin": "wǒ",
      "english": "I, me",
      "soundfile": "zi-26.ogg"
    },
    {
      "lesson": 8,
      "character": "有",
      "pinyin": "yǒu",
      "english": "have",
      "soundfile": "zi-27.ogg"
    },
    {
      "lesson": 8,
      "character": "也",
      "pinyin": "yě",
      "english": "also",
      "soundfile": "zi-28.ogg"
    },
    {
      "lesson": 8,
      "character": "他",
      "pinyin": "tā",
      "english": "he",
      "soundfile": "zi-29.ogg"
    },
    {
      "lesson": 8,
      "character": "她",
      "pinyin": "tā",
      "english": "she",
      "soundfile": "zi-30.ogg"
    },
    {
      "lesson": 9,
      "character": "点",
      "pinyin": "diǎn",
      "english": "dot",
      "soundfile": "zi-31.ogg"
    },
    {
      "lesson": 9,
      "character": "去",
      "pinyin": "qù",
      "english": "go",
      "soundfile": "zi-32.ogg"
    },
    {
      "lesson": 9,
      "character": "王",
      "pinyin": "wáng",
      "english": "king",
      "soundfile": "zi-33.ogg"
    },
    {
      "lesson": 9,
      "character": "国",
      "pinyin": "guó",
      "english": "country",
      "soundfile": "zi-34.ogg"
    },
    {
      "lesson": 9,
      "character": "家",
      "pinyin": "jiā",
      "english": "home",
      "soundfile": "zi-35.ogg"
    },
    {
      "lesson": 10,
      "character": "说",
      "pinyin": "shuō",
      "english": "say",
      "soundfile": "zi-36.ogg"
    },
    {
      "lesson": 10,
      "character": "学",
      "pinyin": "xué",
      "english": "learn",
      "soundfile": "zi-37.ogg"
    },
    {
      "lesson": 10,
      "character": "的",
      "pinyin": "de",
      "english": "possessive particle",
      "soundfile": "zi-38.ogg"
    },
    {
      "lesson": 10,
      "character": "在",
      "pinyin": "zài",
      "english": "at",
      "soundfile": "zi-39.ogg"
    },
    {
      "lesson": 10,
      "character": "是",
      "pinyin": "shì",
      "english": "to be",
      "soundfile": "zi-40.ogg"
    }
   ];
  return data;
}