document.getElementById('intro').innerHTML = '<h2 class="merriweather-bold">Quiz App</h2><h3 class="merriweather-regular">this is a Quiz App project for my internship. there are some mcqs questions about web developement. hope you like this project. <br>-Atif ur Rehman- -Github(@atif-7)- -contact(ratif3610@gmail.com)-</h3><button style="width:7rem" id="start" class="Btn" onclick="Start()">Start Quiz</button>'
document.getElementById('box').style.display="none"

document.getElementById('start').onclick = function(){
    document.getElementById('intro').style.display="none";
    document.getElementById('box').style.display="block"
}
const questions = [
    {
        'que':"Which of the following is the markup language?",
        'a':"html",
        'b':"css",
        'c':"javascript",
        'd':"php",
        'correct':"a"
    },
    {
        'que':"What is the correct HTML for creating a hyperlink?",
        'a':"<a name='example.com'> example </a>",
        'b':"<a url='example.com'> example </a>",
        'c':"<a href='example.com'> example </a>",
        'd':"<a>example.com</a>",
        'correct':"c"
    },
    {
        'que':"Which keyword is used to declare variables in javascript?",
        'a':"string",
        'b':"var",
        'c':"$",
        'd':"variable",
        'correct':"b"
    },
    {
       'que':"Which technology is primarily responsible for the styling of web pages?",
        'a':"JavaScript",
        'b':"HTML",
        'c':"CSS",
        'd':"Python",
        'correct': "c" 
    },
    {
        'que':"Which of the following is not a back-end programming language commonly used in web development?",
        'a':"PHP",
        'b':"Ruby",
        'c':"Java",
        'd':"HTML",
        'correct':"d"
    }, 
    {
        'que':"Which of the following is used to store and query data in a tabular format in web development?",
        'a':"Database",
        'b':"API",
        'c':"JSON",
        'd':"XML",
        'correct':"a"
    },
    {
        'que':"Which JavaScript function is used to change the content of an HTML element?",
        'a':"modify()",
        'b':"change()",
        'c':"update()",
        'd':"innerHTML()",
        'correct':"d"
    },
    {
        'que':"Which CSS property is used to create rounded corners for an HTML element?",
        'a':"border-radius",
        'b':"corner-radius",
        'c':"rounded-corners",
        'd':"box-radius",
        'correct':"a"
    }
    
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0
const queBox = document.getElementById('quesBox')
const options = document.querySelectorAll('.option')
const startQuiz = () => {
    if (index === total) {
       return endQuiz()
    }
    reset();
    const data = questions[index]
    queBox.innerText = `${index+ 1}) ${data.que}`
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;

}
const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if (ans == data.correct) {
        right++;
    }else{
        wrong++;
    }
    index++;
    startQuiz();
    return;
}
const getAnswer = () => {
    let answer;
    options.forEach(input => {
        if (input.checked) {
            answer = input.value
        }
    })
    return answer;
}
const reset = () => {
    options.forEach(input => {
        input.checked = false
    });
}
const endQuiz = () => {
    if (right >4) {
        document.getElementById('container').innerHTML = `
        <div class="result">
            <h2 class='merriweather-bold'>Quiz App</h2>
            <h3>thanks for playing</h3>
            <div>
                <h4 style='border:2px solid green; border-radius:3px; padding:3px'>your score is ${right}/${total}</h4>
            </div>
            <div>
                <img src="win.gif" alt="you_lose" class="img">
            </div>
            <div>
                <a href="index.html" class="Btn">Restart</a>
            </div>
        </div>
        `
    }else{
        document.getElementById('container').innerHTML = `
        <div class="result">
            <h2 class='merriweather-bold'>Quiz App</h2>
            <h3>thanks for playing</h3>
            <div>
                <h4 style='border:2px solid red; border-radius:3px; padding:3px'>your score is ${right}/${total}</h4>
            </div>
            <div>
                <img src="lose.gif" alt="you_lose" class="img">
            </div>
            <div>
                <a href="index.html" class="Btn">Try Again</a>
            </div>
        </div>
        `
    }
}
startQuiz();