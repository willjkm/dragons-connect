function getData () {
    var vocabData = [
      {
        "id": 1,
        "lesson": 1,
        "character": "你好",
        "pinyin": "nǐ hǎo",
        "english": "hello"
      },
      {
        "id": 2,
        "lesson": 1,
        "character": "你",
        "pinyin": "nǐ",
        "english": "you"
      },
      {
        "id": 3,
        "lesson": 1,
        "character": "好",
        "pinyin": "hǎo",
        "english": "good"
      },
      {
        "id": 4,
        "lesson": 1,
        "character": "我",
        "pinyin": "wǒ",
        "english": "me"
      },
      {
        "id": 5,
        "lesson": 1,
        "character": "很",
        "pinyin": "hěn",
        "english": "very"
      },
      {
        "id": 6,
        "lesson": 1,
        "character": "累",
        "pinyin": "lèi",
        "english": "tired"
      },
      {
        "id": 7,
        "lesson": 2,
        "character": "生日",
        "pinyin": "shēngrì",
        "english": "birthday"
      },
      {
        "id": 8,
        "lesson": 2,
        "character": "快乐",
        "pinyin": "kuàilè",
        "english": "happy"
      },
      {
        "id": 9,
        "lesson": 2,
        "character": "谢谢",
        "pinyin": "xièxie",
        "english": "thank you"
      },
      {
        "id": 10,
        "lesson": 2,
        "character": "不",
        "pinyin": "bù",
        "english": "not"
      },
      {
        "id": 11,
        "lesson": 2,
        "character": "客气",
        "pinyin": "kèqi",
        "english": "polite"
      },
      {
        "id": 12,
        "lesson": 2,
        "character": "再见",
        "pinyin": "zàijiàn",
        "english": "goodbye"
      },
      {
        "id": 13,
        "lesson": 3,
        "character": "一",
        "pinyin": "yī",
        "english": "one"
      },
      {
        "id": 14,
        "lesson": 3,
        "character": "二",
        "pinyin": "èr",
        "english": "two"
      },
      {
        "id": 15,
        "lesson": 3,
        "character": "三",
        "pinyin": "sān",
        "english": "three"
      },
      {
        "id": 16,
        "lesson": 3,
        "character": "四",
        "pinyin": "sì",
        "english": "four"
      },
      {
        "id": 17,
        "lesson": 3,
        "character": "五",
        "pinyin": "wǔ",
        "english": "five"
      },
      {
        "id": 18,
        "lesson": 3,
        "character": "六",
        "pinyin": "liù",
        "english": "six"
      },
      {
        "id": 19,
        "lesson": 3,
        "character": "七",
        "pinyin": "qī",
        "english": "seven"
      },
      {
        "id": 20,
        "lesson": 3,
        "character": "八",
        "pinyin": "bā",
        "english": "eight"
      },
      {
        "id": 21,
        "lesson": 3,
        "character": "九",
        "pinyin": "jiǔ",
        "english": "nine"
      },
      {
        "id": 22,
        "lesson": 3,
        "character": "十",
        "pinyin": "shí",
        "english": "ten"
      },
      {
        "id": 23,
        "lesson": 4,
        "character": "去",
        "pinyin": "qù",
        "english": "go"
      },
      {
        "id": 24,
        "lesson": 4,
        "character": "哪儿",
        "pinyin": "nǎr",
        "english": "where"
      },
      {
        "id": 25,
        "lesson": 4,
        "character": "商店",
        "pinyin": "shāngdiàn",
        "english": "shop"
      },
      {
        "id": 26,
        "lesson": 4,
        "character": "公园",
        "pinyin": "gōngyuán",
        "english": "public park"
      },
      {
        "id": 27,
        "lesson": 4,
        "character": "回",
        "pinyin": "huí",
        "english": "return"
      },
      {
        "id": 28,
        "lesson": 4,
        "character": "家",
        "pinyin": "jiā",
        "english": "home"
      },
      {
        "id": 29,
        "lesson": 5,
        "character": "妈妈",
        "pinyin": "māma",
        "english": "mother"
      },
      {
        "id": 30,
        "lesson": 5,
        "character": "有",
        "pinyin": "yǒu",
        "english": "have"
      },
      {
        "id": 31,
        "lesson": 5,
        "character": "手机",
        "pinyin": "shǒujī",
        "english": "mobile phone"
      },
      {
        "id": 32,
        "lesson": 5,
        "character": "钱",
        "pinyin": "qián",
        "english": "money"
      },
      {
        "id": 33,
        "lesson": 5,
        "character": "水",
        "pinyin": "shuǐ",
        "english": "water"
      },
      {
        "id": 34,
        "lesson": 5,
        "character": "没",
        "pinyin": "méi",
        "english": "not have"
      },
      {
        "id": 35,
        "lesson": 5,
        "character": "太好了",
        "pinyin": "tài hǎo le",
        "english": "fantastic"
      },
      {
        "id": 36,
        "lesson": 6,
        "character": "球",
        "pinyin": "qiú",
        "english": "ball"
      },
      {
        "id": 37,
        "lesson": 6,
        "character": "你们",
        "pinyin": "nǐmen",
        "english": "you plural"
      },
      {
        "id": 38,
        "lesson": 6,
        "character": "我们",
        "pinyin": "wǒmen",
        "english": "we"
      },
      {
        "id": 39,
        "lesson": 6,
        "character": "走",
        "pinyin": "zǒu",
        "english": "walk, leave"
      },
      {
        "id": 40,
        "lesson": 7,
        "character": "这",
        "pinyin": "zhè",
        "english": "this"
      },
      {
        "id": 41,
        "lesson": 7,
        "character": "是",
        "pinyin": "shì",
        "english": "is"
      },
      {
        "id": 42,
        "lesson": 7,
        "character": "爸爸",
        "pinyin": "bàba",
        "english": "father"
      },
      {
        "id": 43,
        "lesson": 7,
        "character": "她",
        "pinyin": "tā",
        "english": "she"
      },
      {
        "id": 44,
        "lesson": 7,
        "character": "他",
        "pinyin": "tā",
        "english": "he"
      },
      {
        "id": 45,
        "lesson": 7,
        "character": "叫",
        "pinyin": "jiào",
        "english": "called"
      },
      {
        "id": 46,
        "lesson": 7,
        "character": "老师",
        "pinyin": "lǎoshī",
        "english": "teacher"
      },
      {
        "id": 47,
        "lesson": 7,
        "character": "哥哥",
        "pinyin": "gēge",
        "english": "older brother"
      },
      {
        "id": 48,
        "lesson": 7,
        "character": "姐姐",
        "pinyin": "jiějie",
        "english": "older sister"
      },
      {
        "id": 49,
        "lesson": 7,
        "character": "朋友",
        "pinyin": "péngyou",
        "english": "friend"
      },
      {
        "id": 50,
        "lesson": 8,
        "character": "吃",
        "pinyin": "chī",
        "english": "eat"
      },
      {
        "id": 51,
        "lesson": 8,
        "character": "什么",
        "pinyin": "shénme",
        "english": "what"
      },
      {
        "id": 52,
        "lesson": 8,
        "character": "面",
        "pinyin": "miàn",
        "english": "noodles"
      },
      {
        "id": 53,
        "lesson": 8,
        "character": "喝",
        "pinyin": "hē",
        "english": "drink"
      },
      {
        "id": 54,
        "lesson": 8,
        "character": "可乐",
        "pinyin": "kělè",
        "english": "cola"
      },
      {
        "id": 55,
        "lesson": 8,
        "character": "米饭",
        "pinyin": "mǐfàn",
        "english": "rice"
      },
      {
        "id": 56,
        "lesson": 8,
        "character": "茶",
        "pinyin": "chá",
        "english": "tea"
      },
      {
        "id": 57,
        "lesson": 9,
        "character": "中国",
        "pinyin": "Zhōngguó",
        "english": "China"
      },
      {
        "id": 58,
        "lesson": 9,
        "character": "北京",
        "pinyin": "Běijīng",
        "english": "Beijing"
      },
      {
        "id": 59,
        "lesson": 9,
        "character": "岁",
        "pinyin": "suì",
        "english": "years old"
      },
      {
        "id": 60,
        "lesson": 9,
        "character": "也",
        "pinyin": "yě",
        "english": "also"
      },
      {
        "id": 61,
        "lesson": 9,
        "character": "住",
        "pinyin": "zhù",
        "english": "live"
      },
      {
        "id": 62,
        "lesson": 9,
        "character": "在",
        "pinyin": "zài",
        "english": "at"
      },
      {
        "id": 63,
        "lesson": 9,
        "character": "上海",
        "pinyin": "Shànghǎi",
        "english": "Shanghai"
      },
      {
        "id": 64,
        "lesson": 10,
        "character": "做",
        "pinyin": "zuò",
        "english": "do"
      },
      {
        "id": 65,
        "lesson": 10,
        "character": "看",
        "pinyin": "kàn",
        "english": "look"
      },
      {
        "id": 66,
        "lesson": 10,
        "character": "书",
        "pinyin": "shū",
        "english": "book"
      },
      {
        "id": 67,
        "lesson": 10,
        "character": "发",
        "pinyin": "fā",
        "english": "send"
      },
      {
        "id": 68,
        "lesson": 10,
        "character": "短信",
        "pinyin": "duǎnxìn",
        "english": "text message"
      }
    ];
    return vocabData;
}

