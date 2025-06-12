import { BaseProps } from "@/core/components/typing";
import cn from "classnames";
import { createElement, JSX } from "react";

export interface TitleProps extends BaseProps {
  text: string;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Title = ({
  id,
  text,
  variant,
  className = "text-black",
}: TitleProps): JSX.Element => {
  const getClassname = (textClass: string) => cn(textClass, className);

  const getProps = (textClass: string) => {
    return {
      ...(id ? { id: `title-${id}` } : {}),
      className: getClassname(textClass),
      children: text,
    };
  };

  return createElement(variant, getProps(`text-${variant}`));
};

export default Title;
