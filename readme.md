# Amazon S3 Direct Uploader with Node.js

This project is an extension of the heroku tutorial about uploading content to Amazon S3 server. https://devcenter.heroku.com/articles/s3-upload-node

We can upload only one file to Amazon S3 using a Signed URL. I have modified the html code to accept multiple files and have added some javascript code to upload all the selected files one by one. After the upload is complete, then the information associated with those files like name, url, content-type is stored at the hidden input field. Finally all the data associated with files uploaded is submitted via form through POST request to node.js server.



# Get Credentials
Replace __ACCESS_KEY__,__SECRET_ACCESS_KEY__, __BUCKET_NAME__, __REGION__ with your information respectively in app.js 

# Steps to run app

# 1) npm install
run this command to install dependencies

# 2) npm start
run this comman to start the server

# 3) Account Page
goto the localhost:3000/account to access the account page.
