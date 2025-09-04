import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema } from "@/lib/ validations";
import type { ContactFormData } from "@/types/contact";
import type { ApiResponse } from "@/types/api";

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
      website: "",
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
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as ApiResponse;

      if (!response.ok) {
        throw new Error(result.error ?? "送信に失敗しました");
      }

      if (result.success) {
        setSubmitSuccess(true);
        alert("お問い合わせを送信しました。ありがとうございます。");
        reset();
      } else {
        throw new Error(result.error ?? "送信に失敗しました");
      }
    } catch (error) {
      console.error("送信エラー:", error);
      const errorMessage =
        error instanceof Error ? error.message : "送信中にエラーが発生しました";
      setSubmitError(errorMessage);
      alert(`エラーが発生しました: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
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
        { shouldValidate: true }
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
    submitError,
    submitSuccess,
    onSubmit,
    handleInquiryTypeChange,
  };
};
