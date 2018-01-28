import Tone from "Tone";

const playing = {playing: false};
let interval;

const colors = ["yellow", "green", "blue", "purple"];

const genRandInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const genNewColor = (id) => {
  let randInt = genRandInt(4);

  if ($(`#${id}`).hasClass(`${colors[randInt]}`)) {
    return genNewColor(id);
  } else {
    return colors[randInt];
  }
};

const changeInstrumentColor = (id) => {
  const newColor = genNewColor(id);

  $(`#${id}`).removeClass();
  $(`#${id}`).addClass(`instrument ${newColor}`);
};

const highlightKey = (id) => {
  $(`#${id}`).addClass("opaque-key");
  setTimeout(() => {$(`#${id}`).removeClass("opaque-key");}, 250);
};

// const unHightlightKey = (e) => {
//   $(`#${e.which}`).removeClass("opaque-key");
// };
//
// window.addEventListener("keyup", unHightlightKey, false);

//load synth
const synth = new Tone.Synth({envelope: {attack  : 0.25}}).toMaster();

//map keys to synth
const playKeySynth = (e) => {
  e.preventDefault();

  const k = e.which;

  if (k == 65){
    synth.triggerAttack('G2', '+0.05');
    synth.triggerRelease('+0.25');
    changeInstrumentColor("synth");
    highlightKey(65);
  } else if (k == 83){
    synth.triggerAttack('Bb2', '+0.05');
    synth.triggerRelease('+0.25');
    changeInstrumentColor("synth");
    highlightKey(83);
  } else if (k == 68){
    synth.triggerAttack('C3', '+0.05');
    synth.triggerRelease('+0.25');
    changeInstrumentColor("synth");
    highlightKey(68);
  } else if (k == 70){
    synth.triggerAttack('D3', '+0.05');
    synth.triggerRelease('+0.25');
    changeInstrumentColor("synth");
    highlightKey(70);
  } else if (k == 71){
    synth.triggerAttack('F3', '+0.05');
    synth.triggerRelease('+0.25');
    changeInstrumentColor("synth");
    highlightKey(71);
  } else if (k == 72){
    synth.triggerAttack('G3', '+0.05');
    synth.triggerRelease('+0.25');
    changeInstrumentColor("synth");
    highlightKey(72);
  } else if (k == 90){
    synth.triggerAttack('Bb3', '+0.05');
    synth.triggerRelease('+0.25');
    changeInstrumentColor("synth");
    highlightKey(90);
  } else if (k == 88){
    synth.triggerAttack('C4', '+0.05');
    synth.triggerRelease('+0.25');
    changeInstrumentColor("synth");
    highlightKey(88);
  } else if (k == 67){
    synth.triggerAttack('D4', '+0.05');
    synth.triggerRelease('+0.25');
    changeInstrumentColor("synth");
    highlightKey(67);
  } else if (k == 86){
    synth.triggerAttack('F4', '+0.05');
    synth.triggerRelease('+0.25');
    changeInstrumentColor("synth");
    highlightKey(86);
  } else if (k == 66){
    synth.triggerAttack('G4', '+0.05');
    synth.triggerRelease('+0.25');
    changeInstrumentColor("synth");
    highlightKey(66);
  }
};

window.addEventListener("keydown", playKeySynth, false);

$('body').keydown(playKeySynth);

//load drum samples
const kick = new Tone.Player({url: "samples/drums/kick.wav"}).toMaster();
const snare = new Tone.Player({url: "samples/drums/snare.wav"});
snare.volume.value = -3;
snare.toMaster();
const rim = new Tone.Player({url: "samples/drums/rim.wav"});
rim.volume.value = -6;
rim.toMaster();
const hat1 = new Tone.Player({url: "samples/drums/hihat1.wav"}).toMaster();
const hat2 = new Tone.Player({url: "samples/drums/hihat2.wav"});
hat2.volume.value = -4;
hat2.toMaster();
const shaker1 = new Tone.Player({url: "samples/drums/shaker1.wav"});
shaker1.volume.value = -8;
shaker1.toMaster();
const shaker2 = new Tone.Player({url: "samples/drums/shaker2.wav"});
shaker2.volume.value = -8;
shaker2.toMaster();

