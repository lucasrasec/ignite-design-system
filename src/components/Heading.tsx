import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";
import "../styles/global.css";

export interface HeadingProps {
  size?: "sm" | "md" | "lg";
  child: ReactNode;
  asChild?: boolean;
}

export function Heading({
  size = "md",
  child,
  asChild: asChildren,
}: HeadingProps) {
  const Comp = asChildren ? Slot : "h2";

  return (
    <Comp
      className={clsx("text-gray-100 font-bold font-sans", {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
      })}
    >
      {child}
    </Comp>
  );
}
