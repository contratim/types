export type AssasBillingType = "CREDIT_CARD" | "PIX" | "UNDEFINED" | "BOLETO";

export type AssasPaymentCardStatus =
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

export type AssasPaymentStatusPix =
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

export type AssasPaymentStatus = AssasPaymentCardStatus | AssasPaymentStatusPix;

export interface AssasPaymentCard {
  billingType: "CREDIT_CARD";
  status?: AssasPaymentCardStatus;
}

export interface AssasPaymentPix {
  billingType: "PIX";
  status?: AssasPaymentStatusPix;
}

export type AssasPayment = {
  gateway: "assas";
  externalId?: string;
} & (AssasPaymentCard | AssasPaymentPix);
