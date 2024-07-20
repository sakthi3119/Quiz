document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const correctAnswers = {
        q1: 'b',
        q2: 'b',
        q3: 'b',
        q4: 'a',
        q5: 'c'
    };

    const explanations = {
        q1: 'Starches are detected by the iodine test.',
        q2: 'A positive iodine test results in a yellow or orange precipitate.',
        q3: 'The color change is due to the reflection of light by the starch molecules.',
        q4: 'Temperature of the solution can affect the results of the iodine test.',
        q5: 'The iodine test is used to confirm the presence of carbohydrates.'
    };

    const videoLinks = {
        q1: 'https://youtu.be/6rjakS5W0Go?si=IlSOAHGbzy0JbKV-',
        q2: 'https://youtu.be/72zKnccyH-w?si=YC-_qLBBbgYpANip',
        q3: 'https://youtu.be/72zKnccyH-w?si=YC-_qLBBbgYpANip',
        q4: 'https://youtu.be/QdnCZGdau6I?si=d_rQ2M769zP9MYaV',
        q5: 'https://youtu.be/YI-lmfp-f3g?si=DpchFsQNCi6yeA4F'
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

    window.location.href = 'iodinescore.html';
});
