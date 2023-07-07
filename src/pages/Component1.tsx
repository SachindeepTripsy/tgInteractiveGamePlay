import { FunctionComponent } from "react";
import styles from "./Component1.module.css";
import { useNavigate } from "react-router-dom";
const Component1: FunctionComponent = () => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/15");
  }
  return (
    <div className={styles.div} onClick={handleNavigate}>
      <img className={styles.image113Icon} alt="" src="/image-1131@2x.png" />
      <div className={styles.primititvetooltip}>
        <img className={styles.topBeakIcon} alt="" src="/top-beak1.svg" />
        <div className={styles.horizontal}>
          <div className={styles.youHaveRemovedContainer}>
            <span className={styles.youHave}>{`You have `}</span>
            <b>removed opponent’s chip</b>
            <span className={styles.youHave}> from here successfully!</span>
          </div>
        </div>
        <img className={styles.bottomBeakIcon} alt="" src="/bottom-beak1.svg" />
      </div>
    </div>
  );
};

export default Component1;
