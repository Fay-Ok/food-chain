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

        var sings = {
            "spider": "It wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\n",
            "bird": "How absurd to swallow a bird!\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\n",
            "cat": "Imagine that, to swallow a cat!\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\n",
            "dog": "What a hog, to swallow a dog!\nShe swallowed the dog to catch the cat.\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\n",
            "goat": "Just opened her throat and swallowed a goat!\nShe swallowed the goat to catch the dog.\nShe swallowed the dog to catch the cat.\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\n"
        };

        var firstPart = "I know an old lady who swallowed a " + animal[value] + ".\n";
        var lastPart = "I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n";


        if (value == 1) {
            return firstPart + lastPart;
        } else
            return firstPart + sings[animal[value]] + lastPart;
    }

};

module.exports = FoodChain;