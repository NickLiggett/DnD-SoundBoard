import "./App.css";
import useSound from "use-sound";
import wow1 from "./assets/sounds/Wow1.mp3";
import wow2 from "./assets/sounds/Wow2.mp3";
import wow3 from "./assets/sounds/Wow3.mp3";
import powerUp from "./assets/sounds/powerup.wav";
import powerDown from "./assets/sounds/powerdown.wav";
import getItem from "./assets/sounds/zeldaitem.mp3";
import openChest from "./assets/sounds/openChest.mp3";
import wilhelm from "./assets/sounds/wilhelm.wav";
import arrowShot from "./assets/sounds/arrow-shot.mp3";
import smallGlassShatter from "./assets/sounds/small-glass-shatter.mp3";
import bigGlassShatter from "./assets/sounds/big-glass-shatter.mp3";
import airhorn from "./assets/sounds/airhorn.mp3";
import airhornBlast from "./assets/sounds/dj-airhorn.mp3";
import hawkScreech from "./assets/sounds/hawk.mp3";
import goodBadUglyWhistle from "./assets/sounds/good-bad-ugly-whistle.mp3";

// add arrow boing
// add fireball sound
// add chaotic screaming
// add lightning bolt sound
// add crickets sound
// hell yeah brother
// jeoparady theme
// holy sound

function App() {
  const [playWow1] = useSound(wow1);
  const [playWow2] = useSound(wow2);
  const [playWow3] = useSound(wow3);
  const [playPowerUp] = useSound(powerUp);
  const [playPowerDown] = useSound(powerDown);
  const [playGetItem] = useSound(getItem);
  const [playOpenChest] = useSound(openChest);
  const [playWilhelm] = useSound(wilhelm);
  const [playArrowShot] = useSound(arrowShot);
  const [playSmallGlassShatter] = useSound(smallGlassShatter);
  const [playBigGlassShatter] = useSound(bigGlassShatter);
  const [playAirhorn] = useSound(airhorn);
  const [playAirhornBlast] = useSound(airhornBlast);
  const [playHawkScreech] = useSound(hawkScreech);
  const [playGoodBadUglyWhistle] = useSound(goodBadUglyWhistle);

  const soundPackages = [
    {
      buttonTitle: "Surprise Wow",
      playSound: playWow1,
    },
    {
      buttonTitle: "Somber Wow",
      playSound: playWow2,
    },
    {
      buttonTitle: "Sincere Wow",
      playSound: playWow3,
    },
    {
      buttonTitle: "Power Up",
      playSound: playPowerUp,
    },
    {
      buttonTitle: "Power Down",
      playSound: playPowerDown,
    },
    {
      buttonTitle: "Get Item",
      playSound: playGetItem,
    },
    {
      buttonTitle: "Open Chest",
      playSound: playOpenChest,
    },
    {
      buttonTitle: "Wilhelm Scream",
      playSound: playWilhelm,
    },
    {
      buttonTitle: "Arrow Shot",
      playSound: playArrowShot,
    },
    {
      buttonTitle: "Small Glass Shatter",
      playSound: playSmallGlassShatter,
    },
    {
      buttonTitle: "Big Glass Shatter",
      playSound: playBigGlassShatter,
    },
    {
      buttonTitle: "Air Horn",
      playSound: playAirhorn,
    },
    {
      buttonTitle: "Air Horn Blasts",
      playSound: playAirhornBlast,
    },
    {
      buttonTitle: "Hawk Screech",
      playSound: playHawkScreech,
    },
    {
      buttonTitle: "Showdown Whistle",
      playSound: playGoodBadUglyWhistle,
    },
  ];

  const renderButtons = () => {
    const buttons = soundPackages.map((element) => {
      return (
        <button className="sound-button" onClick={element.playSound}>
          {element.buttonTitle}
        </button>
      );
    });
    return buttons;
  };

  return (
    <div className="App">
      <div className="button-container">{renderButtons()}</div>
    </div>
  );
}

export default App;
