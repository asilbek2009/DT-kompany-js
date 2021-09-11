var elform = document .querySelector(".form");

var paragrp = document .createElement('h3');

document.body.append(paragrp);

paragrp.classList.add("style-text");

elform.addEventListener("submit", function(evt) 
{
    evt.preventDefault();
    var elinputJs = elform .querySelector(".input-js"). value.trim();
    var elinputJsToo = elform .querySelector(".input-js-too"). value.trim();
    paragrp.textContent = `${elinputJs} Ishga hush kelibsz`
});