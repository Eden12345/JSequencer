import Tone from "Tone";

class Synthesizer {
  constructor() {
    this.output = new Tone.Synth({envelope: {attack  : 0.25}}).toMaster();
    this.noteHash = {

    };
    this.playNote = this.playNote.bind(this);
  }

  playNote(soundKey) {

  }
}
