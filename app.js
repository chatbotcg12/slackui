
var express = require('express');
var app = express();


/**set port using env variable */
var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function () {
    console.log("Listening on --- Port 3000");
});

Slack = require('node-slackr');
slack = new Slack('https://hooks.slack.com/services/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');
app.get('/getimage', (req, res) => {
    messages = {
        text: "Display Image",
        channel: "#notifications",
         attachments: [
          {
            color: '#5A352D',
            title: 'How can I help you?',
            callback_id: 'order:start',
            actions: [
              {
                name: 'start',
                text: 'Start a coffee order',
                type: 'button',
                value: 'order:start',
              },
            ],
          },
        ],

    };
    console.log("Image sent to slack");
    slack.notify(messages, function (err, result) {
        console.log(err, result);
    });

});