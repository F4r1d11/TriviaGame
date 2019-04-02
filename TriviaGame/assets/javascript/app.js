
var questions = [{
  question: "1. What was the name chosen by the media for the 1992 U.S. Men's Olympic basketball team?",
  choices: ["Terrific Twelve", "BBall Demons", "Fatal Foes", "Dream Team"],
  correctAnswer: 3
}, {
  question: "2. What basketball great, known as His Airness, refused to be named as captain of the team after refusing to play if Isiah Thomas of the Detroit Pistons were chosen for the team?",
  choices: ["Larry Bird", "Michael Jordan", "Shaquille O'Neal", "Magic Johnson"],
  correctAnswer: 1
}, {
  question: "3. The coach of the Dream Team once stated that travelling with the team was like travelling with rock stars. He was so confident in their abilities that he declined to call even one timeout during the Olympic games. What was the name of the coach of the Dream Team? Think of a time-related word as a hint.",
  choices: ["Fearless Freep", "Charles Barkley", "Chuck Daly", "Fred Couples"],
  correctAnswer: 2
}, {
  question: "4. What was the reaction to the Dream Team by their Olympic basketball opponents?",
  choices: ["they idolized them", "they threw chairs at them", "they booed them", "they refused to play them"],
  correctAnswer: 0
}, {
  question: "5. Michael Jordan and Scottie Pippen shared a first-ever accomplishment in 1992. What was that? Remember, they both played for the Chicago Bulls.",
  choices: ["most missed free throws","lowest number of alley-oops in a game" , "highest number of fouls", "winning both the Olympics and the NBA title"],
  correctAnswer: 3
},{
question: "6. Did the Dream Team win their first game as a squad after practicing in California to face the NCAA Basketball All-Stars?",
  choices: ["Yes", "No", "They could not tell"],
  correctAnswer: 1
},{
question: "7. During their practice in Monaco, the Dream Team split up into two squads and played all-out in what would be called by Michael Jordan the best game I was ever in. How did Sports Illustrated describe it?",
  choices: ["they didn't know who to pass to", "the slowest hands we ever witnessed", "they were preening like peacocks", "the greatest game nobody ever saw"],
  correctAnswer: 3
},{
question: "8. During Olympic play, opposing teams lost by an average of 43.8 points per game to the Dream Team. What record did the Dream Team become the first to ever accomplish in the Olympics?",
  choices: ["The first div elementstrictest adherence to curfews", "lowest number of dunks in competition", "most baskets scored on themselves", "scoring more than one hundred points in every game"],
  correctAnswer: 3
},{
question: "9. What was the closest game played by the Dream Team during the Olympics?",
  choices: ["a squeaker versus Lithuania", "the first game they played", "the Gold Medal game against Croatia", "the game against Angola"],
  correctAnswer: 2
},{
question: "10. Did the President of the International Olympic Committee state that the men's basketball tournament at the 1992 Olympic Games had been a resounding success and the most important aspect of those games?",
  choices: ["Yes", "No", "He was not clear enough"],
  correctAnswer: 0
}];

  var presentQuestion = 0;
  var correctAnswers = 0;
  var Answer = [];
  var count = 300;
  var quizOver = false;



  $(document).ready(function () {
    displayQ();

  timedCount();

    $(this).find(".nextButton").on("click", function () 
  {
        if (!quizOver) 
    {
      
            var select = $("input[type=radio]:checked").val();

            if (select === undefined) 
      {
                $(document).find(".errorM").text("Select an answer");
                $(document).find(".errorM").show();
            } 
      else 
      {
                $(document).find(".errorM").empty();
              if (select == questions[presentQuestion].correctAnswer) 
        {
          correctAnswers++;
        }
        Answer[presentQuestion] = select;
        
        presentQuestion++;
        
        if (presentQuestion < questions.length) 
        {
          displayQ();
          
        } 
        else 
        {
          displayScore();
          $("#clock").html("Quiz Time is Up!");
          $('#timer').html("You scored: " + correctAnswers + " out of: " + questions.length);
      
      
          $(document).find(".nextButton").text("Go Again?");
          quizOver = true;
          //return false;
          
        }
      }
          
    }	
    else { 
      quizOver = false; $("#clock").html("Time Remaining:"); Answer = [];
      $(document).find(".nextButton").text("Next Question");
      resetQuiz();
      //viewingAns = 1;
      hideScore();
      displayQ();
      
    }
    });
   
  });

  function timedCount()
  {
    if(count === 1) 
    { 
    return false; 
    }
    
    var seconds = count % 30;       
    $('#timer').html(seconds);
    
    if(count == 0 )
    {
          displayScore();
          $("#clock").html("Quiz Time is up!");
          $("#timer").html("You scored: " + correctAnswers + " out of: " + questions.length);
          count=185;
          $(document).find(".nextButton").text("Play Again?");
          quizOver = true;
          return false;
          
    }
    
    count = count - 1;
  t = setTimeout(function()
  {
  timedCount()
  },1000);
  }
  function displayQ() 
  {

  if(count === 1) { count = 1; timedCount(); }
  
    var question = questions[presentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[presentQuestion].choices.length;
    
    $(questionClass).text(question);
    
    $(choiceList).find("li").empty();
    var choice;


    for (i = 0; i < numChoices; i++) 
  {
        choice = questions[presentQuestion].choices[i];
    
    if(Answer[presentQuestion] == i) {
      $('<li><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
    } else {
      $('<li><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
    }
    }
  }

  function resetQuiz()
  {
    presentQuestion = 0;
    correctAnswers = 0;
    hideScore();
  }

  function displayScore()
  {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
  }

  function hideScore() 
  {
    $(document).find(".result").empty();
  }

  function viewResults() 
  {

  if(presentQuestion === 10) { presentQuestion = 0;return false; }
  if(viewingAns == 1) { return false; }

  hideScore();
    var question = questions[presentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[presentQuestion].choices.length;
  
    $(questionClass).text(question);

    $(choiceList).find("li").empty();
    var choice;


  for (i = 0; i < numChoices; i++) 
  {
        choice = questions[presentQuestion].choices[i];
    
    if(Answer[presentQuestion] == i) {
      if(questions[presentQuestion].correctAnswer == i) {
        $('<li style="border:2px solid green;margin-top:10px;"><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
      } else {
        $('<li style="border:2px solid red;margin-top:10px;"><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
      }
    } else {
      if(questions[presentQuestion].correctAnswer == i) {
        $('<li style="border:2px solid green;margin-top:10px;"><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
      } else {
        $('<li><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
      }
    }
    }

    presentQuestion++;

  setTimeout(function()
    {
      viewResults();
    },1);
  }