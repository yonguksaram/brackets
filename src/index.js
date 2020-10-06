module.exports = function check(str, bracketsConfig) {
  var auxArray = [];
  for(var i=0;i<str.length;i++){
    for(var k=0;k<bracketsConfig.length;k++){
      if(str[i]==bracketsConfig[k][0] && auxArray[auxArray.length-1]!=bracketsConfig[k][1]){
        auxArray.push(str[i]);
      } else if(str[i]==bracketsConfig[k][1]){
        if(auxArray[auxArray.length-1]==bracketsConfig[k][0]){
          auxArray.pop();
        } else {
          return false
        }
      }
    }
  }
  return auxArray.length == 0 ? true : false;
}
