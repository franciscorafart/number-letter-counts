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
            ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'],
            ['','one','two','three','four','five','six','seven','eight','nine'],
            ['','one','two','three','four','five','six','seven','eight','nine']
          ]

let count = 0
for(let i =1; i<=1000; i++){
    let str = ret(i)


    //clean string
    str = cleanString(str)
    count += countLetterNum(str)
    console.log(str)
}
console.log("count = "+count)

function ret(x){
  let res = []
  let index = 0
  let strX = x+""

  let preHun = "hundred"
  let preThous = "thousand"
  let and = "and"
  let pre =""

  for (let i = strX.length-1 ; i>=0; i--){

    //Special cases for pre strings (and, hifens, " ", thousand or hundred)
    if(strX.length==2){
      //hifend
      if(i==0 && strX.charAt(i+1)!="0" && strX.charAt(i)!="0"){
        pre = "-"
      }
    }
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

    //Add the number and the pre string to the array
    res.push(mag1[index][num]+pre)

    pre = ""
    index++
  }
  // if isSpecial != null replace las two element of array with the res
  let isSpecial = specialCase(strX)
  if(isSpecial!=null){
    //remove last two from res
    res = res.splice(2)
    //add y
    res.unshift(y)
  }

  //unwrapp array and create a result string
  let result=""
  for(let i=res.length-1; i>=0 ; i--){
    result += res[i]
  }

  return result
}

//Fucntion to evaluate special cases of strings and returns: eleven, twelve, thirteem ----nineteen
function specialCase(str){
  let res = null
  let lastNums

  if (str.length>=2){
    lastNums = str.charAt(str.length-2)+str.charAt(str.length-1)
  } else{
    lastNums = null
  }
  // console.log("ln = "+lastNums)
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
    default: break;
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
