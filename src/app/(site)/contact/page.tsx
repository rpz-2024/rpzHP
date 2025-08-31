"use client";

import {
  ContactPageHeader,
  FormFields,
  PrivacyPolicyAccordion,
  SubmitButton,
} from "@/components/contact";
import { useContactForm } from "@/hooks/useContactForm";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    errors,
    isValid,
    watchedValues,
    isSubmitting,
    onSubmit,
    handleInquiryTypeChange,
  } = useContactForm();

  return (
    <main className="min-h-screen bg-stone-100/60 py-12 px-6">
      <div className="max-w-[900px] mx-auto">
        <ContactPageHeader />

        {/* フォームカード */}
        <div className="rounded-3xl bg-white ring-1 ring-stone-200 shadow-sm p-6 md:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormFields
              register={register}
              errors={errors}
              watchedValues={watchedValues}
              onInquiryTypeChange={handleInquiryTypeChange}
            />

            <PrivacyPolicyAccordion register={register} errors={errors} />

            <SubmitButton
              isValid={isValid}
              isSubmitting={isSubmitting}
              privacyAgreement={watchedValues.privacyAgreement}
            />
          </form>
        </div>
      </div>
    </main>
  );
}
