import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost"
};

export function Button({ className, variant = "primary", type = "button", ...props }: ButtonProps) {
  return <button type={type} className={cn("btn", variantClass[variant], className)} {...props} />;
}
