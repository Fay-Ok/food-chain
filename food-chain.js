function FoodChain() {

    FoodChain.prototype.verse = function (value) {

        var animal = {
            1: "fly",
            2: "spider",
            3: "bird",
            4: "cat",
            5: "dog",
            6: "goat"
        };

        var swallowdToCatch = "";

        var sings = {
            "spider": "It wriggled and jiggled and tickled inside her.\n",
            "bird": "How absurd to swallow a bird!\n",
            "cat": "Imagine that, to swallow a cat!\n",
            "dog": "What a hog, to swallow a dog!\n",
            "goat": "Just opened her throat and swallowed a goat!\n"
        };

        var firstPart = "I know an old lady who swallowed a " + animal[value] + ".\n";
        var lastPart = "I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n";
        var winggledAndjiggled = "that wriggled and jiggled and tickled inside her.\n";

        for (var i = value; i >= 2; i--) {

            if (animal[i - 1] == "spider") {
                swallowdToCatch += "She swallowed the " + animal[i] + " to catch the " + animal[i - 1] + " " + winggledAndjiggled;
                continue;
            }
            swallowdToCatch += "She swallowed the " + animal[i] + " to catch the " + animal[i - 1] + ".\n";
        }

        if (value == 1) {
            return firstPart + lastPart;
        } else
            return firstPart + sings[animal[value]] + swallowdToCatch + lastPart;
    }

};

module.exports = FoodChain;