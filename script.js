//vars
const input = document.getElementById("number");
const conBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const  romans = [
    ["I","II","III","IV","V","VI","VII","VIII","IX"],
    ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
    ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
    ["M","MM","MMM"]
];

const convert = (val) => {
    console.log("converting", val);        
    const valArray = val.toString().split('').reverse();        
    let result = []    
    for ( let i = 0 ; i < valArray.length ; i++){
        if ( valArray[i] !== 0 ){            
            result.push(romans[i][valArray[i] - 1]);
        }        
    }    
    return result.reverse().join("");
}


const checkInput = () => {    
    const val = parseInt(input.value);
    if ( val === 0 || val < 0){        
        result.textContent = "Please enter a number greater than or equal to 1";                
    } else if (val > 3999) {
        result.textContent = "Please enter a number less than or equal to 3999";
        return;
    } else if (!val) {
        result.textContent = "Please enter a valid number";        
    } else {
        result.textContent = convert(val);
    }
     
}

conBtn.addEventListener("click", checkInput);