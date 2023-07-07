import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component28.module.css";
import { TAP_TO_CONTINUE } from "../constants";
const Component28: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  return (
    <div className={styles.div} onClick={onContainerClick}>
      <img className={styles.image113Icon} alt="" src="/image-11319@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper} onClick={onFrameContainer1Click}>
          <div className={styles.nextWrapper}>
            <div className={styles.next}>
              <span className={styles.matchTheCard}>{TAP_TO_CONTINUE}</span>
              <span className={styles.span}>›</span>
            </div>
          </div>
        </div>
        <div className={styles.primititvetooltip}>
          <img className={styles.topBeakIcon} alt="" src="/top-beak14.svg" />
          <div className={styles.horizontal}>
            <div className={styles.thisIsYourContainer}>
              <p className={styles.thisIsYourHandMatchTheC}>
                <span className={styles.span}>This is</span>
                <span className={styles.span1}>{` `}</span>
                <b className={styles.yourHand}>your hand</b>
                <span className={styles.span1}>{`. `}</span>
                <span className={styles.matchTheCard}>Match the card</span>
              </p>
              <p className={styles.inYourHand}>
                in your hand with the card on the table.
              </p>
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

export default Component28;
