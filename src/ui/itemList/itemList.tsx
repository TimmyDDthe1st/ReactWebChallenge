import { Card } from "../card/card";
import { TimeDisplay } from "../timeDisplay/timeDisplay";
import { useGetMockData } from "@/hooks/useGetMockData";
import styles from "./itemList.module.css";
import { IntensityDisplay } from "../intensityDisplay/intensityDisplay";

export const ItemList: React.FC = () => {
  const { data } = useGetMockData();

  console.log(data);

  return data ? (
    <>
      {data.map(({ from, to, intensity }, index) => (
        <Card key={index}>
          <div className={styles.itemList}>
            <TimeDisplay from={from} to={to} />
            <IntensityDisplay intensity={intensity} />
          </div>
        </Card>
      ))}
    </>
  ) : (
    <div>Loading...</div>
  );
};
