var urlencode = require('urlencode');

const url = 'AccessKeyId=LTAIkxeRwwYXgDfC&Action=DescribeEipAddresses&Format=JSON&RegionId=cn-hangzhou-1&SignatureMethod=HMAC-SHA1&SignatureNonce=151392817357226059&SignatureVersion=1.0&Timestamp=2017-12-22T07:36:13Z&Version=2016-04-28';

console.log(urlencode(url, 'utf8'));

