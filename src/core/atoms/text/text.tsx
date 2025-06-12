import { BaseProps } from "@/core/components/typing";

export interface TextProps extends BaseProps {
  text: string;
}

const Text = (props: TextProps) => {
  return (
    <p
      id={props.id ? `text-${props.id}` : undefined}
      className={props.className}
    >
      {props.text}
    </p>
  );
};

export default Text;
