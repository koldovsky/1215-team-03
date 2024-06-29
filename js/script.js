document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');

            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(answer => {
                answer.style.display = 'none';
            });
            
            // Remove active class from all questions
            document.querySelectorAll('.faq-question').forEach(question => {
                question.classList.remove('active');
            });

            // If this question is not active, open its answer
            if (!isActive) {
                answer.style.display = 'block';
                question.classList.add('active');
            }
        });
    });
});
