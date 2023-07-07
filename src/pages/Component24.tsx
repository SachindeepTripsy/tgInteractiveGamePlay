import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component24.module.css";
const Component24: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer6Click = useCallback(() => {
    navigate("/8");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <img className={styles.image113Icon} alt="" src="/image-11315@2x.png" />
      <div className={styles.unionParent}>
        <div className={styles.frameParent}>
          <div className={styles.groupWrapper}></div>
        </div>
        <div
          className={styles.closedDeckParent}
          onClick={onFrameContainer6Click}
        >
          <b className={styles.closedDeck}>CLOSED DECK</b>
          <img className={styles.clubIcon} alt="" src="/closed-deck1.png" />
        </div>
      </div>
      <div className={styles.primititvetooltip}>
        <img className={styles.topBeakIcon} alt="" src="/top-beak2.svg" />
        <div className={styles.horizontal}>
          <div className={styles.tapNowOnContainer}>
            <p className={styles.tapNowOnClosedDeck}>
              <b>Tap now on closed deck</b>
            </p>
            <p className={styles.toAddA}>to add a new card to your hand</p>
          </div>
        </div>
        <img
          className={styles.bottomBeakIcon}
          alt=""
          src="/bottom-beak17.svg"
        />
      </div>
    </div>
  );
};

export default Component24;
