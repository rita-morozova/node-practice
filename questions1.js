const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "What is you name?",
    "What are you doing?",
    "What is prefered language?"
]

const answerEvents = collectAnswers(questions, answers => {
    console.log("Thank you for your answers")
    console.log(answers)
    process.exit()
})

answerEvents.on("answer", answer => console.log(`question answered: ${answer}`) )

answerEvents.on("complete", answers => {
    console.log("Thank you for your answers")
    console.log(answers)
})

answerEvents.on("complete", () =>   process.exit())