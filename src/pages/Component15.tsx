import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component15.module.css";
const Component15: FunctionComponent = () => {
  const navigate = useNavigate();

  const onClubClick = useCallback(() => {
    navigate("/16");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <img className={styles.image113Icon} alt="" src="/image-1138@2x.png" />
      <img
        className={styles.clubIcon}
        alt=""
        src="/club7.png"
        onClick={onClubClick}
      />
      <img
        className={styles.pointingFingerIcon}
        alt=""
        src="/pointing-finger4.svg"
      />
      <div className={styles.primititvetooltip}>
        <img className={styles.topBeakIcon} alt="" src="/top-beak6.svg" />
        <div className={styles.horizontal}>
          <div className={styles.youCanPlaceContainer}>
            <p className={styles.youCanPlaceOneChipHereTo}>
              <span
                className={styles.youCanPlace}
              >{`You can place one chip here to create a `}</span>
              <b className={styles.sequenceOf3}>sequence of 3 cards</b>
              <span className={styles.span}>.</span>
            </p>
            <p className={styles.tapNowOn}>
              Tap now on the matching card in your hand.
            </p>
          </div>
        </div>
        <img className={styles.bottomBeakIcon} alt="" src="/bottom-beak9.svg" />
      </div>
    </div>
  );
};

export default Component15;
