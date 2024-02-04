import vimeoPlayer from "@vimeo/player"; 
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new vimeoPlayer(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });
    const time = throttle(seconds => {
        localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds)), 1000
    })
    player.on('timeupdate', function(data) {
        time(data.seconds);
        })

const timeUpdate = JSON.parse(localStorage.getItem("videoplayer-current-time"));
if (timeUpdate) {
    player.setCurrentTime(timeUpdate);
};
