import usePrices, { Currency } from "../hooks/usePrices";

import { ArrowLeftRight, CheckIcon } from "lucide-react";
import { ChangeEvent, useState } from "react";
import CurrencyImg from "../assets/images/currency.jpg";
import { Button } from "../components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../components/ui/command";
import { Input } from "../components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { cn } from "../lib/utils";

const ProblemTwo = () => {
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const [fromValue, setFromValue] = useState<Currency | null>(null);
  const [toValue, setToValue] = useState<Currency | null>(null);
  const [amount, setAmount] = useState<string>("");
  const prices: Currency[] = usePrices();

  const filteredPrices = prices?.filter(
    (price) =>
      ![
        fromValue?.currency?.toLowerCase(),
        toValue?.currency?.toLowerCase(),
      ].includes(price?.currency?.toLowerCase())
  );

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericRegex = /^[0-9]*$/;

    if (numericRegex.test(inputValue)) {
      setAmount(inputValue);
    }
  };

  const handleSwap = () => {
    setToValue(fromValue);
    setFromValue(toValue);
  };

  const exchangeAmount =
    (+amount / (fromValue?.price ?? 0)) * (toValue?.price ?? 0);

  return (
    <div className="p-6 space-y-4 grid justify-center bg-gray-100">
      <div className="w-[360px] flex flex-col space-y-4 items-center shadow-lg p-8 bg-white rounded-lg">
        <h3 className="font-bold text-purple-600 text-2xl">
          Currency converter
        </h3>

        <div>
          <img height={140} width={140} src={CurrencyImg} alt="" />
        </div>

        <div className="mb-4 mt-12 w-full">
          <label htmlFor="amount" className="text-sm font-medium">
            Enter amount
          </label>
          <Input
            id="amount"
            className="mt-2"
            value={amount}
            placeholder="1000"
            onChange={handleChangeAmount}
          />
        </div>

        <div className="flex w-full justify-between gap-4 items-center">
          <Popover open={openFrom} onOpenChange={setOpenFrom}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openFrom}
                className="w-[120px] justify-between"
              >
                {fromValue ? (
                  <div className="flex items-center justify-between gap-2 font-medium">
                    <img className="w-5 h-5" src={fromValue?.icon} />
                    {fromValue?.currency}
                  </div>
                ) : (
                  "From"
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search..." className="h-9" />
                <CommandEmpty>No currency found.</CommandEmpty>
                <CommandGroup className="max-h-[300px] overflow-auto">
                  {filteredPrices?.map((framework) => (
                    <CommandItem
                      key={framework?.currency}
                      value={framework?.currency}
                      onSelect={(currentValue) => {
                        setFromValue(
                          framework?.currency?.toLowerCase() === currentValue
                            ? framework
                            : null
                        );
                        setOpenFrom(false);
                      }}
                    >
                      <div className="flex items-center justify-between gap-4 font-medium">
                        <img
                          className="w-6 h-6"
                          src={framework?.icon}
                          alt={framework?.currency}
                        />
                        {framework?.currency}
                      </div>
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          fromValue?.currency === framework?.currency
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>

          <ArrowLeftRight className="w-4 cursor-pointer" onClick={handleSwap} />

          <Popover open={openTo} onOpenChange={setOpenTo}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openTo}
                className="w-[120px] justify-between"
              >
                {toValue ? (
                  <div className="flex items-center justify-between gap-2 font-medium">
                    <img className="w-5 h-5" src={toValue?.icon} />
                    {toValue?.currency}
                  </div>
                ) : (
                  "To"
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search..." className="h-9" />
                <CommandEmpty>No currency found.</CommandEmpty>
                <CommandGroup className="max-h-[300px] overflow-auto">
                  {filteredPrices?.map((framework) => (
                    <CommandItem
                      key={framework?.currency}
                      value={framework?.currency}
                      onSelect={(currentValue) => {
                        setToValue(
                          framework?.currency?.toLowerCase() === currentValue
                            ? framework
                            : null
                        );
                        setOpenTo(false);
                      }}
                    >
                      <div className="flex items-center justify-between gap-4 font-medium">
                        <img
                          className="w-6 h-6"
                          src={framework?.icon}
                          alt={framework?.currency}
                        />
                        {framework?.currency}
                      </div>
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          toValue?.currency?.toLowerCase() ===
                            framework?.currency?.toLowerCase()
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        {/* <Button className="w-full" disabled={!validButton}>
          EXCHANGE AMOUNT
        </Button> */}
        <div className="mb-4 mt-12 w-full">
          <div>
            <Input
              id="exchangeAmount"
              className="mt-2"
              value={
                isNaN(+exchangeAmount?.toFixed(3))
                  ? 0
                  : exchangeAmount?.toFixed(3)
              }
              onChange={handleChangeAmount}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemTwo;
