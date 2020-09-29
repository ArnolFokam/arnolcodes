import NextI18Next from 'next-i18next'
import { NextComponentType, NextPageContext } from "next";
import { useTranslation as originalUseTranslation } from "react-i18next";
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

export const nextI18next = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ['fr'],
  fallbackLng: 'en',
  localeSubpaths,
  localePath: path.resolve('./public/locales'),
  serverLanguageDetection: false,
})

export const appWithTranslation = nextI18next.appWithTranslation;
export const withTranslation = nextI18next.withTranslation;
export const Trans = nextI18next.Trans;
export const useTranslation = originalUseTranslation;
export type I18nPage<P = {}> = NextComponentType<
  NextPageContext,
  { namespacesRequired: string[] },
  P & { namespacesRequired: string[] }
>;
