import type { NextConfig } from "next";
import { i18nConfig } from "./app/config/i18n.config";

const nextConfig: NextConfig = {
  i18n: {
    defaultLocale: i18nConfig.defaultLocale,
    locales: [...i18nConfig.locales], // Spread the readonly array to create a mutable array
  },
};

export default nextConfig;
