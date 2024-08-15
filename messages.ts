import { Timestamp } from "./external";

export interface Message {
  text: string;
  contractId: string;
  context?: string;
  senderUid?: string;
  threadId?: string;
  timestamp: Timestamp;
}
