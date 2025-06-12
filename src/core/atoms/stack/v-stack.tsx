import { createElement, HTMLAttributes } from "react";
import { Align1, Align2 } from "./typing";
import cn from "classnames";
import { BaseProps } from "@/core/components/typing";

interface BaseVStackProps extends BaseProps {
  as?: keyof HTMLElementTagNameMap;
  valign?: Align1;
  halign?: Align2;
  reverse?: boolean;
}

export interface VStackProps<Tag extends keyof HTMLElementTagNameMap>
  extends BaseVStackProps,
    HTMLAttributes<HTMLElementTagNameMap[Tag]> {}

function VStack<T extends keyof HTMLElementTagNameMap = "div">({
  as = "div",
  halign = "start",
  valign = "start",
  reverse = false,
  ...props
}: VStackProps<T>) {
  return createElement(as, {
    ...props,
    className: cn(
      "flex flex-col",
      {
        "flex-col-reverse": reverse,

        "justify-start": valign === "start",
        "justify-center": valign === "center",
        "justify-between": valign === "between",
        "justify-around": valign === "around",
        "justify-end": valign === "end",

        "items-start": halign === "start",
        "items-center": halign === "center",
        "items-end": halign === "end",
      },
      props.className
    ),
  });
}

export default VStack;
