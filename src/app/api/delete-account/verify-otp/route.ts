import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = "https://api.barqshipping.com/api/v1";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phoneNumber, otp } = body;

    // Validate inputs
    if (!phoneNumber || !otp) {
      return NextResponse.json(
        { success: false, message: "رقم الهاتف ورمز التحقق مطلوبان" },
        { status: 400 },
      );
    }

    // Validate Egyptian phone number format
    const phoneRegex = /^01[0-2,5]{1}[0-9]{8}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return NextResponse.json(
        { success: false, message: "رقم الهاتف غير صحيح" },
        { status: 400 },
      );
    }

    // Validate OTP format (4 digits)
    const otpRegex = /^\d{4}$/;
    if (!otpRegex.test(otp)) {
      return NextResponse.json(
        { success: false, message: "رمز التحقق يجب أن يكون 4 أرقام" },
        { status: 400 },
      );
    }

    // Call the actual backend API
    const response = await fetch(`${API_BASE_URL}/admin/delete-account`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mobile: phoneNumber,
        code: otp,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: data.message || "رمز التحقق غير صحيح" },
        { status: response.status },
      );
    }

    return NextResponse.json({
      success: true,
      message: data.message || "تم حذف الحساب بنجاح",
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json(
      { success: false, message: "حدث خطأ في الخادم" },
      { status: 500 },
    );
  }
}
