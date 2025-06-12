import { DividerProps } from "../atoms/divider";
import { IconProps } from "../atoms/icon";
import { PriceProps } from "../atoms/price";
import { ProductCardProps } from "../atoms/product-card";
import { RatingProps } from "../atoms/rating";
import { HStackProps, VStackProps } from "../atoms/stack";
import { TitleProps } from "../atoms/title";

export interface BaseProps {
  id?: string;
  className?: string;
}

export interface ImageProps extends BaseProps {
  src: string;
  alt: string;
}

export interface VStackContainerProps
  extends Omit<VStackProps<"div">, "children"> {
  children: ComponentConfig[];
}

export interface HStackContainerProps
  extends Omit<HStackProps<"div">, "children"> {
  children: ComponentConfig[];
}

interface WishlistIconProps {
  showOnHover: boolean;
  icon: string;
  addToWishlist: boolean;
  productId: string;
}

export type PropsMap =
  | TitleProps
  | RatingProps
  | ImageProps
  | VStackContainerProps
  | HStackContainerProps
  | WishlistIconProps
  | DividerProps
  | IconProps
  | PriceProps
  | ProductCardProps
  | BaseProps;

export type DynamicProductCardProps = Omit<ProductCardProps, "children"> & {
  children: ComponentConfig | ComponentConfig[];
};

export interface ComponentConfig {
  type: string;
  props: PropsMap;
}
