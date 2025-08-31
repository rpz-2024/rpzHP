import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { ContactFormData } from "@/lib/ validations";

export type InquiryTypeOption = {
  value: string;
  label: string;
};

// Form component types
export type RequiredPillProps = {
  className?: string;
};

export type FieldRowProps = {
  children: React.ReactNode;
  className?: string;
};

export type ErrorMessageProps = {
  id: string;
  message: string;
  className?: string;
};

export type SubmitButtonProps = {
  isValid: boolean;
  isSubmitting: boolean;
  privacyAgreement: boolean;
};

export type FormFieldsProps = {
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
  watchedValues: ContactFormData;
  onInquiryTypeChange: (value: string, checked: boolean) => void;
};

export type PrivacyPolicyAccordionProps = {
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
};

// Data types
export type FormPlaceholders = {
  name: string;
  furigana: string;
  phone: string;
  email: string;
};

export type PrivacyPolicyContent = {
  title: string;
  description: string;
  purposes: string[];
  notice: string;
};
