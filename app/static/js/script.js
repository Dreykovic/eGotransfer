/* ce scriot s'applique à la faq pour cacher et montrer les reponses aux questions
 */

document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.faq-card');

  questions.forEach(function(question) {
      const cardHeader = question.querySelector('.card-header');
      cardHeader.addEventListener('click', function(){
          const answer = cardHeader.nextElementSibling;
          answer.classList.toggle('active');
          cardHeader.classList.toggle('active');
      });
  });
});
