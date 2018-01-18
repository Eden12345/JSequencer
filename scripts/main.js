import Tone from "Tone";

document.addEventListener('DOMContentLoaded', () => {
  const testButton = document.getElementById('test-button');

  const synth = new Tone.Synth();

  const date = new Date();
  const time = date.getTime();

  synth.toMaster();


  testButton.addEventListener('mousedown', () => {
  	//instead of scheduling the synth immediately,
  	//try scheduling 50ms in the future to avoid performance-related pops
  	synth.triggerAttack('C4', '+0.05');
    synth.triggerRelease('+0.25');
  });
  // synth.triggerAttack("C4", time);
  // synth.triggerRelease(time + 0.25);

  // synth.triggerAttackRelease("C4", 0.5, time);
});
