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
const inputArr1 = 'hjdjdjdj ;'
const inputArr2 = [12,4,-6,'fa',9,undefined]

const result1 = deleteInvalids(inputArr1) ;
const result2= deleteInvalids(inputArr2) ;
console.log(result1) ;
console.log(result2) ;

