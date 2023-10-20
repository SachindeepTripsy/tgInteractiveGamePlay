import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component13.module.css";
import { TAP_TO_CONTINUE } from "../constants";
const Component13: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/18");
  }, [navigate]);

  const onFrameContainer8Click = useCallback(() => {
    navigate("/18");
  }, [navigate]);

  return (
    <div className={styles.div} onClick={onContainerClick}>
      <img className={styles.image113Icon} alt="" src="/image-1136@2x.png" />
      <img className={styles.child} alt="" src="/group-37371.png" />
      <div className={styles.unionParent}>
        <img className={styles.unionIcon} alt="" src="/union.svg" />
        <div className={styles.addACardFromClosedDeckParent}>
          <b className={styles.addACard}>ADD A CARD FROM CLOSED DECK</b>
          <div className={styles.wrapper}>
            <b className={styles.addACard}>00:15</b>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.groupWrapper}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.groupItem} />
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.heartParent}>
              <img className={styles.heartIcon} alt="" src="/heart2.svg" />
              <img className={styles.heartIcon} alt="" src="/club4.svg" />
              <img className={styles.heartIcon} alt="" src="/club5.svg" />
              <img className={styles.heartIcon} alt="" src="/diamond2.svg" />
            </div>
          </div>
        </div>
        <div className={styles.closedDeckParent}>
          <b className={styles.closedDeck}>CLOSED DECK</b>
          <img
            className={styles.closedDeckIcon}
            alt=""
            src="/closed-deck.svg"
          />
        </div>
      </div>
      <div className={styles.primititvetooltipParent}>
        <div className={styles.primititvetooltip}>
          <img className={styles.topBeakIcon} alt="" src="/top-beak4.svg" />
          <div className={styles.horizontal}>
            <div className={styles.youHaveNowContainer}>
              <p className={styles.youHaveNowCreated1Sequenc}>
                <span>{`You have now created `}</span>
                <b className={styles.sequence}>a sequence</b>
                <span className={styles.sequence}>{`. `}</span>
              </p>
              <p className={styles.youHaveNowCreated1Sequenc}>
                <span className={styles.sequence}>Create</span>
                <b> 1 sequences</b>
                <span className={styles.sequence}>{` before your `}</span>
              </p>
              <p className={styles.youHaveNowCreated1Sequenc}>
                <span className={styles.sequence}>opponent to </span>
                <b className={styles.sequence}>win the game</b>
                <span className={styles.sequence}>.</span>
              </p>
            </div>
          </div>
          <img
            className={styles.bottomBeakIcon}
            alt=""
            src="/bottom-beak6.svg"
          />
        </div>
        <div className={styles.frameContainer} onClick={onFrameContainer8Click}>
          <div className={styles.nextWrapper}>
            <div className={styles.addACard}>
              <span className={styles.next1}>{TAP_TO_CONTINUE}</span>
              <span className={styles.span2}>›</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component13;
