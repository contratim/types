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
}

export type AsaasProcessing = {
  gateway: "asaas";
  externalId?: string;
} & (AsaasProcessingCard | AsaasProcessingPix);
