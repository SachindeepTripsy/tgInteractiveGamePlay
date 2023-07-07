import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component4.module.css";
import { TAP_TO_CONTINUE } from "../constants";
const Component4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/29");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/29");
  }, [navigate]);

  return (
    <div className={styles.div} onClick={onContainerClick}>
      <img className={styles.image113Icon} alt="" src="/dottedCard.png" />
      <div className={styles.inner}>
        <div className={styles.dropWrapper}>
          <b className={styles.drop}>Drop</b>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper} onClick={onFrameContainer3Click}>
          <div className={styles.nextWrapper}>
            <div className={styles.drop}>
              <span className={styles.next1}>{TAP_TO_CONTINUE}</span>
              <span className={styles.span}>›</span>
            </div>
          </div>
        </div>
        <div className={styles.primititvetooltip}>
          <img className={styles.topBeakIcon} alt="" src="/top-beak2.svg" />
          <div className={styles.horizontal}>
            <div className={styles.ifYourHandContainer}>
              <span>{`If your hand has `}</span>
              <b>no connecting cards or joker cards</b>
              <span>{` when a new game starts then you can choose to `}</span>
              <b>drop from the game</b>
              <span>.</span>
            </div>
          </div>
          <img
            className={styles.bottomBeakIcon}
            alt=""
            src="/bottom-beak2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Component4;
