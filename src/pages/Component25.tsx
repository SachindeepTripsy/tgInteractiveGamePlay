import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component25.module.css";
const Component25: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHeartClick = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <img className={styles.image113Icon} alt="" src="/image-11316@2x.png" />
      <img
        className={styles.heartIcon}
        alt=""
        src="/heart5.png"
        onClick={onHeartClick}
      />
      <div className={styles.primititvetooltip}>
        <img className={styles.topBeakIcon} alt="" src="/top-beak15.svg" />
        <div className={styles.horizontal}>
          <div className={styles.tapNowOnContainer}>
            <p className={styles.tapNowOnTheGreenMatching}>
              <b>Tap now on the green matching card</b>
            </p>
            <p className={styles.toPlaceYour}>to place your chip</p>
          </div>
        </div>
        <img
          className={styles.bottomBeakIcon}
          alt=""
          src="/bottom-beak18.svg"
        />
      </div>
      <img
        className={styles.pointingFingerIcon}
        alt=""
        src="/pointing-finger7.svg"
      />
    </div>
  );
};

export default Component25;
