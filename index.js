function shout (hello){
    return hello.toUpperCase();
}
function whisper (hello){
    return hello.toLowerCase();
}
function logShout (hello){
    console.log(hello.toUpperCase());
}
function logWhisper (hello){
    console.log(hello.toLowerCase());
}
function sayHiToHeadphonedRoommate (hello){
    var cantUnswer = "I can't hear you!";
    var yesUnswer = "YES INDEED!";
    var lovUnswer = "I would love to!";
    if (hello.toLowerCase(hello) === hello) {
        return cantUnswer;

    }
    else if (hello.toUpperCase(hello) === hello) {
        return yesUnswer;
    }
    else if ("Let\'s have dinner together!" === hello) {
        return lovUnswer;
    }
}