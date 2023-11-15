// This is for the Sign Up page and the Quiz page
const startBtn = document.querySelector('.btn');
const popBtn = document.querySelector('.pop');
const exi = document.querySelector('.exit');
const con = document.querySelector('.conti');
const mainP = document.querySelector('.mainPage');
const qui = document.querySelector('.quiqui');
const Box = document.querySelector('.quizBox');
const optionList = document.querySelector('.optlist');
const contain = document.querySelector('.container')
const conten = document.querySelector('.container1')
const resultBox = document.querySelector('.resultBox');

let userAnswers = []; // Array to store user's selected answers

startBtn.onclick = () => {
    popBtn.classList.add('active');
    mainP.classList.add('active');
};

exi.onclick = () => {
    popBtn.classList.remove('active');
    mainP.classList.remove('active');
};

con.onclick = () => {
    qui.classList.add('active');
    popBtn.classList.remove('active');
    mainP.classList.remove('active');
    Box.classList.add('active');
    showQs(0);
    quesCounter(1);

    // Start the countdown timer here
    startCountdown();
    quesCounter(qsCount + 1, questions.length);

    // Show the .quibui div only for the first question
    const quibuiDiv = document.querySelector('.quibui');
    quibuiDiv.style.display = qsCount === 0 ? 'block' : 'none';
};

let qsCount = 0;
let qsNumb = 0;
let count=0;
let count1=0

const nxtBtn = document.querySelector('.btbtn');

let intervalId; // Store the interval ID for the countdown timer

nxtBtn.onclick = () => {
    startCountdown();
    const selectedOption = document.querySelector('.opt.selected');
    if (selectedOption) {
        const selectedIndex = Array.from(optionList.children).indexOf(selectedOption);
        userAnswers[qsCount] = selectedIndex;
        let x= userAnswers[qsCount]
        console.log(userAnswers)
        console.log(x)
        if(x==questions[qsCount].correctIndex)
        {
        count+=1;
        console.log(count);
        }
        else
        {
            count1+=1
            console.log(count1);
        }
    }

    qsCount++;
    if (qsCount < questions.length) {
        showQs(qsCount);
        quesCounter(qsCount + 1, questions.length);
        
        // Hide the .quibui div for remaining questions
        const quibuiDiv = document.querySelector('.quibui');
        quibuiDiv.style.display = 'none';
    } else {
        // Quiz finished, calculate score
        const userScore = calculateScore();
        const passingMarks = Math.ceil(questions.length * 0.75);
        resultBox.classList.add('active');
        conten.classList.add('active');
        const resultElement = document.querySelector('.resultBox');
        if (userScore >= passingMarks) {
            contain.classList.add('active')
            resultElement.innerHTML =  `
            <div class="hello">Congratulations! You passed the quiz.</div>
            <div class="hello">You have scored:</div>
            <div class="countdown-container1 countdown-circle1 countdown1">${count}/${questions.length}</div>
            `;
            // resultElement.style='display: flex; justify-content: center; align-item: center;'
        } else {
            contain.classList.add('active')
            resultElement.innerHTML = `
                <div class="hello">Sorry, you did not pass the quiz.</div>
                <div class="hello">You have scored:</div>
                <div class="countdown-container1 countdown-circle1 countdown1">${count}/${questions.length}</div>
                `;
            // resultElement.style='display: flex; justify-content: center; align-item: center;'
        }

        // Hide the next button
        nxtBtn.style.display = 'none';
    }

    // Clear the selected class for options
    const options = document.querySelectorAll('.opt');
    options.forEach((option) => {
        option.classList.remove('selected');
    });
};


// Add an event listener for option clicks
// optionList.addEventListener('click', (event) => {
//     const clickedOption = event.target.closest('.opt');
//     if (clickedOption && !clickedOption.classList.contains('selected')) {
//         const options = Array.from(optionList.children);
//         options.forEach((option) => {
//             option.classList.remove('selected', 'clicked', 'correct', 'incorrect');
//         });

//         const selectedIndex = options.indexOf(clickedOption);
//         clickedOption.classList.add('selected', 'clicked');

