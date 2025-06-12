"use client";

import { ComponentConfig } from "./typing";
import { RenderComponent } from "./component-factory/component-factory";

export const DynamicRenderer = ({ config }: { config: ComponentConfig[] }) => {
  return (
    <div className="space-y-6">
      {config.map((component, index) => {
        return <RenderComponent key={index} component={component} />;
      })}
    </div>
  );
};
