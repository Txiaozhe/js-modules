'use strict';
exports.__esModule = true;
var fs_1 = require("fs");
var readline_1 = require("readline");
var boa = require('@pipcook/boa');
var jieba = boa["import"]('jieba');
var MultinomialNB = boa["import"]('sklearn.naive_bayes').MultinomialNB;
var pickle = boa["import"]('pickle');
function strip(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
}
function isdigit(str) {
    return /^\d+$/.test(str);
}
function MakeWordsSet(words_file) {
    var words_set = new Set();
    var rl = readline_1["default"].createInterface({
        input: fs_1["default"].createReadStream(words_file)
    });
    return new Promise(function (resolve) {
        rl.on('line', function (line) {
            var word = strip(line);
            if (word.length > 0 && !words_set.has(word)) {
                words_set.add(word);
            }
        });
        rl.on('close', function () {
            resolve(words_set);
        });
    });
}
function words_dict(all_words_list, stopwords_set) {
    if (stopwords_set === void 0) { stopwords_set = new Set(); }
    var feature_words = [];
    for (var _i = 0, all_words_list_1 = all_words_list; _i < all_words_list_1.length; _i++) {
        var word = all_words_list_1[_i];
        if (!isdigit(word) &&
            !stopwords_set.has(word) &&
            word.length > 1 &&
            word.length < 5) {
            feature_words.push(word);
        }
    }
    return feature_words;
}
exports.processPredictData = function (data, all_words_list_path, stopwords_path) {
    var all_words_list = pickle.load(fs_1["default"].readFileSync(all_words_list_path));
    var word_cut = jieba.cut(data, boa.kwargs({
        cut_all: false
    }));
    var stopwords_file = stopwords_path;
    var text_features = function (text, feature_words) {
        var text_words = new Set(text);
        var features = [];
        for (var _i = 0, feature_words_1 = feature_words; _i < feature_words_1.length; _i++) {
            var word = feature_words_1[_i];
            if (text_words.has(word)) {
                features.push(1);
            }
            else {
                features.push(0);
            }
        }
        return features;
    };
    return MakeWordsSet(stopwords_file).then(function (stopwords_set) {
        var feature_words = words_dict(all_words_list, stopwords_set);
        return word_cut.map(function (text) {
            return text_features(text, feature_words);
        });
    });
};
exports.getBayesModel = function () {
    return MultinomialNB();
};
exports.loadModel = function (filepath) {
    return pickle.load(fs_1["default"].readFileSync(filepath));
};
