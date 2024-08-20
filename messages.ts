import { Timestamp } from "./external";

export interface Message {
  role: "user" | "assistant";
  contractId: string;
  threadId: string;
  paragraphId: string;
  text: string;
  context?: string;
  timestamp: Timestamp;
}
