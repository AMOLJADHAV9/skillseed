export const MOCK_QUIZZES = {
  'quiz-space-1': {
    id: 'quiz-space-1',
    title: 'Cosmic Cadet Space Challenge',
    courseId: 'course-2',
    xpReward: 150,
    coinReward: 50,
    badgeUnlocked: 'Cosmic Explorer',
    timeLimitSeconds: 120,
    questions: [
      {
        id: 1,
        question: 'Which planet is known as the "Red Planet"?',
        options: ['Jupiter', 'Mars', 'Venus', 'Neptune'],
        correctIndex: 1,
        explanation: 'Mars looks red because its surface is covered in iron oxide (rust)!'
      },
      {
        id: 2,
        question: 'What is the largest planet in our Solar System?',
        options: ['Saturn', 'Earth', 'Jupiter', 'Uranus'],
        correctIndex: 2,
        explanation: 'Jupiter is so big that all other solar system planets could fit inside it combined!'
      },
      {
        id: 3,
        question: 'What celestial object produces its own light?',
        options: ['Moon', 'Star / Sun', 'Asteroid', 'Comet'],
        correctIndex: 1,
        explanation: 'Stars generate light and heat through nuclear fusion inside their cores.'
      },
      {
        id: 4,
        question: 'How long does it take for Earth to orbit around the Sun once?',
        options: ['24 Hours', '30 Days', '365 Days (1 Year)', '10 Years'],
        correctIndex: 2,
        explanation: 'One full orbit around the sun defines 1 Earth Year (365.25 days).'
      }
    ]
  },
  'quiz-code-1': {
    id: 'quiz-code-1',
    title: 'Python Code Detective Challenge',
    courseId: 'course-1',
    xpReward: 200,
    coinReward: 75,
    badgeUnlocked: 'Python Ninja',
    timeLimitSeconds: 180,
    questions: [
      {
        id: 1,
        question: 'What is a "Variable" in computer programming?',
        options: ['A math calculator', 'A box that stores information with a name', 'A virus', 'A robot voice'],
        correctIndex: 1,
        explanation: 'Variables act like labeled jars or boxes storing numbers, text, or true/false values!'
      },
      {
        id: 2,
        question: 'Which symbol is used to print text on screen in Python?',
        options: ['speak()', 'echo()', 'print()', 'show()'],
        correctIndex: 2,
        explanation: 'In Python, print("Hello World!") displays message text in the console.'
      },
      {
        id: 3,
        question: 'What does a "Loop" do in programming?',
        options: ['Deletes files', 'Repeats code multiple times automatically', 'Turns off the computer', 'Plays music'],
        correctIndex: 1,
        explanation: 'Loops repeat a section of code so you do not have to write it over and over again.'
      }
    ]
  }
};
