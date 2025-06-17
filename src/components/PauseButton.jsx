import styles from "./PauseButton.module.css";

const Pause = ({ onOpenSlideShow }) => {
  return (
    <>
      <button onClick={onOpenSlideShow} className={styles.pauseButton}>
        <img
          src="/reddressstoriesmb/assets/icons/smudging_no_bg.png"
          alt="I Need a Minute Button"
        />
        <span className={styles.caption}>I Need a Minute</span>
      </button>
    </>
  );
};

export default Pause;
