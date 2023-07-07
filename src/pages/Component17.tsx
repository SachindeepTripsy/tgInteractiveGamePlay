import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component17.module.css";
const Component17: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHeartClick = useCallback(() => {
    navigate("/13");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <img className={styles.image113Icon} alt="" src="/image-11310@2x.png" />
      <img
        className={styles.heartIcon}
        alt=""
        src="/heart3.png"
        onClick={onHeartClick}
      />
      <div className={styles.primititvetooltip}>
        <img className={styles.topBeakIcon} alt="" src="/top-beak8.svg" />
        <div className={styles.horizontal}>
          <div className={styles.tapNowOnContainer}>
            <b>Tap now on 1 Eyed Joker card</b>
            <span className={styles.span}>{` `}</span>
            <span className={styles.inYourHand}>in your hand</span>
          </div>
        </div>
        <img
          className={styles.bottomBeakIcon}
          alt=""
          src="/bottom-beak11.svg"
        />
      </div>
      <img
        className={styles.pointingFingerIcon}
        alt=""
        src="/pointing-finger6.svg"
      />
    </div>
  );
};

export default Component17;
