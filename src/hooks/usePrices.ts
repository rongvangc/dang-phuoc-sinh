import axios from "axios";
import { useEffect, useMemo, useState } from "react";

export type Currency = {
  currency: string;
  date: Date;
  price: number;
  icon?: string;
};

const usePrices = () => {
  const [prices, setPrices] = useState<Currency[]>([]);

  const pricesMapping = useMemo(
    () =>
      prices?.map((price) => {
        const iconPath = `../../public/tokens/${price.currency}.svg`;
        return {
          ...price,
          icon: iconPath,
        };
      }),
    [prices]
  );

  useEffect(() => {
    axios
      .get("https://interview.switcheo.com/prices.json")
      .then((response) => {
        const currencyMap = new Map();
        response.data.forEach((item: Currency) => {
          if (!currencyMap.has(item.currency)) {
            currencyMap.set(item.currency, item);
          }
        });
        setPrices(Array.from(currencyMap.values()));
      })
      .catch((error) => console.error("Fetching prices failed", error));
  }, []);

  return pricesMapping;
};

export default usePrices;
