import { BaseProps } from "@/core/components/typing";

export interface PriceProps extends BaseProps {
  value: string;
  currencyType: "USD" | "EUR" | "COP" | "ARS" | "MXN" | "BRL";
}

const Price = (props: PriceProps) => {
  const currencySigns: Record<string, string> = {
    USD: "$",
    EUR: "€",
    COP: "₡",
    ARS: "$",
    MXN: "$",
    BRL: "R$",
  };

  return (
    <p
      id={props.id ? `price-${props.id}` : undefined}
      className={props.className}
    >
      {`${currencySigns[props.currencyType]}${props.value}`}
    </p>
  );
};

export default Price;
