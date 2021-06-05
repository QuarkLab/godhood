// QUESTIONS

const questions = [
  {
    question: "Omiljeno godišnje doba?",
    answers: [
      "Proleće",
      "Leto",
      "Jesen",
      "Zima"
    ]
  },
  {
    question: "Najproduktivnije doba dana?",
    answers: [
      "Jutro",
      "Prepodne/podne",
      "Veče",
      "Noć"
    ]
  },
  {
    question: "Omiljena boja?",
    answers: [
      "Crvena, narandžasta, žuta,…",
      "Zelena, plava, ljubičasta,…",
      "Braon, oker, bež,…",
      "Crna, siva, bela,.."
    ]
  },
  {
    question: "Da li ste društvena osoba?",
    answers: [
      "Da",
      "Ne"
    ]
  },
  {
    question: "Koji predeo bi pokrenuo Vaš avanturistički duh?",
    answers: [
      "More I talasi",
      "Tople pustinje I peščana prostranstva",
      "Visoke snežne planine",
      "Guste šume",
      "Mračne pećinske dubine"
    ]
  },
  {
    question: "Ljubitelj ste koje grupe sporta?",
    answers: [
      "Borilačke veštine",
      "Timski sportovi sa loptom",
      "Individualni atletski sportovi",
      "Umetnički"
    ]
  },
  {
    question: "Da li ste više za:",
    answers: [
      "Okupljanja sa društvom?",
      "Individualne aktivnosti kod kuće?",
      "Individualne aktivnosti van kuće?"
    ]
  },
  {
    question: "Kada neko greši da li biste radije:",
    answers: [
      "Ukazali na grešku makar ga/je to povredilo?",
      "Prećutali kako ga/je ne biste povredili?",
      "Sa osvrtom na njegove/njene emocije ukazali na grešku?"
    ]
  },
  {
    question: "Da li ste skloni emotivnom vezivanju?",
    answers: [
      "Da",
      "Ne"
    ]
  },
  {
    question: "Da li bi se onda udala za mene?",
    answers: [
      "Da",
      "Apolutno da!!!"
    ]
  },
  {
    question: "Da li bi se ipak prepustila emotivnom vezivanju I udala za mene?",
    answers: [
      "Da",
      "Pa 'ajde baš ako moram…"
    ]
  }
];
  
  const nextButton = document.querySelector('.next');
  const previousButton = document.getElementById('previous');
  const questionEl = document.querySelector('#question');
  const answersEl =  document.querySelector('.options');
  let options;

  nextButton.addEventListener('click', loadNextQuestion);
  previousButton.addEventListener('click', loadPreviousQuestion);

  let questionNumber = 0;
  let answer1;

  generateQuestions();
  
  function generateQuestions() {
    questionEl.innerHTML = questions[questionNumber].question;
    questions[questionNumber].answers.forEach((answer, index) => {
      answersEl.innerHTML += 
      `<label class="option">
      <input id="answer${index}" type="radio" name="option" value="${index}" />
      <span class="option${index}">${answer}</span>
      </label>`
    });
    answer1 = document.getElementById('answer0');
  }
    
  function loadNextQuestion() {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    if(!selectedOption) {
      alert('Niste odabrali odgovor!');
      return;
    }
  
    if (questionNumber === 8) {
      questionNumber = answer1.checked ? 9 : 10;
    } else if (questionNumber === 9 || questionNumber === 10) {
      answersEl.innerHTML = '';
      questionEl.innerHTML = 'Nek je sretnje :D';
      return
    } else {
      questionNumber ++;
    }
  
    answersEl.innerHTML = '';  
    generateQuestions();
  }

  function loadPreviousQuestion() { 
    if (questionNumber !== 0) {
      answersEl.innerHTML = '';
      questionNumber --;
      generateQuestions();
    }
  }