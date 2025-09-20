import { formatTime } from "@/utils/formatTime";

import styles from "./timeDisplay.module.css";

interface TimeDisplayProps {
  from: string;
  to: string;
}

export const TimeDisplay: React.FC<TimeDisplayProps> = ({ from, to }) => {
  return formatTime(from) === "Invalid DateTime" ||
    formatTime(to) === "Invalid DateTime" ? (
    <p className={styles.timeDisplay}>{`Invalid DateTimes provided`}</p>
  ) : (
    <p className={styles.timeDisplay}>{`${formatTime(from)} - ${formatTime(
      to
    )}`}</p>
  );
};
