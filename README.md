# JSequencer

JSequencer is a step sequencer that uses digital synthesis through the Web Audio API and audio samples to create musical loops. It can also generate random patterns that allow you to explore its potential more fluidly.

[Live Demo](http://ethangooding.com/JSequencer/)

## Description

After building on my experience creating the live improvisational project JamSync with the Tone.js library, I moved on to a sequencer using the same synthesizer and samples. This allows the user to play live instruments in JamSync along with their JSequencer patterns to further expand options for improvisation.

![screencap](https://github.com/Eden12345/JamSync/blob/master/assets/jseqscreencap.png)

The randomizer brings in the element of computer generated music while allowing less initiated users to engage and interact more easily. I wanted to have more sound options than other sequencers on the web, so I also had to ensure that it wasn't too daunting a task to highlight a majority of them.

JSequencer is written far more cleanly than JamSync, even though it is far more complicated, and this was because I spent most of my time on this project planning how I would program it rather than getting in front of my computer and typing away. Much of this planning was devoted to figuring out how to avoid repeat code and which frameworks and functions I would use to do so. jQuery was useful for synchronized visualizations, similarly to JamSync, but one of its great uses in this project was helping avoid typing out 496 lines of HTML code for my sequencer grid :)

You can check out the README for my older project JamSync below, which might give some context for the foundation of JSequencer.

# JamSync

JamSync is a music application that maps four digital instruments to the keyboard to allow multiple people to improvise synchronously on the same keyboard from a web browser.

[Live Demo](http://ethangooding.com/JamSync/)

## Description

This was my first experiment with Tone.js, which I used to create an oscillator through the Web Audio API that can be tuned to different pitches. It also has a streamlined envelope filter options hash, making it straightforward to change the attack and release. I then mapped samples of three other instruments to specific sections of the keyboard so that the synth could be played in conjunction with other players.

Using jQuery, I added a simple visual effect to indicate to the user whenever keypress are triggering an action on a specific instrument.


![screencap](https://github.com/Eden12345/JamSync/blob/master/assets/screencap.png)


## Upcoming Changes

  * Refactor with DOMinateJS -- the entire project will be refactored to use my own custom DOM manipulation library rather than jQuery
