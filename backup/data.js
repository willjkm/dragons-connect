function getData () {
    vocabData = [
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
          "character": "老师",
          "pinyin": "lǎoshī",
          "english": "teacher",
          "lesson": 5
        },
        {
          "id": 45,
          "character": "朋友",
          "pinyin": "péngyou",
          "english": "friend",
          "lesson": 5
        },
        {
          "id": 46,
          "character": "这",
          "pinyin": "zhè",
          "english": "this",
          "lesson": 5
        },
        {
          "id": 47,
          "character": "叫",
          "pinyin": "jiào",
          "english": "called",
          "lesson": 6
        },
        {
          "id": 48,
          "character": "什么",
          "pinyin": "shénme",
          "english": "what",
          "lesson": 6
        },
        {
          "id": 49,
          "character": "名字",
          "pinyin": "míngzi",
          "english": "name",
          "lesson": 6
        },
        {
          "id": 50,
          "character": "几",
          "pinyin": "jǐ",
          "english": "how many",
          "lesson": 6
        },
        {
          "id": 51,
          "character": "岁",
          "pinyin": "suì",
          "english": "years",
          "lesson": 6
        }
    ];
    return vocabData;
}