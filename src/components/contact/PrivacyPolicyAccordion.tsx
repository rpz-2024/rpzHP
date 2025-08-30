import { useEffect, useState } from "react";
import { privacyPolicyContent } from "@/data/contact";
import type { PrivacyPolicyAccordionProps } from "@/types/contact";
import { ErrorMessage } from "./FormComponents";

export const PrivacyPolicyAccordion = ({
	register,
	errors,
}: PrivacyPolicyAccordionProps) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<div className="space-y-4">
			<button
				type="button"
				onClick={() => setIsExpanded(!isExpanded)}
				className="cursor-pointer w-full flex items-center justify-between p-4 text-left font-medium text-stone-700 bg-stone-50 rounded-2xl hover:bg-stone-100 transition focus:outline-none focus:ring-2 focus:ring-red-600"
				aria-expanded={isExpanded}
				aria-controls="privacy-content"
			>
				<span>「{privacyPolicyContent.title}」について確認</span>
				<svg
					className={`w-5 h-5 transform transition-transform ${
						isExpanded ? "rotate-45" : ""
					}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-label={
						isMounted
							? `プライバシーポリシーの詳細を${isExpanded ? "閉じる" : "開く"}`
							: "プライバシーポリシーの詳細を開く"
					}
				>
					<title>
						{isMounted
							? `プライバシーポリシーの詳細を${isExpanded ? "閉じる" : "開く"}`
							: "プライバシーポリシーの詳細を開く"}
					</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 6v6m0 0v6m0-6h6m-6 0H6"
					/>
				</svg>
			</button>

			<div
				id="privacy-content"
				className={`overflow-hidden transition-all duration-300 ${
					isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
					<div className="text-sm text-stone-600 leading-relaxed space-y-2">
						<p>{privacyPolicyContent.description}</p>
						<ul className="list-disc pl-6 space-y-1">
							{privacyPolicyContent.purposes.map((purpose) => (
								<li key={purpose}>{purpose}</li>
							))}
						</ul>
						<p>{privacyPolicyContent.notice}</p>
					</div>
				</div>
			</div>

			{/* 同意チェックボックス */}
			<div className="space-y-2">
				<label
					htmlFor="privacy-agreement"
					className="flex items-start cursor-pointer hover:bg-stone-50 rounded-lg p-2 transition"
				>
					<input
						{...register("privacyAgreement")}
						type="checkbox"
						id="privacy-agreement"
						className="cursor-pointer mt-1 rounded border-stone-300 text-red-600 focus:ring-red-600 accent-red-600"
						aria-invalid={errors.privacyAgreement ? "true" : "false"}
						aria-describedby={
							errors.privacyAgreement ? "privacy-agreement-error" : undefined
						}
					/>
					<span className="ml-3 text-sm text-stone-700">同意しました</span>
				</label>
				{errors.privacyAgreement && (
					<ErrorMessage
						id="privacy-agreement-error"
						message={errors.privacyAgreement.message || ""}
						className="ml-8"
					/>
				)}
			</div>
		</div>
	);
};
