function palindrome(str) {

    //set all to lower case
    str = str.toLowerCase();

    //remove all non-alphanumeric characters
    let newStrArr = [];

    for(let i = 0; i < str.length;i++){

        if(str[i].match(/[a-z0-9]/i)){

            newStrArr.push(str[i]);

        }

    }

    let originalString = newStrArr.join('');
    
    //reverse the string
    let reverseString = newStrArr.reverse().join('');

    return originalString === reverseString ? true : false;

}