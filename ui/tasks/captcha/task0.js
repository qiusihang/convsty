var validate = function(input) {
    var strip = function(text) {
        return text.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_'"`~()]/g, "");
    }
    if (strip(input).length > 0)  return true;
    return false;
}

var task = {
    "name": "Image Transcription",
    "instruction": ["Look at the image and determine what <b>letters</b> the image contains, and then write the letters (in the same order) as they appear in the image."],
    "question_number": 5,
    "time_limit": "10 minutes",
    "questions": [
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha0.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha1.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha2.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha3.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha4.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha5.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha6.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha7.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha8.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha9.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha10.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha11.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha12.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha13.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha14.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha15.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha16.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha17.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha18.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha19.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha20.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha21.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha22.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha23.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha24.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha25.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha26.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha27.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha28.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha29.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha30.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha31.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha32.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha33.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha34.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha35.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha36.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha37.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha38.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha39.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha40.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha41.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha42.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha43.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha44.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha45.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha46.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha47.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha48.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/0/captcha49.png\">"]}
    ]
}
