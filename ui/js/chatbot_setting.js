
var answers = [];
var userid = Date.now().toString(36) + Math.random().toString(36).substr(3,12);
var text_unsure = ["Sorry, I don\'t get it.|Sorry, what do you mean?|Sorry, I don\'t understand."];
var text_more = ["OK. Can you tell me more?|Uh huh, and?|Good, go ahead.|Well... it will be better if you can tell me more.|Cool, go ahead please.|And?|Hmm... anything else?|Nice, anything more?|Nice! I want to know more :)|And then?|Come on, nothing else?|Un huh, and?"]
var text_explain = ["Please explain what you think.|Can you explain why?|Could you please give me the reason?"];
var edit_intro = false; // if the introduction of how to edit a question has been give
var review_process = false; // if the worker has already reviewed the answers at least once
var optional_questions = false; // if at least one optional question has been shown up
var success = false;    // submission
var task_type = "captcha";
var difficulty = 0;
var current_conv = "start";
var question_id = 0;
var max_question_id = 0;
var mandatory_question_number = 5;
var maximum_question_number = 5;
var id_offset = 0;

var chatbot_name = "Andrea"; // optional

var topics = [
    // pro abortion 0-4
    "abortion is getting rid of a fetus, not a human being",
    "reproductive choice empowers women",
    "legalizing abortion helps to reduce sexual victimization",
    "social welfare systems cannot support unwanted kids well",
    "modern abortion is safe",
    // con abortion 5-9
    "abortion is unsafe",
    "abortion is murder",
    "abortion damages the well-being of the mother",
    "women should not be able to use abortion as a form of contraception",
    "women should accept the consequences of pregnant",
    // pro gun control 10-14
    "gun control guarantees safety of Americans",
    "guns don't kill people, people kill people",
    "free access to guns is an important right",
    "guns make up only a small part of weapons that are used to commit crimes",
    "people will always find a source for guns",
    // con gun control 15-19
    "guns are an important part of the US",
    "we should control lunatics and criminals instead of guns",
    "banning guns will work not better than banning alcohol did",
    "armed guards or teachers will make schools safer",
    "gun control does not work"
];
var topic_ids = [0,15];
var n_topics = 2;

var randomInt = function(max){return Math.floor(Math.random() * Math.floor(max));}

var init = function(chatbot, params) {
    // must be included
    var task = document.createElement("script");
    if ("task" in params & ["captcha","information"].includes(params["task"]) ) task_type = params["task"];
    if ("diff" in params & !isNaN(params["diff"]) ) {
        difficulty = parseInt(params["diff"]);
        difficulty = difficulty >=0 ? difficulty : 0;
        difficulty = difficulty < 3 ? difficulty : 2;
    }
    if ("qid" in params) {
        id_offset = parseInt(params["qid"]);
        if (isNaN(id_offset) || id_offset < 0 || id_offset >= 50) id_offset = 0;
    }
    if ("topic" in params) {
        var ids = params["topic"].split(",");
        for ( var i = 0 ; i < ids.length ; i ++ )
            if ( !isNaN(ids[i]) ) topic_ids[i] = Math.max(Math.min(parseInt(ids[i]),topics.length-1),0);
    }
    if ( id_offset % 2 == 0 ) topic_ids = [randomInt(5),15+randomInt(5)];
    else topic_ids = [5+randomInt(5),10+randomInt(5)];
    task.src = "./tasks/"+task_type+"/task"+difficulty+".js";
    document.body.appendChild(task);
    task.onload = function () {
        load_task();
        chatbot.talk(conversation["start"]);
    };
}

