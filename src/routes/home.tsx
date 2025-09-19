import React from "react";
import { ItemList } from "@/ui/itemList/itemList";

export const HomePage: React.FC = () => {
  return (
    <div style={{ padding: 16 }}>
      <h1>Home</h1>
      <ItemList />
    </div>
  );
};
