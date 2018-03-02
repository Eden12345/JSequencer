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
      sound12: new Tone.Player({url: 'samples/drums/kick.wav'}),
      sound13: new Tone.Player({url: 'samples/drums/snare.wav'}),
      sound14: new Tone.Player({url: 'samples/drums/rim.wav'}),
      sound15: new Tone.Player({url: 'samples/drums/hihat1.wav'}),
      sound16: new Tone.Player({url: 'samples/drums/hihat2.wav'}),
      sound17: new Tone.Player({url: 'samples/drums/shaker1.wav'}),
      sound18: new Tone.Player({url: 'samples/drums/shaker2.wav'}),

      sound19: new Tone.Player({url: 'samples/scrubs/noscrubs1.mp3'}),
      sound20: new Tone.Player({url: 'samples/scrubs/noscrubs2.mp3'}),
      sound21: new Tone.Player({url: 'samples/scrubs/noscrubs3.mp3'}),
      sound22: new Tone.Player({url: 'samples/scrubs/noscrubs4.mp3'}),
      sound23: new Tone.Player({url: 'samples/scrubs/noscrubs5.mp3'}),

      sound24: new Tone.Player({url: 'samples/chords/chord1a.mp3'}),
      sound25: new Tone.Player({url: 'samples/chords/chord1b.mp3'}),
      sound26: new Tone.Player({url: 'samples/chords/chord2a.mp3'}),
      sound27: new Tone.Player({url: 'samples/chords/chord2b.mp3'}),
      sound28: new Tone.Player({url: 'samples/chords/chord2c.mp3'}),
      sound29: new Tone.Player({url: 'samples/chords/chord2d.mp3'}),
      sound30: new Tone.Player({url: 'samples/chords/chord3a.mp3'}),
      sound31: new Tone.Player({url: 'samples/chords/chord3b.mp3'}),
    };

    this.source.sound13.volume.value = -3;
    this.source.sound14.volume.value = -6;
    this.source.sound16.volume.value = -4;
    this.source.sound17.volume.value = -8;
    this.source.sound18.volume.value = -8;

    for (let i = 12; i <= 31; i++) {
      const sound = 'sound' + i;
      this.source[sound].toMaster();
    }

    this.playSample = this.playSample.bind(this);
  }


  playSample(soundKey) {
    this.source[soundKey].start('+0.05');
  }
}





class Player {
  constructor() {
    this.synthesizer = new Synthesizer();
    this.sampler = new Sampler();

    this.playSound = this.playSound.bind(this);
  }


  playSound(soundKey) {
    const keyInteger = parseInt(soundKey.slice(5));

    if (keyInteger < 12) {
      this.synthesizer.playNote(soundKey);
    } else {
      this.sampler.playSample(soundKey);
    }
  }
}





class Grid {
  constructor() {
    this.toggleButton = this.toggleButton.bind(this);
  }


  setup() {
    for (let i = 1; i <= 16; i++) {
      const beatId = "beat" + i;

      $(".sampler").append(`<ol class='sampler-beat ${beatId}'></ol>`);
      $(".synthesizer").append(`<ol class='synthesizer-beat ${beatId}'></ol>`);

      for (let i = 1; i <= 31; i++) {
        const buttonId = beatId + "sound" + i; // The buttonId is the beatId + soundId

        if (i <= 11) {
          $(`.synthesizer-beat.${beatId}`)
          .append(`<li class='sequencer-button synth' id=${buttonId}></li>`);
        } else if (i >= 12 && i <= 18) {
          $(`.sampler-beat.${beatId}`)
          .append(`<li class='sequencer-button drums' id=${buttonId}></li>`);
        } else if (i >= 19 && i <= 23) {
          $(`.sampler-beat.${beatId}`)
          .append(`<li class='sequencer-button vox' id=${buttonId}></li>`);
        } else if (i >= 24 && i <= 31) {
          $(`.sampler-beat.${beatId}`)
          .append(`<li class='sequencer-button chords' id=${buttonId}></li>`);
        }
      }
    }

    $('.sequencer-button').click(this.toggleButton);
  }


  toggleButton(event) {
    const button = $(event.target);

    if (button.hasClass('turned-on')) {
      button.removeClass('turned-on');
    } else {
      button.addClass('turned-on');
    }
  }


  highlightColumn(beatId) {
    $('.highlighted').removeClass('highlighted');
    $(`.${beatId}`).addClass('highlighted');
  }
}





class Sequencer {
  constructor() {
    this.player = new Player();
    this.grid = new Grid();
    this.grid.setup();
    this.timeouts = {};

    this.setupPlayButton = this.setupPlayButton.bind(this);
    this.playOrStop = this.playOrStop.bind(this);
    this.startPlaying = this.startPlaying.bind(this);
    this.stopPlaying = this.stopPlaying.bind(this);

    this.setupPlayButton();
  }


  setupPlayButton() {
    $(".play-stop-button").click(this.playOrStop);
  }


  splitter(buttonId, returnVal) {
    const splitIds = buttonId.split("s");
    const beatId = splitIds[0];
    const soundId = "s" + splitIds[1];

    if (returnVal === "beatId") {
      return beatId;
    } else if (returnVal === "soundId") {
      return soundId;
    }
  }


  bpm() {
    return $("#bpm-slider").val();
  }


  playOrStop() {
    if ($(".play-stop-button").hasClass("stopped")) {
      this.startPlaying();
    } else if ($(".play-stop-button").hasClass("playing")) {
      this.stopPlaying();
    }
  }


  startPlaying(looping = false) {
    $("#bpm-slider").prop("disabled", true);
    $(".play-stop-button").removeClass("stopped").addClass("playing");

    const milsToAdd = 60000 / this.bpm();
    let mils = 5;

    for (let i = 1; i <= 16; i++) {
      const beatId = "beat" + i;

      this.timeouts[beatId] = setTimeout(() => {
        this.grid.highlightColumn(beatId);
      }, mils);

      for (let j = 1; j <= 31; j++) {
        const buttonId = beatId + "sound" + j;

        this.timeouts[buttonId] = setTimeout(() => {
          this.triggerButton(buttonId);
        }, mils);
      }

      mils += milsToAdd;
    }

    if (looping === false) {
      this.timeouts.loop = setInterval(() => this.startPlaying(true), mils);
    }
  }


  stopPlaying() {
    $("#bpm-slider").prop("disabled", false);
    $(".play-stop-button").removeClass("playing").addClass("stopped");

    for (let i = 1; i <= 16; i++) {
      const beatId = "beat" + i;
      clearTimeout(this.timeouts[beatId]);

      for (let j = 1; j <= 31; j++) {
        const buttonId = beatId + "sound" + j;
        clearTimeout(this.timeouts[buttonId]);
      }
    }

    clearInterval(this.timeouts.loop);
  }


  triggerButton(buttonId) {
    if ($(`#${buttonId}`).hasClass('turned-on')) {
      const soundId = this.splitter(buttonId, "soundId");
      this.player.playSound(soundId);
    }
  }
}

const seq = new Sequencer();
