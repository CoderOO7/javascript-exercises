let findTheOldest = function (people) {
    let oldestPerson = people.map((person) => {
        const PRESENT_YEAR = (new Date()).getFullYear();
        let age = person.yearOfDeath === undefined ?
            PRESENT_YEAR - person.yearOfBirth :
            person.yearOfDeath - person.yearOfBirth;
        return { name: `${person.name}`, age: `${age}` }
    }).reduce((oldestPerson, currentPerson) => {
        return currentPerson.age > oldestPerson.age ? currentPerson : oldestPerson;
    });
    return oldestPerson;
}

module.exports = findTheOldest
