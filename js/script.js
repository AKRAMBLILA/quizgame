var menu = document.getElementById("menu");
var presentation = document.getElementById("presentation");
var _name = document.getElementById("name");
var question = document.querySelector(".qu");
var answers = document.querySelector(".answers");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var an1 = document.querySelector(".an1");
var an2 = document.querySelector(".an2");
var an3 = document.querySelector(".an3");
var an4 = document.querySelector(".an4");
// --------Style-------------------
menu.style.visibility="hidden";
// ---------------------------------
var q=0;
var number_question=0;
var time_left = 15;
var win=document.querySelector(".win");
var lose=document.querySelector(".win");
var swi=Math.floor(Math.random()*5)+1;
win.style.visibility='hidden';

// function for star
document.querySelector(".btn-start").addEventListener("click",function(){

    if(_name.value === ""){
        alert("enter your name !!");
    }else{
        time_left = 15;7
        presentation.style.visibility="hidden";
        menu.style.visibility="visible";
        document.querySelector(".count-down").style.background='';
        questionchange();
    }
});

// function for exit
document.querySelector(".leave").addEventListener("click",function(){
    presentation.style.visibility="visible";
    menu.style.visibility="hidden";
    time_left = 15;
    document.querySelector(".count-down").style.background='';
});

// function for timer
var downloadTimer = setInterval(function(){
    if(time_left <= -1){
      // clearInterval(downloadTimer);
    } else { 
        document.querySelector(".count-down").innerHTML = time_left +" s";       
        if(time_left <= 10){
            document.querySelector(".count-down").style.background='red';
            if(time_left == 0){
                win.style.visibility='visible';
                lose.innerHTML='You Lose ! you can try again ';
            }
        }
    }
    time_left -= 1;
  }, 1000
);

// function for change question and answers
function change(){
    number_question += 1;
    number_qe();
    time_left = 15;
    document.querySelector(".count-down").style.background='';
}


// function for question and answers
function number_qe(){
    switch(number_question){
        case 1:
            question.innerHTML ="aaaaaaaaaaaaaaaaaa";
            an1.innerHTML ="true";
            an2.innerHTML ="aaa";
            an3.innerHTML ="aaa";
            an4.innerHTML ="aaa";
        break;
        case 2:
            question.innerHTML ="bbbbbbbbbbbbbbbbbbb";
            an1.innerHTML ="bbb";
            an2.innerHTML ="bbb";
            an3.innerHTML ="true";
            an4.innerHTML ="bbb";
        break;
        case 3:
            question.innerHTML ="ccccccccccccccccccc";
            an1.innerHTML ="ccc";
            an2.innerHTML ="true";
            an3.innerHTML ="ccc";
            an4.innerHTML ="ccc";
        break;
        case 4:
            question.innerHTML ="eeeeeeeeeeeeeeeeeeee";
            an1.innerHTML ="eee";
            an2.innerHTML ="eee";
            an3.innerHTML ="eee";
            an4.innerHTML ="true";
        break;
        case 5:
            question.innerHTML ="ffffffffffffffffffff";
            an1.innerHTML ="fff";
            an2.innerHTML ="fff";
            an3.innerHTML ="fff";
            an4.innerHTML ="true";
        break;
        case 6:
            question.innerHTML ="ggggggggggggggggggggg";
            an1.innerHTML ="ggg";
            an2.innerHTML ="true";
            an3.innerHTML ="ggg";
            an4.innerHTML ="ggg";
        break;
        case 7:
            question.innerHTML ="hhhhhhhhhhhhhhhhhhhhhhhhh";
            an1.innerHTML ="true";
            an2.innerHTML ="hhh";
            an3.innerHTML ="hhh";
            an4.innerHTML ="hhh";
        break;
        case 8:
            question.innerHTML ="iiiiiiiiiiiiiiiiiiiiiiiiiiiii";
            an1.innerHTML ="iii";
            an2.innerHTML ="iii";
            an3.innerHTML ="true";
            an4.innerHTML ="iii";
        break;
        case 9:
            question.innerHTML ="xxxxxxxxxxxxxxxxxxxxxxxxxxxx";
            an1.innerHTML ="true";
            an2.innerHTML ="xxx";
            an3.innerHTML ="xxx";
            an4.innerHTML ="xxx";
        break;
        default:
            question.innerHTML ="wwwwwwwwwwwwwwwwwwwwwwwwwww";
            an1.innerHTML ="www";
            an2.innerHTML ="true";
            an3.innerHTML ="www";
            an4.innerHTML ="www";
    }
}

