import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Component.css";
const Component: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  return (
    <div className="div" onClick={onContainerClick}>
      <img className="image-113-icon" alt="" src="/image-113@2x.png" />
      <div className="frame-parent">
        <div className="frame-wrapper" onClick={onFrameContainer1Click}>
          <div className="next-wrapper">
            <div className="next">
              <span className="match-the-card">{`Next `}</span>
              <span className="span">›</span>
            </div>
          </div>
        </div>
        <div className="primititvetooltip">
          <img className="top-beak-icon" alt="" src="/top-beak.svg" />
          <div className="horizontal">
            <div className="this-is-your-container">
              <p className="this-is-your-hand-match-the-c">
                <span className="span">This is</span>
                <span className="span1">{` `}</span>
                <b className="your-hand">your hand</b>
                <span className="span1">{`. `}</span>
                <span className="match-the-card">Match the card</span>
              </p>
              <p className="in-your-hand">
                in your hand with the card on the table.
              </p>
            </div>
          </div>
          <img className="bottom-beak-icon" alt="" src="/bottom-beak.svg" />
        </div>
      </div>
    </div>
  );
};

export default Component;
