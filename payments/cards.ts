import { Timestamp } from "../external";

export interface Card {
  customerId: string;
  lastDigits: string;
  brand: string;
  createdAt: Timestamp;
}
