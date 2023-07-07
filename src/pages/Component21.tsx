import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component21.module.css";
import { TAP_TO_CONTINUE } from "../constants";
const Component21: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/6");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/6");
  }, [navigate]);

  return (
    <div className={styles.div} onClick={onContainerClick}>
      <img className={styles.image113Icon} alt="" src="/image-11313@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper} onClick={onFrameContainer1Click}>
          <div className={styles.nextWrapper}>
            <div className={styles.next}>
              <span className={styles.chipYouPlace}>{TAP_TO_CONTINUE}</span>
              <span className={styles.span}>›</span>
            </div>
          </div>
        </div>
        <div className={styles.primititvetooltip}>
          <img className={styles.topBeakIcon} alt="" src="/top-beak12.svg" />
          <div className={styles.horizontal}>
            <div className={styles.chipYouPlaceContainer}>
              <span className={styles.chipYouPlace}>
                Chip you place on the table is represented by
              </span>
              <span className={styles.span1}>{` `}</span>
              <b>green color</b>
            </div>
          </div>
          <img
            className={styles.bottomBeakIcon}
            alt=""
            src="/bottom-beak15.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Component21;
