import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type FormFieldProps = {
  id: string;
  label: string;
  hint?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function FormInput({ id, label, hint, className, ...props }: FormFieldProps) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-1 block text-sm font-medium text-neutral-900">{label}</span>
      <input id={id} className={cn("input-field", className)} {...props} />
      {hint ? <span className="mt-1 block text-xs text-neutral-700">{hint}</span> : null}
    </label>
  );
}

type FormTextAreaProps = {
  id: string;
  label: string;
  hint?: string;
  className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function FormTextArea({ id, label, hint, className, ...props }: FormTextAreaProps) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-1 block text-sm font-medium text-neutral-900">{label}</span>
      <textarea id={id} className={cn("input-field min-h-28", className)} {...props} />
      {hint ? <span className="mt-1 block text-xs text-neutral-700">{hint}</span> : null}
    </label>
  );
}
