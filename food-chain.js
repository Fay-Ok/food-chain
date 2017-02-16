function FoodChain() {
    
    FoodChain.prototype.verse = function (value) {

        var song = 'I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';

        if(value ==1 ){
            return song;
        }
    }

};

module.exports = FoodChain;