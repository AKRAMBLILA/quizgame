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
var _audio = new Audio("/audio/game.mp3");
// ---------------------------------
var q=0;
var time_left = 50;
var win=document.querySelector(".win");
var lose=document.querySelector(".win");
var is_correct=true;
// --------Style-------------------
menu.style.visibility="hidden";
win.style.visibility='hidden';

// function for star
document.querySelector(".btn-start").addEventListener("click",function(){
    if(_name.value === ""){
        alert("enter your name !!");
    }else{
        _audio.play();
        time_left = 50;
        presentation.style.visibility="hidden";
        menu.style.visibility="visible";
        document.querySelector(".count-down").style.background='';       
        question_change();
    }
});
// function for exit
document.querySelector(".leave").addEventListener("click",function(){
    presentation.style.visibility="visible";
    menu.style.visibility="hidden";
    time_left = 50;
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
function question_change(){
    if(is_correct ===true){
        q++;
        document.getElementById("sc"+q).style.backgroundColor='#314e14';
        if(q>=2){
            document.getElementById("sc"+(q-1)).style.backgroundColor='';
        }
        if(q<=3 && q>0)
        {
            easyQus();
        }else if(q<=7 && q>3)
        {
            moyQus();
        }else if(q<=10 && q>7){
            hardQus();
        }
        time_left = 50;
        document.querySelector(".count-down").style.background='';
        is_correct=false;
        answer1.style.backgroundColor='';
        answer2.style.backgroundColor='';
        answer3.style.backgroundColor='';
        answer4.style.backgroundColor='';

    }else{
        presentation.style.visibility="visible";
        menu.style.visibility="hidden";
        time_left = 50;
        document.querySelector(".count-down").style.background='';
 
    }
}
// function for question and answers
function sa7i7(){
    is_correct=true;
}
function yes(){
    answer1.style.backgroundColor='';
    answer2.style.backgroundColor='';
    answer3.style.backgroundColor='';
    answer4.style.backgroundColor='';
    this.style.backgroundColor='green';
}
function _event(){
    answer1.addEventListener("click",yes);
    answer2.addEventListener("click",yes);
    answer3.addEventListener("click",yes);
    answer4.addEventListener("click",yes);
}
function easyQus(){
    swi=Math.floor(Math.random()*5)+1;
    switch(swi){
        case 1:
            answer1.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="easyaaaaaaaaaaaaaaaaaa";
            an1.innerHTML ="true";
            an2.innerHTML ="aaa";
            an3.innerHTML ="aaa";
            an4.innerHTML ="aaa";
        break;
        case 2:
            answer3.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="easybbbbbbbbbbbbbbbbbbb";
            an1.innerHTML ="bbb";
            an2.innerHTML ="bbb";
            an3.innerHTML ="true";
            an4.innerHTML ="bbb";
        break;
        case 3:
            answer2.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="easyccccccccccccccccccc";
            an1.innerHTML ="ccc";
            an2.innerHTML ="true";
            an3.innerHTML ="ccc";
            an4.innerHTML ="ccc";
        break;
        case 4:
            answer4.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="easyeeeeeeeeeeeeeeeeeeee";
            an1.innerHTML ="eee";
            an2.innerHTML ="eee";
            an3.innerHTML ="eee";
            an4.innerHTML ="true";
        break;
        case 5:
            answer4.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="easyffffffffffffffffffff";
            an1.innerHTML ="fff";
            an2.innerHTML ="fff";
            an3.innerHTML ="fff";
            an4.innerHTML ="true";
        break;
    }
}
function moyQus(){
    swi=Math.floor(Math.random()*5)+1;
    switch(swi){
        case 1:
            answer1.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="moyaaaaaaaaaaaaaaaaaa";
            an1.innerHTML ="true";
            an2.innerHTML ="aaa";
            an3.innerHTML ="aaa";
            an4.innerHTML ="aaa";
        break;
        case 2:
            answer3.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="moybbbbbbbbbbbbbbbbbbb";
            an1.innerHTML ="bbb";
            an2.innerHTML ="bbb";
            an3.innerHTML ="true";
            an4.innerHTML ="bbb";
        break;
        case 3:
            answer2.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="moyccccccccccccccccccc";
            an1.innerHTML ="ccc";
            an2.innerHTML ="true";
            an3.innerHTML ="ccc";
            an4.innerHTML ="ccc";
        break;
        case 4:
            answer4.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="moyeeeeeeeeeeeeeeeeeeee";
            an1.innerHTML ="eee";
            an2.innerHTML ="eee";
            an3.innerHTML ="eee";
            an4.innerHTML ="true";
        break;
        case 5:
            answer4.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="moyffffffffffffffffffff";
            an1.innerHTML ="fff";
            an2.innerHTML ="fff";
            an3.innerHTML ="fff";
            an4.innerHTML ="true";
        break;
    }
}
function hardQus(){
    swi=Math.floor(Math.random()*5)+1;
    switch(swi){
        case 1:
            answer1.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="hardaaaaaaaaaaaaaaaaaa";
            an1.innerHTML ="true";
            an2.innerHTML ="aaa";
            an3.innerHTML ="aaa";
            an4.innerHTML ="aaa";
        break;
        case 2:
            answer3.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="hardbbbbbbbbbbbbbbbbbbb";
            an1.innerHTML ="bbb";
            an2.innerHTML ="bbb";
            an3.innerHTML ="true";
            an4.innerHTML ="bbb";
        break;
        case 3:
            answer2.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="hardccccccccccccccccccc";
            an1.innerHTML ="ccc";
            an2.innerHTML ="true";
            an3.innerHTML ="ccc";
            an4.innerHTML ="ccc";
        break;
        case 4:
            answer4.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="hardeeeeeeeeeeeeeeeeeeee";
            an1.innerHTML ="eee";
            an2.innerHTML ="eee";
            an3.innerHTML ="eee";
            an4.innerHTML ="true";
        break;
        case 5:
            answer4.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="hardffffffffffffffffffff";
            an1.innerHTML ="fff";
            an2.innerHTML ="fff";
            an3.innerHTML ="fff";
            an4.innerHTML ="true";
        break;
    }
}