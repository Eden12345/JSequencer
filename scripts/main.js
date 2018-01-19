import Tone from "Tone";

// document.addEventListener('DOMContentLoaded', () => {
  // const date = new Date();
  // const time = date.getTime();
// });

const synthFunc = () => {
  const synth = new Tone.Synth({envelope: {attack  : 0.25}});
  synth.toMaster();

  const playKeySynth = (e) => {
    if (e.key == "q"){
      synth.triggerAttack('G1', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "w"){
      synth.triggerAttack('Bb1', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "e"){
      synth.triggerAttack('C2', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "r"){
      synth.triggerAttack('D2', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "t"){
      synth.triggerAttack('F2', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "y"){
      synth.triggerAttack('G2', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "u"){
      synth.triggerAttack('Bb2', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "i"){
      synth.triggerAttack('C3', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "o"){
      synth.triggerAttack('D3', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "p"){
      synth.triggerAttack('F3', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "a"){
      synth.triggerAttack('G3', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "s"){
      synth.triggerAttack('Bb3', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "d"){
      synth.triggerAttack('C4', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "f"){
      synth.triggerAttack('D4', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "g"){
      synth.triggerAttack('F4', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "h"){
      synth.triggerAttack('G4', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "j"){
      synth.triggerAttack('Bb4', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "k"){
      synth.triggerAttack('C5', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "l"){
      synth.triggerAttack('D5', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "z"){
      synth.triggerAttack('F5', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "x"){
      synth.triggerAttack('G5', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "c"){
      synth.triggerAttack('Bb5', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "v"){
      synth.triggerAttack('C6', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "b"){
      synth.triggerAttack('D6', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "n"){
      synth.triggerAttack('F6', '+0.05');
      synth.triggerRelease('+0.25');
    }
    if (e.key == "m"){
      synth.triggerAttack('G6', '+0.05');
      synth.triggerRelease('+0.25');
    }
  };

  window.addEventListener("keydown", playKeySynth, false);
};

const samplerFunc = () => {
  const kick = new Tone.Player({url: "../audio/Bef_K.wav"}).toMaster();
  const snare = new Tone.Player({url: "../audio/Box_Snr2.wav"}).toMaster();
  const hat = new Tone.Player({url: "../audio/Aki_H4.wav"}).toMaster();
  const chimes = new Tone.Player({url: "../audio/Str_Chim.wav"}).toMaster();

  const playKeySampler = (e) => {
    if (e.key == "1"){
      kick.start();
    }
    if (e.key == "2"){
      snare.start();
    }
    if (e.key == "3"){
      hat.start();
    }
    if (e.key == "4"){
      chimes.start();
    }
  };

  window.addEventListener("keydown", playKeySampler, false);
};


const synthButton = document.getElementById('synth-button');
const samplerButton = document.getElementById('sampler-button');

synthButton.addEventListener('mousedown', () => {
  synthFunc();
});

samplerButton.addEventListener('mousedown', () => {
  samplerFunc();
});
