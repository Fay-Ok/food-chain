function FoodChain() {

    FoodChain.prototype.verse = function (value) {

        var animal = {
            1: "fly",
            2: "spider"
        }
        var firstPart = "I know an old lady who swallowed a " + animal[value] + ".\n";

        var something = "It wriggled and jiggled and tickled inside her.\nShe swallowed the " + animal[value] + " to catch the fly.\n";

        var lastPart = "I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n";

        if (value == 1) {
            return firstPart + lastPart;
        } else if (value == 2) {
            return firstPart + something + lastPart;
        }
    }

};

module.exports = FoodChain;