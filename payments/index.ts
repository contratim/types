import { Timestamp } from "../external";
import { BaseRequest, ErrorResponse } from "../functions";
import { AsaasBillingType, AsaasProcessing } from "./asaas";

export interface PayRequestBillingPix {
  type: "PIX";
  name: string;
  cpfCnpj: string;
}

export interface CreditCardHolderInfo {
  name: string;
  email: string;
  cpfCnpj: string;
  postalCode: string;
  addressNumber: string;
  phone: string;
  addressComplement?: string;
  mobilePhone?: string;
}
export interface PayRequestBillingCard {
  type: "CREDIT_CARD";
  save?: boolean;
  creditCard: {
    holderName: string;
    number: string;
    expiryMonth: string;
    expiryYear: string;
    ccv: string;
  };
  creditCardHolderInfo: CreditCardHolderInfo;
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
