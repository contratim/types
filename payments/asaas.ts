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
  cardId: string;
  result?: AsaasCreditCardResult;
}

export interface AsaasProcessingPix {
  billingType: "PIX";
  pixQrCode?: AsaasPixQRCode;
  result?: AsaasPixResult;
}

export type AsaasProcessing = {
  gateway: "asaas";
  externalId?: string;
} & (AsaasProcessingCard | AsaasProcessingPix);

export type AsaasBaseResult = {
  // anticipated: false;
  // anticipable: false;
  // bankSlipUrl: string;
  clientPaymentDate: string | null;
  // custody: null;
  customer: string;
  dateCreated: string;
  // deleted: boolean;
  description: string;
  dueDate: string;
  externalReference: string;
  id: string;
  // installmentNumber: null;
  // interestValue: null;
  invoiceNumber: string;
  invoiceUrl: string;
  // lastBankSlipViewedDate: null;
  // lastInvoiceViewedDate: null;
  netValue: number;
  // nossoNumero: null;
  object: "payment";
  originalDueDate: string;
  // originalValue: null;
  // paymentDate: null;
  // paymentLink: null;
  // pixTransaction: null;
  // postalService: false;
  // refunds: [
  //   {
  //     dateCreated: string | null;
  //     status: "PENDING";
  //     value: null;
  //     description: null;
  //     transactionReceiptUrl: null;
  //   }
  // ];
  status: AsaasPaymentStatus;
  // transactionReceiptUrl: string | null;
  value: number;
};

export type AsaasPixResult = {
  billingType: "PIX";
  creditCard: null;
  // discount?: {
  //   value: number;
  //   dueDateLimitDays: number;
  //   limitDate: string | null;
  //   type: "FIXED" | "PERCENTAGE";
  // };
  // fine?: {
  //   type: "FIXED" |"PERCENTAGE";
  //   value: number;
  // };
  estimatedCreditDate: null;
} & AsaasBaseResult;

export type AsaasCreditCardResult = {
  billingType: "CREDIT_CARD";
  creditCard: {
    creditCardBrand: string;
    creditCardNumber: string;
    creditCardToken: string;
  };
  estimatedCreditDate: string;
} & AsaasBaseResult;

export type AsaasPaymentResult = AsaasPixResult | AsaasCreditCardResult;
export interface AsaasPixQRCode {
  success: boolean;
  encodedImage: string;
  payload: string;
  expirationDate: string;
}

export interface AsaasListResponse<T> {
  object: "list";
  hasMore: boolean;
  totalCount: number;
  limit: number;
  offset: number;
  data: T[];
}
