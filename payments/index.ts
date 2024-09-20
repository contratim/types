import { Timestamp } from "../external";
import { BaseRequest, ErrorResponse } from "../functions";
import { AssasBillingType, AssasPayment } from "./assas";

export interface PayRequest extends BaseRequest {
  contractId: string;
  billingType: PaymentBillingType;
}

export interface PaySuccessResponse {}

export type PayResponse = PaySuccessResponse | ErrorResponse;

export type PaymentBillingType = AssasBillingType;
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
