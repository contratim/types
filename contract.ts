import { Document } from "./docx";
import { Timestamp } from "./external";
import { TemplateForms } from "./forms";

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
  template: Template | null;
  docxDocument: Document | null;
  documentUpdatedAt: Timestamp;
  status: "draft" | "completed";
  ownersUids: string[];
  accessToken: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};
