const object = {
    name : 'kolumuddin' ,
    birthYear : 1998 ,
    siteName : 'google'
}
function password(object){
    const name = object.name ;
    const birthYear = object.birthYear.toString() ;
    const siteName = object.siteName ;

    if (birthYear.length < 4) {
        return "Invalid birth year";
    }
    const password = siteName + '#'+ name  + '@' + birthYear ;
    return password ;
}
const information = password(object)
console.log(information) ;