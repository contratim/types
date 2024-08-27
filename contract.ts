import { Document } from "./docx";
import { Timestamp } from "./external";
import { TemplateForms } from "./forms";
import { DocumentChange } from "./ui";

export type Template = {
  name: string;
  docxPath: string;
  docxDocument: Document;
  forms: TemplateForms;
  assistantId: string;
  createdAt: Timestamp;
};

export type IntegerString = `${number}` & `${bigint}`;

export type Contract = {
  /** The name that identifies the type of contract. */
  name: string;
  /** Data object sent via forms */
  data: object | null;
  /** Array with IDs of users who can access the document */
  ownersUids: string[];
  /** The contract template object */
  template?: Template;
  /** The docx object to generate the contract file */
  docxDocument?: Document;
  documentUpdatedAt?: Timestamp;
  /** Array of DocumentChange objects created in review process */
  changes?: DocumentChange[];
  status?: "draft" | "completed";
  /** Contract drafting stage. Accepted values "welcome", "review" and any integer number as string, to represents the last forms index fulfilled  */
  draftStage?: "welcome" | IntegerString | "review";
  /** Contract price charged to regular user */
  value?: number;
  /** Access token used in the contract sharing flow between users */
  accessToken?: string;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
};
