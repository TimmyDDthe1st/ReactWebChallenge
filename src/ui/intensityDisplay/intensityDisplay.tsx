import { responseData } from "@/api/types/mockResponse";
import { TrendingUp, Eye, BarChart2 } from "react-feather";
import styles from "./intensityDisplay.module.css";

interface IntensityDisplayProps {
  intensity: responseData["intensity"];
}

const iconSize = 80;
const iconBlue = "#01bfff";
const iconGreen = "#3bb371";

const indexColors: { [key: string]: string } = {
  veryLow: iconBlue,
  low: iconGreen,
  moderate: "#5f9ea0",
  high: "#ff6447",
  veryHigh: "#8b0000",
};

export const IntensityDisplay: React.FC<IntensityDisplayProps> = ({
  intensity: { forecast, actual, index },
}) => {
  return (
    <ul className={styles.container}>
      <li>
        <TrendingUp color={iconBlue} size={iconSize} />
        <p>{forecast}</p>
      </li>
      <li>
        <Eye color={iconGreen} size={iconSize} />
        <p>{actual}</p>
      </li>
      <li>
        <BarChart2 color={indexColors[index]} size={iconSize} />
        <p>{index}</p>
      </li>
    </ul>
  );
};
