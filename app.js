const express = require('express');
const ejs = require('ejs');
const aws = require('aws-sdk');
const bodyParser = require('body-parser');

const app = express();


aws.config.update({
    accessKeyId: 'AKIAJFN2MKG5NOMBH4SA', 
    secretAccessKey: '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', 
    region: 'ap-south-1',
    signatureVersion: 'v4'
})
const S3_BUCKET_NAME = 'elibrary-content';

app.use(bodyParser.urlencoded({extended: false}))
app.set('views', './views');
app.use(express.static('./public'));
app.engine('html', ejs.renderFile);

app.get('/sign', (req, res) => {
    const s3 = new aws.S3();
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3_params = {
        Bucket: S3_BUCKET_NAME,
        Key: fileName,
        Expires: 60,
        ContentType: fileType,
        ACL: 'private'
    };

    s3.getSignedUrl('putObject', s3_params, (err, data) => {
        if(err) {
            console.log(err);
            return res.end(JSON.stringify(err));
        }
        const returnData = {
            signedRequest: data,
            url: `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`
        };
        // console.log(returnData)
        res.write(JSON.stringify(returnData));
        res.end();
    })
})

app.get('/account', (req, res) => {
    res.render('account.html')
})


app.post('/save-details',(req, res) => {
    const content = req.body.content.split('|');
    console.log(content)
    res.send(content);
})

app.listen(process.env.PORT || 3000, () => {
    console.log("server is running");
})