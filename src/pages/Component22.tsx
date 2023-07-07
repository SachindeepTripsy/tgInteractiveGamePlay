import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component22.module.css";
const Component22: FunctionComponent = () => {
  const navigate = useNavigate();

  const onClubClick = useCallback(() => {
    navigate("/11");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <img className={styles.image113Icon} alt="" src="/image-11314@2x.png" />
      <img
        className={styles.clubIcon}
        alt=""
        src="/club8.png"
        onClick={onClubClick}
      />
      <div className={styles.primititvetooltip}>
        <img className={styles.topBeakIcon} alt="" src="/top-beak13.svg" />
        <div className={styles.horizontal}>
          <div className={styles.tapNowOnContainer}>
            <b>Tap now on 2 Eyed Joker card</b>
            <span className={styles.span}>{` `}</span>
            <span className={styles.inYourHand}>in your hand</span>
          </div>
        </div>
        <img
          className={styles.bottomBeakIcon}
          alt=""
          src="/bottom-beak16.svg"
        />
      </div>
      <img
        className={styles.pointingFingerIcon}
        alt=""
        src="/pointing-finger4.svg"
      />
    </div>
  );
};

export default Component22;
