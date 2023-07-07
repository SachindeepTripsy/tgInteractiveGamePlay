import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component14.module.css";
const Component14: FunctionComponent = () => {
  const navigate = useNavigate();

  const onClubClick = useCallback(() => {
    navigate("/17");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <img className={styles.image113Icon} alt="" src="/image-1137@2x.png" />
      <img
        className={styles.clubIcon}
        alt=""
        src="/club6.png"
        onClick={onClubClick}
      />
      <div className={styles.primititvetooltip}>
        <img className={styles.topBeakIcon} alt="" src="/top-beak5.svg" />
        <div className={styles.horizontal}>
          <div className={styles.placeYourChipContainer}>
            <b>Place your chip</b>
            <span className={styles.hereToCreate}>
              {" "}
              here to create sequence.
            </span>
          </div>
        </div>
        <img className={styles.bottomBeakIcon} alt="" src="/bottom-beak9.svg" />
      </div>
      <img
        className={styles.pointingFingerIcon}
        alt=""
        src="/pointing-finger3.svg"
      />
    </div>
  );
};

export default Component14;
