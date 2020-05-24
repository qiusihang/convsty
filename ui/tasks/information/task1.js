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
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>John Nash</b> (profession: <b>American Railroad Executive</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Edward Barnes</b> (profession: <b>American Architect</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>James Gray</b> (profession: <b>Computer Scientist</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>John Abraham</b> (profession: <b>American Football (NFL)</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Howard Beale</b> (profession: <b>American Historian</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>David Cameron</b> (profession: <b>Scottish Painter</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>James Cameron</b> (profession: <b>Scientist</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Charles Bass</b> (profession: <b>Medical Doctor</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Richard Allison</b> (profession: <b>Scottish Architect</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>John Lennon</b> (profession: <b>American Classical Music Composer</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Albert Bartlett</b> (profession: <b>Physics Professor</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Paul Barber</b> (profession: <b>Field Hockey Player</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Ross Allen</b> (profession: <b>Politician</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Peter Bell</b> (profession: <b>Politician</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Thomas Moody</b> (profession: <b>Former Cricketer</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Andrew Murray</b> (profession: <b>Children's Writer</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Peter Barton</b> (profession: <b>American Actor</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Glen Baxter</b> (profession: <b>Mathematician</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>George Bailey</b> (profession: <b>British Electrical Engineer and Industrialist</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>James Tait</b> (profession: <b>British Bomber Pilot</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Arthur Rubinstein</b> (profession: <b>Composer</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Roger Taylor</b> (profession: <b>American Football</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>John Major</b> (profession: <b>Architect</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>James Anderson</b> (profession: <b>Australian Tennis Player</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>John Quested</b> (profession: <b>Aviator</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>John Badley</b> (profession: <b>Author and Educator</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Michael Beer</b> (profession: <b>Cricketer</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>George Lucas</b> (profession: <b>Archbishop</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Christopher Lambert</b> (profession: <b>Record Producer and Label Owner</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Anne Andersen</b> (profession: <b>Football Player</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>George Bush</b> (profession: <b>Footballer</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>William Barbosa</b> (profession: <b>Brazilian Footballer</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Richard Nixon</b> (profession: <b>Footballer</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>James Baird</b> (profession: <b>Canadian Politician</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Richard Bannister</b> (profession: <b>British Media</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Henry Bedford</b> (profession: <b>American Painter</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Antonio Salvador</b> (profession: <b>Poet and Writer</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Michael Jordan</b> (profession: <b>Researcher, Artificial Intelligence</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>David Alexander</b> (profession: <b>English Barrister</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Francis Barlow</b> (profession: <b>Lawyer and Politician</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Daniel Barry</b> (profession: <b>Astronaut</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Harry Baker</b> (profession: <b>Speedway Motorcycle Rider</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>William Basham</b> (profession: <b>Physician</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>William Addison</b> (profession: <b>English Historian</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>George Lamson</b> (profession: <b>English Doctor and Murderer</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Frank Barry</b> (profession: <b>Anglical Bishop</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Frank Baum</b> (profession: <b>Lawyer</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>Irina Belova</b> (profession: <b>Rythmic Gymnast</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>George Barr</b> (profession: <b>American Artist</b>)"]},
        {"question": ["Please find the <b>Middle Name</b> of this person using <a href=\"http://en.wikipedia.org/\" target=\"_blank\">Wikipedia</a> or <a href=\"http://www.google.com\" target=\"_blank\">Google</a>:", "<b>James May</b> (profession: <b>American Psychiatrist</b>)"]}
    ]
}