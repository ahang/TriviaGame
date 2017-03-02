
$(document).ready(function() {
    console.log("Ready");

    var triviaGame = {
        correct: 0,
        incorrect: 0,
        numQues: 0,
        skipped: 0,
        timer: 4,
        counter: 0,
        currentQues: 0,

        //Setting up the question object array with question/choices/answer
        questions: [
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
        ]
    };

    //starts the game and starts showing the first question
    var startGame =  function() {
        console.log("I have begun the game!");
        $("#startButton").hide();
        showQuestion();
    };
    //This should randomize the questions
    var randomQuestion = function() {
        console.log("To randomize ze question one day");

    };

    //shows the question from the array
    var showQuestion = function() {
        var currentQues = triviaGame.questions[triviaGame.counter].question;
        //triviaGame.counter++;
        begin();
        $(".question").html(currentQues);
        for (var i = 0; i < triviaGame.questions[triviaGame.counter].choices.length; i++){
            //var addBtn = $("<div>")
            //addBtn.addClass("btn");
            //addBtn.data("data-num", i);
            $(".choices").append("<data-num=" + i + ">" + triviaGame.questions[triviaGame.counter].choices[i]);
        }
        console.log("THIS IS QUESTIOn");
    };

    var nextQuestion = function() {
    };

    //compares if the user selection is correct
    var compare = function() {
    };

    //setting up the counter to decrease the timer by 1 second
    var begin = function() {
        triviaGame.timer = 20;
        triviaGame.counter = setInterval(countDown, 1000);
        updateTimer();
    };

    //Updating the timer on the page
    var updateTimer = function( time ) {
        $(".timer").html("Time Remaining: " + triviaGame.timer + " seconds");
    };

    //Begin Countdown! and checking to see if the timer is equal to 0.
    var countDown = function() {
        console.log("Tick Tock Tick Tock");
        triviaGame.timer--;
        updateTimer();
        if(triviaGame.timer === 0){
            //If its 0. Stop the countdown
            stop();
            skippedAns();
        }
    };
    //clearInterval
    var stop = function() {
        clearInterval(triviaGame.counter);
    };

    var correctAns = function() {
        triviaGame.correct++;
        $(".question").empty();
    };

    var incorrectAns = function() {
        triviaGame.incorrect++;
        $(".question").empty();
    };

    //What happens when the user timesout on a question
    var skippedAns = function() {
        clear();
        triviaGame.skipped++;
        console.log(triviaGame.skipped);
        setTimeout(function() {
            showQuestion();
        }, 3000);
        $(".question").append("What took slowpoke");
    };

    //End Screen
    var endScreen = function() {
        console.log("This is the end");
        var questionDiv = $(".question");
        $(".timer").empty();
        questionDiv.append("Number of Correct Answers: " + triviaGame.correct);
        questionDiv.append("<br>Number of Incorrect Answers: " + triviaGame.incorrect);
        questionDiv.append("<br>Number of Skipped Questions: " + triviaGame.skipped);
        questionDiv.append("<br><button id='playAgain'>Play Again?</button>");
        $("#playAgain").on("click", function() {
            $("#playAgain").hide();
            triviaGame.clear();
            triviaGame.showQuestion();
        })
    };

    var clear = function() {
        triviaGame.correct = 0;
        triviaGame.incorrect = 0;
        triviaGame.incorrect = 0;
        triviaGame.skipped = 0;
        $(".question").empty();
        $(".timer").empty();
    };



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
                //debugger;
    //on click game start
    $("#startButton").on("click", function() {
        startGame();
    })




});

