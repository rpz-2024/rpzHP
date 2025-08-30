import type { SubmitButtonProps } from "@/types/contact";

export const SubmitButton = ({
	isValid,
	isSubmitting,
	privacyAgreement,
}: SubmitButtonProps) => {
	return (
		<div className="flex justify-center pt-6">
			<button
				type="submit"
				disabled={!isValid || !privacyAgreement || isSubmitting}
				className="cursor-pointer inline-flex items-center rounded-full bg-[#D30000] text-white px-8 py-3 font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110 active:brightness-90 transition-all"
			>
				{isSubmitting ? "送信中..." : "送信する"}
			</button>
		</div>
	);
};
