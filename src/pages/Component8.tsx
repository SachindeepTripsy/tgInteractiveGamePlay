import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component8.module.css";
import { TAP_TO_CONTINUE } from "../constants";
const Component8: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/19");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/19");
  }, [navigate]);

  return (
    <div className={styles.div} onClick={onContainerClick}>
      <img className={styles.image116Icon} alt="" src="/bgImage3Sequences.png" />
      {/* <div className={styles.frameParent}>
        <div className={styles.groupParent}>
          <img
            className={`${styles.frameChild} ${styles.frameChild1}`}
            alt=""
            src="/group-37298.png"
          />
          <img
            className={`${styles.frameChild} ${styles.frameChild2}`}
            alt=""
            src="/group-37302.png"
          />
          <img
            className={`${styles.frameChild} ${styles.frameChild3}`}
            alt=""
            src="/group-37303.png"
          />
        </div>
        <div className={styles.groupContainer}>
          <img
            className={`${styles.frameChild} ${styles.frameChild6}`}
            alt=""
            src="/group-372981.png"
          />
          <img
            className={`${styles.frameChild} ${styles.frameChild4}`}
            alt=""
            src="/group-373021.png"
          />
          <img
            className={`${styles.frameChild} ${styles.frameChild5}`}
            alt=""
            src="/group-373031.png"
          />
        </div>
        <img className={styles.groupChild} alt="" src="/group-372982.png" />
        <img className={styles.groupItem} alt="" src="/group-373022.png" />
        <img className={styles.groupInner} alt="" src="/group-373032.png" />
      </div> */}
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper} onClick={onFrameContainer3Click}>
          <div className={styles.nextWrapper}>
            <div className={styles.next}>
              <span className={styles.canBeCreated}>{TAP_TO_CONTINUE}</span>
              <span className={styles.span}>›</span>
            </div>
          </div>
        </div>
        <div className={styles.primititvetooltip}>
          <img className={styles.topBeakIcon} alt="" src="/top-beak3.svg" />
          <div className={styles.horizontal}>
            <div className={styles.sequencesCanBeContainer}>
              <b>Sequences</b>
              <span className={styles.canBeCreated}>{` can be created `}</span>
              <b>horizontally</b>
              <span className={styles.canBeCreated}>{`, `}</span>
              <b>vertically</b>
              <span className={styles.canBeCreated}>{` or `}</span>
              <b>diagonally.</b>
            </div>
          </div>
          <img
            className={styles.bottomBeakIcon}
            alt=""
            src="/bottom-beak5.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Component8;
