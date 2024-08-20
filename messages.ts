import { Timestamp } from "./external";

export type MessageAction = "create" | "update";

export interface Message {
  role: "user" | "assistant";
  contractId: string;
  threadId: string;
  paragraphId: string;
  text: string;
  context?: string;
  action?: MessageAction;
  timestamp: Timestamp;
}
