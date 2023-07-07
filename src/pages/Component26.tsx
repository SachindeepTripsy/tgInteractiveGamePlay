import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component26.module.css";
const Component26: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHeartClick = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <img className={styles.image113Icon} alt="" src="/image-11317@2x.png" />
      <img
        className={styles.heartIcon}
        alt=""
        src="/heart666.png"
        onClick={onHeartClick}
      />
      <div className={styles.primititvetooltip}>
        <img className={styles.topBeakIcon} alt="" src="/top-beak14.svg" />
        <div className={styles.horizontal}>
          <div className={styles.tapNowOnContainer}>
            <p className={styles.tapNowOnACardFrom}>
              <b className={styles.tapNowOn}>Tap now on a card</b>
              <span className={styles.span}>{` `}</span>
              <span className={styles.from}>from</span>
            </p>
            <p className={styles.theseFiveCards}>
              these five cards in your hand
            </p>
          </div>
        </div>
        <img
          className={styles.bottomBeakIcon}
          alt=""
          src="/bottom-beak14.svg"
        />
      </div>
      <img
        className={styles.pointingFingerIcon}
        alt=""
        src="/pointing-finger8.svg"
      />
    </div>
  );
};

export default Component26;
