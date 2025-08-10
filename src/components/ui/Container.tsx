import type { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => (
	<div className="mx-auto w-full max-w-[1360px] xl:max-w-[1440px] px-4 lg:px-6">
		{children}
	</div>
);

export default Container;
