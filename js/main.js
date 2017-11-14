// if its yes answer the next question,
// your time is up im sorry,
// what is the song that youre listening ?
// can i create an array of the answer for exm ['yes', 'no']
// put a level to pass the quiz and have it to do something !

var questions = [
  {
     question: 'What is the population of California ?',
     answer: '39 million'
  },
  {
     question: 'Who wrote the book that is called Plague ?',
     answer: 'albert camus'
  },
  {
     question: 'What is the population of San Francisco ?',
     answer: '860.000'
  },
  {
     question: 'Who said the saying of What doesnt kill you makes you stronger?',
     answer: 'Nietzsche'
  },
  {
     question: 'Who wrote the book that is called The Stranger ?',
     answer: 'Albert Camus'
  },
  {
     question: 'Where is Turkey in the earth map ?',
     answer: 'Eurasia'
  },
  {
     question: 'What language is spoken in Turkey ?',
     answer: 'turkish'
  },
  {
     question: 'What language is this "es un camino va a una nueva vida" ?',
     answer: 'spanish'
  },
  {
     question: 'What is the secret of happiness?',
     answer: 'Patient'   //create an alert here
  },
  {
     question: 'Are you happy with your life ?',
     answer: 'Yes'
  },
]

 for(var i = 0; i < questions.length; i++) {

    var q = questions[i].question

    var x = document.getElementById('q' + [i])

      console.log(q, x)

      x.textContent = q
  }


function result() {

  var correct = 0
	var incorrect = 0

  for(var i=0; i<questions.length; i++) {

    var answer = questions[i].answer
    var userAnswer = document.getElementById('a' + [i]).value
    var resultAction = document.getElementById('q' + [i])


    if (answer.toLowerCase() == userAnswer.toLowerCase()) {
      resultAction.className = 'correct'

      correct++
    }
    else {

      resultAction.className = 'incorrect'

      incorrect++
    }
  }
  document.getElementById('correct').textContent = correct
  document.getElementById('incorrect').textContent = incorrect

}
