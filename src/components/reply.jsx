//returns predetermined "AI" chat replies
//keywords: will, do, or, then, squidward, sandwich, no, please


function getBotResponse(userInput) {
    const lowerInput = userInput.toLowerCase();

    //"Magic Conch Shell, will I ever get married ?"
    if (lowerInput.includes("will")) {
        return "Maybe someday."
    }
    //"Oh, Magic Conch Shell. What do we need to do to get out of the Kelp Forest ?"
    else if (lowerInput.includes("do")) {
        return "Nothing."
    }
    //"Uh, hello there. Magic Conch, uh, I was wondering... uh, should I have the spaghetti or the turkey ?"
    else if (lowerInput.includes("or")) {
        return "Neither."
    }
    //"Oh, then how about the soup ?"
    else if (lowerInput.includes("then")) {
        return "I don't think so."
    }
    //"Magic Conch, could Squidward have some of this yummy, delicious, super-terrific sandwich ?"
    else if (lowerInput.includes("squidward")) {
        return "No."
    }
    //"Could I have this yummy, delicious, super-terrific sandwich ?"
    else if (lowerInput.includes("sandwich")) {
        return "Yes."
    }
    //"Can't you say anything else but no ?!"
    else if (lowerInput.includes("no")) {
        return "Try asking again."
    }
    else if (lowerInput.includes("please")) {
        return "Yes"
    }
    //"Could I have something to eat?"
    else {
        return "No."
   }
};

export default getBotResponse;