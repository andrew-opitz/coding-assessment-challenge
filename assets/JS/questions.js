// Questions, options and answers to the quiz //
var questions = [
    {
        question: "How do you get a function to run?",
        options: ["Ask it nicely", "Call it", "They always run", "Add an event listener"],
        answer: "Call it"
    },
    {
        question: "Can you effect your HTML and CSS with JS?",
        options: ["Yes to both", "Yes to HTML no to CSS", "No to HTML Yes to CSS", "No to both"],
        answer: "Yes to both"
    },
    {
        question: "Which operator does ! represent?",
        options: ["Or", "And", "Not", "But"],
        answer: "Not"
    },
    {
        question: "How many times will a for loop iterate?",
        options: ["Ten Times", "Once", "They never stop", "As many as you set"],
        answer: "As many as you set"
    },
    {
        question: "What does === check for that == does not?",
        options: ["Type", "Variable", "If its a function", "=== doesnt exist"],
        answer: "Type"
    },
    {
        question: "What is it called when a function is a property of an object?",
        options: ["An array", "A callback", "A method", "A boolean"],
        answer: "A method"
    }
];

// Global variables for index, score and clock //
var IndexQuestion = 0
var score = 0

var TimeLeft = 60
var timeInterval