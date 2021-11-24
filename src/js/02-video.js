import _ from 'lodash';
import '../../node_modules/@vimeo/player/dist/player';
import '../../node_modules/lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const storageKey = 'videoplayer-current-time';

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':break;
        default:break;
    }
});

const saveTime = JSON.parse(localStorage.getItem(storageKey));

if (saveTime !== null) {
  player.setCurrentTime(saveTime);
}

player.on('timeupdate', _.throttle((data) => {
  // console.log(data.seconds);
  localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000));