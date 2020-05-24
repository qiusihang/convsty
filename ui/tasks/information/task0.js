var validate = function(input) {
    var strip = function(text) {
        return text.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_'"`~()]/g, "");
    }
    if (strip(input).length > 0)  return true;
    return false;
}

var task = {
    "name": "Information Finding",
    "instruction": [
        "In this task, you will find the <b>Middle Name</b> of a famous person by searching with provided information using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>.",
    ],
    "question_number": 5,
    "time_limit": "20 minutes",
    "questions": [
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Russell Crowe</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Michael Holding</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Jennifer Lawrence</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Donald Duck</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Mohandas Gandhi</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Kate Winslet</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Matthew Damon</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Eldrick Woods</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Igor Stravinsky</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Courtney Cox</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Emily Stone</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Donald Trump</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Daniel Craig</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Kate Mara</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Uma Thurman</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Darren Lehmann</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Zinedine Zidane</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Kimberly Kardashian</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Allan Donald</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Quentin Tarantino</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Katherine Heigl</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Barack Obama</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Kate Hudson</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Adam Sandler</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Patrick Rafter</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Vladimir Putin</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Leonardo DiCaprio</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Ellyse Perry</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Guy Ritchie</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Bryan Cranston</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Kobe Bryant</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Richard Gere</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Elizabeth Fey</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Max Verstappen</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Hilary Duff</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Sarah Palin</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Anna Kournikova</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Ernest Hemingway</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Alan Turing</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Paris Hilton</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Timothy Henman</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Daniel Radcliffe</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Zachary Galifianakis</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Pablo Picasso</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Sachin Tendulkar</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Werner Heisenberg</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Adam Gilchrist</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Charlie Estevez</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Timothy Olyphant</b>"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Patrick Rothfuss</b>"]}
    ]
}
