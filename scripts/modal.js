const instructions = [
  "Welcome! Press Next to continue through the instructions, or press Skip to head straight to the JSequencer.",
  "The grid of buttons represents a series of sounds that will be played in a loop. Each color corresponds to a different instrument. <br> <br> (blue = drums, purple = vocals, green = chords, yellow = synthesizer)",
  "When the JSequencer is playing, it will highlight which sounds are being played at that moment in the loop.",
  "The main controls are on the left. The triangle at the top is the play button (which will turn into a square stop button after you click it). <br> <br> The slider adjusts the speed at which the JSequencer will play.",
  "The randomize button will randomly change the speed and all the buttons on the grid. The clear button will clear the entire grid.",
  "The example sequence might give you a better idea of how the JSequencer works. Try playing it after you click Finish!"
];

let currentIndex = 0;

const step = (clickEvent) => {
  const stepId = clickEvent.target.id;

  if (stepId === "next") {
    currentIndex += 1;
  } else {
    currentIndex -= 1;
  }

  switch (currentIndex) {
    case 0:
      $("#back").html("");
      break;
    case 1:
    case 3:
      $("#back").html("< Back");
      if ($(".play-stop-button").hasClass("playing")) {
        $(".play-stop-button").trigger("click");
      }
      break;
    case 2:
      $(".play-stop-button").trigger("click");
      break;
    case 5:
      $("#next").html("Finish >");
      // $("#skip").html(" ");
      break;
    case 6:
      $(".instructions").css("display", "none");
      break;
    default:
      $("#back").html("< Back");
      $("#next").html("Next >");
      $("#skip").html("Skip");
  }

  // if (currentIndex === 0) {
  //   $("#back").html("");
  // } else if (currentIndex === 5) {
  //   $("#next").html("Finish >");
  //   $("#skip").html("");
  // } else if (currentIndex === 6){
  //   $(".instructions").css("display", "none");
  // } else {
  //   $("#back").html("< Back");
  //   $("#next").html("Next >");
  //   $("#skip").html("Skip");
  // }

  $(".instruction").html(instructions[currentIndex]);
};

const skip = (clickEvent) => {
  $(".instructions").css("display", "none");
};




$("#back").click(step);
$("#next").click(step);
$("#skip").click(skip);
