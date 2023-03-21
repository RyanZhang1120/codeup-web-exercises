const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//array of user objects where each user object has at least 3 languages
var threeLang = users.filter(function (people){
    return people.languages.length >= 3;
})
console.log(threeLang);
//array of strings where each element is a user's email address
var emails = users.map(function (people){
    return people.email;
})
console.log(emails);
//total years of experience from the list of users
var years = users.reduce(function (total, experience){
    return total + experience.yearsOfExperience;
}, 0)
console.log(years);
//calculate the average
var average = years/users.length;
console.log(average);
//find the longest email
var longestEmail = users.reduce(function (longest, user){
    if(user.email.length > longest.length) {
        return user.email;
    } else {
        return longest
    }
}, '')
console.log(longestEmail);
//list of user's names in a single string
var names = users.reduce(function (list, name){
    if(name.name === 'justin') {
        return  list + name.name + '.';
    } else {
        return  list + name.name + ', ';
    }
}, 'Your instructors are: ')
console.log(names);