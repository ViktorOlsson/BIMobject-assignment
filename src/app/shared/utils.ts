export interface IApiResponse {
    Response: string,
    Error: string
}

export class Utils {
    public static isApiResponseFalse(apiResponse: IApiResponse) {
        if (apiResponse.Response === 'False') {
            return true;
        }
        return false;
    }
}