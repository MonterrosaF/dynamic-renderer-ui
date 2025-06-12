import Rating from "@/core/atoms/rating";
import { VStack, HStack } from "@/core/atoms/stack";
import Text from "@/core/atoms/text";
import Title from "@/core/atoms/title";
import React, { JSX, ReactNode } from "react";
import {
  PropsMap,
  ComponentConfig,
  DynamicProductCardProps,
  VStackContainerProps,
  HStackContainerProps,
} from "../typing";
import Image from "@/core/atoms/image";
import Price from "@/core/atoms/price";
import Divider from "@/core/atoms/divider";
import Icon from "@/core/atoms/icon";
import ProductCard, { ProductCardProps } from "@/core/atoms/product-card";

type ComponentRenderer = (props: PropsMap) => JSX.Element | null;

function mapComponent<T extends PropsMap>(Component: React.FC<T>) {
  const Comp = (props: PropsMap) => <Component {...(props as T)} />;
  return Comp;
}

const componentMap: Record<string, ComponentRenderer> = {
  title: mapComponent(Title),
  subtitle: mapComponent(Title),
  description: mapComponent(Text),
  oldPrice: mapComponent(Text),
  discount: mapComponent(Text),
  installments: mapComponent(Text),
  shipping: mapComponent(Text),
  badge: mapComponent(Text),
  otherPrice: mapComponent(Text),
  price: mapComponent(Price),
  rating: mapComponent(Rating),
  image: mapComponent(Image),
  vstack: (props) => {
    const { children, ...rest } = props as VStackContainerProps;
    return (
      <VStack {...rest}>
        {Array.isArray(children) ? (
          children.map((child, i) => (
            <RenderComponent key={i} component={child} />
          ))
        ) : (
          <RenderComponent component={children} />
        )}
      </VStack>
    );
  },
  hstack: (props) => {
    const { children, ...rest } = props as HStackContainerProps;
    return (
      <HStack {...rest}>
        {Array.isArray(children) ? (
          children.map((child, i) => (
            <RenderComponent key={i} component={child} />
          ))
        ) : (
          <RenderComponent component={children} />
        )}
      </HStack>
    );
  },
  divider: mapComponent(Divider),
  icon: mapComponent(Icon),
  productCard: (props) => {
    const { children, ...rest } = props as DynamicProductCardProps;

    return (
      <ProductCard {...(rest as ProductCardProps)}>
        {Array.isArray(children) ? (
          children.map((child, i) => (
            <RenderComponent key={i} component={child} />
          ))
        ) : (
          <RenderComponent component={children} />
        )}
      </ProductCard>
    );
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isComponentConfig(obj: any): obj is ComponentConfig {
  return obj && typeof obj === "object" && "type" in obj && "props" in obj;
}

export const RenderComponent = ({
  component,
}: {
  component: ComponentConfig | ReactNode;
}) => {
  if (!isComponentConfig(component)) {
    if (
      component === null ||
      component === undefined ||
      typeof component === "string" ||
      typeof component === "number" ||
      typeof component === "boolean" ||
      React.isValidElement(component)
    ) {
      return <>{component}</>;
    }
    console.error("Invalid React child:", component);
    return null;
  }

  const { type, props } = component;
  const Renderer = componentMap[type];
  return Renderer ? Renderer(props) : null;
};
