import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { type ContactFormData, contactSchema } from "@/lib/ validations";

export const useContactForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<ContactFormData>({
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

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		watch,
		reset,
		setValue,
	} = form;
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
				currentTypes.filter((type: string) => type !== value),
				{ shouldValidate: true },
			);
		}
	};

	return {
		register,
		handleSubmit,
		errors,
		isValid,
		watchedValues,
		isSubmitting,
		onSubmit,
		handleInquiryTypeChange,
	};
};
