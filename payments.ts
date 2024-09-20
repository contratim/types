import { BaseRequest, ErrorResponse } from "./functions";

export interface PayRequest extends BaseRequest {
  contractId: string;
}

export interface PaySuccessResponse {}

export type PayResponse = PaySuccessResponse | ErrorResponse;
