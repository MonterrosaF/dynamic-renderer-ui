import { BaseProps } from "@/core/components/typing";

export interface ImageProps extends BaseProps {
  src: string;
  alt: string;
}

const Image = (props: ImageProps) => {
  // TODO: change to next/image for better performance
  return <img src={props.src} alt={props.alt} className={props.className} />;
};

export default Image;
