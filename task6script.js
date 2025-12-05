
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
const optionsdivel=document.getElementById("optionsdiv");
const pel=document.getElementById("p");
const scoreel=document.getElementById("score");
const quizdivel=document.getElementById("quizdiv");
const scoredivel=document.getElementById("scorediv");
var currIndex=0;
var answered=false;

const optionsbutton=[]; //array to store the buttons
const useroptions=Array(questions.length).fill(0); //array to store the user options

let score=0;

loadquestion();


function nextQuestion(){
    currIndex++;    //increment the question index
    if(currIndex<questions.length){
        loadquestion();
    }

    else{
         quizdivel.style.display="none";
         scoredivel.style.display="block";

         score=0;
         useroptions.forEach((ans,i)=>{
            if(ans==questions[i].correctIndex){
                score++;
            }
         })
         scoreel.innerHTML=score;    

    }
}

function previousQuestion(){
    currIndex--;
    if(currIndex<0){
        currIndex=0;
        return;

    }
    loadquestion();;
    
}


function loadquestion(){
    answered=false; //reset the answer
    //reset the color in the options
      optionsdivel.innerHTML="";
      optionsbutton.length=0;

      pel.innerHTML=`Question ${currIndex+1} of 3`;

    //update the question and options
   
    questionel.innerHTML=questions[currIndex].text;
    
    questions[currIndex].options.forEach((opt,index)=>{
        const btn=document.createElement("button");
        btn.innerHTML=opt;
        btn.className="text-slate-50 flex flex-start w-[100%] mb-3 bg-slate-500 rounded-2xl p-3 hover:bg-slate-400 transistion-all duration-500";
        btn.onclick=()=>{
            checkanswer(index);
        }
        optionsdivel.appendChild(btn);
        optionsbutton.push(btn);
    })

}




function checkanswer(sindex){
    if(answered){
        return; //if already answered then return
    }
    answered=true;
    const cindex=questions[currIndex].correctIndex;
    useroptions[currIndex]=sindex;

    if(cindex==sindex){ 
        optionsbutton[sindex].style.backgroundColor="green"  //mark correct answer
    }
    else{
         optionsbutton[sindex].style.backgroundColor="red"  //mark wrong answer
         optionsbutton[cindex].style.backgroundColor="green" 
    }
}

