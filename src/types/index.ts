// Contact機能の統合エクスポート

// Types
export type {
  ContactFormData,
  InquiryTypeOption,
  FormPlaceholders,
  PrivacyPolicyContent,
  RequiredPillProps,
  FieldRowProps,
  ErrorMessageProps,
  SubmitButtonProps,
  FormFieldsProps,
  PrivacyPolicyAccordionProps,
} from "./contact";

export type {
  ApiResponse,
  ApiError,
  ApiSuccess,
  RateLimitEntry,
  RateLimitConfig,
  ContactEnvVars,
} from "./api";

export type {
  EmailTemplate,
  EmailData,
  EmailSendResult,
  EmailMetadata,
  SubjectConfig,
  EmailGenerationInput,
} from "./email";

// Data
export {
  inquiryTypeOptions,
  privacyPolicyContent,
  formPlaceholders,
} from "../data/contact";

// Validation
export { contactSchema } from "../lib/ validations";

// Hooks
export { useContactForm } from "../hooks/useContactForm";

// Utils
export {
  getClientIP,
  checkRateLimit,
  getRateLimitStats,
  clearRateLimit,
} from "../lib/rateLimit";

export {
  checkHoneypot,
  validateEnvVars,
  createSecureErrorMessage,
} from "../lib/security";

export {
  generateHTMLContent,
  generateTextContent,
  generateEmailSubject,
  generateEmailTemplate,
} from "../lib/email";
