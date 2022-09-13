const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        let age = 0;
        if(!oldest.yearOfDeath) age = Date-oldest.yearOfBirth;
        else age = oldest.yearOfDeath-oldest.yearOfBirth;
        if(!person.yearOfDeath){
            if(Date-person.yearOfBirth > age){
                return person;
            }
        }
        else if(person.yearOfDeath-person.yearOfBirth > age){
            return person;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
