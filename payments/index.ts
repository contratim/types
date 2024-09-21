import { Timestamp } from "../external";
import { BaseRequest, ErrorResponse } from "../functions";
import { AsaasBillingType, AsaasPayment } from "./asaas";

export interface PayRequest extends BaseRequest {
  contractId: string;
  billingType: PaymentBillingType;
}

export interface PaySuccessResponse {}

export type PayResponse = PaySuccessResponse | ErrorResponse;

export type PaymentBillingType = AsaasBillingType;
export type PaymentProcessing = AsaasPayment;

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
