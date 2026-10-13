/**
 * API configuration separating frontend routing (port 3000)
 * from backend service endpoints (port 5001).
 */
export const BACKEND_PORT = 5001;
export const FRONTEND_PORT = 3000;

export const BACKEND_API_BASE_URL = 
  process.env.NEXT_PUBLIC_BACKEND_API_URL || `http://localhost:${BACKEND_PORT}`;

export const AUTH_API_ENDPOINTS = {
  SEND_WHATSAPP_OTP: `${BACKEND_API_BASE_URL}/api/auth/whatsapp/send-otp`,
  VERIFY_WHATSAPP_OTP: `${BACKEND_API_BASE_URL}/api/auth/whatsapp/verify-otp`,
  LOGIN: `${BACKEND_API_BASE_URL}/api/auth/login`,
  REGISTER: `${BACKEND_API_BASE_URL}/api/auth/register`,
  PROFILE: `${BACKEND_API_BASE_URL}/api/auth/me`,
};
