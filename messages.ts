import { Timestamp } from "./external";

export interface Message {
  text: string;
  role: "user" | "assistant";
  contractId: string;
  threadId: string;
  context?: string;
  timestamp: Timestamp;
}
