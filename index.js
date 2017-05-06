var request = require('sync-request');
var cheerio = require('cheerio');



module.exports.gettopics = function (repo_url) {
    var topics = new Array();
    var res = request('GET', repo_url);
if(res.statusCode == 200) {
            var $ = cheerio.load(res.getBody('utf8'));
            var topic_tag = $('.topic-tag');
            var lenght = topic_tag.length;
            for (var i = 0; i < lenght; i++) {
            topics.push(topic_tag.data('octo-dimensions').slice(6));
                topic_tag = topic_tag.next();
            }
        }
             return topics;

}