import { Customer } from "../customers";
import { Timestamp } from "../external";
import { BaseRequest, ErrorResponse } from "../functions";
import { AsaasBillingType, AsaasProcessing } from "./asaas";

export interface PayRequest extends BaseRequest {
  contractId: string;
  customer?: Customer;
  billingType: PaymentBillingType;
}

export interface PaySuccessResponse {}

export type PayResponse = PaySuccessResponse | ErrorResponse;

export type PaymentBillingType = AsaasBillingType;
export type PaymentProcessing = AsaasProcessing;

export interface Payment {
  externalId?: string;
  processing: PaymentProcessing;
  value: number;
  order: {
    contractId: string;
  };
  customer: {
    id: string;
    externalId: string;
  };
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}
