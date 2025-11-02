import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import React from "react";
import DeleteAccountForm from "@/components/delete-account/DeleteAccountForm";

export const metadata: Metadata = {
  title: "حذف الحساب | برق",
  description: "احذف حسابك من تطبيق برق لخدمات التوصيل",
};

export default function DeleteAccountPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 dark:bg-gray-900">
      <div className="w-full max-w-md">
        <div className="rounded-xl bg-white p-6 shadow-lg md:p-8 dark:bg-gray-800">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
              حذف الحساب
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              لحذف حسابك، يرجى إدخال رقم هاتفك والتحقق منه
            </p>
          </div>

          <DeleteAccountForm />

          <div className="mt-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
            <p className="text-xs text-yellow-800 dark:text-yellow-200">
              <strong>تحذير:</strong> حذف الحساب عملية دائمة ولا يمكن التراجع
              عنها. سيتم حذف جميع بياناتك نهائياً.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
