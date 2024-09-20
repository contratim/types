import { Timestamp } from "../external";
import { BaseRequest, ErrorResponse } from "../functions";
import { AssasPayment } from "./assas";

export interface PayRequest extends BaseRequest {
  contractId: string;
}

export interface PaySuccessResponse {}

export type PayResponse = PaySuccessResponse | ErrorResponse;

export type PaymentProcessing = AssasPayment;

export interface Payment {
  externalId?: string;
  processing: PaymentProcessing;
  value: number;
  order: {
    contractId: string;
  };
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}
