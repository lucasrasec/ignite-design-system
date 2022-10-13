import { clsx } from "clsx";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  label: string;
}

export function Text({ size = "md", label }: TextProps) {
  return (
    <span
      className={clsx("text-gray-100", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      })}
    >
      {label}
    </span>
  );
}
