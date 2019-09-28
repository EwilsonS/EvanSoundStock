module.exports = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    if(isNaN(a) || isNaN(b)){
      throw "not a number!!"
      
    }
    return a - b;
  }
}