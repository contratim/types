import { CreditCardHolderInfo } from ".";
import { Timestamp } from "../external";

export interface Card {
  gateway: "asaas";
  customerId: string;
  externalCustomerId: string;
  lastDigits: string;
  brand: string;
  temporary: boolean;
  holderInfo: CreditCardHolderInfo;
  createdAt: Timestamp;
}
