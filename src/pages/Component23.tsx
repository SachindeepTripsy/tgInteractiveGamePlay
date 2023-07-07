import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component23.module.css";
import { TAP_TO_CONTINUE } from "../constants";
const Component23: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/9");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/9");
  }, [navigate]);

  return (
    <div className={styles.div} onClick={onContainerClick}>
      <img className={styles.image115Icon} alt="" src="/image-115@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper} onClick={onFrameContainer1Click}>
          <div className={styles.nextWrapper}>
            <div className={styles.next}>
              <span className={styles.toPlayYour}>{TAP_TO_CONTINUE}</span>
              <span className={styles.span}>›</span>
            </div>
          </div>
        </div>
        <div className={styles.primititvetooltip}>
          <img className={styles.topBeakIcon} alt="" src="/top-beak14.svg" />
          <div className={styles.horizontal}>
            <div className={styles.youGet60Container}>
              <p className={styles.youGet60SecondsToPlayYou}>
                <span className={styles.span}>You get</span>
                <span className={styles.span1}>{` `}</span>
                <b className={styles.seconds}>60 seconds</b>
                <span className={styles.toPlayYour}> to play your cards.</span>
              </p>
              <p className={styles.nowItIs}>Now it is your opponent’s turn.</p>
            </div>
          </div>
          <img
            className={styles.bottomBeakIcon}
            alt=""
            src="/bottom-beak14.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Component23;
