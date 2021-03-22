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
            question.innerHTML ="In which decade was the American Institute of Electrical Engineers (AIEE) founded?";
            an1.innerHTML ="1850s";
            an2.innerHTML ="1880s";
            an3.innerHTML ="1930s";
            an4.innerHTML ="1950s";
        break;
        case 2:
            answer3.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="What is part of a database that holds only one type of information?";
            an1.innerHTML ="Report";
            an2.innerHTML ="Field";
            an3.innerHTML ="Record";
            an4.innerHTML ="File";
        break;
        case 3:
            answer2.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="'.MPG' extension refers usually to what kind of file?";
            an1.innerHTML ="WordPerfect Document file";
            an2.innerHTML ="MS Office document";
            an3.innerHTML ="Animation/movie file";
            an4.innerHTML ="Image file";
        break;
        case 4:
            answer4.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="n the United States the television broadcast standard is...?";
            an1.innerHTML ="PAL";
            an2.innerHTML ="NTSC";
            an3.innerHTML ="SECAM";
            an4.innerHTML ="RGB";
        break;
        case 5:
            answer4.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="'.JPG' extension refers usually to what kind of file?";
            an1.innerHTML ="System file";
            an2.innerHTML ="Animation/movie file";
            an3.innerHTML ="MS Encarta document";
            an4.innerHTML ="Image file";
        break;
    }
}
function moyQus(){
    swi=Math.floor(Math.random()*5)+1;
    switch(swi){
        case 1:
            answer1.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="'.TXT' extension refers usually to what kind of file?";
            an1.innerHTML ="Text File";
            an2.innerHTML ="Image file";
            an3.innerHTML ="Audio file";
            an4.innerHTML ="Adobe Acrobat file";
        break;
        case 2:
            answer3.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="What is the term to ask the computer to put information in order numerically or alphabetically?";
            an1.innerHTML ="Crop";
            an2.innerHTML ="Report";
            an3.innerHTML ="Record";
            an4.innerHTML ="Sort";
        break;
        case 3:
            answer2.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="What does EPROM stand for?";
            an1.innerHTML ="Electric Programmable Read Only Memory";
            an2.innerHTML ="Erasable Programmable Read Only Memory";
            an3.innerHTML ="Evaluable Philotic Random Optic Memory";
            an4.innerHTML ="Every Person Requires One Mind";
        break;
        case 4:
            answer4.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="What was the active medium used in the first working laser ever constructed?";
            an1.innerHTML ="A diamond block";
            an2.innerHTML ="Helium-neon gas";
            an3.innerHTML ="A ruby rod";
            an4.innerHTML ="Carbon dioxide gas";
        break;
        case 5:
            answer4.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="What are three types of lasers?";
            an1.innerHTML ="Gas, metal vapor, rock";
            an2.innerHTML ="Pointer, diode, CD";
            an3.innerHTML ="Diode, inverted, pointer";
            an4.innerHTML ="Gas, solid state, diode";
        break;
    }
}
function hardQus(){
    swi=Math.floor(Math.random()*5)+1;
    switch(swi){
        case 1:
            answer1.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="'DB' computer abbreviation usually means ?";
            an1.innerHTML ="Database";
            an2.innerHTML ="Double Byte";
            an3.innerHTML ="Data Block";
            an4.innerHTML ="Driver Boot";
        break;
        case 2:
            answer3.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="'.INI' extension refers usually to what kind of file?";
            an1.innerHTML ="Image file";
            an2.innerHTML ="System file";
            an3.innerHTML ="Hypertext related file";
            an4.innerHTML ="Image Color Matching Profile file";
        break;
        case 3:
            answer2.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="What frequency range is the High Frequency band?";
            an1.innerHTML ="100 kHz";
            an2.innerHTML ="1 GHz";
            an3.innerHTML ="30 to 300 MHz";
            an4.innerHTML ="3 to 30 MHz";
        break;
        case 4:
            answer4.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="What does VVVF stand for?";
            an1.innerHTML ="Variant Voltage Vile Frequency";
            an2.innerHTML ="Variable Velocity Variable Fun";
            an3.innerHTML ="Very Very Vicious Frequency";
            an4.innerHTML ="Variable Voltage Variable Frequency";
        break;
        case 5:
            answer4.addEventListener("click",sa7i7);
            _event();
            question.innerHTML ="Who is largely responsible for breaking the German Enigma codes, created a test that provided a foundation for artificial intelligence?";
            an1.innerHTML ="Alan Turing";
            an2.innerHTML ="Jeff Bezos";
            an3.innerHTML ="George Boole";
            an4.innerHTML ="Charles Babbage";
        break;
    }
}