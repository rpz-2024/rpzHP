import type { PropsWithChildren } from "react";

export type ContainerProps = PropsWithChildren;

export function Container({ children }: ContainerProps) {
	return (
		<div className="mx-auto w-full max-w-[1360px] xl:max-w-[1440px] px-4 lg:px-6">
			{children}
		</div>
	);
}
