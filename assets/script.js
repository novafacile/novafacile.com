/*******
 * JS for novafacile products
 * @author novafacile OÜ
 * @copyright 2021 novafacile OÜ
 *******/

/*** scroll to element by id ***/
function scrollTo(id){
  let el = document.querySelector(id);
  el.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  });
}

/*** bind events ***/
document.addEventListener("DOMContentLoaded", (event) => {
  // more info link
  document.querySelector("#scroll-to-lead").addEventListener("click", function(){
    scrollTo('#lead');
  });
});