var conversation = {
    "start": [
        "Hey! I'm Andrea. Thanks for your participation. Before we start the task, I want to ask a few questions first.",
        "Let\'s start. OK?"
    ],
    "demo": [
        "Please tell me something about yourself.",
        "You can say something about your age, your gender, your ethnicity, your education background and so on.",
        "You can also tell me your hobbies or interesting things you would like to share."
    ],
    "topic1": [
        "Alright. I got your answer.",
        "Do you think __TOPIC__?"
    ],
    "topic2": [
        "Got it. Do you think __TOPIC__?"
    ],
    "topic3": [
        "OK. Do you think __TOPIC__?"
    ],
    "topic4": [
        "So do you think __TOPIC__?"
    ],
    "greeting1": [
        "OK. Then, could you please help me with a task called <b>__TASK_NAME__</b>?",
        "buttons-only:#Sure!%[i]#Hmm... Let me have a look.%[c]#"
    ],
    "greeting2": [
        "You should be able to complete the task within <b>__TIME_LIMIT__</b>.",
        "buttons-only:#Absolutely!%[i]#Well... It should be enough.%[c]#"
    ],
    "greeting3": [
        "Do you want to see the task instructions?",
        "buttons-only:#Give me instructions!%[yes][i]#Let me think... I need instructions.%[yes][c]"//#Skip instructions!%[no][i]#Mhm... I don\'t think I need it.%[no][c]#"
    ],
    "instructions": [
        "Good. I think you now understand how to complete tasks. Shall we move on?"
    ],
    "first_question": [
        "Look. The first question."
    ],
    "next_question": [
        "The next one."
    ],
    "edit_question": [
        "By the way, if you want to edit the answer of the previous question, please type &quot;<i>edit answer</i>&quot;."
    ],
    "previous_question": [
        "Here you go."
    ],
    "wrong_answer": [
        "Sorry, I don\'t understand your answer. If you forget how to answer the question, please type &quot;<i>instruction</i>&quot;."
    ],
    "optional": [
        "Nice. The mandatory part of this task has been done. Do you want to continue?",
        "You can stop the task anytime by typing \"<i>stop task</i>\".",
        "buttons-only:#I want to continue.%[continue]#I want to stop now.%[stop]#"
    ],
    "break": [
        "If you are feeling tired (or the task is too difficult), you can type \"<i>stop task</i>\" to stop anytime. No worries, you'll get paid.",
        "buttons-only:#I want to continue.%[continue]#I want to stop now.%[stop]#"
    ],
    "review": [
        "You have completed the task. Please check your answers: __ANSWER__",
        "Do you want to proceed to answer submission?",
        "buttons-only:#Yes, I want to submit my answers.%[yes]#No, I want to edit my answers.%[no]#"
    ],
    "edit": [
        "Alright. Which answer you want to edit?",
        "Please type its question number."
    ],
    "likert1": [
        "Good. Here are two very quick questions before you leave.",
        "__LIKERT1__",
        "buttons-only:#Strongly Disagree%likert1-1#Disagree%likert1-2#Neither Disagree Nor Agree%likert1-3#Agree%likert1-4#Strongly Agree%likert1-5#"
    ],
    "likert2": [
        "__LIKERT2__",
        "buttons-only:#Strongly Disagree%likert1-1#Disagree%likert1-2#Neither Disagree Nor Agree%likert1-3#Agree%likert1-4#Strongly Agree%likert1-5#"
    ],
    "submission": [
        "Do you want to submit your answers and get your TASK TOKEN?",
        "buttons-only:#Yes.%[yes]#No, I don\'t want to submit my answers.%[no]#"
    ],
    "bye": [
        "OK. That\'s it.",
        "Thank you for your participation.",
        "Bye!"
    ]
};

var load_task = function() {
    mandatory_question_number = task["question_number"];
    maximum_question_number = task["questions"].length;
    for ( var i = 0 ; i < conversation["greeting1"].length ; i ++ )
        conversation["greeting1"][i] = conversation["greeting1"][i].replace("__TASK_NAME__",task["name"]);
    for ( var i = 0 ; i < conversation["greeting2"].length ; i ++ )
        conversation["greeting2"][i] = conversation["greeting2"][i].replace("__TIME_LIMIT__",task["time_limit"]);
    conversation["instructions"] = task["instruction"].concat(conversation["instructions"]);
    for ( var i = 0 ; i < n_topics ; i ++ )
        for ( var j = 0 ; j < conversation["topic"+(i+1)].length ; j ++ )
            conversation["topic"+(i+1)][j] = conversation["topic"+(i+1)][j].replace("__TOPIC__",topics[topic_ids[i]]);
    for ( var i = 0 ; i < conversation["likert1"].length ; i ++ )
        if ( id_offset % 2 == 0 ) conversation["likert1"][i] = conversation["likert1"][i].replace("__LIKERT1__","Do you think abortion should be legal?%likert1-f");
        else conversation["likert1"][i] = conversation["likert1"][i].replace("__LIKERT1__","Do you think abortion should not be legal?%likert1-rf");
    for ( var i = 0 ; i < conversation["likert2"].length ; i ++ )
        if ( id_offset % 2 == 0 ) conversation["likert2"][i] = conversation["likert2"][i].replace("__LIKERT2__","Do you think citizens should not have free access to guns?%likert2-rf");
        else conversation["likert2"][i] = conversation["likert2"][i].replace("__LIKERT2__","Do you think citizens should have free access to guns?%likert2-f");
}

