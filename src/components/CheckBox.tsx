import { clsx } from "clsx";
import * as CheckBoxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import "../styles/global.css";

export interface CheckBoxProps {}

export function CheckBox(props: CheckBoxProps) {
  return (
    <CheckBoxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded">
      <CheckBoxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckBoxPrimitive.Indicator>
    </CheckBoxPrimitive.Root>
  );
}
