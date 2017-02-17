function FoodChain() {

    FoodChain.prototype.verse = function (value) {

        var animal = {
            1: "fly",
            2: "spider",
            3: "bird"
        }
        var firstPart = "I know an old lady who swallowed a " + animal[value] + ".\n";

        var secondPart = "How absurd to swallow a bird!\nShe swallowed the bird to catch the spider ";

        var spiderFly = " wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\n";

        var lastPart = "I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n";

        if (value == 1) {
            return firstPart + lastPart;
        } else if (value == 2) {
            return firstPart + "It" + spiderFly + lastPart;
        } else if (value == 3) {
            return firstPart + secondPart + "that" + spiderFly + lastPart;
        }
    }

};

module.exports = FoodChain;