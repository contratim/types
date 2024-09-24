// export type AsaasBillingType = "CREDIT_CARD" | "PIX" | "UNDEFINED" | "BOLETO";
export type AsaasBillingType = "CREDIT_CARD" | "PIX";

export type AsaasProcessingCardStatus =
  | "PENDING" // Aguardando pagamento
  | "CONFIRMED" // Pagamento confirmado (saldo ainda não creditado)
  | "RECEIVED" // Recebida (saldo já creditado na conta)
  | "OVERDUO" // Vencida
  | "REFUND_REQUESTED" // Estorno Solicitado
  | "REFUND_IN_PROGRESS" // Estorno em processamento
  | "REFUNDED" // Estornada
  | "CHARGEBACK_REQUESTED" // Recebido chargeback
  | "CHARGEBACK_DISPUTE" // Em disputa de chargeback (caso sejam apresentados documentos para contestação)
  | "AWAITING_CHARGEBACK_REVERSAL" // Disputa vencida, aguardando repasse da adquirente
  | "AWAITING_RISK_ANALYSIS"; // Pagamento em análise

export type AsaasProcessingPixStatus =
  | "AWAITING_BALANCE_VALIDATION"
  | "AWAITING_INSTANT_PAYMENT_ACCOUNT_BALANCE"
  | "AWAITING_CRITICAL_ACTION_AUTHORIZATION"
  | "AWAITING_CHECKOUT_RISK_ANALYSIS_REQUEST"
  | "AWAITING_CASH_IN_RISK_ANALYSIS_REQUEST"
  | "SCHEDULED"
  | "AWAITING_REQUEST"
  | "REQUESTED"
  | "DONE"
  | "REFUSED"
  | "CANCELLED";

export type AsaasPaymentStatus =
  | AsaasProcessingCardStatus
  | AsaasProcessingPixStatus;

export interface AsaasProcessingCard {
  billingType: "CREDIT_CARD";
  status?: AsaasProcessingCardStatus;
}

export interface AsaasProcessingPix {
  billingType: "PIX";
  status?: AsaasProcessingPixStatus;
  pixQrCode?: AsaasPixQRCode;
}

export type AsaasProcessing = {
  gateway: "asaas";
  externalId?: string;
  result?: AsaasPayment;
} & (AsaasProcessingCard | AsaasProcessingPix);

export type AsaasPayment = {
  object: "payment";
  id: string;
  customer: string;
  dateCreated: string;
  dueDate: string;
  // installment: null;
  // subscription: null;
  paymentLink: string | null;
  value: number;
  netValue: number;
  billingType: AsaasBillingType;
  status: AsaasPaymentStatus;
  description: string;
  // daysAfterDueDateToRegistrationCancellation: null;
  externalReference: string;
  canBePaidAfterDueDate: boolean;
  pixTransaction: null;
  pixQrCodeId: string | null;
  // originalValue: null;
  // interestValue: null;
  // originalDueDate: string;
  paymentDate: string | null;
  clientPaymentDate: string | null;
  // installmentNumber: null;
  transactionReceiptUrl: string | null;
  nossoNumero: string;
  invoiceUrl: string;
  bankSlipUrl: string;
  invoiceNumber: string;
  // discount?: {
  //   value: number;
  //   dueDateLimitDays: number;
  //   type: "PERCENTAGE";
  // };
  // fine?: {
  //   value: number;
  // };
  // interest?: {
  //   value: number;
  // };
  deleted: boolean;
  // postalService: false;
  // anticipated: false;
  // anticipable: false;
  // refunds: [
  //   {
  //     dateCreated: string | null;
  //     status: "PENDING";
  //     value: null;
  //     description: null;
  //     transactionReceiptUrl: null;
  //   }
  // ];
  // split: [];
  // chargeback: {
  //   status: "REQUESTED";
  //   reason: "ABSENCE_OF_PRINT";
  // };
};

export interface AsaasPixQRCode {
  success: boolean;
  encodedImage: string;
  payload: string;
  expirationDate: string;
}
