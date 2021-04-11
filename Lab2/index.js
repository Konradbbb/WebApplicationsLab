var hihatSound = document.querySelector('[data-sound="hihat"]');
var clapSound = document.querySelector('[data-sound="clap"]');
var boomSound = document.querySelector('[data-sound="boom"]');
var kickSound = document.querySelector('[data-sound="kick"]');
var openhatSound = document.querySelector('[data-sound="openhat"]');
var rideSound = document.querySelector('[data-sound="ride"]');
var snareSound = document.querySelector('[data-sound="snare"]');
var tinkSound = document.querySelector('[data-sound="tink"]');
var tomSound = document.querySelector('[data-sound="tom"]');
var channel1 = [];
appStart();
function appStart() {
    document.addEventListener('keypress', onKeyPress);
    var btnPlayChannel1 = document.querySelector('#playChannel1');
    btnPlayChannel1.addEventListener('click', onPlayChannel1);
}
function onPlayChannel1() {
    channel1.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function onKeyPress(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    // const hihatSound: HTMLAudioElement = document.querySelector('[data-sound="hihat"]')
    // hihatSound.play()
    channel1.push({ key: key, time: time }); //tworzymy obiekt w skróconej notacji ts {key: key, time: time}, odwołuje się do istniejącej zmiennej "key"
    playSound(key);
}
function playSound(key) {
    switch (key) {
        case 'a':
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case 's':
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case 'd':
            hihatSound.currentTime = 0;
            hihatSound.play();
            break;
        case 'f':
            boomSound.currentTime = 0;
            boomSound.play();
            break;
        case 'q':
            openhatSound.currentTime = 0;
            openhatSound.play();
            break;
        case 'w':
            rideSound.currentTime = 0;
            rideSound.play();
            break;
        case 'e':
            snareSound.currentTime = 0;
            snareSound.play();
            break;
        case 'r':
            tinkSound.currentTime = 0;
            tinkSound.play();
            break;
        case 't':
            tomSound.currentTime = 0;
            tomSound.play();
            break;
    }
    // function playSound(key: string) {
    //     switch(key) {
    //         case 'a':
    //             hihatSOund.currentTime = 0; // pozwala na odtworzenie dźwięku w kazdej chwili (kazdy clicxk to nowy dźwięk)
    //             hihatSOund.play();  // odtwarzanie muzyki
    //             break;
    //         case 's':
    //             clapSOund.currentTime = 0;
    //             clapSOund.play();
    //             break;
    //     }
    // hihatSOund.currentTime = 0;  
    // hihatSOund.play(); // odtwarzanie muzyki
}
