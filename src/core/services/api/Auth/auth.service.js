import { MethodTypesEnum } from "@constants/enums/index";
import { sendRequest, ErrorService, apiEndPoints } from "@services/index";

export const LoginApi = async (body, endpoint) => {
  try {
    const { code, result, message } = await sendRequest({
      url: apiEndPoints[endpoint],
      body,
      method: MethodTypesEnum.POST,
    });

    if (code) {
      ErrorService.sendOkMessage(message);

      return result;
    }
  } catch (error) {
    ErrorService.logError("An unexpected error occurred.", error);
  }
  return null;
};
export const SignupApi = async (body, endpoint = "studentSignup") => {
  try {
    const { code, result, message } = await sendRequest({
      url: apiEndPoints[endpoint],
      body,
      method: MethodTypesEnum.POST,
    });

    if (code) {
      ErrorService.sendOkMessage(message);
      return result;
    }
  } catch (error) {
    ErrorService.logError("An unexpected error occurred.", error);
  }
  return null;
};
