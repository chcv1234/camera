const video = document.getElementById('video');
//const button = document.getElementById('button');
const select = document.getElementById('select');
const snapshot = document.getElementById('canvas');
let currentStream;

/*
function stopMediaTracks(stream) {
    stream.getTracks().forEach(track => {
        track.stop();
    });
}

function gotDevices(mediaDevices) {
    select.innerHTML = '';
    select.appendChild(document.createElement('option'));
    let count = 1;
    mediaDevices.forEach(mediaDevice => {
        if (mediaDevice.kind === 'videoinput') {
            const option = document.createElement('option');
            option.value = mediaDevice.deviceId;
            const label = mediaDevice.label || `Camera ${count++}`;
            const textNode = document.createTextNode(label);
            option.appendChild(textNode);
            select.appendChild(option);
        }
    });
}
*/

/*
button.addEventListener('click', event => {
    if (typeof currentStream !== 'undefined') {
        stopMediaTracks(currentStream);
    }
    const videoConstraints = {};
    if (select.value === '') {
        videoConstraints.facingMode = 'environment';
    } else {
        videoConstraints.deviceId = { exact: select.value };
    }
    const constraints = {
        video: videoConstraints,
        audio: false
    };
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
            currentStream = stream;
            video.srcObject = stream;
            return navigator.mediaDevices.enumerateDevices();
        })
        .then(gotDevices)
        .catch(error => {
            console.error(error);
        });
});
*/

//button.addEventListener('click', event => {
    const constraints = {
        video: { facingMode: { exact: "environment" } },
        audio: false
    };
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(error => {
            console.error(error);
        });
//});

//navigator.mediaDevices.enumerateDevices().then(gotDevices);


document.getElementById("capture").addEventListener("click",function(){
//繪製畫面
    var context = snapshot.getContext('2d');
    context.drawImage(video,0,0,500,500);
    var dataURL = snapshot.toDataURL('image/jpeg');
    console.log(dataURL);
});