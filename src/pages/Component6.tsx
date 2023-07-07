import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component6.module.css";
import { TAP_TO_CONTINUE } from "../constants";
const Component6: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  return (
    <div className={styles.div} onClick={onContainerClick}>
      <img className={styles.image113Icon} alt="" src="/dottedCard.png" />
      <div className={styles.inner}>
        <div className={styles.dropWrapper}>
          <b className={styles.drop}>Drop</b>
        </div>
      </div>
      <div className={styles.primititvetooltipParent}>
        <div className={styles.primititvetooltip}>
          <img className={styles.topBeakIcon} alt="" src="/top-beak3.svg" />
          <div className={styles.horizontal}>
            <div className={styles.cardsInTheseContainer}>
              <span>{`Cards in these slots can `}</span>
              <b>make a sequence by connecting with the central trump card</b>
              <span>. Now let's see if your hand has cards that connect.</span>
            </div>
          </div>
          <img
            className={styles.bottomBeakIcon}
            alt=""
            src="/bottom-beak4.svg"
          />
        </div>
        <div className={styles.frameWrapper} onClick={onFrameContainer3Click}>
          <div className={styles.nextWrapper}>
            <div className={styles.drop}>
              <span className={styles.next1}>{TAP_TO_CONTINUE}</span>
              <span className={styles.span}>›</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component6;
