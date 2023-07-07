import { FunctionComponent } from "react";
import styles from "./Component16.module.css";
import { useNavigate } from "react-router-dom";
const Component16: FunctionComponent = () => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/14");
  }
  return (
    <div className={styles.div} onClick={handleNavigate}>
      <img className={styles.image113Icon} alt="" src="/image-1139@2x.png" />
      <img className={styles.child} alt="" src="/group-37384.png" />
      <div className={styles.primititvetooltip}>
        <img className={styles.topBeakIcon} alt="" src="/top-beak7.svg" />
        <div className={styles.horizontal}>
          <div className={styles.use1EyedContainer}>
            <p className={styles.use1EyedJokerCardToRemov}>
              <span
                className={styles.use1Eyed}
              >{`Use 1 Eyed Joker card to `}</span>
              <b className={styles.removeAnyOne}>
                remove any one opponent chip
              </b>
              <span className={styles.highlightedInRed}>
                {" "}
                highlighted in red.
              </span>
            </p>
            <p className={styles.tapOnThis}>Tap on this opponent chip now.</p>
          </div>
        </div>
        <img
          className={styles.bottomBeakIcon}
          alt=""
          src="/bottom-beak10.svg"
        />
      </div>
      <img
        className={styles.pointingFingerIcon}
        alt=""
        src="/pointing-finger5.svg"
      />
    </div>
  );
};

export default Component16;
