const mongoose = require('mongoose');

module.exports =  mongoose.Schema({
    property: {
        type: String,
        enum: [
            "AB",  // "Add Black: locations of Black stones to be placed on the board prior to the first move",
            "AW",  // "Add White: locations of White stones to be placed on the board prior to the first move.",
            "AN",  // "Annotations: name of the person commenting the game.",
            "AP",  // "Application: application that was used to create the SGF file (e.g. CGOban2,...).",
            "B",   //"a move by Black at the location specified by the property value.",
            "BR",  // "Black Rank: rank of the Black player.",
            "BT",  // "Black Team: name of the Black team.",
            "C",   //"Comment: a comment.",
            "CP",  // "Copyright: copyright information.",
            "DT",  // "Date: date of the game.",
            "EV",  // "Event: name of the event (e.g. 58th Honinbō Title Match).",
            "FF",  // "File format: version of SGF specification governing this SGF file.",
            "GM",  // "Game: type of game represented by this SGF file. A property value of 1 refers to Go.",
            "GN",  // "Game Name: name of the game record.",
            "HA",  // "Handicap: the number of handicap stones given to Black. Placement of the handicap stones are set using the AB property.",
            "KM",  // "Komi: komi.",
            "ON",  // "Opening: information about the opening (Fuseki), rarely used in any file.",
            "OT",  // "Overtime: overtime system.",
            "PB",  // "Black Name: name of the black player.",
            "PC",  // "Place: place where the game was played (e.g.: Tokyo).",
            "PL",  // "Player: color of player to start.",
            "PW",  // "White Name: name of the white player.",
            "RE",  // "Result: result, usually in the format 'B+R' (Black wins by resign) or 'B+3.5' (black wins by 3.5).",
            "RO",  // "Round: round (e.g.: 5th game).",
            "RU",  // "Rules: ruleset (e.g.: Japanese).",
            "SO",  // "Source: source of the SGF file.",
            "SZ",  // "Size: size of the board, non-square boards are supported.",
            "TM",  // "Time limit: time limit in seconds.",
            "US",  // "User: name of the person who created the SGF file.",
            "W",   //"a move by White at the location specified by the property value.",
            "WR",  // "White Rank: rank of the White player.",
            "WT",  // "White Team: name of the White team."          
        ],
        required: true
    },
    value: {
        type: String,
        required: false
    }
})

