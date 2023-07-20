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

  return (
    <div className="App">
      <div className="button-container">
        <button className="sound-button" onClick={playWow1}>
          Wow (Suprised)
        </button>
        <button className="sound-button" onClick={playWow2}>
          Wow (Somber)
        </button>
        <button className="sound-button" onClick={playWow3}>
          Wow (Sincere)
        </button>
        <button className="sound-button" onClick={playGoodBadUglyWhistle}>
          Showdown Whistle
        </button>
        <button className="sound-button" onClick={playPowerUp}>
          Power Up
        </button>
        <button className="sound-button" onClick={playPowerDown}>
          Power Down
        </button>
        <button className="sound-button" onClick={playGetItem}>
          Get Item
        </button>
        <button className="sound-button" onClick={playOpenChest}>
          Open Chest
        </button>
        <button className="sound-button" onClick={playWilhelm}>
          Wilhelm Scream
        </button>
        <button className="sound-button" onClick={playArrowShot}>
          Arrow Shot
        </button>
        <button className="sound-button" onClick={playSmallGlassShatter}>
          Small Glass Shatter
        </button>
        <button className="sound-button" onClick={playBigGlassShatter}>
          Big Glass Shatter
        </button>
        <button className="sound-button" onClick={playAirhorn}>
          Air Horn
        </button>
        <button className="sound-button" onClick={playAirhornBlast}>
          Air Horn Blast
        </button>
        <button className="sound-button" onClick={playHawkScreech}>
          Hawk Screech
        </button>
      </div>
    </div>
  );
}

export default App;
