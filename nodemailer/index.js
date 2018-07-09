var nodemailer  = require('nodemailer');

var mailTransport = nodemailer.createTransport({
    host : 'smtp.126.com',
    secureConnection: true, // 使用SSL方式（安全方式，防止被窃取信息）
    auth : {
        user: 'cockroach_cn@126.com',
        pass: 'txj1269179099'
    },
});

var options = {
    from        : 't_xiaozhe@qq.com',
    to          : 't_xiaoji@qq.com',
    // cc         : ''  //抄送
    // bcc      : ''    //密送
    subject        : '一封来自Node Mailer的邮件',
    text          : '一封来自Node Mailer的邮件',
    html           : '<h1>你好，这是一封来自NodeMailer的邮件！</h1><p><img src="cid:00000001"/></p>'
};

mailTransport.sendMail(options, function(err, msg){
    if(err){
        console.log(err);
    }
    else {
        console.log(msg);
    }
});