var text2words = function(text) {
    var words_original = text.split(/[\W+]/);
    var words = [];
    words_original.forEach(function(e,i){if (e.length > 0) words.push(e);});
    return words;
}

var replies = {};
var check = function(conv, message, n = 3) {
    if ( !(conv in replies) ) {
        replies[conv] = [message];
    } else {
        replies[conv].push(message);
    }
    var sentences = [];
    replies[conv].forEach(function(e,i){
        sentences = sentences.concat(e.split(/[.!?]/));
    });
    var t = 0;
    sentences.forEach(function(e,i){
        var words = text2words(e);
        if ( words.length > 1 ) t += 1;
    });
    if ( t < n ) return false;
    return true;
}

var strip = function(text) {
    return text.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_'"`~()]/g, "");
}

var taketurn = function(chatbot, message) {
    // must be included
    // this callback function is used for processing users message and then decide how chatbot should reply.
    // you should use function chatbot.talk(["text1","text2"]) to reply.

    var next_conv = {
        "demo"      : "topic1",
        "topic1-exp": "topic2",
        "topic2-exp": "topic3",
        "topic3-exp": "topic4",
        "topic4-exp": "greeting1",
        "greeting1" : "greeting2",
        "greeting2" : "greeting3",
        "likert1"   : "likert2",
        "likert2"   : "submission"
    };
    next_conv["topic"+(n_topics)+"-exp"] = "greeting1";

    switch (current_conv) {
        case "start":
            chatbot.talk(conversation["demo"]);
            current_conv = "demo";
            break;
        case "demo":
        case "topic1-exp":
        case "topic2-exp":
        case "topic3-exp":
        case "topic4-exp":
            if ( check(current_conv, message) ) {
                chatbot.talk(conversation[next_conv[current_conv]]);
                current_conv = next_conv[current_conv];
            } else chatbot.talk(text_more);
            break;
        case "topic1":
        case "topic2":
        case "topic3":
        case "topic4":
            chatbot.talk(text_explain);
            current_conv = current_conv+"-exp";
            check(current_conv, message); // add current message to check array, because worker might give explanation here
            break;
        case "greeting1":
        case "greeting2":
            if ( message.includes("[i]") || message.includes("[c]") ) {
                chatbot.talk(conversation[next_conv[current_conv]]);
                current_conv = next_conv[current_conv];
            } else chatbot.talk(text_unsure.concat(conversation[current_conv]));
            break;
        case "greeting3":
            if ( message.includes("[yes]") ) {
                chatbot.talk(conversation["instructions"]);
                current_conv = "instructions";
            } else if ( message.includes("[no]") ) {
                push_question(chatbot);
                current_conv = "question";
            } else chatbot.talk(text_unsure.concat(conversation[current_conv]));
            break;
        case "instructions":
            if (max_question_id > 0) max_question_id--;
            push_question(chatbot);
            break;
        case "question":
            if (!review_process && max_question_id > 1 && strip(message).includes("edit")) {
                max_question_id--;
                question_id = max_question_id;
                chatbot.talk(get_question(1));
                break;
            }
            if ( optional_questions && strip(message).includes("stop")) {
                stop_task(chatbot);
                break;
            }
            if ( strip(message).includes("instruction")) {
                chatbot.talk(conversation["instructions"]);
                current_conv = "instructions";
                break;
            }
            if ( !validate(message) ) {
                chatbot.talk(get_question(2));
                break;
            }
            answers[question_id-1] = message;
            push_question(chatbot);
            break;
        case "optional":
        case "break":
            if ( message.includes("[continue]") ) {
                if ( current_conv=="break" ) {chatbot.talk(get_question());current_conv="question";}
                else push_question(chatbot);
            }
            else if ( message.includes("[stop]") ) stop_task(chatbot);
            else chatbot.talk(text_unsure.concat(conversation[current_conv]));
            break;
        case "review":
            if ( message.includes("[yes]") ) {
                chatbot.talk(conversation["likert1"]);
               current_conv = "likert1";
            } else if ( message.includes("[no]") ) {
                chatbot.talk(conversation["edit"]);
                current_conv = "edit";
            } else {
                chatbot.talk(text_unsure.concat(get_review()));
            }
            break;
        case "edit":
            var qid = parseInt(message.toLowerCase().replace("q", ""));
            if (0 < qid && qid <= maximum_question_number) {
                question_id = qid;
                chatbot.talk(get_question(1));
                current_conv = "question";
            } else {
                chatbot.talk(text_unsure.concat(get_review()));
                current_conv = "review";
            }
            break;
        case "likert1":
        case "likert2":
            if ( message.includes("likert") ) {
                if ( current_conv == "likert2" ) submit(chatbot.history);
                chatbot.talk(conversation[next_conv[current_conv]]);
                current_conv = next_conv[current_conv];
            } else {
                chatbot.talk(text_unsure.concat(conversation[current_conv]));
            }
            break;
        case "submission":
        case "submission_confirm":
            if ( message.includes("[yes]") ) {
                if (success) {
                    chatbot.talk(["Your TASK TOKEN is: <span style=\"background:yellow\">"+userid+"</span>"].concat(conversation["bye"]));
                    current_conv = "bye";
                } else {
                    submit(chatbot.history);
                    chatbot.talk(["Submission failed. Please try again"].concat(conversation["submission"]));
                }
            } else if (message.includes("[no]")) {
                if ( current_conv == "submission" ) {
                    chatbot.talk(["Are you sure? If you don\'t submit your answers, you won\'t get paid."].concat(conversation["submission"]));
                    current_conv = "submission_confirm";
                } else {
                    chatbot.talk(conversation["bye"]);
                    current_conv = "bye";
                }
            } else {
                chatbot.talk(text_unsure.concat(conversation[current_conv]));
            }
            break;
        case "bye":
            break;
        default:
            chatbot.talk(text_unsure);
    }

};

