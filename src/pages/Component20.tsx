import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component20.module.css";
import { TAP_TO_CONTINUE } from "../constants";
const Component20: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  return (
    <div className={styles.div} onClick={onContainerClick}>
      <img className={styles.image114Icon} alt="" src="/image-1143@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper} onClick={onFrameContainer1Click}>
          <div className={styles.nextWrapper}>
            <div className={styles.next}>
              <span className={styles.onceYouPlace}>{TAP_TO_CONTINUE}</span>
              <span className={styles.span}>›</span>
            </div>
          </div>
        </div>
        <div className={styles.primititvetooltip}>
          <img className={styles.topBeakIcon} alt="" src="/top-beak11.svg" />
          <div className={styles.horizontal}>
            <div className={styles.onceYouPlaceContainer}>
              <span
                className={styles.onceYouPlace}
              >{`Once you place a chip on a card, that card is `}</span>
              <b>{`removed from your hand `}</b>
              <span className={styles.onceYouPlace}>
                and you are left with only 4 cards
              </span>
            </div>
          </div>
          <img
            className={styles.bottomBeakIcon}
            alt=""
            src="/bottom-beak14.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Component20;
