/*function signature/sample */
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
const name1=checkName('Salman')
const name2=checkName('RAFEE')
const name3=checkName('Jhankar')
const name4=checkName(199)
const name5=checkName(["Rashed"])
console.log(name1)
console.log(name2)
console.log(name3)
console.log(name4)
console.log(name5)
