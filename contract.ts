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

export type Contract = {
  name: string;
  data: object | null;
  ownersUids: string[];
  template?: Template;
  docxDocument?: Document;
  documentUpdatedAt?: Timestamp;
  changes?: DocumentChange[];
  status?: "draft" | "completed";
  accessToken?: string;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
};
