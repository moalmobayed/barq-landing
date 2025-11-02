"use client";

import React, { useState } from "react";
import axios from "axios";
import Form from "@/components/form/Form";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";

type Step = "phone" | "otp";

interface FormData {
  phoneNumber: string;
  otp: string;
}

const DeleteAccountForm: React.FC = () => {
  const [step, setStep] = useState<Step>("phone");
  const [formData, setFormData] = useState<FormData>({
    phoneNumber: "",
    otp: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const API_BASE_URL = "https://api.barqshipping.com/api/v1";

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
      setError(
        "رقم الهاتف غير صحيح. يجب أن يكون رقم مصري صحيح (مثال: 01012345678)",
      );
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
        setSuccess(
          response.data.message || "تم إرسال رمز التحقق إلى رقم هاتفك",
        );
        setStep("otp");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message ||
            "حدث خطأ أثناء إرسال رمز التحقق. يرجى المحاولة مرة أخرى",
        );
      } else {
        setError("حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى");
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
      setError("رمز التحقق يجب أن يكون 4 أرقام");
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
        setSuccess(
          response.data.message ||
            "تم حذف حسابك بنجاح. سيتم تحويلك إلى الصفحة الرئيسية...",
        );
        // Redirect after 3 seconds
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message ||
            "رمز التحقق غير صحيح أو انتهت صلاحيته. يرجى المحاولة مرة أخرى",
        );
      } else {
        setError("حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى");
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
            <Label htmlFor="phoneNumber" required>
              رقم الهاتف المحمول
            </Label>
            <Input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="01012345678"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              dir="ltr"
              required
              disabled={loading}
              error={!!error}
            />
            <p className="mt-1.5 text-xs text-gray-400">
              أدخل رقم هاتفك المسجل في التطبيق
            </p>
          </div>

          {error && (
            <div className="rounded-lg border border-red-800 bg-red-900/20 p-3">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}

          {success && (
            <div className="rounded-lg border border-green-800 bg-green-900/20 p-3">
              <p className="text-sm text-green-400">{success}</p>
            </div>
          )}

          <Button
            variant="primary"
            size="md"
            disabled={loading || !formData.phoneNumber}
            className="w-full"
          >
            {loading ? "جاري الإرسال..." : "إرسال رمز التحقق"}
          </Button>
        </Form>
      )}

      {/* OTP Verification Step */}
      {step === "otp" && (
        <Form onSubmit={handleOtpSubmit} className="space-y-4">
          <div className="mb-4 text-center">
            <p className="text-sm text-gray-400">تم إرسال رمز التحقق إلى</p>
            <p className="mt-1 text-lg font-medium text-white" dir="ltr">
              {formData.phoneNumber}
            </p>
          </div>

          <div>
            <Label htmlFor="otp" required>
              رمز التحقق (OTP)
            </Label>
            <Input
              type="text"
              id="otp"
              name="otp"
              placeholder="0000"
              value={formData.otp}
              onChange={handleInputChange}
              maxLength={4}
              dir="ltr"
              required
              disabled={loading}
              error={!!error}
              className="text-center text-2xl tracking-widest"
            />
            <p className="mt-1.5 text-xs text-gray-400">
              أدخل رمز التحقق المكون من 4 أرقام
            </p>
          </div>

          {error && (
            <div className="rounded-lg border border-red-800 bg-red-900/20 p-3">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}

          {success && (
            <div className="rounded-lg border border-green-800 bg-green-900/20 p-3">
              <p className="text-sm text-green-400">{success}</p>
            </div>
          )}

          <div className="space-y-2">
            <Button
              variant="primary"
              size="md"
              disabled={loading || formData.otp.length !== 4}
              className="w-full"
            >
              {loading ? "جاري التحقق..." : "تأكيد وحذف الحساب"}
            </Button>

            <Button
              variant="outline"
              size="md"
              disabled={loading}
              onClick={handleBackToPhone}
              className="w-full"
            >
              العودة لتعديل رقم الهاتف
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
};

export default DeleteAccountForm;