//load vox samples
const scrubs1 = new Tone.Player({url: "samples/scrubs/noscrubs1.mp3"}).toMaster();
const scrubs2 = new Tone.Player({url: "samples/scrubs/noscrubs2.mp3"}).toMaster();
const scrubs3 = new Tone.Player({url: "samples/scrubs/noscrubs3.mp3"}).toMaster();
const scrubs4 = new Tone.Player({url: "samples/scrubs/noscrubs4.mp3"}).toMaster();
const scrubs5 = new Tone.Player({url: "samples/scrubs/noscrubs5.mp3"}).toMaster();

//load chord samples
const chord1a = new Tone.Player({url: "samples/chords/chord1a.mp3"}).toMaster();
const chord1b = new Tone.Player({url: "samples/chords/chord1b.mp3"}).toMaster();
const chord2a = new Tone.Player({url: "samples/chords/chord2a.mp3"}).toMaster();
const chord2b = new Tone.Player({url: "samples/chords/chord2b.mp3"}).toMaster();
const chord2c = new Tone.Player({url: "samples/chords/chord2c.mp3"}).toMaster();
const chord2d = new Tone.Player({url: "samples/chords/chord2d.mp3"}).toMaster();
const chord3a = new Tone.Player({url: "samples/chords/chord3a.mp3"}).toMaster();
const chord3b = new Tone.Player({url: "samples/chords/chord3b.mp3"}).toMaster();

const playKeySampler = (e) => {
  e.preventDefault();

  const k = e.which;

  if (k == 192){
    kick.start('+0.05');
    changeInstrumentColor("drums");
    highlightKey(192);
  } else if (k == 49){
    snare.start('+0.05');
    changeInstrumentColor("drums");
    highlightKey(49);
  } else if (k == 50){
    rim.start('+0.05');
    changeInstrumentColor("drums");
    highlightKey(50);
  } else if (k == 51){
    hat1.start('+0.05');
    changeInstrumentColor("drums");
    highlightKey(51);
  } else if (k == 52){
    hat2.start('+0.05');
    changeInstrumentColor("drums");
    highlightKey(52);
  } else if (k == 53){
    shaker1.start('+0.05');
    changeInstrumentColor("drums");
    highlightKey(53);
  } else if (k == 54){
    shaker2.start('+0.05');
    changeInstrumentColor("drums");
    highlightKey(54);
  }

  //map keys to vox samples
  if (k == 56){
    scrubs1.start('+0.05');
    changeInstrumentColor("vox");
    highlightKey(56);
  } else if (k == 57){
    scrubs2.start('+0.05');
    changeInstrumentColor("vox");
    highlightKey(57);
  } else if (k == 48){
    scrubs3.start('+0.05');
    changeInstrumentColor("vox");
    highlightKey(48);
  } else if (k == 173){
    scrubs4.start('+0.05');
    changeInstrumentColor("vox");
    highlightKey(173);
  } else if (k == 61){
    scrubs5.start('+0.05');
    changeInstrumentColor("vox");
    highlightKey(61);
  }

  //map keys to chord samples
  if (k == 188){
    chord1a.start('+0.05');
    changeInstrumentColor("chords");
    highlightKey(188);
  } else if (k == 190){
    chord1b.start('+0.05');
    changeInstrumentColor("chords");
    highlightKey(190);
  } else if (k == 191){
    chord2a.start('+0.05');
    changeInstrumentColor("chords");
    highlightKey(191);
  } else if (k == 222){
    chord2b.start('+0.05');
    changeInstrumentColor("chords");
    highlightKey(222);
  } else if (k == 219){
    chord2c.start('+0.05');
    changeInstrumentColor("chords");
    highlightKey(219);
  } else if (k == 221){
    chord2d.start('+0.05');
    changeInstrumentColor("chords");
    highlightKey(221);
  } else if (k == 76){
    chord3a.start('+0.05');
    changeInstrumentColor("chords");
    highlightKey(76);
  } else if (k == 186 || k == 59){
    chord3b.start('+0.05');
    changeInstrumentColor("chords");
    highlightKey(186);
  }
};

