const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
    hosts: [
        'https://127.0.0.1:9200'
    ]
});

function health() {
    // 获取状态，参数可选，可以只传递一个回调
    client.cluster.health(function (err, resp) {
        if (err) {
            console.error(err.message);
        } else {
            console.dir(resp);
        }
    });
}

function index() {
    // 建立索引
    client.index({
        index: 'blog',
        type: 'post',
        id: 1,
        body: {
            title: 'JavaScript Everywhere!',
            content: 'It all started when...',
            date: '2013-12-17'
        }
    }, function (err, resp) {
            if(err) {
                console.log(err);
            } else {
                console.log(resp);
            }
        }
    );
}

function search() {
    // 搜索文档 
    client.search({
        index: 'blog',
        size: 50,
        body: {
            query: {
                match: {
                    profile: 'elasticsearch'
                }
            }
        }
    }).then(function (resp) {
        console.log(resp);
    }).catch(function (e) {
        console.log(e);
    });
}

health();
// index();
// search();
