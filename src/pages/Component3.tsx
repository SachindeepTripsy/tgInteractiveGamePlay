import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Component3.css";
const Component3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  return (
    <div className="div3" onClick={onContainerClick}>
      <img className="image-113-icon3" alt="" src="/image-1133@2x.png" />
      <div className="frame-group">
        <div className="frame-container" onClick={onFrameContainer1Click}>
          <div className="next-container">
            <div className="next2">
              <span className="before-your">{`Next `}</span>
              <span className="you-can">›</span>
            </div>
          </div>
        </div>
        <div className="primititvetooltip3">
          <img className="top-beak-icon3" alt="" src="/top-beak2.svg" />
          <div className="horizontal3">
            <div className="you-can-drop-container">
              <p className="you-can-drop-from-this-game-be">
                <span className="you-can">You can</span>
                <b className="drop-from-this">{` drop from this game `}</b>
                <span className="before-your">before your</span>
              </p>
              <p className="first-turn-if">
                first turn if your hand is not good.
              </p>
            </div>
          </div>
          <img className="bottom-beak-icon3" alt="" src="/bottom-beak2.svg" />
        </div>
      </div>
    </div>
  );
};

export default Component3;