//         const currentQuestion = questions[qsCount];
//         if (selectedIndex === currentQuestion.correctIndex) {
//             clickedOption.classList.add('correct');
//         } else {
//             clickedOption.classList.add('incorrect');
//             options[currentQuestion.correctIndex].classList.add('correct');
//         }
//     }
// });
optionList.addEventListener('click', (event) => {
    const clickedOption = event.target.closest('.opt');
    if (clickedOption && !clickedOption.classList.contains('selected')) {
        const options = Array.from(optionList.children);
        options.forEach((option) => {
            option.classList.remove('selected', 'clicked');
        });

        const selectedIndex = options.indexOf(clickedOption);
        clickedOption.classList.add('selected', 'clicked');
    }
});


function showQs(index) {
    const qs = document.querySelector('.qsqs');
    qs.textContent = `${questions[index].numb}. ${questions[index].question}`;
    
    let optionTag = '';
    for (let i = 0; i < questions[index].options.length; i++) {
        optionTag += `<div class="opt ${userAnswers[index] === i ? 'selected' : ''}"><span>${questions[index].options[i]}</span></div>`;
    }

    optionList.innerHTML = optionTag;
}

/*For changing 1 of 5 questions*/
/*For changing Questions: 1/5*/
function quesCounter(index, total) {
    const qstotalFooter = document.querySelector('.newfoot .totu');
    const qstotalAboveQuestion = document.querySelector('.quibuiFoot1');

    if (qstotalFooter) {
        qstotalFooter.textContent = `${index} of ${total} Questions`;
    }

    if (qstotalAboveQuestion) {
        qstotalAboveQuestion.textContent = `Questions: ${index}/${total}`;
    }
}


const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === questions[i].correctIndex) {
            score++;
        }
    }
    return score;
};



