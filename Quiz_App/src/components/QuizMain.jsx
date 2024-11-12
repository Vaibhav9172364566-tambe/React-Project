import Timer from "./Timer"

function QuizMain() {
  return (

<>
    <section className="quiz">
    <div className="progress-container">
    <progress>

    </progress>

    </div>
    <div className="progress-info">
        <span className="question-count">Ques : 2/10</span>
        <p> Points : <span>35/70</span></p>
        <Timer></Timer>
    </div>

    </section>
</>
)
}

export default QuizMain