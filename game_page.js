player1_name = localStorage.getItem("Player1")
player2_name = localStorage.getItem("Player2")
player1_score = 0
player2_score = 0
document.getElementById("Player1Name").innerHTML = player1_name
document.getElementById("Player2Name").innerHTML = player2_name
document.getElementById("player1Score").innerHTML = player1_score
document.getElementById("player2Score").innerHTML = player2_score
document.getElementById("playerQuestion").innerHTML = "question turn- "+player1_name
document.getElementById("playerAns").innerHTML = "ans turn- "+player2_name
function send (){
    getWord = document.getElementById("word").value;
    word=getWord.toLowerCase();
    firstLetter= word.charAt(1);
    split=Math.floor(word.length/2);
    middleLetter = word.charAt(split);
    length=word.length-1
    lastLetter= word.charAt(length);
    console.log(firstLetter)
    console.log(middleLetter)
    console.log(lastLetter)
    removecharAt1 = word.replace(firstLetter, "_")
    removecharAt2 = removecharAt1.replace(middleLetter, "_")
    removecharAt3 = removecharAt2.replace(lastLetter, "_")
    console.log(removecharAt1)
    console.log(removecharAt2)
    console.log(removecharAt3)

    question = "<h4 id='word_display'>Q."+removecharAt3+"</h4>"
    inputBox = "<br>Answer;<input type='text' id='input_check_box'>"
    button = "<br><br><button class='btn btn-info' onclick='check()'>check</button>"
    row = question+inputBox+button
    document.getElementById("output").innerHTML = row
    document.getElementById("word").value=""
}
question_turn = "player1"
answer_turn = "player2"
function check (){
    get_answer = document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    if(answer == word){
        if(answer_turn == "player1"){
            player1_score = player1_score+1;
            document.getElementById('player1Score').innerHTML = player1_score
        }
        else{
            player2_score = player2_score+1;
            document.getElementById('player2Score').innerHTML = player2_score
        }

    }
    if(question_turn  == "player1"){
        question_turn = "player2"
        document.getElementById("playerQuestion").innerHTML = "question turn-"+player2_name

    }
    else{ question_turn = "player1"
    document.getElementById("playerQuestion").innerHTML = "question turn-"+player1_name
}
if(answer_turn  == "player1"){
    answer_turn = "player2"
    document.getElementById("playerAns").innerHTML = "answer turn-"+player2_name

}
else{ answer_turn = "player1"
document.getElementById("playerAns").innerHTML = "answer turn-"+player1_name
}
document.getElementById("output").innerHTML = ""
}