function getToneData () {
  var vocabData = [
    {
      "id": 1,
      "lesson": 1,
      "character": "你",
      "pinyin": "ni",
      "tone": 3
    },
    {
      "id": 2,
      "lesson": 1,
      "character": "好",
      "pinyin": "hao",
      "tone": 3
    },
    {
      "id": 3,
      "lesson": 1,
      "character": "我",
      "pinyin": "wo",
      "tone": 3
    },
    {
      "id": 4,
      "lesson": 1,
      "character": "很",
      "pinyin": "hen",
      "tone": 3
    },
    {
      "id": 5,
      "lesson": 1,
      "character": "累",
      "pinyin": "lei",
      "tone": 4
    },
    {
      "id": 6,
      "lesson": 2,
      "character": "生",
      "pinyin": "sheng",
      "tone": 1
    },
    {
      "id": 7,
      "lesson": 2,
      "character": "日",
      "pinyin": "ri",
      "tone": 4
    },
    {
      "id": 8,
      "lesson": 2,
      "character": "快",
      "pinyin": "kuai",
      "tone": 4
    },
    {
      "id": 9,
      "lesson": 2,
      "character": "乐",
      "pinyin": "le",
      "tone": 4
    },
    {
      "id": 10,
      "lesson": 2,
      "character": "谢",
      "pinyin": "xie",
      "tone": 4
    },
    {
      "id": 11,
      "lesson": 2,
      "character": "不",
      "pinyin": "bu",
      "tone": 4
    },
    {
      "id": 12,
      "lesson": 2,
      "character": "客",
      "pinyin": "ke",
      "tone": 4
    },
    {
      "id": 13,
      "lesson": 2,
      "character": "再",
      "pinyin": "zai",
      "tone": 4
    },
    {
      "id": 14,
      "lesson": 2,
      "character": "见",
      "pinyin": "jian",
      "tone": 4
    },
    {
      "id": 15,
      "lesson": 3,
      "character": "一",
      "pinyin": "yi",
      "tone": 1
    },
    {
      "id": 16,
      "lesson": 3,
      "character": "二",
      "pinyin": "er",
      "tone": 4
    },
    {
      "id": 17,
      "lesson": 3,
      "character": "三",
      "pinyin": "san",
      "tone": 1
    },
    {
      "id": 18,
      "lesson": 3,
      "character": "四",
      "pinyin": "si",
      "tone": 4
    },
    {
      "id": 19,
      "lesson": 3,
      "character": "五",
      "pinyin": "wu",
      "tone": 3
    },
    {
      "id": 20,
      "lesson": 3,
      "character": "六",
      "pinyin": "liu",
      "tone": 4
    },
    {
      "id": 21,
      "lesson": 3,
      "character": "七",
      "pinyin": "qi",
      "tone": 1
    },
    {
      "id": 22,
      "lesson": 3,
      "character": "八",
      "pinyin": "ba",
      "tone": 1
    },
    {
      "id": 23,
      "lesson": 3,
      "character": "九",
      "pinyin": "jiu",
      "tone": 3
    },
    {
      "id": 24,
      "lesson": 3,
      "character": "十",
      "pinyin": "shi",
      "tone": 2
    },
    {
      "id": 25,
      "lesson": 4,
      "character": "去",
      "pinyin": "qu",
      "tone": 4
    },
    {
      "id": 26,
      "lesson": 4,
      "character": "哪",
      "pinyin": "na",
      "tone": 3
    },
    {
      "id": 27,
      "lesson": 4,
      "character": "商",
      "pinyin": "shang",
      "tone": 1
    },
    {
      "id": 28,
      "lesson": 4,
      "character": "店",
      "pinyin": "dian",
      "tone": 4
    },
    {
      "id": 29,
      "lesson": 4,
      "character": "公",
      "pinyin": "gong",
      "tone": 1
    },
    {
      "id": 30,
      "lesson": 4,
      "character": "园",
      "pinyin": "yuan",
      "tone": 2
    },
    {
      "id": 31,
      "lesson": 4,
      "character": "回",
      "pinyin": "hui",
      "tone": 2
    },
    {
      "id": 32,
      "lesson": 4,
      "character": "家",
      "pinyin": "jian",
      "tone": 1
    },
    {
      "id": 33,
      "lesson": 5,
      "character": "妈",
      "pinyin": "ma",
      "tone": 1
    },
    {
      "id": 34,
      "lesson": 5,
      "character": "有",
      "pinyin": "you",
      "tone": 3
    },
    {
      "id": 35,
      "lesson": 5,
      "character": "手",
      "pinyin": "shou",
      "tone": 3
    },
    {
      "id": 36,
      "lesson": 5,
      "character": "机",
      "pinyin": "ji",
      "tone": 1
    },
    {
      "id": 37,
      "lesson": 5,
      "character": "钱",
      "pinyin": "qian",
      "tone": 2
    },
    {
      "id": 38,
      "lesson": 5,
      "character": "水",
      "pinyin": "shui",
      "tone": 3
    },
    {
      "id": 39,
      "lesson": 5,
      "character": "没",
      "pinyin": "mei",
      "tone": 2
    },
    {
      "id": 40,
      "lesson": 5,
      "character": "太",
      "pinyin": "tai",
      "tone": 4
    },
    {
      "id": 41,
      "lesson": 6,
      "character": "球",
      "pinyin": "qiu",
      "tone": 2
    },
    {
      "id": 42,
      "lesson": 6,
      "character": "走",
      "pinyin": "zou",
      "tone": 3
    },
    {
      "id": 43,
      "lesson": 7,
      "character": "这",
      "pinyin": "zhe",
      "tone": 4
    },
    {
      "id": 44,
      "lesson": 7,
      "character": "是",
      "pinyin": "shi",
      "tone": 4
    },
    {
      "id": 45,
      "lesson": 7,
      "character": "爸",
      "pinyin": "ba",
      "tone": 4
    },
    {
      "id": 46,
      "lesson": 7,
      "character": "她",
      "pinyin": "ta",
      "tone": 1
    },
    {
      "id": 47,
      "lesson": 7,
      "character": "他",
      "pinyin": "ta",
      "tone": 1
    },
    {
      "id": 48,
      "lesson": 7,
      "character": "叫",
      "pinyin": "jiao",
      "tone": 4
    },
    {
      "id": 49,
      "lesson": 7,
      "character": "老",
      "pinyin": "lao",
      "tone": 3
    },
    {
      "id": 50,
      "lesson": 7,
      "character": "师",
      "pinyin": "shi",
      "tone": 1
    },
    {
      "id": 51,
      "lesson": 7,
      "character": "哥",
      "pinyin": "ge",
      "tone": 1
    },
    {
      "id": 52,
      "lesson": 7,
      "character": "姐",
      "pinyin": "jie",
      "tone": 3
    },
    {
      "id": 53,
      "lesson": 7,
      "character": "朋",
      "pinyin": "peng",
      "tone": 2
    },
    {
      "id": 54,
      "lesson": 8,
      "character": "吃",
      "pinyin": "chi",
      "tone": 1
    },
    {
      "id": 55,
      "lesson": 8,
      "character": "什",
      "pinyin": "shen",
      "tone": 2
    },
    {
      "id": 56,
      "lesson": 8,
      "character": "面",
      "pinyin": "mian",
      "tone": 4
    },
    {
      "id": 57,
      "lesson": 8,
      "character": "喝",
      "pinyin": "he",
      "tone": 1
    },
    {
      "id": 58,
      "lesson": 8,
      "character": "可",
      "pinyin": "ke",
      "tone": 3
    },
    {
      "id": 59,
      "lesson": 8,
      "character": "米",
      "pinyin": "mi",
      "tone": 3
    },
    {
      "id": 60,
      "lesson": 8,
      "character": "饭",
      "pinyin": "fan",
      "tone": 4
    },
    {
      "id": 61,
      "lesson": 8,
      "character": "茶",
      "pinyin": "cha",
      "tone": 2
    },
    {
      "id": 62,
      "lesson": 9,
      "character": "中",
      "pinyin": "zhong",
      "tone": 1
    },
    {
      "id": 63,
      "lesson": 9,
      "character": "国",
      "pinyin": "guo",
      "tone": 2
    },
    {
      "id": 64,
      "lesson": 9,
      "character": "北",
      "pinyin": "bei",
      "tone": 3
    },
    {
      "id": 65,
      "lesson": 9,
      "character": "京",
      "pinyin": "jing",
      "tone": 1
    },
    {
      "id": 66,
      "lesson": 9,
      "character": "岁",
      "pinyin": "sui",
      "tone": 4
    },
    {
      "id": 67,
      "lesson": 9,
      "character": "也",
      "pinyin": "ye",
      "tone": 3
    },
    {
      "id": 68,
      "lesson": 9,
      "character": "住",
      "pinyin": "zhu",
      "tone": 4
    },
    {
      "id": 69,
      "lesson": 9,
      "character": "在",
      "pinyin": "zai",
      "tone": 4
    },
    {
      "id": 70,
      "lesson": 9,
      "character": "上",
      "pinyin": "shang",
      "tone": 4
    },
    {
      "id": 71,
      "lesson": 9,
      "character": "海",
      "pinyin": "hai",
      "tone": 3
    },
    {
      "id": 72,
      "lesson": 10,
      "character": "做",
      "pinyin": "zuo",
      "tone": 4
    },
    {
      "id": 73,
      "lesson": 10,
      "character": "看",
      "pinyin": "kan",
      "tone": 4
    },
    {
      "id": 74,
      "lesson": 10,
      "character": "书",
      "pinyin": "shu",
      "tone": 1
    },
    {
      "id": 75,
      "lesson": 10,
      "character": "发",
      "pinyin": "fa",
      "tone": 1
    },
    {
      "id": 76,
      "lesson": 10,
      "character": "短",
      "pinyin": "duan",
      "tone": 3
    },
    {
      "id": 77,
      "lesson": 10,
      "character": "信",
      "pinyin": "xin",
      "tone": 4
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
      "wrong": ["Shanghai", "Chengdu", "Xi'an", "Taipei", "Hong Kong"]
    },
    {
      "lesson": 1,
      "category": 1,
      "question": "Select the English word for nǐ hǎo.",
      "answer": "hello",
      "wrong": ["you", "very", "good", "me", "how are you", "tired"]
    },
    {
      "lesson": 1,
      "category": 1,
      "question": "Select the English word for hěn.",
      "answer": "very",
      "wrong": ["good", "hello", "tired", "you", "me"]
    },
    {
      "lesson": 1,
      "category": 1,
      "question": "Select the English word for lèi.",
      "answer": "tired",
      "wrong": ["very", "me", "hello", "good", "you", "am"]
    },
    {
      "lesson": 1,
      "category": 2,
      "question": "Select the pinyin word for 'me'.",
      "answer": "wǒ",
      "wrong": ["nǐ", "hǎo", "hěn", "lèi", "ma"]
    },
    {
      "lesson": 1,
      "category": 2,
      "question": "Select the pinyin word for 'good'.",
      "answer": "hǎo",
      "wrong": ["nǐ", "wǒ", "hěn", "lèi", "ma"],
    },
    {
      "lesson": 1,
      "category": 2,
      "question": "Select the pinyin word for 'you'.",
      "answer": "nǐ",
      "wrong": ["wǒ", "hěn", "lèi", "ma", "ne"]
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
      "category": 3,
      "question": "Which tone is 好 (hao)?",
      "answer": "3rd",
      "wrong": ["1st", "2nd", "4th"]
    },
    {
      "lesson": 1,
      "category": 4,
      "question": "Select the correct character for 'three'.",
      "answer": "三",
      "wrong": ["一","二","四","五"]
    },
    {
      "lesson": 1,
      "category": 4,
      "question": "Select the correct character for 'five'.",
      "answer": "五",
      "wrong": ["一","二","四","三"]
    },
    {
      "lesson": 1,
      "category": 5,
      "question": "Select the pinyin of the word you hear.",
      "answer": "má",
      "wrong": ["mā", "mǎ", "mà"],
      "sound": "pinyin-7"
    },
    {
      "lesson": 2,
      "category": 0,
      "question": "Which of these is NOT in the Chinese zodiac?",
      "answer": "cat",
      "wrong": ["dog", "pig", "rat", "dragon", "snake"]
    },
    {
      "lesson": 2,
      "category": 1,
      "question": "Select the English word for shēngrì.",
      "answer": "birthday",
      "wrong": ["happy", "hello", "thank you", "goodbye"]
    },
    {
      "lesson": 2,
      "category": 1,
      "question": "Select the English word for bù.",
      "answer": "not",
      "wrong": ["question", "polite", "hello", "birthday", "you"]
    },
    {
      "lesson": 2,
      "category": 1,
      "question": "Select the English word for xièxie.",
      "answer": "thank you",
      "wrong": ["very", "is", "not", "goodbye", "yes"]
    },
    {
      "lesson": 2,
      "category": 2,
      "question": "Select the pinyin word for 'happy'.",
      "answer": "kuàilè",
      "wrong": ["xièxie", "kèqi", "shēngrì", "lèi"]
    },
    {
      "lesson": 2,
      "category": 2,
      "question": "Select the pinyin word for 'good bye'.",
      "answer": "zàijiàn",
      "wrong": ["xièxie", "shēngrì", "kuàilè", "nǐ hǎo"],
    },
    {
      "lesson": 2,
      "category": 2,
      "question": "Select the pinyin word for 'polite'.",
      "answer": "kèqi",
      "wrong": ["xièxie", "shēngrì", "kuàilè", "zàijiàn", "bù"]
    },
    {
      "lesson": 2,
      "category": 3,
      "question": "Which tone is 你 (ni)?",
      "answer": "3rd",
      "wrong": ["1st", "2nd", "4th"]
    },
    {
      "lesson": 2,
      "category": 3,
      "question": "Which tone is 见 (jian)?",
      "answer": "4th",
      "wrong": ["1st", "2nd", "3rd"]
    },
    {
      "lesson": 2,
      "category": 4,
      "question": "Select the correct character for 'seven'.",
      "answer": "七",
      "wrong": ["六","八","九","十"]
    },
    {
      "lesson": 2,
      "category": 4,
      "question": "Select the correct character for 'nine'.",
      "answer": "九",
      "wrong": ["六","八","七","十"]
    },
    {
      "lesson": 2,
      "category": 5,
      "question": "Select the pinyin of the word you hear.",
      "answer": "cā",
      "wrong": ["zā", "zhā", "sā"],
      "sound": "pinyin-21"
    },
    {
      "lesson": 3,
      "category": 0,
      "question": "Silk is made from ...",
      "answer": "insects",
      "wrong": ["worms", "trees", "grass", "cotton", "fur"]
    },
    {
      "lesson": 3,
      "category": 1,
      "question": "Select the English word for wǔ.",
      "answer": "five",
      "wrong": ["three", "seven", "eight", "nine"]
    },
    {
      "lesson": 3,
      "category": 1,
      "question": "Select the English word for jiǔ.",
      "answer": "nine",
      "wrong": ["four", "six", "eight", "seven", "ten"]
    },
    {
      "lesson": 3,
      "category": 1,
      "question": "Select the English word for yī.",
      "answer": "one",
      "wrong": ["ten", "three", "nine", "eight", "four"]
    },
    {
      "lesson": 3,
      "category": 2,
      "question": "Select the pinyin word for 'four'.",
      "answer": "sì",
      "wrong": ["yī", "èr", "sān", "wǔ"]
    },
    {
      "lesson": 3,
      "category": 2,
      "question": "Select the pinyin word for 'eight'.",
      "answer": "bā",
      "wrong": ["liù", "qī", "jiǔ", "shí"],
    },
    {
      "lesson": 3,
      "category": 2,
      "question": "Select the pinyin word for 'seven'.",
      "answer": "qī",
      "wrong": ["sì", "wǔ", "liù", "bā"]
    },
    {
      "lesson": 3,
      "category": 3,
      "question": "Which tone is 六 (liu)?",
      "answer": "4th",
      "wrong": ["1st", "2nd", "3rd"]
    },
    {
      "lesson": 3,
      "category": 3,
      "question": "Which tone is 十 (shi)?",
      "answer": "2nd",
      "wrong": ["1st", "4th", "3rd"]
    },
    {
      "lesson": 3,
      "category": 4,
      "question": "Select the correct character for 'middle'.",
      "answer": "中",
      "wrong": ["人", "大", "小", "马"]
    },
    {
      "lesson": 3,
      "category": 4,
      "question": "Select the correct character for 'big'.",
      "answer": "马",
      "wrong": ["人", "大", "小", "中"]
    },
    {
      "lesson": 3,
      "category": 5,
      "question": "Select the pinyin of the word you hear.",
      "answer": "xī",
      "wrong": ["qī", "zī", "jī"],
      "sound": "pinyin-31"
    },
    {
      "lesson": 4,
      "category": 0,
      "question": "Jade is a type of ...",
      "answer": "stone",
      "wrong": ["silk", "metal", "diamond", "tea"]
    },
    {
      "lesson": 4,
      "category": 1,
      "question": "Select the English word for huí.",
      "answer": "return",
      "wrong": ["park", "home", "where", "go"]
    },
    {
      "lesson": 4,
      "category": 1,
      "question": "Select the English word for jiā.",
      "answer": "home",
      "wrong": ["where", "shop", "go", "return", "park"]
    },
    {
      "lesson": 4,
      "category": 1,
      "question": "Select the English word for shāngdiàn.",
      "answer": "shop",
      "wrong": ["park", "where", "go", "park", "home"]
    },
    {
      "lesson": 4,
      "category": 2,
      "question": "Select the pinyin word for 'park'.",
      "answer": "gōngyuán",
      "wrong": ["qù", "nǎr", "shāngdiàn", "huí", "jiā"]
    },
    {
      "lesson": 4,
      "category": 2,
      "question": "Select the pinyin word for 'go'.",
      "answer": "qù",
      "wrong": ["nǎr", "shāngdiàn", "gōngyuán", "huí", "jiā"],
    },
    {
      "lesson": 4,
      "category": 2,
      "question": "Select the pinyin word for 'where'.",
      "answer": "nǎr",
      "wrong": ["qù", "shāngdiàn", "gōngyuán", "huí", "jiā"]
    },
    {
      "lesson": 4,
      "category": 3,
      "question": "Which tone is 去 (qu)?",
      "answer": "4th",
      "wrong": ["1st", "2nd", "3rd"]
    },
    {
      "lesson": 4,
      "category": 3,
      "question": "Which tone is 回 (hui)?",
      "answer": "2nd",
      "wrong": ["1st", "4th", "3rd"]
    },
    {
      "lesson": 4,
      "category": 4,
      "question": "Select the correct character for 'water'.",
      "answer": "水",
      "wrong": ["口", "木", "日", "月"]
    },
    {
      "lesson": 4,
      "category": 4,
      "question": "Select the correct character for 'moon'.",
      "answer": "月",
      "wrong": ["口", "水", "木", "日"]
    },
    {
      "lesson": 4,
      "category": 5,
      "question": "Select the pinyin of the word you hear.",
      "answer": "kě",
      "wrong": ["kē", "ké", "kè"],
      "sound": "pinyin-42"
    },
    {
      "lesson": 5,
      "category": 0,
      "question": "The erhu is most similar to a ...",
      "answer": "violin",
      "wrong": ["flute", "guitar", "oboe", "harp"]
    },
    {
      "lesson": 5,
      "category": 1,
      "question": "Select the English word for māma.",
      "answer": "mother",
      "wrong": ["have", "phone", "money", "water"]
    },
    {
      "lesson": 5,
      "category": 1,
      "question": "Select the English word for yǒu.",
      "answer": "have",
      "wrong": ["phone", "not have", "money", "water", "fantastic"]
    },
    {
      "lesson": 5,
      "category": 1,
      "question": "Select the English word for shǒujī.",
      "answer": "phone",
      "wrong": ["mother", "have", "money", "water", "home"]
    },
    {
      "lesson": 5,
      "category": 2,
      "question": "Select the pinyin word for 'money'.",
      "answer": "qián",
      "wrong": ["māma", "yǒu", "shǒujī", "shuǐ", "méi"]
    },
    {
      "lesson": 5,
      "category": 2,
      "question": "Select the pinyin word for 'water'.",
      "answer": "shuǐ",
      "wrong": ["māma", "yǒu", "shǒujī", "qián", "méi"],
    },
    {
      "lesson": 5,
      "category": 2,
      "question": "Select the pinyin word for 'not have'.",
      "answer": "méi",
      "wrong": ["māma", "yǒu", "shǒujī", "qián", "shuǐ"]
    },
    {
      "lesson": 5,
      "category": 3,
      "question": "Which tone is 水 (shui)?",
      "answer": "3rd",
      "wrong": ["1st", "2nd", "4th"]
    },
    {
      "lesson": 5,
      "category": 3,
      "question": "Which tone is 妈 (ma)?",
      "answer": "1st",
      "wrong": ["2nd", "4th", "3rd"]
    },
    {
      "lesson": 5,
      "category": 4,
      "question": "Select the correct character for 'down'.",
      "answer": "下",
      "wrong": ["上", "山", "天", "土"]
    },
    {
      "lesson": 5,
      "category": 4,
      "question": "Select the correct character for 'mountain'.",
      "answer": "山",
      "wrong": ["上", "下", "天", "土"]
    },
    {
      "lesson": 5,
      "category": 5,
      "question": "Select the pinyin of the word you hear.",
      "answer": "shī",
      "wrong": ["zhī", "shē", "chē"],
      "sound": "pinyin-54"
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
      "blurb": "C sounds like 'ts', like in the word 'cats'.",
      "sounds": ["cā", "cán", "cǎi", "cè"]
    },
    {
      "lesson": 2,
      "title": "The Z sound",
      "blurb": "Z sounds like 'dz', like the sound in the word 'lads'.",
      "sounds": ["zài", "zuò", "zǒu", "zǐ"]
    },
    {
      "lesson": 2,
      "title": "Distinguish the sounds",
      "blurb": "Can you hear the difference between these sounds?",
      "sounds": ["zǎi", "zài", "cǎi", "cài"]
    },
    {
      "lesson": 2,
      "title": "Distinguish the sounds",
      "blurb": "Can you hear the difference between these sounds?",
      "sounds": ["zhā", "zhá", "chā", "chá"]
    },
    {
      "lesson": 3,
      "title": "The X sound",
      "blurb": "X sounds a bit like 'sh' in English, but is made using the teeth at the front of your mouth.",
      "sounds": ["xī", "xiè", "xìn", "xǔ"]
    },
    {
      "lesson": 3,
      "title": "The Q sound",
      "blurb": "Q sounds a bit like 'ch' in English, but is made using the teeth at the front of your mouth.",
      "sounds": ["qī", "qián", "qiú", "qù"]
    },
    {
      "lesson": 3,
      "title": "Distinguish the sounds",
      "blurb": "Can you hear the difference between these sounds?",
      "sounds": ["xǐ", "xí", "qǐ", "qí"]
    },
    {
      "lesson": 3,
      "title": "Distinguish the sounds",
      "blurb": "Can you hear the difference between these sounds?",
      "sounds": ["xū", "xù", "qū", "qù"]
    },
    {
      "lesson": 4,
      "title": "The -e sound",
      "blurb": "E is unlike any sound in English, but is close to the sound in the word 'her'.",
      "sounds": ["gē", "chē", "hē", "kě"]
    },
    {
      "lesson": 4,
      "title": "The -en sound",
      "blurb": "En is unlike the English '-en' sound. Listen carefully and try to copy the sound.",
      "sounds": ["gēn", "hěn", "shén", "wèn"]
    },
    {
      "lesson": 4,
      "title": "Distinguish the sounds",
      "blurb": "Can you hear the difference between these sounds?",
      "sounds": ["chā", "chà", "chē", "chè"]
    },
    {
      "lesson": 4,
      "title": "Distinguish the sounds",
      "blurb": "Can you hear the difference between these sounds?",
      "sounds": ["shǎn", "shàn", "shěn", "shèn"]
    },
    {
      "lesson": 5,
      "title": "The -i sound",
      "blurb": "The -i sound rhymes with the English word 'tea', except in special cases.",
      "sounds": ["bǐ", "mí", "nǐ", "qì"]
    },
    {
      "lesson": 5,
      "title": "The special -i sound",
      "blurb": "After c, r, s, or z, -i is silent.",
      "sounds": ["shī", "sì", "chī", "zǐ"]
    },
    {
      "lesson": 5,
      "title": "Distinguish the sounds",
      "blurb": "Can you hear the difference between these sounds?",
      "sounds": ["zhī", "zhí", "jī", "jí"]
    },
    {
      "lesson": 5,
      "title": "Distinguish the sounds",
      "blurb": "Can you hear the difference between these sounds?",
      "sounds": ["sī", "sì", "xī", "xì"]
    },
    {
      "lesson": 6,
      "title": "The -ou sound",
      "blurb": "The -ou sound is close to the English 'o' sound in 'old'.",
      "sounds": ["gǒu", "zhōu", "lóu", "tóu"]
    },
    {
      "lesson": 6,
      "title": "The -uo sound",
      "blurb": "The -uo sound is pronounced just the same as Chinese 'wo' (me).",
      "sounds": ["luò", "guò", "shuō", "cuò"]
    },
    {
      "lesson": 6,
      "title": "Distinguish the sounds",
      "blurb": "Can you hear the difference between these sounds?",
      "sounds": ["tuō", "tuó", "tōu", "tóu"]
    },
    {
      "lesson": 6,
      "title": "Distinguish the sounds",
      "blurb": "Can you hear the difference between these sounds?",
      "sounds": ["guǒ", "guò", "gǒu", "gòu"]
    },
    {
      "lesson": 7,
      "title": "The Y sound",
      "blurb": "'Yan' sounds like 'yen', and y is not pronounced in 'yu'.",
      "sounds": ["yán", "yuè", "yě", "yú"]
    },
    {
      "lesson": 7,
      "title": "The W sound",
      "blurb": "'W' is not pronounced in 'wu'. This word sounds more like 'oo'.",
      "sounds": ["wā", "wú", "wān", "wèn"]
    },
    {
      "lesson": 7,
      "title": "Distinguish the sounds",
      "blurb": "Can you hear the difference between these sounds?",
      "sounds": ["yā", "yá", "yē", "yé"]
    },
    {
      "lesson": 7,
      "title": "Distinguish the sounds",
      "blurb": "Can you hear the difference between these sounds?",
      "sounds": ["wǔ", "wù", "yǔ", "yù"]
    },
    {
      "lesson": 8,
      "title": "The -u sound",
      "blurb": "The -u sound is fairly similar to the vowel in English 'two'.",
      "sounds": ["bù", "tú", "chū", "gǔ"]
    },
    {
      "lesson": 8,
      "title": "The -ü sound",
      "blurb": "The -ü sound is found in French 'tu'. It is made after j, q, x, and y.",
      "sounds": ["yú", "xú", "jù", "qù"]
    },
    {
      "lesson": 8,
      "title": "Distinguish the sounds",
      "blurb": "Can you hear the difference between these sounds?",
      "sounds": ["chū", "chù", "qū", "qù"]
    },
    {
      "lesson": 8,
      "title": "Distinguish the sounds",
      "blurb": "Can you hear the difference between these sounds?",
      "sounds": ["jú", "jǔ", "zhú", "zhǔ"]
    },
    {
      "lesson": 9,
      "title": "The -ui sound",
      "blurb": "The -ui sound sounds a bit like English 'way'.",
      "sounds": ["duì", "huí", "shuǐ", "guì"]
    },
    {
      "lesson": 9,
      "title": "The -iu sound",
      "blurb": "The -iu sound rhymes with Chinese 'you' (have).",
      "sounds": ["diū", "qiú", "jiǔ", "niú"]
    },
    {
      "lesson": 9,
      "title": "Distinguish the sounds",
      "blurb": "Can you hear the difference between these sounds?",
      "sounds": ["chuī", "chuí", "qiū", "qiú"]
    },
    {
      "lesson": 9,
      "title": "Distinguish the sounds",
      "blurb": "Can you hear the difference between these sounds?",
      "sounds": ["shuǐ", "shuì", "xiǔ", "xiù"]
    },
    {
      "lesson": 10,
      "title": "The Zh sound",
      "blurb": "The Zh sound is pronounced similar to English 'j'.",
      "sounds": ["zhàn", "zhāng", "zhòng", "zhēng"]
    },
    {
      "lesson": 10,
      "title": "The R sound",
      "blurb": "The R sound is pronounced similar to French 'je'.",
      "sounds": ["rè", "rì", "rén", "ràng"]
    },
    {
      "lesson": 10,
      "title": "Distinguish the sounds",
      "blurb": "Can you hear the difference between these sounds?",
      "sounds": ["rè", "rì", "zhè", "zhì"]
    },
    {
      "lesson": 10,
      "title": "Distinguish the sounds",
      "blurb": "Can you hear the difference between these sounds?",
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

function getCultureData() {
  var data = [
    {
      config: {
        instructions: "Put the city labels in the correct place.",
        inst_location: [180, 500],
        inst_wordWrap: 200,
        type: "dots",
        button_location: [180, 500]
      },
      assets: [
        {type: "image", name: "background", file: "china-map.jpg"},
        {type: "image", name: "cityDot", file: "city-dot.png"},
        {type: "image", name: "cityDotHover", file: "city-dot-h.png"},
        {type: "image", name: "labelXian", file: "label-xian.png"},
        {type: "image", name: "labelBeijing", file: "label-beijing.png"},
        {type: "image", name: "labelChengdu", file: "label-chengdu.png"},
        {type: "image", name: "labelShanghai", file: "label-shanghai.png"},
        {type: "image", name: "labelHongkong", file: "label-hongkong.png"},
        {type: "image", name: "labelTaipei", file: "label-taipei.png"},
        {type: "image", name: "beijing", file: "beijing.png"},
        {type: "image", name: "xian", file: "xian.png"},
        {type: "image", name: "shanghai", file: "shanghai.png"},
        {type: "image", name: "chengdu", file: "chengdu.png"},
        {type: "image", name: "taipei", file: "taipei.png"},
        {type: "image", name: "hongkong", file: "hongkong.png"},
      ],
      targets: [
        {
          texture: 'cityDot',
          hoverTexture: 'cityDotHover',
          location: [461, 337]
        },
        {
          texture: 'cityDot',
          hoverTexture: 'cityDotHover',
          location: [553, 251]
        },
        {
          texture: 'cityDot',
          hoverTexture: 'cityDotHover',
          location: [391, 401]
        },
        {
          texture: 'cityDot',
          hoverTexture: 'cityDotHover',
          location: [629, 370]
        },
        {
          texture: 'cityDot',
          hoverTexture: 'cityDotHover',
          location: [552, 521]
        },
        {
          texture: 'cityDot',
          hoverTexture: 'cityDotHover',
          location: [650, 463]
        }
      ],
      labels: [
        {
          texture: 'labelXian',
          origin: [80, 50],
          destination: [412, 348]
        },
        {
          texture: 'labelBeijing',
          origin: [190, 50],
          destination: [601, 264]
        },
        {
          texture: 'labelChengdu',
          origin: [300, 50],
          destination: [343, 414]
        },
        {
          texture: 'labelShanghai',
          origin: [410, 50],
          destination: [678, 383]
        },
        {
          texture: 'labelHongkong',
          origin: [520, 50],
          destination: [502, 534]
        },
        {
          texture: 'labelTaipei',
          origin: [630, 50],
          destination: [699, 451]
        }
      ],
      scrolls: [
        {
          title: "Xi'an",
          pic: "xian",
          blurb: "Home of the famous Terracotta Army, made over 2000 years ago. More than 8000 soldiers, 130 chariots, and 670 horses have been uncovered!"
        },
        {
          title: "Beijing",
          pic: "beijing",
          blurb: "China's capital city, Beijing will be the first city in the world to host both the summer (2008) and winter (2022) Olympic Games."
        },
        {
          title: "Chengdu",
          pic: "chengdu",
          blurb: "Famous for its spicy food (such as hot pot) and for being the home of the giant pandas."
        },
        {
          title: "Shanghai",
          pic: "shanghai",
          blurb: "China's largets city, Shanghai has the world's longest metro system—400 miles of track and 393 stations!"
        },
        {
          title: "Hong Kong",
          pic: "hongkong",
          blurb: "Hong Kong means 'Fragrant Harbour.' The city is built on 263 islands, and is home to a thriving film industry."
        },
        {
          title: "Taipei",
          pic: "taipei",
          blurb: "Taipei is famous for its amazing night markets, where you can drink pearl bubble tea and enjoy tasty snacks like mango shaved ice."
        },
      ]
    },
    {
      config: {
        instructions: "",
        inst_location: [500, 180],
        inst_wordWrap: 200,
        type: "blocks",
        button_location: [400, 50]
      },
      assets: [
        {type: "image", name: "background", file: "animals_background.jpg"},
        {type: "image", name: "place1", file: "place1.png"},
        {type: "image", name: "place2", file: "place2.png"},
        {type: "image", name: "place3", file: "place3.png"},
        {type: "image", name: "place4", file: "place4.png"},
        {type: "image", name: "place5", file: "place5.png"},
        {type: "image", name: "place6", file: "place6.png"},
        {type: "image", name: "place7", file: "place7.png"},
        {type: "image", name: "place8", file: "place8.png"},
        {type: "image", name: "place9", file: "place9.png"},
        {type: "image", name: "place10", file: "place10.png"},
        {type: "image", name: "place11", file: "place11.png"},
        {type: "image", name: "place12", file: "place12.png"},
        {type: "image", name: "place_h", file: "place_h.png"},
        {type: "image", name: "rat", file: "rat.png"},
        {type: "image", name: "ox", file: "ox.png"},
        {type: "image", name: "cock", file: "cock.png"},
        {type: "image", name: "dog", file: "doy.png"},
        {type: "image", name: "dragon", file: "dragon.png"},
        {type: "image", name: "goat", file: "goat.png"},
        {type: "image", name: "horse", file: "horse.png"},
        {type: "image", name: "monkey", file: "monkey.png"},
        {type: "image", name: "pig", file: "pig.png"},
        {type: "image", name: "rabbit", file: "rabbit.png"},
        {type: "image", name: "snake", file: "snake.png"},
        {type: "image", name: "tiger", file: "tiger.png"},
        {type: "image", name: "ratzi", file: "ratzi.png"},
        {type: "image", name: "oxzi", file: "oxzi.png"},
        {type: "image", name: "cockzi", file: "cockzi.png"},
        {type: "image", name: "dogzi", file: "dogzi.png"},
        {type: "image", name: "dragonzi", file: "dragonzi.png"},
        {type: "image", name: "goatzi", file: "goatzi.png"},
        {type: "image", name: "horsezi", file: "mazi.png"},
        {type: "image", name: "monkeyzi", file: "monkeyzi.png"},
        {type: "image", name: "pigzi", file: "pigzi.png"},
        {type: "image", name: "rabbitzi", file: "rabbitzi.png"},
        {type: "image", name: "snakezi", file: "snakezi.png"},
        {type: "image", name: "tigerzi", file: "tigerzi.png"},
      ],
      targets: [
        {
          texture: 'place1',
          hoverTexture: 'place_h',
          location: [200, 180]
        },
        {
          texture: 'place2',
          hoverTexture: 'place_h',
          location: [333.33, 180]
        },
        {
          texture: 'place3',
          hoverTexture: 'place_h',
          location: [466.67, 180]
        },
        {
          texture: 'place4',
          hoverTexture: 'place_h',
          location: [600, 180]
        },
        {
          texture: 'place5',
          hoverTexture: 'place_h',
          location: [200, 300]
        },
        {
          texture: 'place6',
          hoverTexture: 'place_h',
          location: [333.33, 300]
        },
        {
          texture: 'place7',
          hoverTexture: 'place_h',
          location: [466.67, 300]
        },
        {
          texture: 'place8',
          hoverTexture: 'place_h',
          location: [600, 300]
        },
        {
          texture: 'place9',
          hoverTexture: 'place_h',
          location: [200, 420]
        },
        {
          texture: 'place10',
          hoverTexture: 'place_h',
          location: [333.33, 420]
        },
        {
          texture: 'place11',
          hoverTexture: 'place_h',
          location: [466.67, 420]
        },
        {
          texture: 'place12',
          hoverTexture: 'place_h',
          location: [600, 420]
        },
      ],
      labels: [
        {
          texture: 'rat',
          origin: [200, 540],
          destination: [200, 180]
        },
        {
          texture: 'ox',
          origin: [65, 300],
          destination: [333.33, 180]
        },
        {
          texture: 'tiger',
          origin: [735, 420],
          destination: [466.67, 180]
        },
        {
          texture: 'rabbit',
          origin: [200, 60],
          destination: [600, 180]
        },
        {
          texture: 'dragon',
          origin: [735, 300],
          destination: [200, 300]
        },
        {
          texture: 'snake',
          origin: [333.33, 540],
          destination: [333.33, 300]
        },
        {
          texture: 'horse',
          origin: [333.33, 60],
          destination: [466.67, 300]
        },
        {
          texture: 'goat',
          origin: [466.67, 60],
          destination: [600, 300]
        },
        {
          texture: 'monkey',
          origin: [65, 180],
          destination: [200, 420]
        },
        {
          texture: 'cock',
          origin: [600, 540],
          destination: [333.33, 420]
        },
        {
          texture: 'dog',
          origin: [600, 60],
          destination: [466.67, 420]
        },
        {
          texture: 'pig',
          origin: [466.67, 540],
          destination: [600, 420]
        },
      ],
      scrolls: [
        {
          title: "Rat",
          pic: "ratzi",
          blurb: "Rat years are 1996 and 2008. People born in the year of the Rat are considered clever and persuasive."
        },
        {
          title: "Ox",
          pic: "oxzi",
          blurb: "Ox years are 1997 and 2009. People born in the year of the Ox are considered patient and stubborn."
        },
        {
          title: "Tiger",
          pic: "tigerzi",
          blurb: "Tiger years are 1998 and 2010. People born in the year of the Tiger are considered courageous and intense."
        },
        {
          title: "Rabbit",
          pic: "rabbitzi",
          blurb: "Rabbit years are 1999 and 2011. People born in the year of the Rabbit are considered compassionate and popular."
        },
        {
          title: "Dragon",
          pic: "dragonzi",
          blurb: "Dragon years are 2000 and 2012. People born in the year of the Dragon are considered fearless and charismatic."
        },
        {
          title: "Snake",
          pic: "snakezi",
          blurb: "Snake years are 2001 and 2013. People born in the year of the Snake are considered generous and chatty."
        },
        {
          title: "Horse",
          pic: "horsezi",
          blurb: "Horse years are 2002 and 2014. People born in the year of the Horse are considered independent and energetic."
        },
        {
          title: "Goat",
          pic: "goatzi",
          blurb: "Goat years are 2003 and 2015. People born in the year of the Goat are considered kind and mild-mannered."
        },
        {
          title: "Monkey",
          pic: "monkeyzi",
          blurb: "Monkey years are 2004 and 2016. People born in the year of the Monkey are considered fun and active."
        },
        {
          title: "Chicken",
          pic: "cockzi",
          blurb: "Chicken years are 2005 and 2017. People born in the year of the Chicken are considered practical and hard-working."
        },
        {
          title: "Dog",
          pic: "dogzi",
          blurb: "Dog years are 2006 and 2018. People born in the year of the Dog are considered diligent and faithful."
        },
        {
          title: "Pig",
          pic: "pigzi",
          blurb: "Pig years are 2007 and 2019. People born in the year of the Pig are considered loving and honest."
        },
      ]
    },
    {
      config: {
        instructions: "Label the souvenirs.",
        inst_location: [110, 100],
        inst_wordWrap: 200,
        type: "dots",
        button_location: [110, 100]
      },
      assets: [
        {type: "image", name: "background", file: "souvenir_stand.jpg"},
        {type: "image", name: "ppcut", file: "ppcut.png"},
        {type: "image", name: "ppcut-h", file: "ppcut-h.png"},
        {type: "image", name: "ppcut-p", file: "ppcut-p.png"},
        {type: "image", name: "ppcut-label", file: "ppcut-label.png"},
        {type: "image", name: "jade", file: "jade.png"},
        {type: "image", name: "jade-h", file: "jade-h.png"},
        {type: "image", name: "jade-p", file: "jade-p.png"},
        {type: "image", name: "jade-label", file: "jade-label.png"},
        {type: "image", name: "knot", file: "knot.png"},
        {type: "image", name: "knot-h", file: "knot-h.png"},
        {type: "image", name: "knot-p", file: "knot-p.png"},
        {type: "image", name: "knot-label", file: "knot-label.png"},
        {type: "image", name: "silk", file: "silk.png"},
        {type: "image", name: "silk-h", file: "silk-h.png"},
        {type: "image", name: "silk-p", file: "silk-p.png"},
        {type: "image", name: "silk-label", file: "silk-label.png"},
        {type: "image", name: "teapot", file: "teapot.png"},
        {type: "image", name: "teapot-h", file: "teapot-h.png"},
        {type: "image", name: "teapot-p", file: "teapot-p.png"},
        {type: "image", name: "teapot-label", file: "teapot-label.png"},
        {type: "image", name: "lianpu", file: "lianpu.png"},
        {type: "image", name: "lianpu-h", file: "lianpu-h.png"},
        {type: "image", name: "lianpu-p", file: "lianpu-p.png"},
        {type: "image", name: "lianpu-label", file: "lianpu-label.png"},
      ],
      targets: [
        {
          texture: 'knot',
          hoverTexture: 'knot-h',
          location: [335, 255]
        },
        {
          texture: 'ppcut',
          hoverTexture: 'ppcut-h',
          location: [489, 240]
        },
        {
          texture: 'silk',
          hoverTexture: 'silk-h',
          location: [676, 246]
        },
        {
          texture: 'jade',
          hoverTexture: 'jade-h',
          location: [490, 374]
        },
        {
          texture: 'teapot',
          hoverTexture: 'teapot-h',
          location: [414, 482]
        },
        {
          texture: 'lianpu',
          hoverTexture: 'lianpu-h',
          location: [584, 476]
        }
      ],
      labels: [
        {
          texture: 'knot-label',
          origin: [100, 400],
          destination: [298, 219]
        },
        {
          texture: 'ppcut-label',
          origin: [100, 450],
          destination: [494, 255]
        },
        {
          texture: 'silk-label',
          origin: [100, 300],
          destination: [678, 251]
        },
        {
          texture: 'jade-label',
          origin: [100, 350],
          destination: [500, 373]
        },
        {
          texture: 'teapot-label',
          origin: [100, 250],
          destination: [408, 495]
        },
        {
          texture: 'lianpu-label',
          origin: [100, 200],
          destination: [660, 461]
        }
      ],
      scrolls: [
        {
          title: "Chinese Knot",
          pic: "knot-p",
          blurb: "Knots have been given as a good luck gift for thousands of years; they symbolize harmony and unity."
        },
        {
          title: "Papercut",
          pic: "ppcut-p",
          blurb: "Traditionally, these paper pictures were made by women to decorate the home. They are cut with scissors from a single sheet of paper."
        },
        {
          title: "Silk",
          pic: "silk-p",
          blurb: "Silk clothing is made from the fine cocoons of silkworms, actually a type of insect. A long time ago, only the Chinese knew how to make silk."
        },
        {
          title: "Jade",
          pic: "jade-p",
          blurb: "Jade is a precious stone that is extremely tough and durable. It is often carved into ornaments and good luck charms."
        },
        {
          title: "Teapot",
          pic: "teapot-p",
          blurb: "Small brown teapots like this one are used to brew wulong tea. There is a special tea ceremony to pour the perfect cup."
        },
        {
          title: "Opera Mask",
          pic: "lianpu-p",
          blurb: "Peking opera is a famous art that involves masks, dancing, singing, and acrobatics. The mask colours indicate the role of each character."
        },
      ]
    },
    {
      config: {
        instructions: "",
        inst_location: [500, 180],
        inst_wordWrap: 200,
        type: "blocks",
        button_location: [400, 100]
      },
      assets: [
        {type: "image", name: "background", file: "hands_background.jpg"},
        {type: "image", name: "hand1", file: "hand1.png"},
        {type: "image", name: "hand2", file: "hand2.png"},
        {type: "image", name: "hand3", file: "hand3.png"},
        {type: "image", name: "hand4", file: "hand4.png"},
        {type: "image", name: "hand5", file: "hand5.png"},
        {type: "image", name: "hand6", file: "hand6.png"},
        {type: "image", name: "hand7", file: "hand7.png"},
        {type: "image", name: "hand8", file: "hand8.png"},
        {type: "image", name: "hand9", file: "hand9.png"},
        {type: "image", name: "hand10", file: "hand10.png"},
        {type: "image", name: "hand1-t", file: "hand1-t.png"},
        {type: "image", name: "hand2-t", file: "hand2-t.png"},
        {type: "image", name: "hand3-t", file: "hand3-t.png"},
        {type: "image", name: "hand4-t", file: "hand4-t.png"},
        {type: "image", name: "hand5-t", file: "hand5-t.png"},
        {type: "image", name: "hand6-t", file: "hand6-t.png"},
        {type: "image", name: "hand7-t", file: "hand7-t.png"},
        {type: "image", name: "hand8-t", file: "hand8-t.png"},
        {type: "image", name: "hand9-t", file: "hand9-t.png"},
        {type: "image", name: "hand10-t", file: "hand10-t.png"},
        {type: "image", name: "hand1-h", file: "hand1-h.png"},
        {type: "image", name: "hand2-h", file: "hand2-h.png"},
        {type: "image", name: "hand3-h", file: "hand3-h.png"},
        {type: "image", name: "hand4-h", file: "hand4-h.png"},
        {type: "image", name: "hand5-h", file: "hand5-h.png"},
        {type: "image", name: "hand6-h", file: "hand6-h.png"},
        {type: "image", name: "hand7-h", file: "hand7-h.png"},
        {type: "image", name: "hand8-h", file: "hand8-h.png"},
        {type: "image", name: "hand9-h", file: "hand9-h.png"},
        {type: "image", name: "hand10-h", file: "hand10-h.png"},
        {type: "image", name: "tiles", file: "tiles.png"}
      ],
      targets: [
        {
          texture: 'hand1-t',
          hoverTexture: 'hand1-h',
          location: [172, 214]
        },
        {
          texture: 'hand2-t',
          hoverTexture: 'hand2-h',
          location: [285, 250]
        },
        {
          texture: 'hand3-t',
          hoverTexture: 'hand3-h',
          location: [398, 214]
        },
        {
          texture: 'hand4-t',
          hoverTexture: 'hand4-h',
          location: [511, 250]
        },
        {
          texture: 'hand5-t',
          hoverTexture: 'hand5-h',
          location: [624, 214]
        },
        {
          texture: 'hand6-t',
          hoverTexture: 'hand6-h',
          location: [172, 336]
        },
        {
          texture: 'hand7-t',
          hoverTexture: 'hand7-h',
          location: [285, 371]
        },
        {
          texture: 'hand8-t',
          hoverTexture: 'hand8-h',
          location: [398, 336]
        },
        {
          texture: 'hand9-t',
          hoverTexture: 'hand9-h',
          location: [511, 371]
        },
        {
          texture: 'hand10-t',
          hoverTexture: 'hand10-h',
          location: [624, 336]
        }
      ],
      labels: [
        {
          texture: 'hand1',
          origin: [624, 457],
          destination: [172, 214]
        },
        {
          texture: 'hand2',
          origin: [511, 493],
          destination: [285, 250]
        },
        {
          texture: 'hand3',
          origin: [172, 457],
          destination: [398, 214]
        },
        {
          texture: 'hand4',
          origin: [285, 129],
          destination: [511, 250]
        },
        {
          texture: 'hand5',
          origin: [398, 93],
          destination: [624, 214]
        },
        {
          texture: 'hand6',
          origin: [172, 93],
          destination: [172, 336]
        },
        {
          texture: 'hand7',
          origin: [511, 129],
          destination: [285, 371]
        },
        {
          texture: 'hand8',
          origin: [624, 93],
          destination: [398, 336]
        },
        {
          texture: 'hand9',
          origin: [285, 493],
          destination: [511, 371]
        },
        {
          texture: 'hand10',
          origin: [398, 457],
          destination: [624, 336]
        },
      ],
      scrolls: [
        {
          title: "1",
          pic: "tiles",
          blurb: "Remember that one is pronounced yī in Chinese."
        },
        {
          title: "2",
          pic: "tiles",
          blurb: "The lower stroke in the character for two is longer than the upper stroke."
        },
        {
          title: "3",
          pic: "tiles",
          blurb: "A famous Chinese saying is 'If three people walk together, my teacher must be among them.'"
        },
        {
          title: "4",
          pic: "tiles",
          blurb: "Four (sì) is an unlucky number, because the it is pronounced similarly to the word for death (sǐ)."
        },
        {
          title: "5",
          pic: "tiles",
          blurb: "In ancient China there were thought to be five elements: metal, water, wood, fire, and earth."
        },
        {
          title: "6",
          pic: "tiles",
          blurb: "Six is a lucky number, but eight is even luckier!"
        },
        {
          title: "7",
          pic: "tiles",
          blurb: "Chinese Valentine's Day is on the 7th day of the 7th month of the Chinese traditional calenar."
        },
        {
          title: "8",
          pic: "tiles",
          blurb: "Eight is the luckiest number. Even having an 8 in your phone number is thought to be lucky!"
        },
        {
          title: "9",
          pic: "tiles",
          blurb: "Nine is a lucky number; its pronunciation is the same as a character that means 'long time,' so it is associated with longevity."
        },
        {
          title: "10",
          pic: "tiles",
          blurb: "To say numbers above ten in Chinese, just say 'ten one, ten two, ten three...'"
        },
      ]
    },
    {
      config: {
        instructions: "",
        inst_location: [500, 180],
        inst_wordWrap: 200,
        type: "blocks",
        button_location: [400, 100]
      },
      assets: [
        {type: "image", name: "background", file: "inst-background.jpg"},
        {type: "image", name: "sheng", file: "sheng.png"},
        {type: "image", name: "sheng-l", file: "sheng-l.png"},
        {type: "image", name: "sheng-h", file: "sheng-h.png"},
        {type: "image", name: "sheng-p", file: "sheng-p.png"},
        {type: "image", name: "suona", file: "suona.png"},
        {type: "image", name: "suona-l", file: "suona-l.png"},
        {type: "image", name: "suona-h", file: "suona-h.png"},
        {type: "image", name: "suona-p", file: "suona-p.png"},
        {type: "image", name: "erhu", file: "erhu.png"},
        {type: "image", name: "erhu-l", file: "erhu-l.png"},
        {type: "image", name: "erhu-h", file: "erhu-h.png"},
        {type: "image", name: "erhu-p", file: "erhu-p.png"},
        {type: "image", name: "pipa", file: "pipa.png"},
        {type: "image", name: "pipa-l", file: "pipa-l.png"},
        {type: "image", name: "pipa-h", file: "pipa-h.png"},
        {type: "image", name: "pipa-p", file: "pipa-p.png"},
        {type: "image", name: "guzheng", file: "guzheng.png"},
        {type: "image", name: "guzheng-l", file: "guzheng-l.png"},
        {type: "image", name: "guzheng-h", file: "guzheng-h.png"},
        {type: "image", name: "guzheng-p", file: "guzheng-p.png"},
        {type: "sound", name: "guzheng", file: "guzheng.ogg"},
        {type: "sound", name: "erhu", file: "erhu.ogg"},
        {type: "sound", name: "pipa", file: "pipa.ogg"},
        {type: "sound", name: "sheng", file: "sheng.ogg"},
        {type: "sound", name: "suona", file: "suona.ogg"}
      ],
      targets: [
        {
          texture: 'sheng',
          hoverTexture: 'sheng-h',
          location: [263, 216]
        },
        {
          texture: 'suona',
          hoverTexture: 'suona-h',
          location: [598, 223]
        },
        {
          texture: 'erhu',
          hoverTexture: 'erhu-h',
          location: [732, 300]
        },
        {
          texture: 'pipa',
          hoverTexture: 'pipa-h',
          location: [450, 225]
        },
        {
          texture: 'guzheng',
          hoverTexture: 'guzheng-h',
          location: [405, 512]
        }
      ],
      labels: [
        {
          texture: 'sheng-l',
          origin: [95, 150],
          destination: [272, 300]
        },
        {
          texture: 'suona-l',
          origin: [95, 270],
          destination: [600, 318]
        },
        {
          texture: 'erhu-l',
          origin: [95, 190],
          destination: [707, 465]
        },
        {
          texture: 'pipa-l',
          origin: [95, 230],
          destination: [473, 269]
        },
        {
          texture: 'guzheng-l',
          origin: [95, 110],
          destination: [419, 514]
        },

      ],
      scrolls: [
        {
          title: "Sheng",
          pic: "sheng-p",
          blurb: "The sheng is a hand-held reed organ made of bamboo, with about 16 pipes."
        },
        {
          title: "Suona",
          pic: "suona-p",
          blurb: "The suona is a bit like an oboe. It produces a very emotional sound."
        },
        {
          title: "Erhu",
          pic: "erhu-p",
          blurb: "The erhu is a two-stringed bowed string instrument, which has a similar range to a violin."
        },
        {
          title: "Pipa",
          pic: "pipa-p",
          blurb: "The pipa is an ancient plucked string instrument, a little like a guitar."
        },
        {
          title: "Guzheng",
          pic: "guzheng-p",
          blurb: "The guzheng dates back to 500 BCE. It has 21 strings and is tuned to the pentatonic scale."
        },

      ]
    }
  ];
  return data;
}
