import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component18.module.css";
const Component18: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImage113Click = useCallback(() => {
    navigate("/12");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.image114Parent}>
        <img className={styles.image114Icon} alt="" src="/image-1142@2x.png" />
        <img
          className={styles.image113Icon}
          alt=""
          src="/image-11311@2x.png"
          onClick={onImage113Click}
        />
      </div>
      <div className={styles.inner}>
        <div className={styles.gameTitlebarParent}>
          <div className={styles.gameTitlebar}>
            <div className={styles.gameTitlebarInner}>
              <div className={styles.mdiexitToAppWrapper}>
                <img
                  className={styles.mdiexitToAppIcon}
                  alt=""
                  src="/mdiexittoapp.svg"
                />
              </div>
            </div>
            <div className={styles.logoSvgWrapper}>
              <img className={styles.logoSvgIcon} alt="" src="/logo-svg.svg" />
            </div>
            <div className={styles.gameHints}>
              <div className={styles.gameHints1}>Game Hints</div>
              <div className={styles.frameParent}>
                <div className={styles.frameWrapper}>
                  <div className={styles.onWrapper}>
                    <div className={styles.on}>ON</div>
                  </div>
                </div>
                <div className={styles.groupChild} />
              </div>
            </div>
          </div>
          <div className={styles.emptyDivParent}>
            <div className={styles.emptyDiv} />
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.userPhotoParent}>
                  <img
                    className={styles.userPhotoIcon}
                    alt=""
                    src="/user-photo@2x.png"
                  />
                  <div className={styles.wrapper}>
                    <div className={styles.div1}>0</div>
                  </div>
                </div>
                <div className={styles.youWrapper}>
                  <div className={styles.you}>You</div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.userPhotoParent}>
                  <img
                    className={styles.userPhotoIcon}
                    alt=""
                    src="/user-photo1@2x.png"
                  />
                  <div className={styles.wrapper}>
                    <div className={styles.div1}>0</div>
                  </div>
                </div>
                <div className={styles.opponentWrapper}>
                  <div className={styles.opponent}>Opponent</div>
                </div>
              </div>
            </div>
            <div className={styles.emptyDiv}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupItem} />
                <div className={styles.groupInner} />
                <div className={styles.rectangleDiv} />
                <div className={styles.groupChild1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.primititvetooltip}>
        <img className={styles.topBeakIcon} alt="" src="/top-beak9.svg" />
        <div className={styles.horizontal}>
          <div className={styles.use2EyedContainer}>
            <p className={styles.use2EyedJokerCardToPlace}>
              <span
                className={styles.use2Eyed}
              >{`Use 2 Eyed Joker card to place your chip on `}</span>
              <b
                className={styles.anyEmptySlot}
              >{`any empty slot highlighted in green. `}</b>
            </p>
            <p className={styles.use2EyedJokerCardToPlace}>
              Tap on any highlighted card now.
            </p>
          </div>
        </div>
        <img
          className={styles.bottomBeakIcon}
          alt=""
          src="/bottom-beak12.svg"
        />
      </div>
    </div>
  );
};

export default Component18;
