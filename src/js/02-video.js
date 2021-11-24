import _ from 'lodash';
import '../../node_modules/@vimeo/player/dist/player';
import '../../node_modules/lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':break;
        default:break;
    }
});
player.on('timeupdate', _.throttle((data) => {
  // console.log(data.seconds);
  localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000));