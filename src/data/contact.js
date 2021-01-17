import http from "../plugins/axios";

export const sendToEmailJs = async (params) => {
  const url = "https://api.emailjs.com/api/v1.0/email/send";
  const data = {
    service_id: "service_gpsxmay",
    template_id: "template_h1xk0nv",
    user_id: "user_u9XT00WkPOp92b2TZnGo7",
    template_params: params
  };

  return http.post(url, data);
};
