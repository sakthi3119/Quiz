document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const correctAnswers = {
        q1: 'a',
        q2: 'd',
        q3: 'c',
        q4: 'c',
        q5: 'a'
    };

    const explanations = {
        q1: 'An acid is defined as a substance that releases H+ ions in water according to the Brønsted-Lowry theory.',
        q2: 'Acid-base indicators like phenolphthalein change color based on the pH of the solution.',
        q3: 'A pH meter provides a precise numerical measurement of the pH level.',
        q4: 'Neutralization reactions between acids and bases produce a salt and water.',
        q5: 'Understanding acids and bases is crucial in food preservation.'
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

    window.location.href = 'acidbasescore.html';
});
