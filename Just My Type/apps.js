let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

let sentIndex = 0;
let letterIndex = 0;
let currentSentence = sentences[sentIndex];
let currentLetter = currentSentence[letterIndex];

let numberOfWords = 54;
let mistakes = 0;
let gameover = false;


$('#sentence').text(currentSentence);
$('#target-letter').text(currentLetter);

$(document).ready(function () {
    //  console.log("ready!");
    // hide the uppercase keyboard
    $('#keyboard-upper-container').hide();

    // While the shift key is held down, hide the lowercase keyboard and show the uppercase one
    $(document).keydown(function () {
        if (event.which == 16) {
            // console.log("Shift was pressed!");
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
        }
    })
    // When the shift key is released, show the lowercase keyboard and hide the uppercase one
    $(document).keyup(function () {
        if (event.which == 16) {
            // console.log("Exit Shift!");
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
        }

    })

    // Persistent "keylogger"console function
    // $(document).keydown(function () {
    //     console.log(event.key);
    //     console.log(event.keyCode);
    // })

    //When keys are pressed, they should be highlighted in the browser.
    let oldkeyChar;
    let keyCharacter;

    $(document).keypress(function (e) {
        $(`#${event.keyCode}`).css("background-color", "yellow");

        keyCharacter = e.keyCode;
        if (oldkeyChar != keyCharacter) {
            $(`#${oldkeyChar}`).css('background-color', '#f5f5f5')
        }
        $(document).keyup(function () {
            // console.log(keyCharacter)
            $(`#${keyCharacter}`).css("background-color", "#f5f5f5");
        })
        oldkeyChar = keyCharacter;

        // Visual "log" of right/wrong glyphicon feedback
        if (currentSentence.charCodeAt(letterIndex) === e.keyCode) {
            $('#feedback').append('<span class="glyphicon glyphicon-ok "></span>');
        }
        else {
            $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
        }

        //Highlight the currently expected letter in the on-screen sentence that should be typed next
        $('#yellow-block').css('left', '+=17.5px');

        letterIndex++;
        currentLetter = currentSentence[letterIndex];
        $('#target-letter').text(currentLetter);

        //test sentence check
        //console.log('letterIndex: '+ letterIndex + 'currentSentenceLength: ' + currentSentence.length);
        if (letterIndex == currentSentence.length) {
            sentIndex++;
            if (sentIndex == sentences.length) {
                gameover = true;
                //$('#feedback').remove();
                console.log('gameover');
            }

            if (!gameover) {
                letterIndex = 0;
                currentSentence = sentences[sentIndex];
                currentLetter = currentSentence[letterIndex];
                $('#sentence').text(currentSentence);
                $('#target-letter').text(currentLetter);
                //console.log(letterIndex);
                //console.log(currentSentence);
                $('#yellow-block').css('left', '20px');
                $('#feedback').empty();
                $('#feedback').stop()
            };

            console.log('gameover2' + gameover)

            //clear screen and display final score
            if (gameover == true) {
                //console.log('boom')
                $('#sentence').empty();
                $('#target-letter').empty();
                $('#yellow-block').css('left', '2000px');
                $('#feedback').remove();

            //create timer and score


            }

        };

        currentLetter = currentSentence[letterIndex];
        $('#target-letter').text(currentLetter);

    })



})





