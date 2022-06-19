const questionButton = {
    button : document.querySelector("#questionButton"),
    askQuestion : function() {
        if(questionInput.isEmpty()) {
            alert("Type a question.");
            return;
        };
        this.disable();
        // imageCrystalBall.shine();
        responseElement.showResponse(questionInput.question);
        responseElement.hideResponse(this);
        // imageCrystalBall.dim();
    },
    enable : function() {
        this.button.removeAttribute("disabled");
    },
    disable : function() {
        this.button.setAttribute("disabled", true);
    }
}
const responseElement = {
    possibleResponses : [
        "For sure!",
        "I'm not sure.",
        "Indeed!",
        "I wouldn't count on it.",
        "No doubts!",
        "Ask me again in a little bit.",
        "Yes! Definitely!",
        "My response is \"no\".",
        "You can count on it!",
        "It's better not to tell you the answer now.",
        "I think so.",
        "My sources negates it.",
        "Probably.",
        "It's not possible to know it now.",
        "I have a good feeling!",
        "My hopes aren't so good.",
        "Yes!",
        "Focus, and ask me again.",
        "Signs let me believe in it.",
    ],
    response : document.querySelector("#responseElement"),
    hideResponse : function(questionButton){
        setTimeout(() => {
            this.response.style.opacity = 0;
        },
        3000);
        questionButton.enable();
    },
    randomPossibleResponseIndex : function() {
        return (Math.floor(Math.random() * this.possibleResponses.length));
    },
    showResponse : function(inputQuestion) {
        responseElement.response.style.opacity = 1;
        const question = document.querySelector("#question");
        question.innerHTML = inputQuestion.value;
        const response = document.querySelector("#response");
        response.innerHTML = this.possibleResponses[this.randomPossibleResponseIndex()];
        // this.response.innerHTML = question + response;
    }
};
const questionInput = {
    question : document.querySelector("#questionInput"),
    isEmpty : function() {
        if(this.question.value == "") {
            return true;
        }
        else {
            return false;
        }
    }
};