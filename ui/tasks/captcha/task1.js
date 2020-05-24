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
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha0.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha1.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha2.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha3.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha4.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha5.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha6.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha7.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha8.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha9.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha10.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha11.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha12.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha13.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha14.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha15.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha16.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha17.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha18.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha19.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha20.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha21.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha22.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha23.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha24.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha25.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha26.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha27.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha28.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha29.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha30.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha31.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha32.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha33.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha34.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha35.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha36.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha37.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha38.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha39.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha40.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha41.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha42.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha43.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha44.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha45.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha46.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha47.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha48.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/1/captcha49.png\">"]}
    ]
}
