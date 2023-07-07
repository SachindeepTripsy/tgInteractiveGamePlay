import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component7.module.css";
import { TAP_TO_CONTINUE } from "../constants";
const Component7: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/25");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/25");
  }, [navigate]);

  return (
    <div className={styles.div} onClick={onContainerClick}>
      <img className={styles.image113Icon} alt="" src="/image-1133@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper} onClick={onFrameContainer1Click}>
          <div className={styles.nextWrapper}>
            <div className={styles.next}>
              <span className={styles.next1}>{TAP_TO_CONTINUE}</span>
              <span className={styles.span}>›</span>
            </div>
          </div>
        </div>
        <div className={styles.primititvetooltip}>
          <img className={styles.topBeakIcon} alt="" src="/top-beak3.svg" />
          <div className={styles.horizontal}>
            <div className={styles.whenANewContainer}>
              <b>When a new game starts</b>
              <span>{` `}</span>
              <b>analyze the cards</b>
              <span>
                {" "}
                in your hand to see if they put you at advantage or disadvantage
                early.
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

export default Component7;
