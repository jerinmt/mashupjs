let feedback = '{ "user":"John", "feedback":""}';

try {
    let parsedFeedback = JSON.parse(feedback);
    if(!parsedFeedback.user) throw "No name found";
    if(!parsedFeedback.feedback) throw "No feedback found";
    if((/Thank/i).test(parsedFeedback.feedback)){
        document.getElementById('output').innerHTML =  "Positive feedback received";
    } else {
        document.getElementById('output').innerHTML = "Feedback noted";
    }
} catch(err) {
    console.log(err.message);
}
