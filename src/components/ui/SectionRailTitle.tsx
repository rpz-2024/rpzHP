type Props = { children: React.ReactNode };

export default function SectionRailTitle({ children }: Props) {
	return (
		<div className="hidden lg:flex items-start justify-center pt-12">
			<span className="text-red-700 font-extrabold tracking-[0.08em] writing-vertical text-[24px] xl:text-[28px] leading-none mr-4">
				{children}
			</span>
		</div>
	);
}