/*This is for the Quiz options*/
let questions = [
    {
        numb: 1,
        question: "What is the output of the following code snippet?",
        answer: "C. [4, 3, 2, 1]",
        correctIndex: 2,
        options: [
            "A. [1, 2, 3]",
            "B. [1, 2, 3, 4]",
            "C. [4, 3, 2, 1]",
            "D. [4, 3, 2]"
        ]
    },
    {
        numb: 2,
        question: "Which of the following data structures is used to implement a LIFO (Last-In-First-Out) behavior?",
        answer: "C. Stack",
        correctIndex: 2,
        options: [
            "A. Queue",
            "B. Linked List",
            "C. Stack",
            "D. Heap"
        ]
    },
    {
        numb: 3,
        question: "In Python, what is the difference between range(5) and list(range(5))?",
        answer: "B. range(5) is a generator",
        correctIndex: 1,
        options: [
            "A. Both are equivalent",
            "B. range(5) is a generator",
            "C. range(5) creates a list",
            "D. list(range(5)) is invalid"
        ]
    },
    {
        numb: 4,
        question: "Which of the following is NOT a valid way to create a new thread in Java?",
        answer: "D. Invoking the run() method directly",
        correctIndex: 3,
        options: [
            "A. Extending the Thread class",
            "B. Implementing the Runnable interface",
            "C. Using the ExecutorService framework",
            "D. Invoking the run() method directly"
        ]
    },
    {
        numb: 5,
        question: "What is the purpose of the super() function in Python?",
        answer: "A. Calling a method from the parent class",
        correctIndex: 0,
        options: [
            "A. Calling a method from the parent class",
            "B. Initializing a new instance of a class",
            "C. Accessing private class members",
            "D. Importing modules from the standard library",
        ]
    },
    {
        numb: 6,
        question: "What is the purpose of the \"break\" statement in a loop in programming?",
        answer: "d) It ends the current loop and transfers control to the statement immediately after the loop.",
        correctIndex: 3,
        options: [
            "a) It terminates the entire program.",
            "b) It skips the current iteration and continues with the next.",
            "c) It ends the current loop and transfers control to the next iteration of the outer loop.",
            "d) It ends the current loop and transfers control to the statement immediately after the loop."
        ]
    },
    {
        numb: 7,
        question: "What is the term for a function that calls itself within its own definition?",
        answer: "a) Recursive function",
        correctIndex: 0,
        options: [
            "a) Recursive function",
            "b) Repeating function",
            "c) Iterative function",
            "d) Nested function"
        ]
    },
    {
        numb: 8,
        question: "Which data structure is based on the principle of \"First-In-First-Out\" (FIFO)?",
        answer: "b) Queue",
        correctIndex: 1,
        options: [
            "a) Stack",
            "b) Queue",
            "c) Hash table",
            "d) Tree"
        ]
    },
    {
        numb: 9,
        question: "In object-oriented programming, what is encapsulation?",
        answer: "a) The process of hiding the implementation details and exposing only the necessary features of an object.",
        correctIndex: 0,
        options: [
            "a) The process of hiding the implementation details and exposing only the necessary features of an object.",
            "b) The process of creating new objects based on existing objects.",
            "c) The process of breaking down a complex problem into smaller subproblems.",
            "d) The process of converting data from one type to another."
        ]
    },
    {
        numb: 10,
        question: "In object-oriented programming languages like Java and C++, what is the purpose of the \"this\" keyword?",
        answer: "c) It refers to the current instance of the class.",
        correctIndex: 2,
        options: [
            "a) It refers to the parent class.",
            "b) It creates a new instance of a class.",
            "c) It refers to the current instance of the class.",
            "d) It is used to define a static method."
        ]
    }
    // {
    //     numb: 11,
    //     question: "What is the term used for a function defined inside another function in JavaScript?",
    //     answer: "c) Closure",
    //     correctIndex: 2,
    //     options: [
    //         "a) Wrapper function",
    //         "b) Subfunction",
    //         "c) Closure",
    //         "d) Nested function"
    //     ]
    // },
    // {
    //     numb: 12,
    //     question: "What is the time complexity of a bubble sort algorithm in the worst case?",
    //     answer: "a) O(n^2)",
    //     correctIndex: 0,
    //     options: [
    //         "a) O(n^2)",
    //         "b) O(n log n)",
    //         "c) O(n)",
    //         "d) O(log n)"
    //     ]
    // },
    // {
    //     numb: 13,
    //     question: "Which keyword is used to declare a variable that can't be changed in Python?",
    //     answer: "b) const",
    //     correctIndex: 1,
    //     options: [
    //         "a) final",
    //         "b) const",
    //         "c) let",
    //         "d) var"
    //     ]
    // },
    // {
    //     numb: 14,
    //     question: "In C++, what is the result of adding an integer to a pointer?",
    //     answer: "c) Memory address calculated based on pointer arithmetic",
    //     correctIndex: 2,
    //     options: [
    //         "a) An error",
    //         "b) Sum of the integer and the pointer's memory address",
    //         "c) Memory address calculated based on pointer arithmetic",
    //         "d) It depends on the compiler"
    //     ]
    // },
    // {
    //     numb: 15,
    //     question: "What is the purpose of the 'git clone' command?",
    //     answer: "b) To copy a repository from a remote source to a local machine",
    //     correctIndex: 1,
    //     options: [
    //         "a) To create a new repository",
    //         "b) To copy a repository from a remote source to a local machine",
    //         "c) To merge changes from one branch to another",
    //         "d) To undo the previous commit"
    //     ]
    // }
];


/*For adding a countdown*/
function startCountdown() {
    /*Set the countdown timer to 60 seconds (1 minute)*/
    let seconds = 60;
    const countdownElement = document.getElementById("countdown");
    
    /* Clear the interval if it's already running */
    clearInterval(intervalId);
    
    /* Start the countdown timer */
    intervalId = setInterval(function() {
        countdownElement.textContent = seconds;
        seconds--;
        if (seconds < 0) {
            clearInterval(intervalId);
            
            if (qsCount < questions.length - 1) {
                /* Skip the present question */
                nxtBtn.click();
            } else {
                /* Display answers and finish quiz */
                nxtBtn.click();
            }
        }
    }, 1000);
}
