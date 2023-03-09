const people = ['Ali', 'Khan', 'Ahmed'];
const ages = [12, 45, 30]
// console.log(people);

// module.exports = people //Whenever this file wil imported, exported things will be available in that file

module.exports = {
    people: people,
    ages: ages
}

// same as above
// module.exports = {
//     people, ages
// }