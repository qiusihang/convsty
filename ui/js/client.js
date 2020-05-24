
var start_time = 0;
var last_time = 0;
var pauses = [];
var keys = [];

var chatbot = new Chatbot(taketurn, show_message = function(message){
    bubble(message);
}); // taketurn is a callback function (defined in chatbot_setting.js)

window.onload = function()
{
    // document.getElementById("message").focus();
    init(chatbot, parse_query_string()); // initialization function defined in chatbot_setting.js
}

window.onresize = function() {
    // to_bottom();
}

var send = function(text) {
    var utterance = {
        start_time: start_time,
        pauses:     pauses,
        keys:       keys,
        text:       text
    };
    chatbot.send(utterance);
    // clean the statistical data
    start_time = 0;
    last_time = 0;
    pauses = [];
    keys = [];
}

var loading_cell = document.createElement("div");

var loading = function() {              // show loading animation
    if ( loading_cell.parentElement != undefined ) loading_cell.parentElement.style = "display:none";
    var row = document.getElementById("history").insertRow();
    loading_cell = row.insertCell();
    loading_cell.innerHTML = "<div class=\"lds-ellipsis\"><div></div><div></div><div></div><div></div></div>";
    to_bottom();
}

var buttons_cell = document.createElement("div");

var buttons = function(message) {       // show buttons
    if ( buttons_cell.parentElement != undefined ) buttons_cell.parentElement.style = "display:none";
    var row = document.getElementById("history").insertRow();
    buttons_cell = row.insertCell();
    var str = "<div style=\"width:100%;text-align:center;\">";
    var btns = message.substring(message.indexOf('#'),message.length).split('#');
    btns.forEach(function(e,i) {
        var param = encodeURIComponent(e).replace(/'/g, "%27");
        if (e.length > 0) str += "<div class=\"button\" onclick=\"select_button(\'"+param+"\')\">"+e.split('%')[0]+"</div>";  // show message, remove comment
    });
    buttons_cell.innerHTML = str + "</div>";
    if ( message.indexOf("buttons-only") == 0 ) {
        document.getElementById("message-cover").style.display = "block";   // disable textarea
        document.getElementById("message").disabled = true;
    }
    to_bottom();
}

var bubble = function(message) {
    // if the message is "loading", show loading animation
    // if the message starts with "buttons", show buttons
    // if the message does not include ":", show the message as a notification
    // if the message includes ":", then it as a conversation bubble, the substring before ":" is the username

    if ( message == undefined || message.length == undefined ) return;
    if ( message == "loading" ) {
        loading();
        return;
    }
    if ( message.indexOf("buttons") == 0 ) {
        buttons(message);
        return;
    }
    if ( loading_cell.parentElement != undefined ) loading_cell.parentElement.style = "display:none";
    var row = document.getElementById("history").insertRow();
    var cell = row.insertCell();
    cell.innerHTML = bubble_content(message);
    to_bottom();
}

var bubble_content = function(message) {
    var i = message.indexOf(":");
    if ( i < 0 )
        return "<div class=\"notification\"><p>" + message + "</p></div>";
    var t = new Date();
    var username = message.substring(0,i);
    var result = "";
    if (username != "__you__") {
        if ( !(typeof chatbot_name === 'undefined') ) username = chatbot_name;
        result = "<span style=\"font-size:10px;color:#999999;\">" + username + "  ";  // show username
    } else {
        result = "<span style=\"font-size:10px;color:#d9d9d9;\">"
    }
    result += ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + "</span><br/>"; // show time hh:mm
    result += message.substring(i+1,message.length).split('%')[0]; // show message, remove comment
    if (username == "__you__")
        result = "<div class=\"right-arrow\"></div><div class=\"bubble-me\">" + result + "</div>";  // user's bubble
    else
        result = "<div class=\"left-arrow\"></div><div class=\"bubble\">" + result + "</div>";      // other's bubble
    return result;
}


var click_send = function() {
    var m = document.getElementById("message");
    if ( m.value == "" ) return;
    if ( m.value.length > 5000 ) {
        alert("Your message is too long!");
        return;
    }
    count();
    send(m.value);
    m.value = "";
    if ( buttons_cell.parentElement != undefined ) buttons_cell.parentElement.style = "display:none";
    document.getElementById("message-cover").style.display = "none";   // enable textarea
    document.getElementById("message").disabled = false;
    m.focus();
}

var select_button = function(text) {
    text = decodeURIComponent(text);
    count();
    send(text);
    if ( buttons_cell.parentElement != undefined ) buttons_cell.parentElement.style = "display:none";
    document.getElementById("message-cover").style.display = "none";   // enable textarea
    document.getElementById("message").disabled = false;
    var m = document.getElementById("message");
    m.value = "";
    m.focus();
}

var count = function(keyCode=13) {
    // Doing some statistical things here: Counting pauses, typing times...
    var current_time = Date.now();
    if ( start_time == 0 ) {
        start_time = current_time;
        pauses.push(0);  // count pauses
        keys.push(keyCode);
    }else {
        pauses.push(current_time - last_time);  // count pauses
        keys.push(keyCode);
    }
    last_time = current_time;
}

var to_bottom = function() {
    var div = document.getElementById("history-container");
    div.scrollTop = div.scrollHeight;   // go to the bottom
}

var onKeyDown = function(e) {
    e = e || window.event;
    count(e.keyCode);
    if (e.keyCode == 13 && e.shiftKey) {
        return;
    }
    if (e.keyCode == 13) {
        e.returnValue = false;
        click_send();
    }
}

function parse_query_string() {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        var key = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1]);
        if (typeof query_string[key] === "undefined") {
            query_string[key] = decodeURIComponent(value);
        } else if (typeof query_string[key] === "string") {
            var arr = [query_string[key], decodeURIComponent(value)];
            query_string[key] = arr;
        } else {
            query_string[key].push(decodeURIComponent(value));
        }
    }
    return query_string;
}
