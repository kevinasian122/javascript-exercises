const palindromes = function (str) {
    str = str.replace(/[^\w\s\']|_/g, "");
    str = str.replace(/\s+/g, "");
    str = str.toLowerCase();
    let cnt = str.length-1;
    for(let i = 0; i < str.length/2; i++){
        if(!(str.charAt(i) === str.charAt(i+cnt))){
            return false;
        }
        cnt -= 2;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
