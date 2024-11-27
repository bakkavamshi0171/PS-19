let str = "10kcoders"; 
let index = 0; 

for (let row = 1; index < str.length; row++) {
  let res = ""; 
  for (let col = 0; col < row; col++) {
    if (index < str.length) {
      res += str[index] + " ";
      index++;
    }
    if(index === str.length){
        res += "*"
    }
  }
  console.log(res);
}
// output:
// 1 
// 0 k 
// c o d 
// e r s **

rows =  5;
for(i=1;i<=rows;i++){
    res=""
    for(j=1;j<=rows;j++){
        if(i==j){
            res =res+ i +""
        }
        else if(j==rows-i+1){
            res =res + j +""
        }
        else{
            res =res +" "
        }
    }
    console.log(res)
}

// output
// 1    5
//  2  4
//   3
//  2  4
// 1    5