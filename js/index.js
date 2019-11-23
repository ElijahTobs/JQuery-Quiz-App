const selectedQuestions = qna.sort(() => { 
  return Math.random() - Math.random()}
).slice(0, 5);

let score = 0;
let questionIndex = 0;

const gradeQuestion = (ans) => {
  console.log(score, ans, selectedQuestions[questionIndex].answer)
  if (ans == selectedQuestions[questionIndex].answer) {
    score = score + 20;
  }
  questionIndex += 1;
};




const renderSuccess = () => {
  $('.question-number').text('');
  $('.question-question').text('');
  $('.options1').text('');
  $('.options2').text('');
  $('.options3').text('');
  $('.options4').text('');
  
  
  if (score <= 60) {
    $('<span>VERY POOR! You have </span>' + score + '<span> points</span>').appendTo('.question-question');
    $('<img src="https://media.giphy.com/media/5MtOIdkHhxPFu/giphy.gif">').appendTo('.question-options');
  } else {
    $('<span>CONGRATS! YOU\'VE DONE WELL! You have </span>' + score + '<span> points</span>').appendTo('.question-question');
    $('<img src="https://media.giphy.com/media/l0MYCn3DDRBBqk6nS/giphy.gif">').appendTo('.question-options');
  };

}


  const renderQuestion = (qIndex) => {
    let question = selectedQuestions[qIndex];
    $('.question-number').text('Question ' + (qIndex + 1));
    $('.question-question').text(question.question);
    $('.options1').text('')
    $('.options2').text('')
    $('.options3').text('')
    $('.options4').text('')  
    // $(opt).text('')  
    question.options.forEach((element, i) => {
        let opt = '.options' + (i + 1);
        // console.log(opt);
        let radioBut = $('<input type="radio" name="answer" value=' + element + ' /> ');
        // let optcl = $('<input type="text"name="answer" value=' + element + ' </input>')
        let radioLab = $('<label for=" + element + ">' + element +'</label> ')
        radioBut.appendTo(opt);
        // optcl.appendTo(opt);
        radioLab.appendTo(opt);   
        // console.log(opt);
    });

    $( "input:radio[name='answer']" /*opt*/ ).click(function() {
      //grade
      gradeQuestion(this.value)
      if (questionIndex == (selectedQuestions.length)) {
        //render success
      renderSuccess();
          //render next question
      } else {
        renderQuestion(questionIndex)
      }
      // if (score <= 49) {
      //   return 'You don\'t even know Naija';
      // } else {
      //   return 'You sabi Naija';
      // }
      //render next question
      

    });
    
}

$( document ).ready(function(){
  renderQuestion(questionIndex);
});

  //  $('question-number').text('Question' + (qIndex + 1));
//}

// $( document ).ready(function(){
//     renderQuestion(questionIndex);
// });





// .options1,
// .options3 {
// /* align-items: right; */
// align-items: flex-end;
// };

// .options2,
// .options4 {
//     /* flex-direction: row;
//     align-items: stretch; */
//     align-items: flex-end;
// }