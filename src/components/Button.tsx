import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";
import "../styles/global.css";

export interface ButtonProps {
  child: ReactNode;
  asChild?: boolean;
}

export function Button({ child, asChild: asChildren }: ButtonProps) {
  const Comp = asChildren ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"
      )}
    >
      {child}
    </Comp>
  );
}
