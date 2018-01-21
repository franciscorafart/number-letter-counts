// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are
// 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
//
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many
// letters would be used?
//
//
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and
// 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance
// with British usage.

//define array or object with words

let mag1 = [
            ['','one','two','three','four','five','six','seven','eight','nine'],
            ['','ten','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety'],
            ['','one','two','three','four','five','six','seven','eight','nine'],
            ['','one','two','three','four','five','six','seven','eight','nine']
          ]

console.log(ret(1000))
console.log(ret(1200))
console.log(ret(1230))
console.log(ret(1203))
console.log(ret(1030))
console.log(ret(1001))
console.log(ret(1033))

console.log("Hundreds")
console.log(ret(200))
console.log(ret(230))
console.log(ret(233))
console.log(ret(203))

function ret(x){
  let res = ""
  let index = 0
  let strX = x+""

  let preHun = "hundred"
  let preThous = "thousand"
  let and = "and"
  let pre =""
  for (let i = strX.length-1 ; i>=0; i--){

    if (strX.length==3){
        if(i==0){
          if(strX.charAt(i+1) == "0" && strX.charAt(i+2)=="0"){
            pre = " " + preHun + " "
          }else{
            pre= " " + preHun + " " + and + " "
          }
        }
        //hifend
        if(i==1 && strX.charAt(i+1)!="0" && strX.charAt(i)!="0"){
          pre = "-"
        }
    }

    if(strX.length==4){
      if(i==0){
        pre = " " + preThous + " "
      }
      if(i==1 && strX.charAt(i)=="0"){
        //Last two digits case
        if(strX.charAt(i+1) == "0" && strX.charAt(i+2)=="0"){
          pre = ""
        }
        else{
          pre = and + " "
        }
      }
      if(i==1 && strX.charAt(i)!="0"){
        if(strX.charAt(i+1) == "0" && strX.charAt(i+2)=="0"){
          pre = " " + preHun
        }else{
          pre= " " + preHun+" "+ and + " "
        }
      }
      //hifend
      if(i==2 && strX.charAt(i+1)!="0" && strX.charAt(i)!="0"){
        pre = "-"
      }
    }

    let num = parseInt(strX.charAt(i))
    res = mag1[index][num]+pre + res
    pre = ""
    index++
  }

  return res
}



//Fucntion to evaluate special cases: eleven, twelve, thirteem ----nineteen
function specialCase(str){
  let res
  let lastNums

  if (str.length>=2){
    lastNums = str.charAt(str.length-2)+str.charAt(str.length-1)
  } else{
    lastNums = null
  }
  console.log("ln = "+lastNums)
  switch(lastNums){
    case "11":
    res = "eleven"; break;
    case "12":
    res = "twelve"; break;
    case "13":
    res = "thirteen"; break;
    case "14":
    res = "fourteen"; break;
    case "15":
    res = "fifteen"; break;
    case "16":
    res = "sixteen"; break;
    case "17":
    res = "seventeen"; break;
    case "18":
    res = "eighteen"; break;
    case "19":
    res = "nineteen"; break;
    default: console.log("Nothing")
  }

  return res
}

//Funtion that counts the letters in a number
function countLetterNum(str){
  //clean the string
  let newString = cleanString(str)

  //return its length
  return newString.length
}

//function that cleans a String from hifends and spaces
function cleanString(str){
  //expression that takes either a hifend or an empty space
  let exp = /[-\s]/g

  //repace with empty space
  let newString = str.replace(exp,"")
  return newString
}

//Decompose the number into magnitutes 1, 10, 100, 1000

//assign strings from these magnitues
