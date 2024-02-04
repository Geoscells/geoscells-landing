import {NextRequest, NextResponse} from 'next/server';
import {
  cookieName,
  defaultLangSlug,
  defaultLocale,
  supportedLangSlugs,
  supportedLanguages,
  supportedLocales
} from './i18n/settings';
import resolveAcceptLanguage from 'resolve-accept-language';

const middleware = (request: NextRequest) => {
  let resolvedLangSlug;

  if (request.cookies.has(cookieName)) {
    resolvedLangSlug = supportedLangSlugs.find(sSlug => sSlug === request.cookies.get(cookieName)?.value);
  }

  if (!resolvedLangSlug) {
    const resolvedLanguage = supportedLanguages.find(lng => {
      const acceptLanguage = request.headers.get('accept-language') || '';
      return lng.locale === resolveAcceptLanguage(acceptLanguage, supportedLocales, defaultLocale);
    });

    if (resolvedLanguage) {
      resolvedLangSlug = 'iso639_1' in resolvedLanguage ? resolvedLanguage.iso639_1 : resolvedLanguage.iso3166_2;
    } else {
      resolvedLangSlug = defaultLangSlug;
    }
  }

  // Redirect if lng in path is not supported
  if (supportedLangSlugs.every(loc => !request.nextUrl.pathname.startsWith(`/${loc}`))) {
    return NextResponse.redirect(new URL(`/${resolvedLangSlug}${request.nextUrl.pathname}`, request.url));
  }

  return NextResponse.next();
};

export const config = {
  // matcher: '/((?!api|static|.*\\..*|_next).*'
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        {type: 'header', key: 'next-router-prefetch'},
        {type: 'header', key: 'purpose', value: 'prefetch'}
      ]
    }
  ]
};

export default middleware;
