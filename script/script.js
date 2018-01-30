
let elt = document.getElementById("roller");
let texts = ["$$$$$$", "Steven"]
elt.textroller = new TextRoller({
  el: elt,
  values: texts, // an array of texts.     default : [el.innerHtml]
  align: "middle", // right, left or middle. default : middle
  delay: 2000, // in milliseconds,       default : 5000
  loop: false // at the end, restart.   default : true
});

let els = document.getElementById("secRoll");
let textz = ["$$$$$$", "Snyder"]
els.textSecRoll = new TextRoller({
  el: els,
  values: textz, // an array of texts.     default : [el.innerHtml]
  align: "middle", // right, left or middle. default : middle
  delay: 2000, // in milliseconds,       default : 5000
  loop: false // at the end, restart.   default : true
});