// TODO: Declare variables
// - {qaBank} *key can be question# - correct answer needs to be flagged
// - [gameQuestions] - *randomly generated*
// - [playerGuesses] - user guesses by question
// - counter to hold current question number
// - intervalID to hold value of setInterval
//
// TODO: Create Initialize function
// - for loop to run 10 times to select 10 unique questions for qaBank for each quiz
//
// TODO: Create on-click function to Start quiz (start button)
// - runs initialize function
// - IntervalID = setInterval to run serveQuestion function every 15 seconds
//
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

$('.container').html('<h1>Testing 1..2..3.., Is this thing on?</h1>');