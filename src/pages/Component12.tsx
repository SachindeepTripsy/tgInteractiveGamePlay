import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component12.module.css";
import { TAP_TO_CONTINUE } from "../constants";
const Component12: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/20");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/20");
  }, [navigate]);

  return (
    <div className={styles.div} onClick={onContainerClick}>
      <img className={styles.image113Icon} alt="" src="/sequence2Bg.png" />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper} onClick={onFrameContainer1Click}>
          <div className={styles.nextWrapper}>
            <div className={styles.next}>
              <span className={styles.youCan}>{TAP_TO_CONTINUE}</span>
              <span className={styles.span}>›</span>
            </div>
          </div>
        </div>
        <div className={styles.primititvetooltip}>
          <img className={styles.topBeakIcon} alt="" src="/top-beak3.svg" />
          <div className={styles.horizontal}>
            <div className={styles.youCanFormContainer}>
              <span className={styles.youCan}>{`You can `}</span>
              <b>form a sequence with just 2 chips</b>
              <span className={styles.youCan}>{` by using the `}</span>
              <b>trump card</b>
              <span className={styles.youCan}>
                {" "}
                as the 3rd chip of the sequence. This is possible horizontally,
                vertically and diagonally.
              </span>
            </div>
          </div>
          <img
            className={styles.bottomBeakIcon}
            alt=""
            src="/bottom-beak5.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Component12;
