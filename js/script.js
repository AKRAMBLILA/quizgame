var menu = document.getElementById("menu");
var presentation=document.getElementById("presentation");
var _name = document.getElementById("name");
// ---------------------------------



function _click(){
    change();

}


var question = document.querySelector(".qu");
var answers = document.querySelector(".answers");
var an1 = document.querySelector(".an1");
var an2 = document.querySelector(".an2");
var an3 = document.querySelector(".an3");
var an4 = document.querySelector(".an4");

var number_question=0;
var time_left = 15;


menu.style.visibility="hidden";

// function for star
document.querySelector(".btn-start").addEventListener("click",function(){
    if(_name.value === ""){
        alert("enter your name !!");
    }else{
        time_left = 15;7
        presentation.style.visibility="hidden";
        menu.style.visibility="visible";
        document.querySelector(".count-down").style.background='';
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
        change();
      }
      }

    }
    time_left -= 1;
  }, 1000
);






function change(){
    number_question += 1;
    number_qe();
    time_left = 15;
    document.querySelector(".count-down").style.background='';
}

function number_qe(){
    switch(number_question){
        case 1:
            question.innerHTML ="aaaaaaaaaaaaaaaaaa";
            an1.innerHTML ="aaa";
            an2.innerHTML ="aaa";
            an3.innerHTML ="aaa";
            an4.innerHTML ="aaa";
        break;
        case 2:
            question.innerHTML ="bbbbbbbbbbbbbbbbbbb";
            an1.innerHTML ="bbb";
            an2.innerHTML ="bbb";
            an3.innerHTML ="bbb";
            an4.innerHTML ="bbb";
        break;
        case 3:
            question.innerHTML ="ccccccccccccccccccc";
            an1.innerHTML ="ccc";
            an2.innerHTML ="ccc";
            an3.innerHTML ="ccc";
            an4.innerHTML ="ccc";
        break;
        case 4:
            question.innerHTML ="eeeeeeeeeeeeeeeeeeee";
            an1.innerHTML ="aaa";
            an2.innerHTML ="aaa";
            an3.innerHTML ="aaa";
            an4.innerHTML ="aaa";
        break;
        case 5:
            question.innerHTML ="ffffffffffffffffffff";
            an1.innerHTML ="bbb";
            an2.innerHTML ="bbb";
            an3.innerHTML ="bbb";
            an4.innerHTML ="bbb";
        break;
        case 6:
            question.innerHTML ="ggggggggggggggggggggg";
            an1.innerHTML ="ccc";
            an2.innerHTML ="ccc";
            an3.innerHTML ="ccc";
            an4.innerHTML ="ccc";
        break;
        case 7:
            question.innerHTML ="hhhhhhhhhhhhhhhhhhhhhhhhh";
            an1.innerHTML ="aaa";
            an2.innerHTML ="aaa";
            an3.innerHTML ="aaa";
            an4.innerHTML ="aaa";
        break;
        case 8:
            question.innerHTML ="iiiiiiiiiiiiiiiiiiiiiiiiiiiii";
            an1.innerHTML ="bbb";
            an2.innerHTML ="bbb";
            an3.innerHTML ="bbb";
            an4.innerHTML ="bbb";
        break;
        case 9:
            question.innerHTML ="xxxxxxxxxxxxxxxxxxxxxxxxxxxx";
            an1.innerHTML ="ccc";
            an2.innerHTML ="ccc";
            an3.innerHTML ="ccc";
            an4.innerHTML ="ccc";
        break;
        default:
            question.innerHTML ="wwwwwwwwwwwwwwwwwwwwwwwwwww";
            an1.innerHTML ="ddd";
            an2.innerHTML ="ddd";
            an3.innerHTML ="ddd";
            an4.innerHTML ="ddd";
    }
}