var getCharacters = (lesson) => {
    var data = getCharacterData();

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
    document.getElementById('pinyin-'+index.toString()).innerHTML = item.pinyin + '<img class="mt-1 mx-3" id="speaker-' + index.toString() + '" src="../../../media/images/audio_icon.png" style="display: inline-block; width: 50px; height: 50px;">';
    document.getElementById('english-'+index.toString()).innerHTML = item.english;
})

// play sounds

function playAudio(index) {
    var x = document.createElement("audio");
    x.setAttribute("src", "../../../media/sounds/" + vocab[index].soundfile);
    x.play();
}

var pinyinText = Array.from(document.getElementsByClassName("definition"))

pinyinText.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
       item.style = "color:red; font-size:40px;"
       document.getElementById('speaker-'+index.toString()).src = "../../../media/images/audio_icon2.png"
    });
    item.addEventListener("mouseout", () => {
       item.style = "color:blue; font-size:40px;"
       document.getElementById('speaker-'+index.toString()).src = "../../../media/images/audio_icon.png"
    });
    item.addEventListener("mousedown", () => {
        console.log('yes!');
        playAudio(index);
    });
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
                if (index < 4) {
                    document.getElementById('nav-'+(index+1).toString()+'-tab').href = "#nav-"+(index+1).toString();
                    document.getElementById('nav-'+(index+1).toString()+'-tab').classList.remove('disabled');
                    document.getElementById('progress-'+index.toString()).addEventListener('click', () => {
                        $('#nav-'+(index+1).toString()+'-tab').tab('show');
                    });
                } else {
                    document.getElementById('progress-'+index.toString()).addEventListener('click', () => {
                        window.location.href='/games/11/'+(importData.lesson).toString();
                    });
                }
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
