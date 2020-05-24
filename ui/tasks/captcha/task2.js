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
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha0.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha1.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha2.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha3.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha4.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha5.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha6.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha7.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha8.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha9.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha10.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha11.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha12.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha13.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha14.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha15.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha16.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha17.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha18.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha19.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha20.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha21.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha22.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha23.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha24.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha25.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha26.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha27.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha28.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha29.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha30.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha31.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha32.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha33.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha34.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha35.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha36.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha37.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha38.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha39.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha40.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha41.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha42.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha43.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha44.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha45.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha46.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha47.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha48.png\">"]},
        {"question": ["Please type the characters in the image.","<img height=\"50px\" src=\"tasks/captcha/images/2/captcha49.png\">"]}
    ]
}
