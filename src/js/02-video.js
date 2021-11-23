import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

import throttle from 'lodash.throttle';

const timeStorage = "videoplayer-current-time";


player.on('play', onPlay);
player.on('timeupdate', throttle(onUpdatedTime, 250));
player.on('seeked', onUpdatedTime);

function onUpdatedTime() {
    player.getCurrentTime().then(seconds => localStorage.setItem(timeStorage, seconds))
}

function onPlay() {
    player.setCurrentTime(localStorage.getItem(timeStorage))
}
