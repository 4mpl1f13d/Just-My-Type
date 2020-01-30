// hide the uppercase keyboard when the page loads
$(document).ready(function () {
    //  console.log("ready!");
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

    //When keys are pressed, they should be highlighted in the browser. *Hint: the letters should be matched with the corresponding ascii code. The id value of the key in the html corresponds to the ASCII character code that you can access in the keyboard listener. For example, ascii value 65 is A, and 97 is a.

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
    })



})