window.addEventListener("keydown", playKeySampler, false);

$('body').keydown(playKeySampler);

const simulateKeyPress = (keyCode) => {
  jQuery.event.trigger({ type : 'keydown', which : keyCode });
  // jQuery.event.trigger({ type : 'keyup', which : keyCode });
};

const playDrumSequence = () => {
  simulateKeyPress(192);
  simulateKeyPress(51);
  // setTimeout(() => simulateKeyPress(51), 500);
  setTimeout(() => simulateKeyPress(51), 875);
  setTimeout(() => simulateKeyPress(49), 1000);
  setTimeout(() => simulateKeyPress(51), 1000);
  setTimeout(() => simulateKeyPress(51), 1500);
  setTimeout(() => simulateKeyPress(51), 1875);
  // setTimeout(() => simulateKeyPress(49), 1875);

  setTimeout(() => simulateKeyPress(192), 2000);
  // setTimeout(() => simulateKeyPress(51), 2000);
  setTimeout(() => simulateKeyPress(51), 2500);
  setTimeout(() => simulateKeyPress(49), 3000);
  setTimeout(() => simulateKeyPress(51), 3000);
  setTimeout(() => simulateKeyPress(51), 3500);
  setTimeout(() => simulateKeyPress(49), 3875);

  setTimeout(() => simulateKeyPress(192), 4000);
  setTimeout(() => simulateKeyPress(51), 4000);
  setTimeout(() => simulateKeyPress(192), 4250);
  setTimeout(() => simulateKeyPress(51), 4500);
  setTimeout(() => simulateKeyPress(51), 4875);
  setTimeout(() => simulateKeyPress(49), 5000);
  setTimeout(() => simulateKeyPress(51), 5000);
  setTimeout(() => simulateKeyPress(51), 5500);

  setTimeout(() => simulateKeyPress(192), 5875);
  setTimeout(() => simulateKeyPress(192), 6000);
  setTimeout(() => simulateKeyPress(51), 6000);
  setTimeout(() => simulateKeyPress(51), 6500);
  setTimeout(() => simulateKeyPress(49), 7000);
  setTimeout(() => simulateKeyPress(51), 7000);
  setTimeout(() => simulateKeyPress(51), 7500);
  setTimeout(() => simulateKeyPress(49), 7875);

  setTimeout(() => simulateKeyPress(192), 8000);
  setTimeout(() => simulateKeyPress(51), 8000);
  setTimeout(() => simulateKeyPress(51), 8500);
  setTimeout(() => simulateKeyPress(51), 8875);
  setTimeout(() => simulateKeyPress(49), 9000);
  setTimeout(() => simulateKeyPress(51), 9000);
  setTimeout(() => simulateKeyPress(51), 9500);
  setTimeout(() => simulateKeyPress(51), 9875);

  setTimeout(() => simulateKeyPress(192), 10000);
  setTimeout(() => simulateKeyPress(51), 10500);
  setTimeout(() => simulateKeyPress(49), 11000);
  setTimeout(() => simulateKeyPress(51), 11000);
  setTimeout(() => simulateKeyPress(51), 11500);
  setTimeout(() => simulateKeyPress(49), 11875);

  setTimeout(() => simulateKeyPress(192), 12000);
  setTimeout(() => simulateKeyPress(51), 12000);
  setTimeout(() => simulateKeyPress(192), 12250);
  setTimeout(() => simulateKeyPress(51), 12500);
  setTimeout(() => simulateKeyPress(51), 12875);
  setTimeout(() => simulateKeyPress(49), 13000);
  setTimeout(() => simulateKeyPress(51), 13000);
  setTimeout(() => simulateKeyPress(51), 13500);

  setTimeout(() => simulateKeyPress(192), 13875);
  setTimeout(() => simulateKeyPress(192), 14000);
  setTimeout(() => simulateKeyPress(51), 14000);
  setTimeout(() => simulateKeyPress(51), 14500);
  setTimeout(() => simulateKeyPress(49), 15000);
  setTimeout(() => simulateKeyPress(51), 15000);
  setTimeout(() => simulateKeyPress(51), 15500);
  setTimeout(() => simulateKeyPress(49), 15875);
};

