import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import React from "react";
import DeleteAccountForm from "@/components/delete-account/DeleteAccountForm";
import GridShape from "@/components/common/GridShape";

export const metadata: Metadata = {
  title: "حذف الحساب | برق",
  description: "احذف حسابك من تطبيق برق لخدمات التوصيل",
};

export default function DeleteAccountPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gray-900">
      <GridShape />
      <div className="w-full max-w-md">
        <div className="rounded-xl  p-6 shadow-lg md:p-8 bg-gray-800">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-2xl font-bold  text-white">
              حذف الحساب
            </h1>
            <p className="text-sm  text-gray-400">
              لحذف حسابك، يرجى إدخال رقم هاتفك والتحقق منه
            </p>
          </div>

          <DeleteAccountForm />

          <div className="mt-6 rounded-lg border p-4 border-yellow-800 bg-yellow-900/20">
            <p className="text-xs  text-yellow-200">
              <strong>تحذير:</strong> حذف الحساب عملية دائمة ولا يمكن التراجع
              عنها. سيتم حذف جميع بياناتك نهائياً.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
