document.getElementById('quiz-form').onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    const correctAnswers = {
        q1: 'c',
        q2: 'b',
        q3: 'b',
        q4: 'b',
        q5: 'd'
    };

    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
    const results = [];

    for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer) {
            const answerValue = selectedAnswer.value;
            if (answerValue === correctAnswer) {
                score++;
            }

            const resultItem = {
                question: question.replace('q', ''),
                explanation: answerValue === correctAnswer
                    ? 'Correct answer!'
                    : 'Incorrect answer.',
                videoLink: 'https://www.youtube.com/results?search_query=Fehling%27s+Test'
            };
            results.push(resultItem);
        }
    }

    // Store the score and results in localStorage
    localStorage.setItem('score', score);
    localStorage.setItem('totalQuestions', totalQuestions);
    localStorage.setItem('results', JSON.stringify(results));

    // Redirect to results page
    window.location.href = 'fehlingscore.html';
};
