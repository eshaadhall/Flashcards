document.addEventListener('DOMContentLoaded', (e) => {
  const hint = document.querySelector('.hint');
  if (hint) {
    const hintShowButton = document.createElement('BUTTON');
    hintShowButton.textContent = 'Show hint';
    hint.parentNode.insertBefore(hintShowButton, hint);
    hint.style.display = 'none';

    hintShowButton.addEventListener('click', (e) => {
      if(hint.style.display === 'none'){
      hint.style.display = '';
      e.target.textContent = 'Hide Hint';
    } else {
      hint.style.display = 'none';
      e.target.textContent = 'Show Hint';
    }
    })
  }
})
