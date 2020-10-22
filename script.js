var boxes = ['red','blue','green','yellow']
var computerPattern = []
var userChoices = []
var level = 0
var isStart = false



function getRandomBox() {
    let randomNumber = Math.floor(Math.random() * boxes.length)
    let box = document.getElementById(boxes[randomNumber])
    return box
}


function checkAnswer(level) {
    
    if(userChoices[level] !== computerPattern[level]){
        return wrongAnswer()
    }else{
        if(userChoices.length === computerPattern.length){

            userChoices = []
            starting()
        }

    }
    
    
    
}



function starting() {
    isStart = true
    generateQuestion()
    level += 1
}

function wrongAnswer() {
    document.getElementById("first-warning").innerHTML = "<h1>Wrong!</h1>"
    playSound('wrong')

    document.getElementById("title").innerHTML = "<h2>Starting over....</h2>"
    setTimeout(function(){location.reload()},500)
    
}


function changeMessage() {
    document.getElementById("first-warning").innerHTML = "Retrace The Color!"
}


function generateQuestion() {

    document.getElementById("first-warning").innerHTML = "Remember The Color!"
    let box = getRandomBox()
    setTimeout(function() {
        box.style.backgroundColor="black"
        playSound(box.id)
    },300)
    setTimeout(function() {
        backToNormal(box)
    },500)
    computerPattern.push(box.id)
    console.log(`computer: ${computerPattern}`)

    setTimeout(function() {
        changeMessage()
    },800)
}
   

function backToNormal(box) {
    box.style.backgroundColor=box.id
}


//generateQuestion(1)



function playSound(id) {
    var audio = new Audio("sounds/"+id+".mp3")
    audio.play(); 
}

let boxesClass = document.getElementsByClassName("box")

document.onkeypress = function name() {
    if(isStart===false){
        starting();
    }
    
}
for (let i = 0; i < boxesClass.length; i++) {
    
    boxesClass[i].onclick = function(){
        //alert(this.id)
        userChoices.push(this.id)
        console.log(`user: ${userChoices}`);
        checkAnswer(userChoices.length-1)
        playSound(this.id)
        
    }
}







