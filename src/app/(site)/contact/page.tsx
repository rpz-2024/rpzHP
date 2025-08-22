"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// バリデーションスキーマ
const contactSchema = z.object({
	name: z
		.string()
		.min(2, "お名前は2文字以上で入力してください")
		.max(40, "お名前は40文字以内で入力してください"),
	furigana: z
		.string()
		.max(60, "ふりがなは60文字以内で入力してください")
		.refine(
			(val) => val === "" || /^[ひらがなー゙゚ゞ\s]*$/.test(val),
			"ふりがなはひらがなで入力してください",
		)
		.optional(),
	phone: z
		.string()
		.min(1, "電話番号は必須項目です")
		.regex(
			/^0\d{1,4}-?\d{1,4}-?\d{3,4}$/,
			"正しい電話番号の形式で入力してください",
		),
	email: z
		.string()
		.min(1, "メールアドレスは必須項目です")
		.email("正しいメールアドレスの形式で入力してください")
		.max(254, "メールアドレスは254文字以内で入力してください"),
	inquiryTypes: z
		.array(z.string())
		.min(1, "お問い合わせ種別を1つ以上選択してください"),
	content: z
		.string()
		.min(10, "お問い合わせ内容は10文字以上で入力してください")
		.max(1000, "お問い合わせ内容は1000文字以内で入力してください"),
	privacyAgreement: z
		.boolean()
		.refine((val) => val === true, "個人情報の取り扱いに同意してください"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// 小コンポーネント
const RequiredPill = () => (
	<span className="ml-2 inline-flex items-center rounded-full bg-red-600 text-white text-[11px] px-2 py-0.5">
		必須
	</span>
);

interface FieldRowProps {
	children: React.ReactNode;
	className?: string;
}

const FieldRow = ({ children, className = "" }: FieldRowProps) => (
	<div className={`space-y-1.5 ${className}`}>{children}</div>
);

export default function ContactPage() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isPrivacyExpanded, setIsPrivacyExpanded] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		watch,
		reset,
		setValue,
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
		mode: "onChange",
		defaultValues: {
			name: "",
			furigana: "",
			phone: "",
			email: "",
			inquiryTypes: [],
			content: "",
			privacyAgreement: false,
		},
	});

	const watchedValues = watch();

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true);

		// コンソールに出力
		console.log("フォーム送信データ:", data);

		// ダミーの送信処理
		await new Promise((resolve) => setTimeout(resolve, 1000));

		// アラート表示
		alert("送信しました（ダミー）");

		// フォームをリセット
		reset();
		setIsSubmitting(false);
	};

	const handleInquiryTypeChange = (value: string, checked: boolean) => {
		const currentTypes = watchedValues.inquiryTypes || [];
		if (checked) {
			setValue("inquiryTypes", [...currentTypes, value], {
				shouldValidate: true,
			});
		} else {
			setValue(
				"inquiryTypes",
				currentTypes.filter((type) => type !== value),
				{ shouldValidate: true },
			);
		}
	};

	const inquiryTypeOptions = [
		{ value: "company", label: "会社について" },
		{ value: "recruitment", label: "採用について" },
		{ value: "other", label: "その他" },
	];

	return (
		<main className="min-h-screen bg-stone-100/60 py-12 px-6">
			<div className="max-w-[900px] mx-auto">
				{/* ページヘッダー */}
				<div className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
						CONTACT
					</h1>
					<p className="text-xl text-stone-700 mb-8">お問い合わせ</p>
					<p className="text-stone-600">
						ご質問やお問い合わせがございましたら、こちらのフォームからお気軽にお送りください。
					</p>
				</div>

				{/* フォームカード */}
				<div className="rounded-3xl bg-white ring-1 ring-stone-200 shadow-sm p-6 md:p-8">
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
						{/* お名前 */}
						<FieldRow>
							<label
								htmlFor="name"
								className="block font-medium text-stone-700 mb-1.5"
							>
								お名前
								<RequiredPill />
							</label>
							<input
								{...register("name")}
								type="text"
								id="name"
								className={`w-full rounded-2xl border bg-white/80 px-4 py-3 shadow-sm transition focus:bg-white focus:border-red-600 focus:ring-2 focus:ring-red-600 hover:shadow-md ${
									errors.name ? "border-red-500" : "border-stone-300"
								}`}
								placeholder="田中太郎"
								aria-invalid={errors.name ? "true" : "false"}
								aria-describedby={errors.name ? "name-error" : undefined}
							/>
							{errors.name && (
								<p id="name-error" className="text-sm text-red-600">
									{errors.name.message}
								</p>
							)}
						</FieldRow>

						{/* ふりがな */}
						<FieldRow>
							<label
								htmlFor="furigana"
								className="block font-medium text-stone-700 mb-1.5"
							>
								ふりがな
							</label>
							<input
								{...register("furigana")}
								type="text"
								id="furigana"
								className={`w-full rounded-2xl border bg-white/80 px-4 py-3 shadow-sm transition focus:bg-white focus:border-red-600 focus:ring-2 focus:ring-red-600 hover:shadow-md ${
									errors.furigana ? "border-red-500" : "border-stone-300"
								}`}
								placeholder="たなかたろう"
								aria-invalid={errors.furigana ? "true" : "false"}
								aria-describedby={
									errors.furigana ? "furigana-error" : undefined
								}
							/>
							{errors.furigana && (
								<p id="furigana-error" className="text-sm text-red-600">
									{errors.furigana.message}
								</p>
							)}
						</FieldRow>

						{/* 電話番号 */}
						<FieldRow>
							<label
								htmlFor="phone"
								className="block font-medium text-stone-700 mb-1.5"
							>
								電話番号
								<RequiredPill />
							</label>
							<input
								{...register("phone")}
								type="tel"
								id="phone"
								className={`w-full rounded-2xl border bg-white/80 px-4 py-3 shadow-sm transition focus:bg-white focus:border-red-600 focus:ring-2 focus:ring-red-600 hover:shadow-md ${
									errors.phone ? "border-red-500" : "border-stone-300"
								}`}
								placeholder="09012345678"
								aria-invalid={errors.phone ? "true" : "false"}
								aria-describedby={errors.phone ? "phone-error" : undefined}
							/>
							{errors.phone && (
								<p id="phone-error" className="text-sm text-red-600">
									{errors.phone.message}
								</p>
							)}
						</FieldRow>

						{/* メールアドレス */}
						<FieldRow>
							<label
								htmlFor="email"
								className="block font-medium text-stone-700 mb-1.5"
							>
								メールアドレス
								<RequiredPill />
							</label>
							<input
								{...register("email")}
								type="email"
								id="email"
								className={`w-full rounded-2xl border bg-white/80 px-4 py-3 shadow-sm transition focus:bg-white focus:border-red-600 focus:ring-2 focus:ring-red-600 hover:shadow-md ${
									errors.email ? "border-red-500" : "border-stone-300"
								}`}
								placeholder="example@email.com"
								aria-invalid={errors.email ? "true" : "false"}
								aria-describedby={errors.email ? "email-error" : undefined}
							/>
							{errors.email && (
								<p id="email-error" className="text-sm text-red-600">
									{errors.email.message}
								</p>
							)}
						</FieldRow>

						{/* お問い合わせ種別 */}
						<fieldset>
							<legend className="block font-medium text-stone-700 mb-3">
								お問い合わせ種別
								<RequiredPill />
							</legend>
							<div className="space-y-3">
								{inquiryTypeOptions.map((option) => (
									<label
										key={option.value}
										className="flex items-center cursor-pointer hover:bg-stone-50 rounded-lg p-2 transition"
									>
										<input
											type="checkbox"
											value={option.value}
											checked={
												watchedValues.inquiryTypes?.includes(option.value) ||
												false
											}
											onChange={(e) =>
												handleInquiryTypeChange(option.value, e.target.checked)
											}
											className="rounded border-stone-300 text-red-600 focus:ring-red-600 accent-red-600"
											aria-invalid={errors.inquiryTypes ? "true" : "false"}
											aria-describedby={
												errors.inquiryTypes ? "inquiry-types-error" : undefined
											}
										/>
										<span className="ml-3 text-sm text-stone-700">
											{option.label}
										</span>
									</label>
								))}
							</div>
							{errors.inquiryTypes && (
								<p id="inquiry-types-error" className="text-sm text-red-600">
									{errors.inquiryTypes.message}
								</p>
							)}
						</fieldset>

						{/* お問い合わせ内容 */}
						<FieldRow>
							<label
								htmlFor="content"
								className="block font-medium text-stone-700 mb-1.5"
							>
								お問い合わせ内容
								<RequiredPill />
							</label>
							<textarea
								{...register("content")}
								id="content"
								rows={6}
								className={`w-full min-h-[140px] rounded-2xl border bg-white/80 px-4 py-3 shadow-sm transition focus:bg-white focus:border-red-600 focus:ring-2 focus:ring-red-600 hover:shadow-md resize-none ${
									errors.content ? "border-red-500" : "border-stone-300"
								}`}
								aria-invalid={errors.content ? "true" : "false"}
								aria-describedby={errors.content ? "content-error" : undefined}
							/>
							{errors.content && (
								<p id="content-error" className="text-sm text-red-600">
									{errors.content.message}
								</p>
							)}
						</FieldRow>

						{/* 個人情報の取り扱い（アコーディオン） */}
						<div className="space-y-4">
							<button
								type="button"
								onClick={() => setIsPrivacyExpanded(!isPrivacyExpanded)}
								className="w-full flex items-center justify-between p-4 text-left font-medium text-stone-700 bg-stone-50 rounded-2xl hover:bg-stone-100 transition focus:outline-none focus:ring-2 focus:ring-red-600"
								aria-expanded={isPrivacyExpanded}
								aria-controls="privacy-content"
							>
								<span>「個人情報の取り扱い」について確認</span>
								<svg
									className={`w-5 h-5 transform transition-transform ${
										isPrivacyExpanded ? "rotate-45" : ""
									}`}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<title>
										プライバシーポリシーの詳細を
										{isPrivacyExpanded ? "閉じる" : "開く"}
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
									isPrivacyExpanded
										? "max-h-96 opacity-100"
										: "max-h-0 opacity-0"
								}`}
							>
								<div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
									<div className="text-sm text-stone-600 leading-relaxed space-y-2">
										<p>
											お客様からご提供いただいた個人情報は、以下の目的で利用いたします：
										</p>
										<ul className="list-disc pl-6 space-y-1">
											<li>お問い合わせへの回答・対応</li>
											<li>サービスに関する情報提供</li>
											<li>お客様満足度向上のための分析</li>
										</ul>
										<p>
											個人情報は適切に管理し、法令に基づく場合を除き、第三者への提供は行いません。
											詳細については、当社のプライバシーポリシーをご確認ください。
										</p>
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
										className="mt-1 rounded border-stone-300 text-red-600 focus:ring-red-600 accent-red-600"
										aria-invalid={errors.privacyAgreement ? "true" : "false"}
										aria-describedby={
											errors.privacyAgreement
												? "privacy-agreement-error"
												: undefined
										}
									/>
									<span className="ml-3 text-sm text-stone-700">
										同意しました
									</span>
								</label>
								{errors.privacyAgreement && (
									<p
										id="privacy-agreement-error"
										className="text-sm text-red-600 ml-8"
									>
										{errors.privacyAgreement.message}
									</p>
								)}
							</div>
						</div>

						{/* 送信ボタン */}
						<div className="flex justify-center pt-6">
							<button
								type="submit"
								disabled={
									!isValid || !watchedValues.privacyAgreement || isSubmitting
								}
								className="inline-flex items-center rounded-full bg-stone-900 text-white px-8 py-3 font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110 transition-all"
							>
								{isSubmitting ? "送信中..." : "送信する"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}
