consoleText("man miguel-amaton", "prompt");

/**
 * I took this function from https://codepen.io/Tbgse/pen/dYaJyJ
 * They"ve got talent!! go check em out!
 * @param String word  Word to type
 * @param String id    Name of the prompt element (where to type the text)
 */
function consoleText(word, id) {
    const block = document.getElementById("console");
    const target = document.getElementById(id);
    const man = document.getElementById("man");

    let visible = true;  // Wether or not to hide the cursor
    let waiting = false; // If we are waiting for the typing to start
    let letterCount = 1; // Current position in the letter drawing function

    const loop = window.setInterval(() => {
        if (visible === true) {
            block.className = "console-underscore hidden"
            visible = false;

        } else {
            block.className = "console-underscore"
            visible = true;
        }
    }, 400)

    window.setInterval(() => {

        /**
         * Start branch, preparing text
         */
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = word.substring(0, letterCount);

            /**
             * End branch, press the Enter key
             */
        } else if (letterCount === word.length + 1 && waiting === false) {
            waiting = true;
            const block = document.getElementById("console");
            window.setTimeout(() => {
                block.className = "console-underscore hidden";
                man.className = "man";
                window.clearInterval(loop);
            }, 200);

            /**
             * Main loop branch
             */
        } else if (waiting === false) {
            target.innerHTML = word.substring(0, letterCount)
            letterCount += 1;
        }
    }, 100)
}