/// @author f-kh

var allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-{}[]?";

/**
 * Main method for create random string.
 *
 * @param {length} length of random string.
 * @param {optionalChar} optional characters for use in random string.
 * @return {random string} The result create random string.
 */
module.exports = function (length, optionalChar) {
    if (length === undefined) {
        return "Error: String length not entered.";
    }
    if (optionalChar === undefined) {
        optionalChar = allCharacters;
    }

    var randomString = "";
    for (var i = 0; i < length; i++) {
        var randomPoz = Math.floor(Math.random() * optionalChar.length);
        randomString += optionalChar.substring(randomPoz, randomPoz + 1);
        /// randomString += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }

    return randomString;
};
