import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Component2.css";
const Component2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHeartClick = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  return (
    <div className="div2">
      <img className="image-113-icon2" alt="" src="/image-1132@2x.png" />
      <img
        className="heart-icon1"
        alt=""
        src="/heart1.svg"
        onClick={onHeartClick}
      />
      <div className="primititvetooltip2">
        <img className="top-beak-icon2" alt="" src="/top-beak.svg" />
        <div className="horizontal2">
          <div className="tap-now-on-container1">
            <p className="tap-now-on-a-card-from">
              <b className="tap-now-on">Tap now on a card</b>
              <span className="span3">{` `}</span>
              <span className="from">from</span>
            </p>
            <p className="these-five-cards">these five cards in your hand</p>
          </div>
        </div>
        <img className="bottom-beak-icon2" alt="" src="/bottom-beak.svg" />
      </div>
      <img
        className="pointing-finger-icon1"
        alt=""
        src="/pointing-finger1.svg"
      />
    </div>
  );
};

export default Component2;
