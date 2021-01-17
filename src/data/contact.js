import http from "../plugins/axios";

export const sendToEmailJs = async (params) => {
  const url = "https://api.emailjs.com/api/v1.0/email/send";
  const data = {
    service_id: process.env.EMAIL_JS_SERVICE_ID,
    template_id: process.env.EMAIL_JS_TEMPLATE_ID,
    user_id: process.env.EMAIL_JS_USER_ID,
    template_params: params
  };

  return http.post(url, data);
};