const playSynthSequence = () => {
  //bass keys: 65, 83, 68, 70, 71, 72

  //descending keys: 66, 86, 67, 88, 90, 72

  simulateKeyPress(70);
  setTimeout(() => simulateKeyPress(66), 500);
  setTimeout(() => simulateKeyPress(86), 1500);

  setTimeout(() => simulateKeyPress(83), 1825);
  setTimeout(() => simulateKeyPress(67), 2500);
  setTimeout(() => simulateKeyPress(88), 3500);

  setTimeout(() => simulateKeyPress(71), 4000);
  setTimeout(() => simulateKeyPress(86), 4500);
  setTimeout(() => simulateKeyPress(67), 5500);

  setTimeout(() => simulateKeyPress(68), 5825);
  setTimeout(() => simulateKeyPress(68), 6000);
  setTimeout(() => simulateKeyPress(88), 6500);
  setTimeout(() => simulateKeyPress(90), 7500);


  setTimeout(() => simulateKeyPress(70), 8000);
  setTimeout(() => simulateKeyPress(71), 8325);
  setTimeout(() => simulateKeyPress(66), 8500);
  setTimeout(() => simulateKeyPress(86), 9500);

  setTimeout(() => simulateKeyPress(83), 10000);
  setTimeout(() => simulateKeyPress(67), 10500);
  setTimeout(() => simulateKeyPress(88), 11500);

  setTimeout(() => simulateKeyPress(71), 11825);
  setTimeout(() => simulateKeyPress(71), 12000);
  setTimeout(() => simulateKeyPress(90), 12500);
  setTimeout(() => simulateKeyPress(72), 13500);

  setTimeout(() => simulateKeyPress(68), 13825);
  setTimeout(() => simulateKeyPress(90), 14500);
  setTimeout(() => simulateKeyPress(88), 15500);
};

const playChordSequence = () => {
  simulateKeyPress(188);
  setTimeout(() => simulateKeyPress(76), 750);
  setTimeout(() => simulateKeyPress(188), 1500);

  setTimeout(() => simulateKeyPress(190), 2000);
  setTimeout(() => simulateKeyPress(190), 3500);

  setTimeout(() => simulateKeyPress(191), 4000);
  setTimeout(() => simulateKeyPress(191), 5500);

  setTimeout(() => simulateKeyPress(222), 6000);


  setTimeout(() => simulateKeyPress(188), 8000);
  setTimeout(() => simulateKeyPress(76), 8750);

  setTimeout(() => simulateKeyPress(186), 10000);
  setTimeout(() => simulateKeyPress(186), 11500);

  setTimeout(() => simulateKeyPress(219), 12000);
  setTimeout(() => simulateKeyPress(219), 13500);

  setTimeout(() => simulateKeyPress(221), 14000);
  setTimeout(() => simulateKeyPress(221), 15000);
};

const playVoxSequence = () => {
  simulateKeyPress(56);

  setTimeout(() => simulateKeyPress(48), 4000);

  setTimeout(() => simulateKeyPress(48), 5500);
  setTimeout(() => simulateKeyPress(48), 6000);
  // setTimeout(() => simulateKeyPress(173), 6000);

  setTimeout(() => simulateKeyPress(56), 8000);

  setTimeout(() => simulateKeyPress(48), 12000);

  setTimeout(() => simulateKeyPress(48), 13500);
  setTimeout(() => simulateKeyPress(48), 14000);
  setTimeout(() => simulateKeyPress(173), 14000);

  setTimeout(() => simulateKeyPress(57), 15050);
};

const playSequence = () => {
  playDrumSequence();
  playSynthSequence();
  playChordSequence();
  playVoxSequence();
};

const changeButton = () => {
  if (playing[playing]) {
    window.clearInterval(interval);
    playing[playing] = false;
    $("button").text("Play Example Sequence");
  } else {
    playSequence();
    interval = setInterval(playSequence, 16000);
    playing[playing] = true;
    $("button").text("Stop at End of Loop");
  }
};

$("button").click(changeButton);
// $("button").click(playSequence);
