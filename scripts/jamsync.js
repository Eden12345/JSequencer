// WARNING: The code in this file was written in a rush, never edited, and is therefore terrible

import Tone from "Tone";

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

// window.addEventListener("keydown", playKeySynth, false);

$('#jamsync-body').keydown(playKeySynth);

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
  } else if (k == 173 || k == 189){
    scrubs4.start('+0.05');
    changeInstrumentColor("vox");
    highlightKey(173);
  } else if (k == 61 || k == 187){
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

// window.addEventListener("keydown", playKeySampler, false);

$('#jamsync-body').keydown(playKeySampler);

const simulateKeyPress = (keyCode) => {
  jQuery.event.trigger({ type : 'keydown', which : keyCode });
  // jQuery.event.trigger({ type : 'keyup', which : keyCode });
};



// DRUM TIMEOUTS START

let drumTimeout1;
let drumTimeout2;
let drumTimeout3;
let drumTimeout4;
let drumTimeout5;
let drumTimeout6;
let drumTimeout7;
let drumTimeout8;
let drumTimeout9;
let drumTimeout10;
let drumTimeout11;
let drumTimeout12;
let drumTimeout13;
let drumTimeout14;
let drumTimeout15;
let drumTimeout16;
let drumTimeout17;
let drumTimeout18;
let drumTimeout19;
let drumTimeout20;
let drumTimeout21;
let drumTimeout22;
let drumTimeout23;
let drumTimeout24;
let drumTimeout25;
let drumTimeout26;
let drumTimeout27;
let drumTimeout28;
let drumTimeout29;
let drumTimeout30;
let drumTimeout31;
let drumTimeout32;
let drumTimeout33;
let drumTimeout34;
let drumTimeout35;
let drumTimeout36;
let drumTimeout37;
let drumTimeout38;
let drumTimeout39;
let drumTimeout40;
let drumTimeout41;
let drumTimeout42;
let drumTimeout43;
let drumTimeout44;
let drumTimeout45;
let drumTimeout46;
let drumTimeout47;
let drumTimeout48;
let drumTimeout49;
let drumTimeout50;
let drumTimeout51;
let drumTimeout52;
let drumTimeout53;
let drumTimeout54;
let drumTimeout55;
let drumTimeout56;
let drumTimeout57;
let drumTimeout58;
let drumTimeout59;

const playDrumSequence = () => {
  drumTimeout1 = setTimeout(() => simulateKeyPress(192), 0);
  drumTimeout2 = setTimeout(() => simulateKeyPress(51), 0);
  drumTimeout3 = setTimeout(() => simulateKeyPress(51), 875);
  drumTimeout4 = setTimeout(() => simulateKeyPress(49), 1000);
  drumTimeout5 = setTimeout(() => simulateKeyPress(51), 1000);
  drumTimeout6 = setTimeout(() => simulateKeyPress(51), 1500);
  drumTimeout7 = setTimeout(() => simulateKeyPress(51), 1875);

  drumTimeout8 = setTimeout(() => simulateKeyPress(192), 2000);
  drumTimeout9 = setTimeout(() => simulateKeyPress(51), 2500);
  drumTimeout10 = setTimeout(() => simulateKeyPress(49), 3000);
  drumTimeout11 = setTimeout(() => simulateKeyPress(51), 3000);
  drumTimeout12 = setTimeout(() => simulateKeyPress(51), 3500);
  drumTimeout13 = setTimeout(() => simulateKeyPress(49), 3875);

  drumTimeout14 = setTimeout(() => simulateKeyPress(192), 4000);
  drumTimeout15 = setTimeout(() => simulateKeyPress(51), 4000);
  drumTimeout16 = setTimeout(() => simulateKeyPress(192), 4250);
  drumTimeout17 = setTimeout(() => simulateKeyPress(51), 4500);
  drumTimeout18 = setTimeout(() => simulateKeyPress(51), 4875);
  drumTimeout19 = setTimeout(() => simulateKeyPress(49), 5000);
  drumTimeout20 = setTimeout(() => simulateKeyPress(51), 5000);
  drumTimeout21 = setTimeout(() => simulateKeyPress(51), 5500);

  drumTimeout22 = setTimeout(() => simulateKeyPress(192), 5875);
  drumTimeout23 = setTimeout(() => simulateKeyPress(192), 6000);
  drumTimeout24 = setTimeout(() => simulateKeyPress(51), 6000);
  drumTimeout25 = setTimeout(() => simulateKeyPress(51), 6500);
  drumTimeout26 = setTimeout(() => simulateKeyPress(49), 7000);
  drumTimeout27 = setTimeout(() => simulateKeyPress(51), 7000);
  drumTimeout28 = setTimeout(() => simulateKeyPress(51), 7500);
  drumTimeout29 = setTimeout(() => simulateKeyPress(49), 7875);

  drumTimeout30 = setTimeout(() => simulateKeyPress(192), 8000);
  drumTimeout31 = setTimeout(() => simulateKeyPress(51), 8000);
  drumTimeout32 = setTimeout(() => simulateKeyPress(51), 8500);
  drumTimeout33 = setTimeout(() => simulateKeyPress(51), 8875);
  drumTimeout34 = setTimeout(() => simulateKeyPress(49), 9000);
  drumTimeout35 = setTimeout(() => simulateKeyPress(51), 9000);
  drumTimeout36 = setTimeout(() => simulateKeyPress(51), 9500);
  drumTimeout37 = setTimeout(() => simulateKeyPress(51), 9875);

  drumTimeout38 = setTimeout(() => simulateKeyPress(192), 10000);
  drumTimeout39 = setTimeout(() => simulateKeyPress(51), 10500);
  drumTimeout40 = setTimeout(() => simulateKeyPress(49), 11000);
  drumTimeout41 = setTimeout(() => simulateKeyPress(51), 11000);
  drumTimeout42 = setTimeout(() => simulateKeyPress(51), 11500);
  drumTimeout43 = setTimeout(() => simulateKeyPress(49), 11875);

  drumTimeout44 = setTimeout(() => simulateKeyPress(192), 12000);
  drumTimeout45 = setTimeout(() => simulateKeyPress(51), 12000);
  drumTimeout46 = setTimeout(() => simulateKeyPress(192), 12250);
  drumTimeout47 = setTimeout(() => simulateKeyPress(51), 12500);
  drumTimeout48 = setTimeout(() => simulateKeyPress(51), 12875);
  drumTimeout49 = setTimeout(() => simulateKeyPress(49), 13000);
  drumTimeout50 = setTimeout(() => simulateKeyPress(51), 13000);
  drumTimeout51 = setTimeout(() => simulateKeyPress(51), 13500);

  drumTimeout52 = setTimeout(() => simulateKeyPress(192), 13875);
  drumTimeout53 = setTimeout(() => simulateKeyPress(192), 14000);
  drumTimeout54 = setTimeout(() => simulateKeyPress(51), 14000);
  drumTimeout55 = setTimeout(() => simulateKeyPress(51), 14500);
  drumTimeout56 = setTimeout(() => simulateKeyPress(49), 15000);
  drumTimeout57 = setTimeout(() => simulateKeyPress(51), 15000);
  drumTimeout58 = setTimeout(() => simulateKeyPress(51), 15500);
  drumTimeout59 = setTimeout(() => simulateKeyPress(49), 15875);
};

const clearDrumTimeouts = () => {
  window.clearInterval(drumInterval);


  window.clearTimeout(drumTimeout1);
  window.clearTimeout(drumTimeout2);
  window.clearTimeout(drumTimeout3);
  window.clearTimeout(drumTimeout4);
  window.clearTimeout(drumTimeout5);
  window.clearTimeout(drumTimeout6);
  window.clearTimeout(drumTimeout7);

  window.clearTimeout(drumTimeout8);
  window.clearTimeout(drumTimeout9);
  window.clearTimeout(drumTimeout10);
  window.clearTimeout(drumTimeout11);
  window.clearTimeout(drumTimeout12);
  window.clearTimeout(drumTimeout13);

  window.clearTimeout(drumTimeout14);
  window.clearTimeout(drumTimeout15);
  window.clearTimeout(drumTimeout16);
  window.clearTimeout(drumTimeout17);
  window.clearTimeout(drumTimeout18);
  window.clearTimeout(drumTimeout19);
  window.clearTimeout(drumTimeout20);
  window.clearTimeout(drumTimeout21);

  window.clearTimeout(drumTimeout22);
  window.clearTimeout(drumTimeout23);
  window.clearTimeout(drumTimeout24);
  window.clearTimeout(drumTimeout25);
  window.clearTimeout(drumTimeout26);
  window.clearTimeout(drumTimeout27);
  window.clearTimeout(drumTimeout28);
  window.clearTimeout(drumTimeout29);

  window.clearTimeout(drumTimeout30);
  window.clearTimeout(drumTimeout31);
  window.clearTimeout(drumTimeout32);
  window.clearTimeout(drumTimeout33);
  window.clearTimeout(drumTimeout34);
  window.clearTimeout(drumTimeout35);
  window.clearTimeout(drumTimeout36);
  window.clearTimeout(drumTimeout37);

  window.clearTimeout(drumTimeout38);
  window.clearTimeout(drumTimeout39);
  window.clearTimeout(drumTimeout40);
  window.clearTimeout(drumTimeout41);
  window.clearTimeout(drumTimeout42);
  window.clearTimeout(drumTimeout43);

  window.clearTimeout(drumTimeout44);
  window.clearTimeout(drumTimeout45);
  window.clearTimeout(drumTimeout46);
  window.clearTimeout(drumTimeout47);
  window.clearTimeout(drumTimeout48);
  window.clearTimeout(drumTimeout49);
  window.clearTimeout(drumTimeout50);
  window.clearTimeout(drumTimeout51);

  window.clearTimeout(drumTimeout52);
  window.clearTimeout(drumTimeout53);
  window.clearTimeout(drumTimeout54);
  window.clearTimeout(drumTimeout55);
  window.clearTimeout(drumTimeout56);
  window.clearTimeout(drumTimeout57);
  window.clearTimeout(drumTimeout58);
  window.clearTimeout(drumTimeout59);
};



// SYNTH TIMEOUTS START

let synthTimeout1;
let synthTimeout2;
let synthTimeout3;
let synthTimeout4;
let synthTimeout5;
let synthTimeout6;
let synthTimeout7;
let synthTimeout8;
let synthTimeout9;
let synthTimeout10;
let synthTimeout11;
let synthTimeout12;
let synthTimeout13;
let synthTimeout14;
let synthTimeout15;
let synthTimeout16;
let synthTimeout17;
let synthTimeout18;
let synthTimeout19;
let synthTimeout20;
let synthTimeout21;
let synthTimeout22;
let synthTimeout23;
let synthTimeout24;
let synthTimeout25;
let synthTimeout26;
let synthTimeout27;

const playSynthSequence = () => {
  //bass keys: 65, 83, 68, 70, 71, 72

  //descending keys: 66, 86, 67, 88, 90, 72

  synthTimeout1 = setTimeout(() => simulateKeyPress(70), 0);
  synthTimeout2 = setTimeout(() => simulateKeyPress(66), 500);
  synthTimeout3 = setTimeout(() => simulateKeyPress(86), 1500);

  synthTimeout4 = setTimeout(() => simulateKeyPress(83), 1825);
  synthTimeout5 = setTimeout(() => simulateKeyPress(67), 2500);
  synthTimeout6 = setTimeout(() => simulateKeyPress(88), 3500);

  synthTimeout7 = setTimeout(() => simulateKeyPress(71), 4000);
  synthTimeout8 = setTimeout(() => simulateKeyPress(86), 4500);
  synthTimeout9 = setTimeout(() => simulateKeyPress(67), 5500);

  synthTimeout10 = setTimeout(() => simulateKeyPress(68), 5825);
  synthTimeout11 = setTimeout(() => simulateKeyPress(68), 6000);
  synthTimeout12 = setTimeout(() => simulateKeyPress(88), 6500);
  synthTimeout13 = setTimeout(() => simulateKeyPress(90), 7500);

  synthTimeout14 = setTimeout(() => simulateKeyPress(70), 8000);
  synthTimeout15 = setTimeout(() => simulateKeyPress(71), 8325);
  synthTimeout16 = setTimeout(() => simulateKeyPress(66), 8500);
  synthTimeout17 = setTimeout(() => simulateKeyPress(67), 9500);

  synthTimeout18 = setTimeout(() => simulateKeyPress(83), 10000);
  synthTimeout19 = setTimeout(() => simulateKeyPress(86), 10500);
  synthTimeout20 = setTimeout(() => simulateKeyPress(88), 11500);

  synthTimeout21 = setTimeout(() => simulateKeyPress(71), 11825);
  synthTimeout22 = setTimeout(() => simulateKeyPress(71), 12000);
  synthTimeout23 = setTimeout(() => simulateKeyPress(90), 12500);
  synthTimeout24 = setTimeout(() => simulateKeyPress(72), 13500);

  synthTimeout25 = setTimeout(() => simulateKeyPress(68), 13825);
  synthTimeout26 = setTimeout(() => simulateKeyPress(90), 14500);
  synthTimeout27 = setTimeout(() => simulateKeyPress(88), 15500);
};

const clearSynthTimeouts = () => {
  window.clearInterval(synthInterval);


  window.clearTimeout(synthTimeout1);
  window.clearTimeout(synthTimeout2);
  window.clearTimeout(synthTimeout3);

  window.clearTimeout(synthTimeout4);
  window.clearTimeout(synthTimeout5);
  window.clearTimeout(synthTimeout6);

  window.clearTimeout(synthTimeout7);
  window.clearTimeout(synthTimeout8);
  window.clearTimeout(synthTimeout9);

  window.clearTimeout(synthTimeout10);
  window.clearTimeout(synthTimeout11);
  window.clearTimeout(synthTimeout12);
  window.clearTimeout(synthTimeout13);

  window.clearTimeout(synthTimeout14);
  window.clearTimeout(synthTimeout15);
  window.clearTimeout(synthTimeout16);
  window.clearTimeout(synthTimeout17);

  window.clearTimeout(synthTimeout18);
  window.clearTimeout(synthTimeout19);
  window.clearTimeout(synthTimeout20);

  window.clearTimeout(synthTimeout21);
  window.clearTimeout(synthTimeout22);
  window.clearTimeout(synthTimeout23);
  window.clearTimeout(synthTimeout24);

  window.clearTimeout(synthTimeout25);
  window.clearTimeout(synthTimeout26);
  window.clearTimeout(synthTimeout27);
};



// CHORD TIMEOUTS START

let chordTimeout1;
let chordTimeout2;
let chordTimeout3;
let chordTimeout4;
let chordTimeout5;
let chordTimeout6;
let chordTimeout7;
let chordTimeout8;
let chordTimeout9;
let chordTimeout10;
let chordTimeout11;
let chordTimeout12;
let chordTimeout13;
let chordTimeout14;
let chordTimeout15;
let chordTimeout16;

const playChordSequence = () => {
  chordTimeout1 = setTimeout(() => simulateKeyPress(188), 0);
  chordTimeout2 = setTimeout(() => simulateKeyPress(76), 750);
  chordTimeout3 = setTimeout(() => simulateKeyPress(188), 1500);

  chordTimeout4 = setTimeout(() => simulateKeyPress(190), 2000);
  chordTimeout5 = setTimeout(() => simulateKeyPress(190), 3500);

  chordTimeout6 = setTimeout(() => simulateKeyPress(191), 4000);
  chordTimeout7 = setTimeout(() => simulateKeyPress(191), 5500);

  chordTimeout8 = setTimeout(() => simulateKeyPress(222), 6000);

  chordTimeout9 = setTimeout(() => simulateKeyPress(188), 8000);
  chordTimeout10 = setTimeout(() => simulateKeyPress(76), 8750);

  chordTimeout11 = setTimeout(() => simulateKeyPress(186), 10000);
  chordTimeout12 = setTimeout(() => simulateKeyPress(186), 11500);

  chordTimeout13 = setTimeout(() => simulateKeyPress(219), 12000);
  chordTimeout14 = setTimeout(() => simulateKeyPress(219), 13500);

  chordTimeout15 = setTimeout(() => simulateKeyPress(221), 14000);
  chordTimeout16 = setTimeout(() => simulateKeyPress(221), 15000);
};

const clearChordTimeouts = () => {
  window.clearInterval(chordInterval);


  window.clearTimeout(chordTimeout1);
  window.clearTimeout(chordTimeout2);
  window.clearTimeout(chordTimeout3);

  window.clearTimeout(chordTimeout4);
  window.clearTimeout(chordTimeout5);

  window.clearTimeout(chordTimeout6);
  window.clearTimeout(chordTimeout7);

  window.clearTimeout(chordTimeout8);

  window.clearTimeout(chordTimeout9);
  window.clearTimeout(chordTimeout10);

  window.clearTimeout(chordTimeout11);
  window.clearTimeout(chordTimeout12);

  window.clearTimeout(chordTimeout13);
  window.clearTimeout(chordTimeout14);

  window.clearTimeout(chordTimeout15);
  window.clearTimeout(chordTimeout16);
};



// VOX TIMEOUTS START

let voxTimeout1;
let voxTimeout2;
let voxTimeout3;
let voxTimeout4;
let voxTimeout5;
let voxTimeout6;
let voxTimeout7;
let voxTimeout8;
let voxTimeout9;
let voxTimeout10;

const playVoxSequence = () => {
  voxTimeout1 = setTimeout(() => simulateKeyPress(56), 0);

  voxTimeout2 = setTimeout(() => simulateKeyPress(48), 4000);

  voxTimeout3 = setTimeout(() => simulateKeyPress(48), 5500);
  voxTimeout4 = setTimeout(() => simulateKeyPress(48), 6000);

  voxTimeout5 = setTimeout(() => simulateKeyPress(56), 8000);

  voxTimeout6 = setTimeout(() => simulateKeyPress(48), 12000);

  voxTimeout7 = setTimeout(() => simulateKeyPress(48), 13500);
  voxTimeout8 = setTimeout(() => simulateKeyPress(48), 14000);
  voxTimeout9 = setTimeout(() => simulateKeyPress(173), 14000);

  voxTimeout10 = setTimeout(() => simulateKeyPress(57), 15050);
};

const clearVoxTimeouts = () => {
  window.clearInterval(voxInterval);


  window.clearTimeout(voxTimeout1);

  window.clearTimeout(voxTimeout2);

  window.clearTimeout(voxTimeout3);
  window.clearTimeout(voxTimeout4);

  window.clearTimeout(voxTimeout5);

  window.clearTimeout(voxTimeout6);

  window.clearTimeout(voxTimeout7);
  window.clearTimeout(voxTimeout8);
  window.clearTimeout(voxTimeout9);

  window.clearTimeout(voxTimeout10);
};



let playing = false;

let drumInterval;
let synthInterval;
let chordInterval;
let voxInterval;

const playSequence = () => {
  playDrumSequence();
  playSynthSequence();
  playChordSequence();
  playVoxSequence();

  drumInterval = setInterval(playDrumSequence, 16000);
  synthInterval = setInterval(playSynthSequence, 16000);
  chordInterval = setInterval(playChordSequence, 16000);
  voxInterval = setInterval(playVoxSequence, 16000);

  $(".stop-drums").removeClass("hidden");
  $(".stop-synth").removeClass("hidden");
  $(".stop-chords").removeClass("hidden");
  $(".stop-vox").removeClass("hidden");
};

// const clearAllTimeouts = () => {
//   clearDrumTimeouts();
//   clearSynthTimeouts();
//   clearChordTimeouts();
//   clearVoxTimeouts();
// };

// The intervals are taken care of in the above function

// const clearAllIntervals = () => {
//   window.clearInterval(drumInterval);
//   window.clearInterval(synthInterval);
//   window.clearInterval(chordInterval);
//   window.clearInterval(voxInterval);
// };

const checkButtons = () => {
  if (($(".stop-drums").hasClass("hidden") && $(".stop-synth").hasClass("hidden")) &&
      ($(".stop-chords").hasClass("hidden") && $(".stop-vox").hasClass("hidden"))) {
    playing = false;
    $(".play").text("Play Demo Sequence");
  }
};

const stopDrums = () => {
  clearDrumTimeouts();
  $(".stop-drums").addClass("hidden");
  checkButtons();
};

const stopSynth = () => {
  clearSynthTimeouts();
  $(".stop-synth").addClass("hidden");
  checkButtons();
};

const stopChords = () => {
  clearChordTimeouts();
  $(".stop-chords").addClass("hidden");
  checkButtons();
};

const stopVox = () => {
  clearVoxTimeouts();
  $(".stop-vox").addClass("hidden");
  checkButtons();
};

const stopAll = () => {
  stopDrums();
  stopSynth();
  stopChords();
  stopVox();
};

const changeButton = () => {
  if (playing) {
    stopAll();
    playing = false;
    $(".play").text("play demo sequence");
  } else {
    playSequence();
    playing = true;
    $(".play").text("stop playing sequence");
  }
};

$(".play").click(changeButton);

$(".stop-drums").click(stopDrums);
$(".stop-synth").click(stopSynth);
$(".stop-chords").click(stopChords);
$(".stop-vox").click(stopVox);
