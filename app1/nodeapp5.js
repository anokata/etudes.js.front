for (var i = 0; i < 5; i++) { 
  (function (x) {
  setTimeout(function () { 
    console.log(x); 
  }, 0); 
  })(i);
}

for (let a = 0; a < 5; a++) { 
  setTimeout(function () { 
    console.log(a); 
  }, 0); 
}
