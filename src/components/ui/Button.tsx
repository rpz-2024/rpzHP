import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<
	ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" }
>;

const Button = ({
	children,
	className = "",
	variant = "primary",
	...rest
}: Props) => {
	const base =
		"inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium tracking-wide focus:outline-2 focus:outline-offset-2 transition-colors";
	const styles =
		variant === "primary"
			? "bg-red text-white hover:bg-[color-mix(in_srgb,var(--color-red),black_10%)] focus:outline-red"
			: "bg-transparent text-text hover:bg-line/40 focus:outline-red";
	return (
		<button className={`${base} ${styles} ${className}`} {...rest}>
			{children}
		</button>
	);
};

export default Button;
