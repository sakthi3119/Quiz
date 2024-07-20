window.onload = function() {
    const score = localStorage.getItem('score');
    const totalQuestions = localStorage.getItem('totalQuestions');
    const results = JSON.parse(localStorage.getItem('results')) || [];

    document.getElementById('score').textContent = score;
    document.getElementById('total-questions').textContent = totalQuestions;

    const resultsList = document.getElementById('results-list');

    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('results-item');
        resultItem.innerHTML = `
            <p>Question ${result.question}:</p>
            <p><strong>Explanation:</strong> ${result.explanation}</p>
            <p><strong>Learn more:</strong> <a href="${result.videoLink}" target="_blank" style="color: #ffea00;">Watch Video</a></p>
        `;
        resultsList.appendChild(resultItem);
    });
}
