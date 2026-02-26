import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";

import { cn } from "~/lib/utils";

type ButtonVariant = "primary" | "glass" | "light" | "outline";
type ButtonSize = "md" | "lg";

type CommonButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type AnchorButtonProps = CommonButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = CommonButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all active:scale-95";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "group relative overflow-hidden bg-brand-primary text-white shadow-[0_10px_40px_-10px_rgba(2,85,209,0.5)] hover:scale-105",
  glass:
    "border border-white/20 bg-white/10 text-white backdrop-blur-md hover:scale-105 hover:bg-white/20",
  light: "bg-white text-[#0255D1] shadow-lg hover:scale-105 hover:bg-white/90",
  outline:
    "border border-[#0255D1]/20 text-[#0255D1] font-medium hover:text-[#0C4C78]",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-6 py-3",
  lg: "px-10 py-5",
};

function isAnchorProps(props: ButtonProps): props is AnchorButtonProps {
  return typeof (props as AnchorButtonProps).href === "string";
}

export function Button(props: AnchorButtonProps): ReactElement;
export function Button(props: NativeButtonProps): ReactElement;
export function Button(props: ButtonProps) {
  const { children, className, variant = "primary", size = "lg" } = props;
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (isAnchorProps(props)) {
    const { children: _children, className: _className, variant: _variant, size: _size, ...anchorProps } = props;
    return (
      <a {...anchorProps} className={classes}>
        {children}
      </a>
    );
  }

  const { children: _children, className: _className, variant: _variant, size: _size, ...buttonProps } = props;
  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
