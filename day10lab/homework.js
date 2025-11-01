let feedback = '{ "user":"John", "feedback":"Good service. Thank you very much!"}';

try {
    let parsedFeedback = JSON.parse(feedback);
    if(parsedFeedback==undefined||parsedFeedback==null) throw "invalid object";
    if(!parsedFeedback.user) throw "No name found";
    if(!parsedFeedback.feedback) throw "No feedback found";
    if((/Thank/i).test(parsedFeedback.feedback)){
        document.getElementById('output').innerHTML =  "Positive feedback received";
    } else {
        document.getElementById('output').innerHTML = "Feedback noted";
    }
} catch(err) {
    console.log("An error occured:" + err);
}
