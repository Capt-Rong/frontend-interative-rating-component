const form = document.querySelector('.rating__form');
const ratingInputs = document.querySelectorAll('input[name="rating"]');
const submitButton = document.querySelector('.rating__submit');
let selectedRating = null;

ratingInputs.forEach((input) => {
  input.addEventListener('change', (e) => {
    selectedRating = e.target.value;
    // 先移除所有 active 樣式
    document.querySelectorAll('.rating__option').forEach((label) => {
      label.classList.remove('rating__option--active');
    });
    // 幫被選到的 label 加上 active 樣式
    e.target.closest('.rating__option').classList.add('rating__option--active');
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitButton.classList.add('rating__submit--active');
  if (!selectedRating) {
    alert('Please select a rating');
    return;
  }
  hideForm();
  showFeedback();
  updateFeedback(selectedRating);
});

function hideForm() {
  form.style.display = 'none';
}

function showFeedback() {
  const feedback = document.querySelector('.rating__feedback-section');
  feedback.style.display = 'flex';
}

function updateFeedback(rating) {
  const feedbackResultValue = document.getElementById('feedback__result-value');
  feedbackResultValue.textContent = rating;
}
