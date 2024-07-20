document.getElementById('quiz-form').onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    const correctAnswers = {
        q1: 'b',
        q2: 'b',
        q3: 'b',
        q4: 'd',
        q5: 'a'
    };

    const explanations = {
        q1: 'Beyer\'s test identifies the presence of ketones.',
        q2: 'A positive Beyer\'s test results in the formation of a blue-green precipitate.',
        q3: 'The color change is due to the reaction between aldehyde and an alkaline solution (KOH).',
        q4: 'Fehling\'s test requires heating, while Beyer\'s test does not.',
        q5: 'A limitation of Beyer\'s test is its inability to distinguish between aldehydes and certain ketones.'
    };

    const videoLinks = {
        q1: 'https://www.youtube.com/results?search_query=Beyer%27s+Test',
        q2: 'https://www.youtube.com/results?search_query=Beyer%27s+Test',
        q3: 'https://www.youtube.com/results?search_query=Beyer%27s+Test',
        q4: 'https://www.youtube.com/results?search_query=Beyer%27s+Test',
        q5: 'https://www.youtube.com/results?search_query=Beyer%27s+Test'
    };

    let form = document.getElementById('quiz-form');
    let score = 0;
    let totalQuestions = 5;
    let results = [];

    for (let i = 1; i <= totalQuestions; i++) {
        let question = 'q' + i;
        let selectedAnswer = form[question].value;
        let correctAnswer = correctAnswers[question];

        if (selectedAnswer === correctAnswer) {
            score++;
        } else {
            results.push({
                question: i,
                explanation: explanations[question],
                videoLink: videoLinks[question]
            });
        }
    }

    localStorage.setItem('score', score);
    localStorage.setItem('totalQuestions', totalQuestions);
    localStorage.setItem('results', JSON.stringify(results));

    window.location.href = 'bayerscore.html';
};
