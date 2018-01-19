import Tone from "Tone";

document.addEventListener('DOMContentLoaded', () => {
  const testButton1 = document.getElementById('test-button-1');

  const synth = new Tone.Synth({envelope: {attack  : 0.25}});

  const date = new Date();
  const time = date.getTime();

  synth.toMaster();

  const playKeySynth = (e) => {
    if (e.key == "a"){
        console.log("You pressed a!");
        synth.triggerAttack('C5', '+0.05');
        synth.triggerRelease('+0.25');
    }
  };

  window.addEventListener("keyup", playKeySynth, false);

  testButton1.addEventListener('mousedown', () => {
  	//instead of scheduling the synth immediately,
  	//try scheduling 50ms in the future to avoid performance-related pops

  	synth.triggerAttack('C4', '+0.05');
    synth.triggerRelease('+0.25');
  });
  // synth.triggerAttack("C4", time);
  // synth.triggerRelease(time + 0.25);

  // synth.triggerAttackRelease("C4", 0.5, time);
});
