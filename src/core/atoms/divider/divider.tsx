import { BaseProps } from "@/core/components/typing";
import cn from "classnames";

export interface DividerProps extends BaseProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export const Divider = ({
  className,
  orientation = "horizontal",
}: DividerProps) => {
  return (
    <div
      className={cn("bg-gray-200", className, {
        "w-full h-px": orientation === "horizontal",
        "w-px h-full": orientation === "vertical",
      })}
    />
  );
};

export default Divider;
