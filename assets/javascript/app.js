var bbTrivia = {

// TODO ------------------------------------------------------------------
// Declare variables
// - {qaBank} *key can be question# - correct answer needs to be flagged
// - [gameQuestions] - *randomly generated*
// - [playerGuesses] - user guesses by question
// - counter to hold current question number
// - intervalID to hold value of setInterval
// TODO ------------------------------------------------------------------


    // VARIABLE DECLARATION
    qaBank: {
        1: {
            question: 'Walter White\'s transformation from nerdy high school chemistry teacher to criminal kingpin all started with what specific medical diagnosis?',
            g1: 'Pancreatic cancer',
            g2: 'Lupus',
            g3: 'AIDS',
            g4: 'Lung cancer',
            answer: 'Lung cancer'
        },
        2: {
            question: 'What nickname does Jesse go by before he joins up with Mr. White?',
            g1: 'Meth Man',
            g2: 'Cap\'n Cook',
            g3: 'K1ngpin',
            g4: 'Crazy 8',
            answer: 'Cap\'n Cook'
        },
        3: {
            question: 'What is the name of the car wash Walter works at to make ends meet?',
            g1: '33rd Street Car Wash',
            g2: 'Scrub\'n Suds',
            g3: 'A1A Car Wash',
            g4: 'AAA Car Sparkle',
            answer: 'A1A Car Wash'
        }

    },

    gameQuestions: [],
    playerGuesses: [],
    counter: 0,
    intervalID: null,

//
// TODO: Create Initialize function
// - for loop to run 10 times to select 10 unique questions for qaBank for each quiz
//
// TODO ------------------------------------------------------------------
//Create on-click function to Start quiz (start button)
// - runs initialize function
// - IntervalID = setInterval to run serveQuestion function every 15 seconds
// TODO ------------------------------------------------------------------

    qaDisplay: function (x) {
        $('#qStage').text(this.qaBank[x].Question);  // Display selected Question to screen
        var tempArray = ['g1', 'g2', 'g3', 'g4'];
        for (num in tempArray) {
            // TODO -------------------------------------------------------------------------
            //Create randomize function here to switch questions up everytime
            // var rando = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
            // tempArray.splice(rando, 1);
            // TODO -------------------------------------------------------------------------
            // var ans = this.qaBank[x] + '.G' + num
            // $('#aStage').html('<div>' + this.qaBank[x].ans + '</div>');
        };
    }


// TODO: Create serveQuestion function
// - iterates counter
// - randomly chooses order in which to show answers
// - presents question and answers (creation of divs - #question, #options)
// - timeout for 2 seconds before running timer function to allow player to read question
//
// TODO: questionTimer function
// - if player guesses question before timer runs out
// - stop timer
// - log their answer by pushing it into the playerGuesses array
// - if timer runs out - question is forfeited and -1 is pushed into playerGuesses array
//
// TODO: quiz end function
// - Loop through all game questions
// - compare each user guess to correct answer
// - display number correct and number wrong at top of page
// - re-display questions and answers marking the one they guessed and the correct one

} // close bbTrivia object
