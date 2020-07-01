function checkTest() {
    let form = document.getElementById("test_questions");

    let answer = form.elements.answer;
    let answer1 = form.elements.answer1;

    let answers = [answer.value, answer1.value];

    let correctAnswers = ["It is a template for create an object", "It is a method that belongs to the class"];

    let myScore = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        console.log(myScore);
        if (answers[i] === correctAnswers[i]) {
            myScore++;
        }

    }

    document.getElementById("score").innerHTML = "Your score is " + myScore + " out of " + correctAnswers.length;
}