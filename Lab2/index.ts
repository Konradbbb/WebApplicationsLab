
let hihatSOund: HTMLAudioElement;
let clapSOund: HTMLAudioElement;
let boomSOund: HTMLAudioElement;
let kickSOund: HTMLAudioElement;
let openhatSOund: HTMLAudioElement;
let rideSOund: HTMLAudioElement;
let snareSOund: HTMLAudioElement;
let tinkSOund: HTMLAudioElement;
let tomSOund: HTMLAudioElement;


const channel1: any[] = [];

appStart();



function appStart(): void {
    document.body.addEventListener('keypress', onKeyDown);
    const btnChannel1Play = document.querySelector('#btnChannel1')      //wyrzucić do osobnej funckji
    btnChannel1Play.addEventListener('click', onPlayChannel1);
    getSounds();    
}

function onPlayChannel1(): void {
    channel1.forEach(sound => {
        setTimeout(() => playSOund(sound.key), sound.time)
    });
}

function getSounds(): void {
    // const hihatSOund: HTMLAudioElement = document.querySelector('[data-sound="hihat"]'); // wyciąganie referencji audio
    const hihatSOund = document.querySelector('[data-sound="hihat"]')
    const clapSOund: HTMLAudioElement = document.querySelector('[data-sound="clap"]'); // wyciąganie referencji audio
    const boomSOund = document.querySelector('[data-sound="boom"]');
    const kickSOund = document.querySelector('[data-sound="kick"]');
    const openhatSOund = document.querySelector('[data-sound="openhat"]');
    const rideSOund = document.querySelector('[data-sound="ride"]');
    const snareSOund = document.querySelector('[data-sound="snare"]');
    const tinkSOund = document.querySelector('[data-sound="tink"]');
    const tomSOund = document.querySelector('[data-sound="tom"]');

}

function onKeyDown(ev: KeyboardEvent): void {
    console.log(ev);
    const key = ev.key;
    const time = ev.timeStamp;
    channel1.push({key, time});  //tworzymy obiekt w skróconej notacji ts {key: key, time: time}, odwołuje się do istniejącej zmiennej "key"
   playSOund(key);
}


function playSOund(key: string): void{

    

    switch(key) {
        case 'a':
            hihatSOund.currentTime = 0; // pozwala na odtworzenie dźwięku w kazdej chwili (kazdy clicxk to nowy dźwięk)
            hihatSOund.play();  // odtwarzanie muzyki
            break;
        case 's':
            clapSOund.currentTime = 0;
            clapSOund.play();
            break;
    }

    // hihatSOund.currentTime = 0;  
    // hihatSOund.play(); // odtwarzanie muzyki
} 


