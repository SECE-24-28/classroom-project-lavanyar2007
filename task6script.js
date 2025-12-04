const questions=[
    {
        text:"Which Keyword decares a constant in JavaScript?",
        options:["var","let","const","static"],
        correctIndex:2
    },
    {
        text:"Which method is used to log to the console in JavaScript?",
        options:["print()","log()","console()","console.log()"],
        correctIndex:3
    },
    {
        text:"Which of these is NOT a JavaScript data type?",
        options:["number","string","boolean","character"],
        correctIndex:3
    }
];
const questionel=document.getElementById("question");
const o1el=document.getElementById("o1");
const o2el=document.getElementById("o2");
const o3el=document.getElementById("o3");   
const o4el= document.getElementById("o4");
const pel=document.getElementById("p");
const nextel=document.getElementById("next");

var currIndex=0;
var answered=false;

function checkanswer(sindex){
    if(answered){
        return; //if already answered then return
    }
    answered=true;
    const cindex=questions[currIndex].correctIndex;
    if(cindex==sindex){ 
        document.getElementById("o"+(sindex+1)).style.backgroundColor="green"  //mark correct answer
    }
    else{
         document.getElementById("o"+(sindex+1)).style.backgroundColor="red"  //mark wrong answer
         document.getElementById("o"+(cindex+1)).style.backgroundColor="green" 
    }
}
//move to next question
function nextQuestion(){
    answered=false; //reset the answer
    currIndex++;    //increment the question index
    if(currIndex==questions.length){
        alert("You have completed the quiz");
        location.href="task6.html";  //return  to  home page
    }
    //reset the color in the options
    document.getElementById("o1").style.backgroundColor="";
    document.getElementById("o2").style.backgroundColor="";
    document.getElementById("o3").style.backgroundColor="";
    document.getElementById("o4").style.backgroundColor="";

    //update the question and options
    pel.innerHTML=`Question ${currIndex+1} of 3`;
    questionel.innerHTML=questions[currIndex].text;
    o1el.innerHTML=questions[currIndex].options[0];
    o2el.innerHTML=questions[currIndex].options[1];
    o3el.innerHTML=questions[currIndex].options[2];
    o4el.innerHTML=questions[currIndex].options[3];

}



