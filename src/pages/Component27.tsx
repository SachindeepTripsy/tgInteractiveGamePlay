import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component27.module.css";
import { TAP_TO_CONTINUE } from "../constants";
const Component27: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  return (
    <div className={styles.div} onClick={onContainerClick}>
      <img className={styles.image113Icon} alt="" src="/image-11318@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper} onClick={onFrameContainer1Click}>
          <div className={styles.nextWrapper}>
            <div className={styles.next}>
              <span className={styles.beforeYour}>{TAP_TO_CONTINUE}</span>
              <span className={styles.span}>›</span>
            </div>
          </div>
        </div>
        <div className={styles.primititvetooltip}>
          <img className={styles.topBeakIcon} alt="" src="/top-beak2.svg" />
          <div className={styles.horizontal}>
            <div className={styles.youCanDropContainer}>
              <p className={styles.youCanDropFromThisGameBe}>
                <span className={styles.span}>You can</span>
                <b className={styles.dropFromThis}>{` drop from this game `}</b>
                <span className={styles.beforeYour}>before your</span>
              </p>
              <p className={styles.firstTurnIf}>
                first turn if your hand is not good.
              </p>
            </div>
          </div>
          <img
            className={styles.bottomBeakIcon}
            alt=""
            src="/bottom-beak19.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Component27;
