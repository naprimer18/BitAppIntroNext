// hooks/useTranslation.jsx
'use client';
import { useRouter } from "next/router";
import en from "../../public/locales/en/default.json"
import ru from "../../public/locales/ru/default.json"

const TRANSLATIONS = { en, ru };

export default function useTranslation() {
  const router = useRouter();
  const { locale, asPath } = router;

  const setLocale = (locale: any) => router.push(asPath, asPath, { locale });
  // @ts-ignore
  const t = (segment: string, keyString: any) => TRANSLATIONS[locale][segment][keyString];

  return { t, locale, setLocale };
}