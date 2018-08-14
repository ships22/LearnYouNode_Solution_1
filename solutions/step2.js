//2ns step---

var total = 0;

process.argv.forEach(function(item) {
  
  total += +item ? +item : 0;
});

console.log(total);