let romanNumbers = {

    1 : 'I',
    4 : 'IV',
    5 : 'V',
    9 : 'IX',
    10 : 'X',
    40 : 'XL',
    50 : 'L',
    90 : 'XC',
    100 : 'C',
    400 : 'CD',
    500 : 'D',
    900 : 'CM',
    1000 : 'M' 
        
};

function convertToRoman(num) {
    
    //get decimal values from keys
    let getDecimals = Object.keys(romanNumbers);

    //convert the char array to int array
    let decimalArray = getDecimals.map( function(arg) {
        return parseInt(arg,10);
    });
    
    //reverse the array
    decimalArray = decimalArray.reverse();

    //counter variable
    let cnt = 0;

    //return array 
    let returnArray = []

    //start iteration from the highest valued
    while(cnt < decimalArray.length){

        //reduce the num while its greater or equal to the highest valued
        if(num >= decimalArray[cnt]){

            num = num - decimalArray[cnt];
            returnArray.push(romanNumbers[decimalArray[cnt]]);
        
        //mode down the value array when the above is no longer the case
        } else{

            cnt++;

        }

    }

    return returnArray.join('')
       
}
