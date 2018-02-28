import Tone from "Tone";

class Synthesizer {
  constructor() {
    this.output = new Tone.Synth({envelope: {attack  : 0.25}}).toMaster();
    this.noteHash = {
      sound1: 'G2',
      sound2: 'Bb2',
      sound3: 'C3',
      sound4: 'D3',
      sound5: 'F3',
      sound6: 'G3',
      sound7: 'Bb3',
      sound8: 'C4',
      sound9: 'D4',
      sound10: 'F4',
      sound11: 'G4'
    };
    this.playNote = this.playNote.bind(this);
  }

  playNote(soundKey) {
    synth.triggerAttack(this.noteHash[soundKey], '+0.05');
    synth.triggerRelease('+0.25');
  }
}
