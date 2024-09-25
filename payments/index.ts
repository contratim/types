import { Customer } from "../customers";
import { Timestamp } from "../external";
import { BaseRequest, ErrorResponse } from "../functions";
import { AsaasBillingType, AsaasProcessing } from "./asaas";

export interface PayRequestBillingPix {
  type: "PIX";
}
export interface PayRequestBillingCard {
  type: "CREDIT_CARD";
  creditCard: {
    holderName: string;
    number: string;
    expiryMonth: string;
    expiryYear: string;
    ccv: string;
  };
  creditCardHolderInfo: {
    name: string;
    email: string;
    cpfCnpj: string;
    postalCode: string;
    addressNumber: string;
    addressComplement: string;
    phone: string;
    mobilePhone: string;
  };
}

export interface PayRequestBillingCardToken {
  type: "CREDIT_CARD";
  cardId: string;
}

export type PaymentBilling =
  | PayRequestBillingPix
  | PayRequestBillingCard
  | PayRequestBillingCardToken;

export interface PayRequest extends BaseRequest {
  contractId: string;
  customer?: Customer;
  billing: PaymentBilling;
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
