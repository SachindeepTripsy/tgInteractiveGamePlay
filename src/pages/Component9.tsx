import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component9.module.css";
import { TAP_TO_CONTINUE } from "../constants";
const Component9: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/23");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/23");
  }, [navigate]);

  return (
    <div className={styles.div} onClick={onContainerClick}>
      <img className={styles.image113Icon} alt="" src="/Sequence3Win.png" />
      <div className={styles.primititvetooltipParent}>
        <div className={styles.primititvetooltip}>
          <img className={styles.topBeakIcon} alt="" src="/top-beak4.svg" />
          <div className={styles.horizontal}>
            <div className={styles.youHaveNowContainer}>
              <span>{`You have now created `}</span>
              <b>3 sequences</b>
              <span>{` before your opponent and `}</span>
              <b>won the game</b>
              <span>.</span>
            </div>
          </div>
          <img
            className={styles.bottomBeakIcon}
            alt=""
            src="/bottom-beak6.svg"
          />
        </div>
        <div className={styles.frameWrapper} onClick={onFrameContainer1Click}>
          <div className={styles.nextWrapper}>
            <div className={styles.next}>
              <span className={styles.matchTheCard}>{TAP_TO_CONTINUE}</span>
              <span className={styles.span}>›</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.groupParent}>
        <img
          className={`${styles.frameChild} ${styles.frameChild1}`}
          alt=""
          src="/group-372983.png"
        />
        <img
          className={`${styles.frameChild} ${styles.frameChild2}`}
          alt=""
          src="/group-373023.png"
        />
        <img
          className={`${styles.frameChild} ${styles.frameChild3}`}
          alt=""
          src="/group-373033.png"
        />
      </div> */}
    </div>
  );
};

export default Component9;
