const fibonacci = function(num) {
    num = Number(num);
    if(num<=0) return "OOPS";
    let temp = 1;
    let back = 1;
    let front = 1;
    for(let i = 2; i < num; i++){
        temp = front;
        front = front + back;
        back = temp;
        
    }
    return front;
};

// Do not edit below this line
module.exports = fibonacci;
