import { createElement, ForwardedRef, forwardRef, HTMLAttributes } from "react";
import { Align1, Align2 } from "./typing";
import cn from "classnames";
import { BaseProps } from "@/core/components/typing";

interface BaseHStackProps extends BaseProps {
  as?: keyof HTMLElementTagNameMap;
  halign?: Align1;
  valign?: Align2;
  reverse?: boolean;
}

export interface HStackProps<Tag extends keyof HTMLElementTagNameMap>
  extends BaseHStackProps,
    HTMLAttributes<HTMLElementTagNameMap[Tag]> {}

const HStack = forwardRef(function HStack<
  Element extends HTMLElement,
  Tag extends keyof HTMLElementTagNameMap = "div"
>(
  {
    as = "div",
    halign = "start",
    valign = "start",
    reverse = false,
    ...props
  }: HStackProps<Tag>,
  ref: ForwardedRef<Element>
) {
  return createElement(as, {
    ...props,
    ref,
    style: {
      ...props.style,
    },
    className: cn(
      "flex flex-row",
      {
        "flex-row-reverse": reverse,
        "justify-start": halign === "start",
        "justify-center": halign === "center",
        "justify-between": halign === "between",
        "justify-around": halign === "around",
        "justify-end": halign === "end",
        "items-start": valign === "start",
        "items-center": valign === "center",
        "items-end": valign === "end",
        "items-stretch": valign === "stretch",
      },
      props.className
    ),
  });
});

export default HStack;
