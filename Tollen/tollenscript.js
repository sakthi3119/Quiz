document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const correctAnswers = {
        q1: 'a',
        q2: 'c',
        q3: 'd',
        q4: 'a',
        q5: 'b'
    };

    const explanations = {
        q1: 'Tollens\' test detects the presence of aldehydes, which can reduce silver ions to metallic silver.',
        q2: 'A positive Tollens\' test produces a black precipitate of silver, not a white precipitate.',
        q3: 'A color change from colorless to silver is indicative of a positive Tollens\' test result.',
        q4: 'In a negative Tollens\' test, the solution remains milky white due to the lack of silver reduction.',
        q5: 'A limitation of Tollens\' test is that it can react with some ketones, leading to false positives.'
    };

    const videoLinks = {
        q1: 'https://youtu.be/VIDEO1',
        q2: 'https://youtu.be/VIDEO2',
        q3: 'https://youtu.be/VIDEO3',
        q4: 'https://youtu.be/VIDEO4',
        q5: 'https://youtu.be/VIDEO5'
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

    window.location.href = 'tollenscore.html';
});
