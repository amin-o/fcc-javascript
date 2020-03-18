//values in pennies
let values = {
    
        'PENNY' : 1,
        'NICKEL' : 5,
        'DIME' : 10,
        'QUARTER' : 25,
        'ONE' : 100,
        'FIVE' : 500,
        'TEN' : 1000,
        'TWENTY' : 2000,
        'ONE HUNDRED' : 10000

}

function checkCashRegister(price, cash, cid) {
    
    //calc the difference
    let diff = cash*100 - price*100;
    //we are going from one hundred all the way to penny
    let cnt = cid.length - 1;
    //storage
    let arr = [];

    //convert the input to pennies 
    for(let i = 0; i < cid.length;i++){

        cid[i][1] *= 100;
        cid[i][1] = (cid[i][1]).toFixed(2);

    }

    //main loop
    while(diff > 0 && cnt >  -1){

        //while the diff is greater than the value of a single type of money
        //and there is enough of it in storage
        if(diff >= values[cid[cnt][0]] && cid[cnt][1] > 0){
            
            //remove from dif and from storage and add onto array
            diff = diff - values[cid[cnt][0]];
            arr.push(cid[cnt][0])
            cid[cnt][1] -= values[cid[cnt][0]]

        }else{
            cnt--;
        }

    }
    
    //return array has to be in dollars and not pennies
    let returnArr = formReturnArray(arr);
   
    if(diff > 0 && cnt === -1){

        return {status: "INSUFFICIENT_FUNDS", change: []};

    } else if (diff === 0 && checkEmpty(cid)){
       
        return {status: "CLOSED", change:returnArr}

    }else{

        //return array in this case cant have zeroes and has to be reversed
        let z = removeZeroes(returnArr);
        return {status: "OPEN", change:z.reverse()}
    }
    
}

//helper functions

//remove zeroes from array
function removeZeroes(arr){

    let newArr = [];
    
    for(let i = 0; i < arr.length;i++){
         
        if(arr[i][1] !== 0){
            
            newArr.push(arr[i])
        }

    }

    return newArr;

}

//check if an array is empty (MD in this case)
function checkEmpty(arr){

    let flag = true;

    for(let i = 0; i < arr.length;i++){

        if(arr[i][1] > 0){

            flag = false;
            break

        }

    }

    return flag;

}

function formReturnArray(arr){

    let rarr = [

        ["PENNY", 0],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]

    ]
   
    for(let i = 0; i < arr.length;i++){
        
        if(arr[i] === "ONE HUNDRED"){
            rarr[8][1]+=100;
        }else if(arr[i] === "TWENTY"){
            rarr[7][1]+=20;
        }else if(arr[i] === "TEN"){
            rarr[6][1]+=10;
        }else if(arr[i] === "FIVE"){
            rarr[5][1]+=5;
        }else if(arr[i] === "ONE"){
            rarr[4][1]++;
        }else if(arr[i] === "QUARTER"){
            rarr[3][1] += 0.25;
        }else if(arr[i] === "DIME"){
            rarr[2][1] += 0.1;
        }else if(arr[i] === "NICKEL"){
            rarr[1][1] += 0.05;
        }else if(arr[i] === "PENNY"){
            rarr[0][1] += 0.01;
        }
    }

    for(let i = 0; i < rarr.length;i++){

        rarr[i][1] = parseFloat(rarr[i][1].toFixed(2));

    }

    return rarr;

}