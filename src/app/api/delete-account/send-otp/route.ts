import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phoneNumber } = body;

    // Validate phone number
    if (!phoneNumber) {
      return NextResponse.json(
        { success: false, message: "رقم الهاتف مطلوب" },
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

    // Call the actual backend API
    const response = await fetch(
      "https://api.barqshipping.com/api/v1/admin/delete-account-request",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile: phoneNumber }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: data.message || "فشل في إرسال رمز التحقق",
        },
        { status: response.status },
      );
    }

    return NextResponse.json({
      success: true,
      message: data.message || "تم إرسال رمز التحقق بنجاح",
    });
  } catch (error) {
    console.error("Error sending OTP:", error);
    return NextResponse.json(
      { success: false, message: "حدث خطأ في الخادم" },
      { status: 500 },
    );
  }
}
