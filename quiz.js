const quiz = [
    {
        question: "1. きゅうりのなかに、かくれているすうじは？",
        answers: ["1", "3", "5", "9"],
        correct: "9"
    },
    {
        question: "2. ちゃいろくて、あついと とけちゃう あまいおかしは なに？",
        answers: ["おせんべい", "ガム", "グミ", "チョコ"],
        correct: "チョコ",
    },
    {
        question: "3. しろとくろの たべられないパンってなーんだ？",
        answers: ["パンツ", "パンダ", "あんぱん", "チーズ"],
        correct: "パンダ",
    },
    {
        question: "4. 「リン リン リン リン リン」ってなる たべものなーんだ？",
        answers: ["りんご", "すず", "ジュース", "でんわ"],
        correct: "りんご",
    },
    {
        question: "5. たまは、たまでも、さわると きえちゃう たまはなーんだ？",
        answers: ["びーだま", "たまご", "たまねぎ", "しゃぼんだま"],
        correct: "しゃぼんだま",
    },
    {
        question: "6. れいぞうこに かくれいてる どうぶつはなーんだ？",
        answers: ["きりん", "ぞう", "うま", "うさぎ"],
        correct: "ぞう",
    },

];


const correctSound = new Audio("/pinpon.mp3");
const wrongSound = new Audio("/boo.mp3");





const button = document.getElementsByTagName("button");

const quizLength = quiz.length;
let quizIndex = 0;

const setupQuiz = () =>{
    const fraga = document.getElementById("js-question");
    fraga.textContent = quiz[quizIndex].question;
    for(let i = 0; i < button.length; i++ ){
        button[i].textContent = quiz[quizIndex].answers[i];
    }
}

setupQuiz();

const clickHandler = (e) =>{
    if(quiz[quizIndex].correct === e.target.textContent){
        correctSound.play();
        correctSound.currentTime = 0;
        quizIndex++;
        if(quizIndex < quizLength){
            setupQuiz();
        }else{
            window.alert("もうないよー");
        }
    }else{
        wrongSound.play();
        wrongSound.currentTime = 0;
    }
    // 次の問題に進む
   
        
    
};

for(let i = 0; i < button.length; i++){
    button[i].addEventListener("click", (e) =>{
    clickHandler(e);
});
}

