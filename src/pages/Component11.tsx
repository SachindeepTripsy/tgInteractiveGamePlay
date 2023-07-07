import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component11.module.css";
const Component11: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDiamondClick = useCallback(() => {
    navigate("/21");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <img className={styles.image114Icon} alt="" src="/sequence2Bg.png" />
      <img
        className={styles.diamondIcon}
        alt=""
        src="/diamond1.png"
        onClick={onDiamondClick}
      />
      <img
        className={styles.pointingFingerIcon}
        alt=""
        src="/pointing-finger2.svg"
      />
      <div className={styles.primititvetooltip}>
        <img className={styles.topBeakIcon} alt="" src="/top-beak3.svg" />
        <div className={styles.horizontal}>
          <div className={styles.createASequenceContainer}>
            <b>Create a sequence using trump card</b>
            <span className={styles.byPlacingA}>
              {" "}
              by placing a chip here. Tap the matching card in your hand now.
            </span>
          </div>
        </div>
        <img className={styles.bottomBeakIcon} alt="" src="/bottom-beak8.svg" />
      </div>
    </div>
  );
};

export default Component11;
