
// Create an array containing non-repeating elements
export let randomArray = (n) => {

  let randomnumbers = new Set(), result;
  while (randomnumbers.size < n) {
    randomnumbers.add(Math.floor(Math.random() * 20) + 1);
  }
  result = [...randomnumbers]
  return result;
}

// shuffle an array
export let shuffleArray = (a) => {
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a;
}


