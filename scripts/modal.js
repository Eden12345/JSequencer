if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  $(".instructions").css("display", "none");
  $(".mobile-warning").css("display", "flex");
}



const instructions = [
  "Welcome! The JSequencer is music app for all ages that allows you to layer instruments and play sounds in a loop.<br> <br>Press Next to continue through the instructions, or press Skip to head straight to the JSequencer.",
  "The grid of buttons represents a series of sounds that will be played in a loop. Each color corresponds to a different instrument.<br> <br>blue = drums | purple = vocals | green = chords | yellow = synthesizer",
  "When the JSequencer is playing, it will highlight which sounds are being played at that moment in your loop.",
  "The main controls are on the left. The triangle at the top is the play button (which will turn into a square stop button while the JSequencer is playing).<br> <br>The slider adjusts the speed at which your loop will play.",
  "The randomize button will randomly change the speed and all the buttons on the grid. The clear button will clear the entire grid.",
  "The example sequence might give you a better idea of how the JSequencer works. Try playing it after you click Finish!<br> <br>(If you'd like to try something else, check out the JamSync app by clicking the button at the top.)"
];

$(".instruction").html(instructions[0]);

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
      $("#back").html("< Back");
      $(".controls").css("visibility", "hidden");
      if ($(".play-stop-button").hasClass("playing")) {
        $(".play-stop-button").trigger("click");
      }
    case 3:
      if ($(".play-stop-button").hasClass("playing")) {
        $(".play-stop-button").trigger("click");
      }
      break;
    case 2:
      $(".play-stop-button").trigger("click");
      $(".controls").css("visibility", "visible");
      break;
    case 5:
      $("#skip").css("visibility", "hidden");
      $("#back").html("");
      $("#next").html("Finish >");
      $(".demo-button").trigger("click");
      break;
    case 6:
      $(".instructions").css("display", "none");
      break;
    default:
      $("#back").html("< Back");
      $("#next").html("Next >");
      $("#skip").html("Skip");
      $("#skip").css("visibility", "visible");
  }

  $(".instruction").html(instructions[currentIndex]);
};

const skip = (clickEvent) => {
  $(".controls").css("visibility", "visible");
  $(".instructions").css("display", "none");
};



$("#back").click(step);
$("#next").click(step);
$("#skip").click(skip);
