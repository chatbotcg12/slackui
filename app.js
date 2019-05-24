
var express = require('express');
var app = express();


/**set port using env variable */
var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function () {
    console.log("Listening on --- Port 3000");
});

Slack = require('node-slackr');
slack = new Slack('https://hooks.slack.com/services/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');
app.get('/ui', (req, res) => {
   
    messages = {
        text: "Display Image",
        channel: "#notifications",
       "attachments": [
        {
            "text": "Choose a game to play",
            "fallback": "If you could read this message, you'd be choosing something fun to do right now.",
            "color": "#3AA3E3",
            "attachment_type": "default",
            "callback_id": "game_selection",
            "actions": [
                {
                    "name": "games_list",
                    "text": "Pick a game...",
                    "type": "select",
                    "options": [
                        {
                            "text": "Hearts",
                            "value": "hearts"
                        },
                        {
                            "text": "Bridge",
                            "value": "bridge"
                        },
                        {
                            "text": "Checkers",
                            "value": "checkers"
                        },
                        {
                            "text": "Chess",
                            "value": "chess"
                        },
                        {
                            "text": "Poker",
                            "value": "poker"
                        },
                        {
                            "text": "Falken's Maze",
                            "value": "maze"
                        },
                        {
                            "text": "Global Thermonuclear War",
                            "value": "war"
                        }
                    ]
                }
            ]
        }
    ]

    };
    console.log("Image sent to slack");
    slack.notify(messages, function (err, result) {
        console.log(err, result);
    });

});