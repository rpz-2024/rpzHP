type Props = { label: string; className?: string };

const SectionTitleVertical = ({ label, className = "" }: Props) => {
	return (
		<div
			aria-hidden
			className={`vertical-title font-serif text-[13px] text-subtext sm:text-base ${className}`}
		>
			{label}
		</div>
	);
};

export default SectionTitleVertical;
