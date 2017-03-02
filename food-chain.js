function FoodChain() {

    var animal = {
        1: "fly",
        2: "spider",
        3: "bird",
        4: "cat",
        5: "dog",
        6: "goat",
        7: "cow",
        8: "horse"
    };

    var sings = {
        "spider": "It wriggled and jiggled and tickled inside her.\n",
        "bird": "How absurd to swallow a bird!\n",
        "cat": "Imagine that, to swallow a cat!\n",
        "dog": "What a hog, to swallow a dog!\n",
        "goat": "Just opened her throat and swallowed a goat!\n",
        "cow": 'I don\'t know how she swallowed a cow!\n'
    };

    var lastPart = "I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n";
    var wiggledAndjiggled = "that wriggled and jiggled and tickled inside her.\n";
    this.flySong = "";
    this.spiderSong = "";
    this.birdSong = "";
    this.catSong = "";
    this.dogSong = "";
    this.goatSong = "";
    this.cowSong = "";
    this.horseSong = "";

    var songCollectionRecords = {
        "fly": this.flySong,
        "spider": this.spiderSong,
        "bird": this.birdSong,
        "cat": this.catSong,
        "dog": this.dogSong,
        "goat": this.goatSong,
        "cow": this.cowSong,
        "horse": this.horseSong
    };

    function songFactory(start) {

        var swallowedToCatch = "";
        var firstPart = "I know an old lady who swallowed a " + animal[start] + ".\n";
        var horseLastPart = "She\'s dead, of course!\n";



        for (var i = start; i >= 1; i--) {

            if (animal[i] == "fly") {
                songCollectionRecords[animal[i]] = firstPart + lastPart;
                continue;
            }

            if (animal[i - 1] == "spider") {

                swallowedToCatch += "She swallowed the " + animal[i] + " to catch the " + animal[i - 1] + " " + wiggledAndjiggled;
                songCollectionRecords[animal[start]] = swallowedToCatch;
                continue;
            }

            if (animal[start] == "horse") {

                songCollectionRecords[animal[start]] = firstPart + horseLastPart;
                continue;

            }
            swallowedToCatch += "She swallowed the " + animal[i] + " to catch the " + animal[i - 1] + ".\n";
            songCollectionRecords[animal[start]] = firstPart + sings[animal[start]] + swallowedToCatch + lastPart;
        }
    }


    FoodChain.prototype.verse = function (start) {

        songFactory(start);
        return songCollectionRecords[animal[start]];

    };


    FoodChain.prototype.verses = function (start, stop) {
        var chainedSong = '';

        for (var i = start; i <= stop; i++) {

            songFactory(start);
            chainedSong += songCollectionRecords[animal[i]] + "\n";

        }
        return chainedSong;
    };
};

module.exports = FoodChain;