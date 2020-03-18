function rot13(str) {

    let arr = str.split('');
    let returnArr = [];
    
    //regex to check if the char is a-z
    let regex = /[A-Z]/i;

    for(let i = 0; i < arr.length;i++){

        //regex true and char is 2nd half a-z segment
        if(regex.test(arr[i]) && arr[i].charCodeAt(0) >= 78){

            returnArr.push(String.fromCharCode((arr[i].charCodeAt(0)) - 13));
        
        //if not then add 13 instead of subtracting 13 cause we are in the 1st half of the segment
        }else if(regex.test(arr[i]) && arr[i].charCodeAt(0) !== ' '){

            returnArr.push(String.fromCharCode((arr[i].charCodeAt(0)) + 13));
        
        //push symbols
        }else{

            returnArr.push(arr[i]);

        }

    }

    //return the string
    return returnArr.join('');
     
}