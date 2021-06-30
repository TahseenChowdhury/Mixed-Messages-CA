/*
This program randomly generates a sentence based on
The sentence being utilized here is: This computer believes [SUBJECT] should
go [ACTION VERB] before they go [ACTION VERB2].
*/

//The below array contains all potential subjects for the sentence. 
const subjects = ['the donkey', 'Charlie', 'Juan', 'Bob', 'the horse', 'the computer', 'the nose' ];
const actions = ['swimming', 'biking', 'driving', 'drinking', 'shooting', 'crying', 'looking',];

//The below function selects a random string out of an array.
const randomSelector = (arr) => {
    let ranIndex = Math.floor(Math.random() * arr.length);
    return arr[ranIndex];
};

//This sets the key variables for the output.
let subject = randomSelector(subjects);
let action1 = randomSelector(actions);
let action2 = randomSelector(actions);

//This verifies thas action1 and action2 are not the same. If they are, it reruns randomSelector. 
while (action1 === action2) {action2 = randomSelector(actions)};

//This produces a random sentence.
console.log(`The computer believes that ${subject} should go ${action1} before they go ${action2}.`);
