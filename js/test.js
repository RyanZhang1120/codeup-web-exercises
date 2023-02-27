const person = {
    name: "ryan",
    walk() {
        console.log(this);
    }
};
person.walk();

const walk = person.walk.bind(person);
walk();

const jobs = [
    {id: 1, isActive: true },
    {id: 2, isActive: true },
    {id: 3, isActive: false},
];
const activeJobs = jobs.filter(function (job) { return job.isActive; });
console.log(activeJobs);