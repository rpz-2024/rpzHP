import type {
	ErrorMessageProps,
	FieldRowProps,
	RequiredPillProps,
} from "@/types/contact";

export const RequiredPill = ({ className = "" }: RequiredPillProps) => (
	<span
		className={`ml-2 inline-flex items-center rounded-full bg-red-600 text-white text-[11px] px-2 py-0.5 ${className}`}
	>
		必須
	</span>
);

export const FieldRow = ({ children, className = "" }: FieldRowProps) => (
	<div className={`space-y-1.5 ${className}`}>{children}</div>
);

export const ErrorMessage = ({
	id,
	message,
	className = "",
}: ErrorMessageProps) => (
	<p id={id} className={`text-sm text-red-600 ${className}`}>
		{message}
	</p>
);