function questionchange(){
    q++;
    document.getElementById("sc"+q).style.backgroundColor='#314e14';
    document.getElementById("sc"+(q-1)).style.background='';
    if(q<=3 && q>0)
    {
        easyQus();
    }else if(q<=7 && q>3)
    {
        moyQus();
    }else if(q<=10 && q>7){
        hardQus();
    }
    
    time_left = 15;
    document.querySelector(".count-down").style.background='';
    
}

function easyQus(){
    switch(swi){
        case 1:
            question.innerHTML ="easyaaaaaaaaaaaaaaaaaa";
            an1.innerHTML ="true";
            an2.innerHTML ="aaa";
            an3.innerHTML ="aaa";
            an4.innerHTML ="aaa";
        break;
        case 2:
            question.innerHTML ="easybbbbbbbbbbbbbbbbbbb";
            an1.innerHTML ="bbb";
            an2.innerHTML ="bbb";
            an3.innerHTML ="true";
            an4.innerHTML ="bbb";
        break;
        case 3:
            question.innerHTML ="easyccccccccccccccccccc";
            an1.innerHTML ="ccc";
            an2.innerHTML ="true";
            an3.innerHTML ="ccc";
            an4.innerHTML ="ccc";
        break;
        case 4:
            question.innerHTML ="easyeeeeeeeeeeeeeeeeeeee";
            an1.innerHTML ="eee";
            an2.innerHTML ="eee";
            an3.innerHTML ="eee";
            an4.innerHTML ="true";
        break;
        case 5:
            question.innerHTML ="easyffffffffffffffffffff";
            an1.innerHTML ="fff";
            an2.innerHTML ="fff";
            an3.innerHTML ="fff";
            an4.innerHTML ="true";
        break;
    }
}

function moyQus(){
    switch(swi){
        case 1:
            question.innerHTML ="moyaaaaaaaaaaaaaaaaaa";
            an1.innerHTML ="true";
            an2.innerHTML ="aaa";
            an3.innerHTML ="aaa";
            an4.innerHTML ="aaa";
        break;
        case 2:
            question.innerHTML ="moybbbbbbbbbbbbbbbbbbb";
            an1.innerHTML ="bbb";
            an2.innerHTML ="bbb";
            an3.innerHTML ="true";
            an4.innerHTML ="bbb";
        break;
        case 3:
            question.innerHTML ="moyccccccccccccccccccc";
            an1.innerHTML ="ccc";
            an2.innerHTML ="true";
            an3.innerHTML ="ccc";
            an4.innerHTML ="ccc";
        break;
        case 4:
            question.innerHTML ="moyeeeeeeeeeeeeeeeeeeee";
            an1.innerHTML ="eee";
            an2.innerHTML ="eee";
            an3.innerHTML ="eee";
            an4.innerHTML ="true";
        break;
        case 5:
            question.innerHTML ="moyffffffffffffffffffff";
            an1.innerHTML ="fff";
            an2.innerHTML ="fff";
            an3.innerHTML ="fff";
            an4.innerHTML ="true";
        break;
    }
}

function hardQus(){
    switch(swi){
        case 1:
            question.innerHTML ="hardaaaaaaaaaaaaaaaaaa";
            an1.innerHTML ="true";
            an2.innerHTML ="aaa";
            an3.innerHTML ="aaa";
            an4.innerHTML ="aaa";
        break;
        case 2:
            question.innerHTML ="hardbbbbbbbbbbbbbbbbbbb";
            an1.innerHTML ="bbb";
            an2.innerHTML ="bbb";
            an3.innerHTML ="true";
            an4.innerHTML ="bbb";
        break;
        case 3:
            question.innerHTML ="hardccccccccccccccccccc";
            an1.innerHTML ="ccc";
            an2.innerHTML ="true";
            an3.innerHTML ="ccc";
            an4.innerHTML ="ccc";
        break;
        case 4:
            question.innerHTML ="hardeeeeeeeeeeeeeeeeeeee";
            an1.innerHTML ="eee";
            an2.innerHTML ="eee";
            an3.innerHTML ="eee";
            an4.innerHTML ="true";
        break;
        case 5:
            question.innerHTML ="hardffffffffffffffffffff";
            an1.innerHTML ="fff";
            an2.innerHTML ="fff";
            an3.innerHTML ="fff";
            an4.innerHTML ="true";
        break;
    }
}