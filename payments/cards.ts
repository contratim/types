import { Timestamp } from "../external";

export interface Card {
  customerId: string;
  lastDigits: string;
  brand: string;
  temporary: boolean;
  createdAt: Timestamp;
}
