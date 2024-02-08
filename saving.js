function monthlySavings(arr, livingCost){
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return "invalid input";
    }
    let totalIncomeAmount = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= 3000) {
         totalIncomeAmount = totalIncomeAmount+ arr[i] * 0.8;
    }
    else {
        totalIncomeAmount =totalIncomeAmount + arr[i];
    }
}
const totalSaving = totalIncomeAmount - livingCost;
if (totalSaving >= 0) {
    return totalSaving;
}
else {
    return "earn more";
}
}
console.log(monthlySavings([1000, 2000, 3000], 5400)); 
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000)); 
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000)); 
console.log(monthlySavings(100, [ 900 , 2700 , 3400] )); 

