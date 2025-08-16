"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type {
	AnchorHTMLAttributes,
	PropsWithChildren,
	ReactElement,
} from "react";

export type PillNavLinkProps = PropsWithChildren<
	AnchorHTMLAttributes<HTMLAnchorElement> & {
		href: string;
		active?: boolean;
	}
>;

export function PillNavLink({
	href,
	active,
	children,
	className = "",
	...rest
}: PillNavLinkProps): ReactElement {
	const pathname = usePathname();
	const isActive = active ?? pathname === href;

	return (
		<Link
			href={href}
			{...rest}
			className={`block rounded-full bg-red px-4 py-2 text-sm text-white shadow-sm transition hover:bg-[color-mix(in_srgb,var(--color-red),black_10%)] focus-visible:outline-red ${
				isActive ? "ring-2 ring-red/40 shadow-soft" : ""
			} ${className}`}
		>
			{children}
		</Link>
	);
}
