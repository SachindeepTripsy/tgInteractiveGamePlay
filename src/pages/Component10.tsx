import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component10.module.css";
const Component10: FunctionComponent = () => {
  const navigate = useNavigate();

  const onClubClick = useCallback(() => {
    navigate("/22");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <img className={styles.image114Icon} alt="" src="/sequence2Bg.png" />
      <img className={styles.diamondIcon} alt="" src="/diamond.png" />
      <img
        className={styles.clubIcon}
        alt=""
        src="/club3.png"
        onClick={onClubClick}
      />
      <div className={styles.primititvetooltip}>
        <img className={styles.topBeakIcon} alt="" src="/top-beak3.svg" />
        <div className={styles.horizontal}>
          <div className={styles.placeYourChipContainer}>
            <b>Place your chip</b>
            <span className={styles.here}> here</span>
          </div>
        </div>
        <img className={styles.bottomBeakIcon} alt="" src="/bottom-beak7.svg" />
      </div>
      <img
        className={styles.pointingFingerIcon}
        alt=""
        src="/pointing-finger1.svg"
      />
    </div>
  );
};

export default Component10;
