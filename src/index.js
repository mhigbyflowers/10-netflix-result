import netflixResult from 'netflix-result';
export default function(el) {

  const Btn = document.querySelector('.search-btn');
  let submission = document.querySelector('.search')
  console.log(Btn);

  function submit() {
    netflixResult(el, submission.value);
  }
  Btn.addEventListener('click', submit);




}
