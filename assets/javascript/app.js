
$(document).ready(function() {
    console.log("Ready");
    var correct = 0;
    var incorrect = 0;
    var skipped = 0;
    var numQues = 0;
    var timer = 4;

    var questions = [
            {
                question: "Who was the first villian Goku faced in Dragon Ball Z?",
                choices: ["Vegeta", "Nappa", "Raditz", "Piccolo"],
                ans: "Raditz"
            },
            {
                question: "When did Goku first achieved Super Saiyan?",
                choices: ["After fighting Vegeta", "After witnessing the death of Krillin", "After Freiza gave him a hug", "All the above"],
                ans: "After witnessing the death of Krillin"
            },
            {
                question: "Who gave Future Trunks his sword?",
                choices: ["Taipon", "Gohan", "Vegeta", "What sword?"],
                ans: "Taipon"
            },
            {
                question: "Gotenks is a fusion between what two characters?",
                choices: ["Vegeta & Goku", "Trunks and Gohan", "Goten and Trunks", "Gohan and Piccolo"],
                ans: "Goten and Trunks"
            },
            {
                question: "When Goku was a baby, who did he kept awake by crying constantlly?",
                choices: ["Vegeta", "Gohan", "Goten", "Broly"],
                ans: "Broly"
            },
            {
                question: "Who defeated Cell?",
                choices: ["Goku", "Gohan", "Future Trunks", "Vegeta"],
                ans: "Gohan"

            },
            {
                question: "Which Z fighter easily kills Mecha Freiza and King Cold?",
                choices: ["Goku", "Future Trunks", "Piccolo", "Goten"],
                ans: "Future Trunks"
            }
        ];

    var triviaGame = {
        correct: 0,
        incorrect: 0,
        numQues: 0,
        skipped: 0,
        timer: 4,
        counter: 0,
        //starts the game and startings showing the first question
        startGame: function() {
            console.log("I have begun the game!");
            $("#startButton").hide();
            //triviaGame.showQuestion();
            triviaGame.finalScreen();
        },

        begin: function() {
            triviaGame.counter = setInterval(triviaGame.countDown, 1000);
        },

        countDown: function() {
            console.log("Tick Tock Tick Tock");
            triviaGame.timer--;
            $(".timer").html("Time Remaining: " + triviaGame.timer + " seconds");
            if(triviaGame.timer === 0){
                triviaGame.stop();
            }
        },

        stop: function() {
            clearInterval(triviaGame.counter);
        },

        //shows the question from the array
        showQuestion: function() {
            $(".question").empty();
            console.log("This is a question");
            triviaGame.begin();
            $(".question").append("<h2>" + questions[0].question);
            $(".question").append("<h2> <br>" + questions[0].choices);
        },

        finalScreen: function() {
            console.log("This is the end");
            var questionDiv = $(".question");
            $(".timer").remove();
            questionDiv.append("Number of Correct Answers: " + triviaGame.correct);
            questionDiv.append("<br>Number of Incorrect Answers: " + triviaGame.incorrect);
            questionDiv.append("<br>Number of Skipped Questions: " + triviaGame.skipped);
            questionDiv.append("<br><button id='playAgain'>Play Again?</button>");
            $("#playAgain").on("click", function() {
                $("#playAgain").hide();
                triviaGame.correct = 0;
                triviaGame.incorrect = 0;
                triviaGame.incorrect = 0;
                triviaGame.skipped = 0;
                triviaGame.showQuestion();
            })
        },

        clear: function() {

        }
    }

    // //setting countDown function
    // //Once timer hits 0 ends the timer count
    // function countDown() {
    //     timer--;
    //     $(".timer").html("Time Remaining: " + timer + " Seconds");
    //     //checks to see if the timer has ran out
    //     if(timer === 0){
    //         stop(); //stops the counters
    //     }
    // }

    // //Setting Timer Function
    // function begin() {
    //     counter = setInterval(countDown, 1000);
    // } //setting count to decrease by 1 second

    // //stop the counter countdown
    // function stop() {
    //     clearInterval(counter);
    // }

    //Theme?
//start Function
    //Time Remaining 30 Seconds
    //Question, 4 Choices
        //Choose Answer
            //Pause Timer
                //Inform user if the answer is correct and if its wrong what the correct answer is
                    //Picture
                //3 Seconds for next question
                //Reset Timer for next questions
                    //if Timer is goes to 0, takes the user to out of time and the correct answer
                //When selecting correct answer display correct and the related image
                //Loops through all questions
                //Shows how many correct answer and incorrect answer and unanswered
                //gives users Start Over option

    //on click game start
    $("#startButton").on("click", function() {
        triviaGame.startGame();
    })


});

