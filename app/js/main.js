// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

// bolds the subhead if there is no headline
let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead[i].style.fontWeight = "600";
        }       
     }


// const myQuiz = [
//     {
//     'q': 'A sample question 1?',
//     'options': [
//         'Answer 1',
//         'Answer 2',
//         'Answer 3',
//         'Answer 4'
//     ],
//     'correctIndex': 1,
//     'correctResponse': 'Custom correct response.',
//     'incorrectResponse': 'Custom incorrect response.'
//     },
//     {
//     'q': 'A sample question 2?',
//     'options': [
//         'Answer 1',
//         'Answer 2'
//     ],
//     'correctIndex': 1,
//     'correctResponse': 'Custom correct response.',
//     'incorrectResponse': 'Custom incorrect response.'
//     },
//     {
//     'q': 'A smaple question 3?',
//     'options': [
//         'Answer 1',
//         'Answer 2',
//         'Answer 3',
//         'Answer 4'
//     ],
//     'correctIndex': 2,
//     'correctResponse': 'Custom correct response.',
//     'incorrectResponse': 'Custom incorrect response.'
//     },
//     {
//     'q': 'A smaple question 4?',
//     'options': [
//         'Answer 1',
//         'Answer 2'
//     ],
//     'correctIndex': 1,
//     'correctResponse': 'Custom correct response.',
//     'incorrectResponse': 'Custom incorrect response.'
//     },
//     {
//     'q': 'A smaple question 5?',
//     'options': [
//         'Answer 1',
//         'Answer 2',
//         'Answer 3',
//         'Answer 4'
//     ],
//     'correctIndex': 3,
//     'correctResponse': 'Custom correct response.',
//     'incorrectResponse': 'Custom incorrect response.'
//     }
// ]

// $('#quiz').quiz({
//     questions: myQuiz,
//     counterFormat: 'Question %current of %total'
// });

function answerQuestion(questionContainer) {
    let questions = $('.question-container'),
        score = 0,
        answerLocked = false,
        response = '',
        correctResponse = 'That\'s correct!',
        incorrectResponse = 'Too bad!';

        for (i = 0; i < questions.length; i++) { 
            console.log(questions);
        }
        console.log(questionContainer);

    $(questionContainer + ' .answers li a').on('click', function(){
        if (answerLocked) {
            return;
        }
            answerLocked = true;
        if (this.dataset.correct == "true") {
            $(this).addClass("correct");
            score++;
            response = correctResponse;
        } else if (this.dataset.correct == "false") {
            $(this).addClass("incorrect");
            response = incorrectResponse;
        }

        $(questionContainer + ' .quiz-controls').html(response).slideDown(200);
    })

}

$('.answers').one('mouseover', function(){
    let parentDiv = ($(this).parent().attr('id'))
    answerQuestion('#' + parentDiv);
})

    
