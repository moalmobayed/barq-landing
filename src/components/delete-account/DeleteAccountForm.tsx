"use client";

import React, { useState } from "react";
import axios from "axios";
import Form from "@/components/form/Form";
import Input from "@/components/form/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/common/Button";
import { API_BASE_URL } from "@/config/api.config";
import { useTranslations } from "next-intl";

type Step = "phone" | "otp";

interface FormData {
  phoneNumber: string;
  otp: string;
}

const DeleteAccountForm: React.FC = () => {
  const t = useTranslations("DeleteAccount");
  const [step, setStep] = useState<Step>("phone");
  const [formData, setFormData] = useState<FormData>({
    phoneNumber: "",
    otp: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  // Validate Egyptian phone number (starts with 01 and has 11 digits)
  const validateEgyptianPhone = (phone: string): boolean => {
    const phoneRegex = /^01[0-2,5]{1}[0-9]{8}$/;
    return phoneRegex.test(phone);
  };

  // Handle phone number submission and request OTP
  const handlePhoneSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate phone number
    if (!validateEgyptianPhone(formData.phoneNumber)) {
      setError(t("validation.invalidPhone"));
      return;
    }

    setLoading(true);

    try {
      // Direct call to backend API
      const response = await axios.post(
        `${API_BASE_URL}/admin/delete-account-request`,
        {
          mobile: formData.phoneNumber,
        },
      );

      if (response.data) {
        setSuccess(response.data.message || t("messages.otpSent"));
        setStep("otp");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || t("messages.otpError"));
      } else {
        setError(t("messages.unexpectedError"));
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle OTP verification and account deletion
  const handleOtpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate OTP (4 digits)
    if (!/^\d{4}$/.test(formData.otp)) {
      setError(t("validation.invalidOtp"));
      return;
    }

    setLoading(true);

    try {
      // Direct call to backend API
      const response = await axios.delete(
        `${API_BASE_URL}/admin/delete-account`,
        {
          data: {
            mobile: formData.phoneNumber,
            code: formData.otp,
          },
        },
      );

      if (response.data) {
        setSuccess(response.data.message || t("messages.deleteSuccess"));
        // Redirect after 3 seconds
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || t("messages.deleteError"));
      } else {
        setError(t("messages.unexpectedError"));
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Reset to phone step
  const handleBackToPhone = () => {
    setStep("phone");
    setFormData((prev) => ({ ...prev, otp: "" }));
    setError("");
    setSuccess("");
  };

  return (
    <div>
      {/* Phone Number Step */}
      {step === "phone" && (
        <Form onSubmit={handlePhoneSubmit} className="space-y-4">
          <div>
            <Label htmlFor="phoneNumber">{t("form.phoneLabel")}</Label>
            <Input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder={t("form.phonePlaceholder")}
              value={formData.phoneNumber}
              onChange={handleInputChange}
              dir="ltr"
              required
              disabled={loading}
              error={!!error}
            />
            <p className="mt-1.5 text-xs text-gray-600">
              {t("form.phoneHelp")}
            </p>
          </div>

          {error && (
            <div className="rounded-lg border border-red-300 bg-red-50 p-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {success && (
            <div className="rounded-lg border border-green-300 bg-green-50 p-3">
              <p className="text-sm text-green-700">{success}</p>
            </div>
          )}

          <Button
            variant="primary"
            size="md"
            disabled={loading || !formData.phoneNumber}
            className="w-full"
            type="submit"
          >
            {loading ? t("form.sendingOtpButton") : t("form.sendOtpButton")}
          </Button>
        </Form>
      )}

      {/* OTP Verification Step */}
      {step === "otp" && (
        <Form onSubmit={handleOtpSubmit} className="space-y-4">
          <div className="mb-4 text-center">
            <p className="text-sm text-gray-600">{t("form.otpSentTo")}</p>
            <p className="mt-1 text-lg font-medium text-gray-900" dir="ltr">
              {formData.phoneNumber}
            </p>
          </div>

          <div>
            <Label htmlFor="otp">{t("form.otpLabel")}</Label>
            <Input
              type="text"
              id="otp"
              name="otp"
              placeholder={t("form.otpPlaceholder")}
              value={formData.otp}
              onChange={handleInputChange}
              max="4"
              dir="ltr"
              required
              disabled={loading}
              error={!!error}
              className="text-center text-2xl tracking-widest text-gray-900"
            />
            <p className="mt-1.5 text-xs text-gray-600">{t("form.otpHelp")}</p>
          </div>

          {error && (
            <div className="rounded-lg border border-red-300 bg-red-50 p-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {success && (
            <div className="rounded-lg border border-green-300 bg-green-50 p-3">
              <p className="text-sm text-green-700">{success}</p>
            </div>
          )}

          <div className="space-y-2">
            <Button
              variant="primary"
              size="md"
              disabled={loading || formData.otp.length !== 4}
              className="w-full"
              type="submit"
            >
              {loading ? t("form.verifyingButton") : t("form.verifyButton")}
            </Button>

            <Button
              variant="outline"
              size="md"
              disabled={loading}
              onClick={handleBackToPhone}
              className="w-full"
            >
              {t("form.backButton")}
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
};

export default DeleteAccountForm;
