let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let passwordLength = document.getElementById("pass-input")
let numberText = document.getElementById("number-text")
let symbolText = document.getElementById ("symbol-text")
numberCheck = false
symbolCheck = false

let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let characters = letters

function numberBtn(){
  if (numberCheck === false){    
    numberText.textContent = "X"
    characters = characters.concat(numbers)
    numberCheck = true
    console.log(characters)
  }
  else {
    numberText.textContent = ""
    numberCheck = false
    characters = characters.filter(function(rm){
      return !numbers.includes(rm)
    })
    console.log(characters)
  }
}

function symbolBtn(){
  if (symbolCheck === false){    
    symbolText.textContent = "X"
    characters = characters.concat(symbols)
    symbolCheck = true
  }
  else {
    symbolText.textContent = ""
    symbolCheck = false
    characters = characters.filter(function(rm){
      return !symbols.includes(rm)
    })
  }
}

function randomPasswords(){
  password = ""
  for (i=1;i<(parseInt(passwordLength.value)+1);i++) {
    let char = characters[Math.floor(Math.random()*characters.length)]
    password += char
  }
  return password 
}

function GeneratePasswords(){
  passwordOne.textContent = randomPasswords()
  passwordTwo.textContent = randomPasswords()
}

function copyPasswordOne(){
  passwordOne.select()
  navigator.clipboard.writeText(passwordOne.value)
}
function copyPasswordTwo(){
  passwordTwo.select()
  navigator.clipboard.writeText(passwordTwo.value)
}

