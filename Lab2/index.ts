
const hihatSound: HTMLAudioElement = document.querySelector('[data-sound="hihat"]');
const clapSound: HTMLAudioElement = document.querySelector('[data-sound="clap"]'); 
const boomSound: HTMLAudioElement  = document.querySelector('[data-sound="boom"]');
const kickSound: HTMLAudioElement = document.querySelector('[data-sound="kick"]');
const openhatSound: HTMLAudioElement = document.querySelector('[data-sound="openhat"]');
const rideSound: HTMLAudioElement = document.querySelector('[data-sound="ride"]');
const snareSound: HTMLAudioElement = document.querySelector('[data-sound="snare"]');
const tinkSound: HTMLAudioElement = document.querySelector('[data-sound="tink"]');
const tomSound: HTMLAudioElement = document.querySelector('[data-sound="tom"]');


const channel1: any[] = [];

appStart();


function appStart() {
    document.addEventListener('keypress', onKeyPress);
    const btnPlayChannel1 = document.querySelector('#playChannel1')
    btnPlayChannel1.addEventListener('click', onPlayChannel1);
    
}

function onPlayChannel1(): void {
    channel1.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })

}

function onKeyPress(ev: KeyboardEvent): void {
    const key = ev.key;
    const time = ev.timeStamp;
    // const hihatSound: HTMLAudioElement = document.querySelector('[data-sound="hihat"]')
    // hihatSound.play()
    channel1.push({key, time});  //tworzymy obiekt w skróconej notacji ts {key: key, time: time}, odwołuje się do istniejącej zmiennej "key"
    playSound(key);
}


function playSound(key: string) {

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


