function getCharacters(lesson) {
    var data = [
        {
            lesson: 1,
            character: "一",
            pinyin: "yī",
            english: "one"
        },
        {
            lesson: 1,
            character: "二",
            pinyin: "èr",
            english: "two"
        },
        {
            lesson: 1,
            character: "三",
            pinyin: "sān",
            english: "three"
        },
        {
            lesson: 1,
            character: "四",
            pinyin: "sì",
            english: "four"
        },
        {
            lesson: 1,
            character: "五",
            pinyin: "wǔ",
            english: "five"
        },
    ];

    var result = [];

    data.forEach((vocab) => {
        if (vocab.lesson == lesson) {
            result.push(vocab);
        }
    });

    return result;
}

var vocab = getCharacters(importData.lesson);

// update HTML

vocab.forEach((item, index) => {
    document.getElementById('nav-'+index.toString()+'-tab').innerHTML = item.character;
    document.getElementById('pinyin-'+index.toString()).innerHTML = item.pinyin + '<img class="mt-1 mx-3" src="../../../media/images/audio_icon.png" style="display: inline-block; width: 50px; height: 50px;">';
    document.getElementById('english-'+index.toString()).innerHTML = item.english;
})


// draw characters

var ui = {
    writer: [],
    tracer: []
}

vocab.forEach((item, index) => {
    ui.writer.push(
        HanziWriter.create('writer-' + index.toString(), item.character, {
            width: 200,
            height: 200,
            padding: 5,
            showOutline: true
        })
    );
    ui.tracer.push(
        HanziWriter.create('tracer-' + index.toString(), item.character, {
            width: 200,
            height: 200,
            padding: 5,
            showOutline: true,
            showHintAfterMisses: 2,
            highlightOnComplete: false
        })
    );
});

ui.tracer.forEach((item, index) => {
    item.myQuiz = () => {
        item.quiz({
            onComplete: () => {
                item.updateColor('strokeColor', '#BADA55');
                item.updateColor('radicalColor', '#BADA55');
                document.getElementById('progress-button-'+index.toString()).innerHTML = '<button class="btn-lg btn-success mb-5" id="progress-'+index.toString()+'" style="position: absolute; right: 10px;">Next</button>';
                document.getElementById('nav-'+(index+1).toString()+'-tab').href = "#nav-"+(index+1).toString();
                document.getElementById('nav-'+(index+1).toString()+'-tab').classList.remove('disabled');
                document.getElementById('progress-'+index.toString()).addEventListener('click', () => {
                    $('#nav-'+(index+1).toString()+'-tab').tab('show');
                });
            }
        });
    }
});

ui.writer.forEach((item, index) => {
    document.getElementById('animate-button-' + index.toString()).addEventListener('click', () => {
        item.animateCharacter();
    });
});
ui.tracer.forEach((item, index) => {
    document.getElementById('reset-button-' + index.toString()).addEventListener('click', () => {
        item.updateColor('strokeColor', '#333');
        item.updateColor('radicalColor', '#333');
        item.myQuiz()
    });
    item.myQuiz()
});



