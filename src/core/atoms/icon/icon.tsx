import { BaseProps } from "@/core/components/typing";
import cn from "classnames";
import * as icons from "@heroicons/react/outline";

export interface IconProps extends BaseProps {
  icon: keyof typeof icons;
  className?: string;
}

export const Icon = ({ className, icon }: IconProps) => {
  const IconComponent = icons[icon];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={cn(className)} />;
};

export default Icon;
