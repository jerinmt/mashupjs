const printName = () => {
    let userInfo = '{"name":"James", "age":"22", "email":"james@example.com"}';
    try {
        let parsedInfo = JSON.parse(userInfo);
        if(parsedInfo==undefined||parsedInfo==null) throw "invalid object";
        if(!parsedInfo.name) throw "no name";
        if(parsedInfo.age == "") throw "no age";
        if(!parsedInfo.email) throw "no email";
        if(!(/@/).test(parsedInfo.email)) throw "invalid email";
        console.log(`Message received from ${parsedInfo.name}.`);
    } catch(err) {
        console.log("There is an error:" + err);
    }
}
printName();
