import 'dotenv/config';
import { AuthApiClient, createAuthUtils } from '@i-dot-ai-npm/utilities';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_fnMhm_AS.mjs';
import 'piccolore';
import './chunks/astro/server_9vvDxKFD.mjs';
import 'clsx';
import 'cookie';
import { s as sequence } from './chunks/index_M2qH4Dgy.mjs';

const logger = console;
if (!process.env.AUTH_API_URL) {
  throw new Error("AUTH_API_URL is not defined in the environment variables.");
}
const authClient = new AuthApiClient({
  appName: process.env.REPO || "unknown",
  authApiUrl: process.env.AUTH_API_URL,
  logger,
  timeout: 5e3
});
const {
  isAuthorisedUser,
  getUserInfo
} = createAuthUtils(authClient, logger);
async function parseAuthToken(token) {
  if (!token) {
    console.error("No auth token provided to parse");
    return null;
  }
  try {
    const userInfo = await getUserInfo(token);
    if (!userInfo) {
      console.error("Failed to get user info from token");
      return null;
    }
    if (!userInfo.email) {
      console.error("No email found in user info");
      return null;
    }
    return {
      email: userInfo.email,
      isAuthorised: userInfo.isAuthorised,
      authReason: userInfo.authReason
    };
  } catch (error) {
    console.error("Error parsing auth token:", error);
    return null;
  }
}

const PUBLIC_PATHS = [
  "/favicon.svg",
  "/fonts/",
  "/unauthorised",
  "/api/health",
  "/generic-error",
  "/sign-out"
];
async function onRequest$1(context, next) {
  const pathname = new URL(context.request.url).pathname;
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return next();
  }
  try {
    let authResult = null;
    if (process.env.ENVIRONMENT !== "local") {
      const token = context.request.headers.get("x-amzn-oidc-data");
      if (!token) {
        console.error(`No auth token found in headers when accessing ${pathname}`);
        return redirectToUnauthorised(context);
      }
      authResult = await parseAuthToken(token);
    } else {
      authResult = {
        email: "test@i.ai.gov.uk",
        isAuthorised: true,
        authReason: "LOCAL_TESTING"
      };
    }
    if (authResult?.isAuthorised !== true) {
      if (authResult?.authReason === "TOKEN_EXPIRED") {
        return redirectToSignOut(context);
      }
      console.error(`User is not authorised to access ${pathname}`);
      return redirectToUnauthorised(context);
    }
    const { email } = authResult;
    const storedUserEmail = await context.session.get("user-email");
    if (storedUserEmail !== email) {
      context.session.destroy();
      context.session.set("user-email", email);
    }
    return next();
  } catch (error) {
    console.error("Error authorising token:", error);
    return redirectToGenericError(context);
  }
}
function redirectToUnauthorised(context) {
  return context.redirect("/unauthorised");
}
function redirectToSignOut(context) {
  return context.redirect("/sign-out");
}
function redirectToGenericError(context) {
  return context.redirect("/generic-error");
}

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
