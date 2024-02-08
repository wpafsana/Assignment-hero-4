function calculateMoney(ticketSale) {
    const ticketPrice=120;
    const GateManCharge=500;
    const lunchCostOfStaff=50;
    const staffNumber=8;
    if(ticketSale>0){
     const income=ticketSale*ticketPrice;
     const cost=GateManCharge+(staffNumber*lunchCostOfStaff);
     const totalIncome=income-cost;
     return totalIncome;
     }
      else{
        return "invalid number" 
      }
  
   }

function checkName(name) {
    const lastCharacter=['a','e','i','o','u','y','w'];
    if( typeof name!=='string'){
        return 'Invalid'
    }
    const lastChar=name[name.length-1].toLowerCase();
    if(lastCharacter.includes(lastChar)){
        return "Good Name";
    }
    else{
        return "Bad Name";
    }
}

function deleteInvalids(arrays){
    let validComponents = []
    for(const array of arrays){    
        if(!Array.isArray(arrays)) {
            return ("Input must be an array");
        }

        else if(typeof array=='number'){
            validComponents.push(array)
        }        
    }
    return validComponents;
    
}

function password(object){
    const name=object.name;
    const birthYear=object.birthYear;
    const siteName=object.siteName;
    if(birthYear.length<4){
        return 'Invalid Year'
    }
    const password=siteName+'#'+name+'@'+birthYear;
    return password;
}
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