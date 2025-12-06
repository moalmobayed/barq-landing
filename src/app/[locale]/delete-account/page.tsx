import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import React from "react";
import DeleteAccountForm from "@/components/delete-account/DeleteAccountForm";
import GridShape from "@/components/common/GridShape";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("DeleteAccount.metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function DeleteAccountPage() {
  const t = useTranslations("DeleteAccount.page");

  return (
    <div className="mt-16 flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <GridShape />
      <div className="w-full max-w-md">
        <div className="rounded-xl bg-white p-6 shadow-lg md:p-8">
          <div className="mb-8 text-center">
            <Image
              src="/images/logo/barq-logo.png"
              alt={t("logoAlt")}
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h1 className="mb-2 text-2xl font-bold text-gray-900">
              {t("title")}
            </h1>
            <p className="text-sm text-gray-600">{t("subtitle")}</p>
          </div>

          <DeleteAccountForm />

          <div className="mt-6 rounded-lg border border-orange-200 bg-orange-50 p-4">
            <p className="text-xs text-orange-900">
              <strong>{t("warningTitle")}</strong> {t("warningText")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
