import { formPlaceholders, inquiryTypeOptions } from "@/data/contact";
import type { FormFieldsProps } from "@/types/contact";
import { ErrorMessage, FieldRow, RequiredPill } from "./FormComponents";

export const FormFields = ({
	register,
	errors,
	watchedValues,
	onInquiryTypeChange,
}: FormFieldsProps) => {
	return (
		<>
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
					placeholder={formPlaceholders.name}
					aria-invalid={errors.name ? "true" : "false"}
					aria-describedby={errors.name ? "name-error" : undefined}
				/>
				{errors.name && (
					<ErrorMessage id="name-error" message={errors.name.message || ""} />
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
					placeholder={formPlaceholders.furigana}
					aria-invalid={errors.furigana ? "true" : "false"}
					aria-describedby={errors.furigana ? "furigana-error" : undefined}
				/>
				{errors.furigana && (
					<ErrorMessage
						id="furigana-error"
						message={errors.furigana.message || ""}
					/>
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
					placeholder={formPlaceholders.phone}
					aria-invalid={errors.phone ? "true" : "false"}
					aria-describedby={errors.phone ? "phone-error" : undefined}
				/>
				{errors.phone && (
					<ErrorMessage id="phone-error" message={errors.phone.message || ""} />
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
					placeholder={formPlaceholders.email}
					aria-invalid={errors.email ? "true" : "false"}
					aria-describedby={errors.email ? "email-error" : undefined}
				/>
				{errors.email && (
					<ErrorMessage id="email-error" message={errors.email.message || ""} />
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
									watchedValues.inquiryTypes?.includes(option.value) || false
								}
								onChange={(e) =>
									onInquiryTypeChange(option.value, e.target.checked)
								}
								className="cursor-pointer rounded border-stone-300 text-red-600 focus:ring-red-600 accent-red-600"
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
					<ErrorMessage
						id="inquiry-types-error"
						message={errors.inquiryTypes.message || ""}
					/>
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
					<ErrorMessage
						id="content-error"
						message={errors.content.message || ""}
					/>
				)}
			</FieldRow>
		</>
	);
};
