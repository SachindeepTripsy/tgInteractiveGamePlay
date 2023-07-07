import React from 'react'
import styles from './CompletedBasic.module.css'
import { useNavigate } from 'react-router-dom'
import { PLAY_PRACTICE_GAME } from '../constants';

const CompletedBasic = () => {
  const navigate = useNavigate();

  function sendEvent() {
    
    const event = { eventName: PLAY_PRACTICE_GAME };
    const message = JSON.stringify(event);
    window.postMessage(message);
  }
  return (
    <div className={styles.div}>
    <img className={styles.image113Icon} alt="" src="/completedBasic.png" />
      <img src="./again.png" alt="" className={styles.again} onClick={() => navigate('/')} />
      <img src="./nextIcon.png" alt="" className={styles.next2} onClick={() => navigate('/24')} />
      <img src="./nextIcon.png" alt="" className={styles.next1} onClick={() => sendEvent()} />
  </div>
  )
}

export default CompletedBasic