
$(document).ready(function() {
    console.log("Ready");

    var triviaGame = {
        correct: 0,
        incorrect: 0,
        numQues: 0,
        skipped: 0,
        timer: 0,
        currentQues: -1,

        //Setting up the question object array with question/choices/answer
        questions: [
            {
                question: "I am ...?",
                choices: ["Grot", "Grt", "Groot", "Grotto"],
                ans: 2,
                img: "assets/img/groot.gif"
            },
            {
                question: "Who is Peter Quill?",
                choices: ["Star Lord", "Star Destroyer", "Star Eater", "Star King"],
                ans: 0,
                img: "assets/img/starlord.gif"
            },
            {
                question: "Drax's reflexes are too fast to catch what?",
                choices: ["Nothing", "Metaphors", "Ball", "Food"],
                ans: 1,
                img: "assets/img/drax.gif"
            },
            {
                question: "Gamora is the adopted daughter of?",
                choices: ["J'son", "Hulk", "She-Hulk", "Thanos"],
                ans: 3,
                img: "assets/img/gamora.gif"
            },
            {
                question: "Rocket Raccoon was inspired by what band's song?",
                choices: ["The Beatles", "The Rolling Stones", "Simon & Garfunkel", "Pink Floyd"],
                ans: 0,
                img: "assets/img/rocket.gif"
            },
            {
                question: "Who defeated Cell?",
                choices: ["Goku", "Gohan", "Future Trunks", "Vegeta"],
                ans: 1

            },
            {
                question: "Which Z fighter easily kills Mecha Freiza and King Cold?",
                choices: ["Goku", "Future Trunks", "Piccolo", "Goten"],
                ans: 1
            }
        ]
    };

    //starts the game and starts showing the first question
    var startGame =  function() {
        //console.log("I have begun the game!");
        $("#startButton").hide(); //Hide the startBtn
        gameCheck();
    };

    //This should randomize the questions
    var randomQuestion = function() {
        console.log("To randomize ze question one day");

    };

//shows the question from the array
    var showQuestion = function() {
            var currentQues = triviaGame.questions[triviaGame.currentQues].question;
            begin(); //timer!
            $(".question").html(currentQues); //input the current question to the question div
            //loops through to print the choices on the page
            for (var i = 0; i < triviaGame.questions[triviaGame.currentQues].choices.length; i++){
                var addBtn = $("<div>")
                addBtn.addClass("btn options"); //adds the btn and options class
                addBtn.data("num", i); //what i am comparing it to
                addBtn.on("click", compare); //adds click handler to compare the user selector vs actual answer
                addBtn.text(triviaGame.questions[triviaGame.currentQues].choices[i]); //text!
                $(".choices").append(addBtn); //appends it to the choices div
            }
            //console.log("THIS IS question");

        };

    var gameCheck = function() {
        //check to make sure the questions will keep going depending on how many questions are in the array
        if (triviaGame.currentQues < 6) {
            triviaGame.currentQues++; //increase the currentQues count by one to keep track
            showQuestion();
        } else {
            //Brings user to the endScreen if the currentQues greater than the length of the array
            endScreen();
        }
    };

    //compares if the user selection is correct
    var compare = function() {
        //checking the data"num" and comparing it to the answer index
        if ($(this).data("num") === triviaGame.questions[triviaGame.currentQues].ans) {
            correctAns();
        } else {
            incorrectAns();
        }
    };

    //setting up the counter to decrease the timer by 1 second
    var begin = function() {
        triviaGame.timer = 10000;
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
    //If the user answer the question correctly. increase the correct counter by 1 and prints a gif?
    var correctAns = function() {
        var question = triviaGame.questions[triviaGame.currentQues];
        clear();
        triviaGame.correct++;
        $(".question").empty();
        setTimeout(function() {
            gameCheck();
        }, 4000);
        $(".question").append("Nice Job!");
        $(".question").append("<br><img src=" + question.img + ">");
    };
    //If the user answer incorrectly, increasing the incorrect counter by 1, shows the answer and prints the gif
    var incorrectAns = function() {
        var question = triviaGame.questions[triviaGame.currentQues];
        clear();
        triviaGame.incorrect++;
        $(".question").empty();
        $(".question").append("Sorry the correct answer is " +  "<br>" + question.choices[question.ans]);
        $(".question").append("<br><img src=" + question.img + ">");
        setTimeout(function() {
            gameCheck();
        }, 3000);
    };

    //What happens when the user timesout on a question, increased the skipped counter by 1 and prints the gif
    var skippedAns = function() {
        var question = triviaGame.questions[triviaGame.currentQues];
        clear();
        triviaGame.skipped++;
        $(".question").append("What took slowpoke. The answer is " + "<br>" + question.choices[question.ans]);
        $(".question").append("<br><img src=" + question.img + ">");
        console.log(triviaGame.skipped);
        setTimeout(function() {
            gameCheck();
        }, 1000);
    };

    //End Screen
    var endScreen = function() {
        console.log("This is the end");
        clear();
        var questionDiv = $(".question");

        questionDiv.append("Number of Correct Answers: " + triviaGame.correct); //append the correct counter
        questionDiv.append("<br>Number of Incorrect Answers: " + triviaGame.incorrect); //append the incorrect counter
        questionDiv.append("<br>Number of Skipped Questions: " + triviaGame.skipped); //append the skipped counter
        questionDiv.append("<br><button id='playAgain'>Play Again?</button>"); //Play again?
        $("#playAgain").on("click", function() {
            $("#playAgain").hide();
            triviaGame.correct = 0;
            triviaGame.incorrect = 0;
            triviaGame.skipped = 0;
            triviaGame.currentQues = -1;
            clear();
            gameCheck();
        })
    };
    //clearing out divs and stopping the count down timer
    var clear = function() {
        stop();
        $(".question").empty();
        $(".timer").empty();
        $(".choices").empty();
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

