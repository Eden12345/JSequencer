import Tone from "Tone";

//load synth
const synth = new Tone.Synth({envelope: {attack  : 0.25}});
synth.toMaster();

//map keys to synth
const playKeySynth = (e) => {
  if (e.key == "a"){
    synth.triggerAttack('G2', '+0.05');
    synth.triggerRelease('+0.25');
  } else if (e.key == "s"){
    synth.triggerAttack('Bb2', '+0.05');
    synth.triggerRelease('+0.25');
  } else if (e.key == "d"){
    synth.triggerAttack('C3', '+0.05');
    synth.triggerRelease('+0.25');
  } else if (e.key == "f"){
    synth.triggerAttack('D3', '+0.05');
    synth.triggerRelease('+0.25');
  } else if (e.key == "g"){
    synth.triggerAttack('F3', '+0.05');
    synth.triggerRelease('+0.25');
  } else if (e.key == "h"){
    synth.triggerAttack('G3', '+0.05');
    synth.triggerRelease('+0.25');
  } else if (e.key == "z"){
    synth.triggerAttack('Bb3', '+0.05');
    synth.triggerRelease('+0.25');
  } else if (e.key == "x"){
    synth.triggerAttack('C4', '+0.05');
    synth.triggerRelease('+0.25');
  } else if (e.key == "c"){
    synth.triggerAttack('D4', '+0.05');
    synth.triggerRelease('+0.25');
  } else if (e.key == "v"){
    synth.triggerAttack('F4', '+0.05');
    synth.triggerRelease('+0.25');
  } else if (e.key == "b"){
    synth.triggerAttack('G4', '+0.05');
    synth.triggerRelease('+0.25');
  }
};

window.addEventListener("keydown", playKeySynth, false);

//load drum samples
const kick = new Tone.Player({url: "https://s3.us-east-2.amazonaws.com/js-music-projects/drums/kick.wav"}).toMaster();
const snare = new Tone.Player({url: "https://s3.us-east-2.amazonaws.com/js-music-projects/drums/snare.wav"}).toMaster();
const rim = new Tone.Player({url: "https://s3.us-east-2.amazonaws.com/js-music-projects/drums/rim.wav"}).toMaster();
const hat1 = new Tone.Player({url: "https://s3.us-east-2.amazonaws.com/js-music-projects/drums/hihat1.wav"}).toMaster();
const hat2 = new Tone.Player({url: "https://s3.us-east-2.amazonaws.com/js-music-projects/drums/hihat2.wav"}).toMaster();
const shaker1 = new Tone.Player({url: "https://s3.us-east-2.amazonaws.com/js-music-projects/drums/shaker1.wav"}).toMaster();
const shaker2 = new Tone.Player({url: "https://s3.us-east-2.amazonaws.com/js-music-projects/drums/shaker2.wav"}).toMaster();

//load vox samples
const scrubs1 = new Tone.Player({url: "https://s3.us-east-2.amazonaws.com/js-music-projects/scrub+vocals/noscrubs1.mp3"}).toMaster();
const scrubs2 = new Tone.Player({url: "https://s3.us-east-2.amazonaws.com/js-music-projects/scrub+vocals/noscrubs2.mp3"}).toMaster();
const scrubs3 = new Tone.Player({url: "https://s3.us-east-2.amazonaws.com/js-music-projects/scrub+vocals/noscrubs3.mp3"}).toMaster();
const scrubs4 = new Tone.Player({url: "https://s3.us-east-2.amazonaws.com/js-music-projects/scrub+vocals/noscrubs4.mp3"}).toMaster();
const scrubs5 = new Tone.Player({url: "https://s3.us-east-2.amazonaws.com/js-music-projects/scrub+vocals/noscrubs5.mp3"}).toMaster();

//load chord samples
//NOTE: may need to turn up the gain on these; the compressor has already been turned up in Logic Pro
const chord1a = new Tone.Player({url: "https://s3.us-east-2.amazonaws.com/js-music-projects/chords/chord1a.mp3"}).toMaster();
const chord1b = new Tone.Player({url: "https://s3.us-east-2.amazonaws.com/js-music-projects/chords/chord1b.mp3"}).toMaster();
const chord2a = new Tone.Player({url: "https://s3.us-east-2.amazonaws.com/js-music-projects/chords/chord2a.mp3"}).toMaster();
const chord2b = new Tone.Player({url: "https://s3.us-east-2.amazonaws.com/js-music-projects/chords/chord2b.mp3"}).toMaster();
const chord2c = new Tone.Player({url: "https://s3.us-east-2.amazonaws.com/js-music-projects/chords/chord2c.mp3"}).toMaster();
const chord2d = new Tone.Player({url: "https://s3.us-east-2.amazonaws.com/js-music-projects/chords/chord2d.mp3"}).toMaster();
const chord3a = new Tone.Player({url: "https://s3.us-east-2.amazonaws.com/js-music-projects/chords/chord3a.mp3"}).toMaster();
const chord3b = new Tone.Player({url: "https://s3.us-east-2.amazonaws.com/js-music-projects/chords/chord3b.mp3"}).toMaster();

const playKeySampler = (e) => {

  //map keys to drum samples
  if (e.key == "`"){
    kick.start('+0.05');
  } else if (e.key == "1"){
    snare.start('+0.05');
  } else if (e.key == "2"){
    rim.start('+0.05');
  } else if (e.key == "3"){
    hat1.start('+0.05');
  } else if (e.key == "4"){
    hat2.start('+0.05');
  } else if (e.key == "5"){
    shaker1.start('+0.05');
  } else if (e.key == "6"){
    shaker2.start('+0.05');
  }

  //map keys to vox samples
  if (e.key == "8"){
    scrubs1.start('+0.05');
  } else if (e.key == "9"){
    scrubs2.start('+0.05');
  } else if (e.key == "0"){
    scrubs3.start('+0.05');
  } else if (e.key == "-"){
    scrubs4.start('+0.05');
  } else if (e.key == "="){
    scrubs5.start('+0.05');
  }

  //map keys to chord samples
  if (e.key == ","){
    chord1a.start('+0.05');
  } else if (e.key == "."){
    chord1b.start('+0.05');
  } else if (e.key == "/"){
    chord2a.start('+0.05');
  } else if (e.key == "'"){
    chord2b.start('+0.05');
  } else if (e.key == "["){
    chord2c.start('+0.05');
  } else if (e.key == "]"){
    chord2d.start('+0.05');
  } else if (e.key == "l"){
    chord3a.start('+0.05');
  } else if (e.key == ";"){
    chord3b.start('+0.05');
  }
};

window.addEventListener("keydown", playKeySampler, false);
