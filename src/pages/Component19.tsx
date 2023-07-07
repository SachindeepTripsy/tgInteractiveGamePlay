import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component19.module.css";
import { TAP_TO_CONTINUE } from "../constants";
const Component19: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/10");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/10");
  }, [navigate]);

  return (
    <div className={styles.div} onClick={onContainerClick}>
      <img className={styles.image113Icon} alt="" src="/image-11312@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper} onClick={onFrameContainer1Click}>
          <div className={styles.nextWrapper}>
            <div className={styles.next}>
              <span className={styles.opponentsChipIs}>{TAP_TO_CONTINUE}</span>
              <span className={styles.span}>›</span>
            </div>
          </div>
        </div>
        <div className={styles.primititvetooltip}>
          <img className={styles.topBeakIcon} alt="" src="/top-beak10.svg" />
          <div className={styles.horizontal}>
            <div className={styles.opponentsChipIsContainer}>
              <span className={styles.opponentsChipIs}>
                Opponent’s chip is represented by
              </span>
              <span className={styles.span1}>{` `}</span>
              <b>blue color</b>
            </div>
          </div>
          <img
            className={styles.bottomBeakIcon}
            alt=""
            src="/bottom-beak13.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Component19;
