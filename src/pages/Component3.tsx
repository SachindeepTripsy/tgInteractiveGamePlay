import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component3.module.css";
const Component3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer4Click = useCallback(() => {
    navigate("/30");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <img className={styles.image114Icon} alt="" src="/image-114@2x.png" />
      <img className={styles.image117Icon} alt="" src="/image-117@2x.png" />
      <div className={styles.inner} onClick={onFrameContainer4Click}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.continueWrapper}>
                <div className={styles.continue}>Continue</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.pointingFingerIcon}
        alt=""
        src="/pointing-finger.svg"
      />
    </div>
  );
};

export default Component3;
