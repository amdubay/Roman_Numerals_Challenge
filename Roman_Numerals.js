/******* Code to convert a Roman Numeral to an Integer  ********
 * Built according to Leetcode challenge instructions, "It is guaranteed that [input] is a valid roman numeral in the range [1, 3999]." */

const romanToInt = s => {
    sArray = []
    for (i = 0; i<s.length; i++) {
        sArray.push(symbolToInt(s[i]))
    }
    total = 0;
    for (i = 0; i<sArray.length; i++) {
        if (sArray[i] < sArray[i+1]) {
            total += (sArray[i+1]-sArray[i])
            i++
        }
        else {
            total += sArray[i];
        }
    }
    return total
};
    
const symbolToInt = r => {
    switch (r) {
      case 'I':
        return 1;
        break;
      case 'V':
        return 5;
        break;
      case 'X':
        return 10;
        break;
      case 'L':
        return 50;
        break;
      case 'C':
        return 100;
        break;
      case 'D':
        return 500;
        break;
      case 'M':
        return 1000;
        break;
      default:
        return null;
        break;
    }
}

/* End Roman Numeral to Integer Code. - This is only to document the function/s. There is no input to call the functions */


/******* Code to convert an Integer to a Roman Numeral.  ********
 * Built according to Leetcode challenge instructions, "Constraints: 1 <= [input] <= 3999" */


 const intToRoman = num => {
    const thousands=["","M","MM","MMM"]
    const hundreds=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    const tens=["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    const ones=["","I","II","III","IV","V","VI","VII","VIII","IX"]; 
    return thousands[Math.floor(num/1000)] + hundreds[Math.floor((num%1000)/100)] + tens[Math.floor((num%100)/10)] + ones[(num%10)];
    }


/* End Integer to Roman Numeral Code. - This is only to document the function/s. There is no input to call the functions */