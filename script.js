function getActivePlayer(players) {
    var activePlayers = [];
    for (var i = 0; i < players.length; i++) {
        if (!players[i].paused) {
            activePlayers.push(players[i]);
        }
    }
    return activePlayers;
}

function displayHelloMessage(textContent) {
    var helloMessage = document.createElement('div');
    helloMessage.textContent = textContent;

    helloMessage.style.fontSize = '50px';
    helloMessage.style.position = 'absolute';
    helloMessage.style.top = '50%';
    helloMessage.style.left = '50%';
    helloMessage.style.transform = 'translate(-50%, -50%)';
    helloMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    helloMessage.style.color = 'white';
    helloMessage.style.padding = '10px';
    helloMessage.style.borderRadius = '5px';

    document.body.appendChild(helloMessage);

    var opacity = 1;
    var fadeInterval = setInterval(function () {
        opacity -= 0.1;
        helloMessage.style.opacity = opacity;

        if (opacity <= 0) {
            clearInterval(fadeInterval);
            // Remove the hello message after fading away
            setTimeout(function () {
                document.body.removeChild(helloMessage);
            }, 200);
        }
    }, 50);
}


var speedUp2x = false;
var speedUp3x = false;
document.addEventListener('keydown', (e) => {
    var players = document.getElementsByTagName('video');
    activePlayer = getActivePlayer(players)[0];

    if (e.key === '`') {
        speedUp2x = !speedUp2x;

        if (activePlayer) {
            if (speedUp2x) {
                activePlayer.playbackRate = 2;
                displayHelloMessage('2x');
            } else {
                activePlayer.playbackRate = 1;
                displayHelloMessage('1x');
            }
        }
    }

    if (e.key === '~') {
        speedUp3x = !speedUp3x;

        if (speedUp3x) {
            activePlayer.playbackRate = 3;
            displayHelloMessage('3x');
        } else {
            activePlayer.playbackRate = 1;
            displayHelloMessage('1x');
        }
    }
});