var get_question = function(condition = 0) { //0:normal, 1:edit, 2:invalid
    var question = [];
    switch (condition) {
        case 1:
            question = question.concat(conversation["previous_question"]);
            break;
        case 2:
            question = question.concat(conversation["wrong_answer"]);
            break;
        default:
            question = question.concat(conversation["next_question"]);
            if (question_id == 2 && !edit_intro) {
                question = question.concat(conversation["edit_question"]);
                edit_intro = true;
            }
            if (question_id == 1) Object.assign(question, conversation["first_question"]);
    }
    // get content about question
    var qid = (question_id + id_offset - 1) % maximum_question_number + 1;
    task["questions"][qid - 1]["question"].forEach(function(e, i) {
        if (!i) question.push("<b>Q" + question_id + ":</b> " + e);
        else question.push(e);
    });
    return question;
}

var push_question = function(chatbot) {
    if (max_question_id >= maximum_question_number) {
        chatbot.talk(get_review());
        current_conv = "review";
        return;
    }
    if ( !optional_questions && max_question_id == mandatory_question_number) {
        optional_questions = true;
        chatbot.talk(conversation["optional"]);
        current_conv = "optional";
        return;
    }
    max_question_id += 1;
    question_id = max_question_id;

    if ( max_question_id > 1 && max_question_id % 10 == 1 ) {
        chatbot.talk(conversation["break"]);
        current_conv = "break";
    } else {
        chatbot.talk(get_question());
        current_conv = "question";
    }
}

var stop_task = function(chatbot) {
    if (typeof answers[max_question_id-1] === "undefined") max_question_id -= 1;
    maximum_question_number = max_question_id;
    push_question(chatbot);
}

var get_review = function() {
    var ans_string = "";
    review_process = true;
    for (var i = 0; i < max_question_id; i++)
        ans_string += "<br/><b>Q" + (i + 1) + ":</b> " + answers[i];
    var review = conversation["review"];
    for ( var i = 0 ; i < review.length ; i ++ )
        review[i] = review[i].replace("__ANSWER__",ans_string);
    return review;
}

var submit = function(history) {
    var res = {userid:userid,task:task_type,qid:id_offset,conversation:history,answers:answers};
    // console.log(JSON.stringify(res));
    // jQuery.ajax({
    //     url: "",
    //     type: "POST",
    //     crossDomain: true,
    //     data: {data:JSON.stringify(res)},
    //     dataType: "json",
    //     success:function(response){
    //         if (response) {
                success = true;
    //         }
    //     },
    //     error:function(e){
    //         console.log(e);
    //     }
    // });
}
