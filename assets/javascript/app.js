$(document).ready(function() {
    console.log("Ready");
    var correct = 0;
    var incorrect = 0;
    var skipped = 0;
    var questCount = 0;
    var timer = 30;

    var questions = [
            {
                q: "Who was the first villian Goku faced in Dragon Ball Z?",
                choices: ["Vegeta", "Nappa", "Raditz", "Piccolo"],
                ans: "Raditz"
            },
            {
                q: "When did Goku first achieved Super Saiyan?",
                choices: ["After fighting Vegeta", "After witnessing the death of Krillin", "After Freiza gave him a hug", "All the above"],
                ans: "After witnessing the death of Krillin"
            },
            {
                q: "Who gave Future Trunks his sword?",
                choices: ["Taipon", "Gohan", "Vegeta", "What sword?"],
                ans: "Taipon"
            },
            {
                q: "Gotenks is a fusion between what two characters?",
                choices: ["Vegeta & Goku", "Trunks and Gohan", "Goten and Trunks", "Gohan and Piccolo"],
                ans: "Goten and Trunks"
            },
            {
                q: "When Goku was a baby, who did he kept awake by crying constantlly?",
                choices: ["Vegeta", "Gohan", "Goten", "Broly"],
                ans: "Broly"
            },
            {
                q: "Who defeated Cell?",
                choices: ["Goku", "Gohan", "Future Trunks", "Vegeta"],
                ans: "Gohan"

            },
            {
                q: "Which Z fighter easily kills Mecha Freiza and King Cold?",
                choices: ["Goku", "Future Trunks", "Piccolo", "Goten"],
                ans: "Future Trunks"
            }
        ];

    //Iniatalizing the game
    function initalizeGame() {
        correct = 0;
        incorrect = 0;
        skipped =0;
        questCount = 0;
    }

    /////////////////////
    // Timer Functions //
    /////////////////////

    //set the counter for the countdown function to decrease by 1 second
    function begin() {
        counter = setInterval(countDown, 1000);
    }

    function countDown() {
        timer--;
        $(".timer").html("Time Remaining: " + timer + " Seconds");
        //checks to see if the timer has ran out
        if(timer === 0){
            stop(); //stops the counters
            questCount++; //increase the question count
            skipped++; //increase the skipped questions
        }
    }
    //stop the counter countdown
    function stop() {
        clearInterval(counter);
    }

    //
    //
    //



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




});

