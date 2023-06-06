import { FunctionComponent, useCallback } from "react";
import "./Component1.css";
const Component1: FunctionComponent = () => {
  const onHeartClick = useCallback(() => {
    // Please sync "5" to the project
  }, []);

  return (
    <div className="div1">
      <img className="image-113-icon1" alt="" src="/image-1131@2x.png" />
      <img
        className="heart-icon"
        alt=""
        src="/heart.svg"
        onClick={onHeartClick}
      />
      <div className="primititvetooltip1">
        <img className="top-beak-icon1" alt="" src="/top-beak1.svg" />
        <div className="horizontal1">
          <div className="tap-now-on-container">
            <p className="tap-now-on-the-green-matching">
              <b>Tap now on the green matching card</b>
            </p>
            <p className="to-place-your">to place your chip</p>
          </div>
        </div>
        <img className="bottom-beak-icon1" alt="" src="/bottom-beak1.svg" />
      </div>
      <img className="pointing-finger-icon" alt="" src="/pointing-finger.svg" />
    </div>
  );
};

export default Component1;
