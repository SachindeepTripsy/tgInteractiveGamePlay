import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component2.module.css";
import { PLAY_PRACTICE_GAME } from "../constants";
const Component2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  function sendEvent() {
    const event = { eventName: PLAY_PRACTICE_GAME };
    const message = JSON.stringify(event);
    window?.ReactNativeWebView?.postMessage(message);
  }
  return (
    <div className={styles.div}>
      <img className={styles.image113Icon} alt="" src="/playPracticeGame.png" />
      {/* <div className={styles.inner} onClick={onFrameContainer3Click}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.refreshFill0Wght500Grad0OpParent}>
              <img
                className={styles.refreshFill0Wght500Grad0OpIcon}
                alt=""
                src="/refresh-fill0-wght500-grad0-opsz48-1.svg"
              />
              <div className={styles.takeWalkthroughAgain}>
                Take Walkthrough Again
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <img
        src="/nextIcon.png"
        alt=""
        className={styles.nextIcon}
        onClick={sendEvent}
      />
      <img
        src="/again.png"
        alt=""
        className={styles.again1}
        onClick={onFrameContainer3Click}
      />
      <img
        src="/again.png"
        alt=""
        className={styles.again2}
        onClick={() => navigate("/24")}
      />
    </div>
  );
};

export default Component2;
