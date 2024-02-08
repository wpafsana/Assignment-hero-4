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
 console.log(calculateMoney(10))
 console.log(calculateMoney(1050))
 console.log(calculateMoney(93))
 console.log(calculateMoney(-130))
 console.log(calculateMoney("abc"))