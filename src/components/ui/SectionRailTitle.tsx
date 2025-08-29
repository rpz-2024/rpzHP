import type { PropsWithChildren, ReactElement } from "react";

export type SectionRailTitleProps = PropsWithChildren;

export function SectionRailTitle({
	children,
}: SectionRailTitleProps): ReactElement {
	return (
		<div className="hidden lg:flex flex-col items-center justify-center pt-12 w-full">
			<span className="text-red-700 font-pixel font-extrabold tracking-[0.08em] text-[24px] xl:text-[28px] leading-none text-center mb-8">
				{children}
			</span>
		</div>
	);
}
