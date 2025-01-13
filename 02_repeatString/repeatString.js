const repeatString = function(str, n) {
  let newstr = '';
  if(n < 0) return 'ERROR';
  if(!str.trim().length) return '';
  for(let i=0; i<n; i++){
    newstr += str;
  }
  return newstr;
};

// Do not edit below this line
module.exports = repeatString;
