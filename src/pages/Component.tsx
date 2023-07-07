import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component.module.css";
import { TAP_TO_CONTINUE } from "../constants";
const Component: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/27");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/27");
  }, [navigate]);

  return (
    <div className={styles.div} onClick={onContainerClick}>
      <img className={styles.image113Icon} alt="" src="/dottedCard.png" />
      <img className={styles.heartIcon} alt="" src="/heart.png" />
      <img className={styles.clubIcon} alt="" src="/club.png" />

      <img className={styles.heartIcon1} alt="" src="/heart1.png" />

      <img className={styles.clubIcon1} alt="" src="/club1.png" />
      <img className={styles.image108Icon} alt="" src="/image-108@2x.png" />
      <img className={styles.image109Icon} alt="" src="/image-108@2x.png" />
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
          <img className={styles.topBeakIcon} alt="" src="/top-beak.svg" />
          <div className={styles.horizontal}>
            <div className={styles.theseTwoCardsContainer}>
              <span>{`These two `}</span>
              <b>cards in your hand</b>
              <span>{` fit in these slots to connect with the trump card. These cards are called `}</span>
              <b>connecting cards</b>
              <span>.</span>
            </div>
          </div>
          <img
            className={styles.bottomBeakIcon}
            alt=""
            src="/bottom-beak.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Component;
