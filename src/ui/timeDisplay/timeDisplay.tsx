import { formatTime } from "@/utils/formatTime";

import styles from "./timeDisplay.module.css";

interface TimeDisplayProps {
  from: string;
  to: string;
}

export const TimeDisplay: React.FC<TimeDisplayProps> = ({ from, to }) => {
  return (
    <p className={styles.timeDisplay}>{`${formatTime(from)} - ${formatTime(
      to
    )}`}</p>
  );
};
