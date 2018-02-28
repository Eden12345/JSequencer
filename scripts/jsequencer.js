import Tone from "Tone";

class Synthesizer {
  constructor() {
    this.source = new Tone.Synth({envelope: {attack  : 0.25}}).toMaster();
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
    this.source.triggerAttack(this.noteHash[soundKey], '+0.05');
    this.source.triggerRelease('+0.25');
  }
}

// NOTE: If anyone is looking at the following class constructor and thinking
// there is a shorter way to write it out, there is. In that case, however,
// I would have to name the files something uniform, making it more difficult
// to sort through them and edit the files later down the line. Also, the
// volumes of course have to be individually adjusted.

class Sampler {
  constructor() {
    this.source = {
      sound12: new Tone.Player({url: "samples/drums/kick.wav"}),
      sound13: new Tone.Player({url: "samples/drums/snare.wav"}),
      sound14: new Tone.Player({url: "samples/drums/rim.wav"}),
      sound15: new Tone.Player({url: "samples/drums/hihat1.wav"}),
      sound16: new Tone.Player({url: "samples/drums/hihat2.wav"}),
      sound17: new Tone.Player({url: "samples/drums/shaker1.wav"}),
      sound18: new Tone.Player({url: "samples/drums/shaker2.wav"}),

      sound19: new Tone.Player({url: "samples/scrubs/noscrubs1.wav"}),
      sound20: new Tone.Player({url: "samples/scrubs/noscrubs2.wav"}),
      sound21: new Tone.Player({url: "samples/scrubs/noscrubs3.wav"}),
      sound22: new Tone.Player({url: "samples/scrubs/noscrubs4.wav"}),
      sound23: new Tone.Player({url: "samples/scrubs/noscrubs5.wav"}),

      sound24: new Tone.Player({url: "samples/chords/chord1a.mp3"}),
      sound25: new Tone.Player({url: "samples/chords/chord1b.mp3"}),
      sound26: new Tone.Player({url: "samples/chords/chord2a.mp3"}),
      sound27: new Tone.Player({url: "samples/chords/chord2b.mp3"}),
      sound28: new Tone.Player({url: "samples/chords/chord2c.mp3"}),
      sound29: new Tone.Player({url: "samples/chords/chord2d.mp3"}),
      sound30: new Tone.Player({url: "samples/chords/chord3a.mp3"}),
      sound31: new Tone.Player({url: "samples/chords/chord3b.mp3"}),
    };

    this.source.sound13.volume.value = -3;
    this.source.sound14.volume.value = -6;
    this.source.sound16.volume.value = -4;
    this.source.sound17.volume.value = -8;
    this.source.sound18.volume.value = -8;

    for (let i = 12; i <= 31; i++) {
      const sound = "sound" + i;
      this.source[sound].toMaster();
    }

    this.triggerSample = this.triggerSample.bind(this);
  }

  triggerSample(soundKey) {
    this.source[soundKey].start('+0.05');
  }
}
