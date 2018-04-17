function theBeatlesPlay(musicians, instruments){
 let playInstrument = []
   for(var i = 0; i < musicians.length; i++){
     playInstrument.push(musicians[i] + "plays" + instrument[i])
   }
   return playInstrument;
}

function johnLennonFacts(info){
  let louder = [];
  var i = 0;
  while (i < info.length){
    louder.push(info[i] + "!!!");
    i++;
  }
  return louder;
}

function iLoveTheBeatles(num){
  let beatles = [];
  let i = 0;
  do {
    beatles.push("I love the Beatles!")
    i++
  } while (num < 15);
  return beatles;
}
