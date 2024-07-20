document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const correctAnswers = {
        q1: 'b',
        q2: 'b',
        q3: 'a',
        q4: 'b',
        q5: 'b'
    };

    const explanations = {
        q1: 'Ethene, an alkene, reacts with bromine water and decolorizes it. Alkanes do not react.',
        q2: 'Bromine water reacts with the double bond in alkenes, leading to decolorization.',
        q3: 'Alkenes react with bromine water, showing a color change, while alkanes do not react.',
        q4: 'Bromine water should be handled in a well-ventilated area due to its hazardous nature.',
        q5: 'Bromine water is used to test for unsaturation (double bonds) in organic compounds.'
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

    window.location.href = 'brominescore.html';
});
