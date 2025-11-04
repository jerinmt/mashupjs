class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    get details() {
        return `${this.name}(${this.age} years old)`;
    }
    set newemail(updatedemail) {
        if((/@/).test(updatedemail)) {
            this.email = updatedemail;
        } else {
            console.log("Invalid email id");
        }
    }
}
const user1 = new User('Jerin', 33, 'jerin@example.com');
console.log(user1);
document.getElementById('details').innerHTML = user1.details;
user1.newemail = 'jerinmtexample.com';
user1.newemail = 'jerinmt@example.com';
console.log(user1);