import { CTDocument } from "./doc/ct";
import { Timestamp } from "./external";
import { TemplateForms } from "./forms";
import { DocumentChange } from "./ui";

export type Template = {
  name: string;
  slug: string;
  docxPath: string;
  ctDocument: CTDocument;
  forms: TemplateForms;
  assistantId: string;
  value?: number;
  summary?: string[];
  createdAt: Timestamp;
};

export type ContractStatus = "draft" | "completed";

type IntegerString = `${number}` & `${bigint}`;

export type ContractDraftStage = "welcome" | IntegerString | "review";

export type Contract = {
  /** The display name of the contract */
  name: string;
  /** The slug that identifies the type of contract */
  slug: string;
  /** Data object sent via forms */
  data: object | null;
  /** Array with IDs of users who can access the document */
  ownersUids: string[];
  /** The contract template object */
  template?: Template;
  /** The docx object to generate the contract file */
  ctDocument?: CTDocument | null;
  documentUpdatedAt?: Timestamp;
  /** Array of DocumentChange objects created in review process */
  changes?: DocumentChange[];
  /** Current change index */
  changeIndex?: number;
  /** The contract status */
  status?: ContractStatus;
  /** Contract drafting stage. Accepted values "welcome", "review" and any integer number as string, to represents the last forms index fulfilled  */
  draftStage?: ContractDraftStage;
  /** Contract price charged to regular user */
  value?: number;
  /** Access token used in the contract sharing flow between users */
  accessToken?: string;
  /** Anyone with this URL can permanently access the file */
  downloadURL?: string;
  /** The contract summary */
  summary?: string[] | null;
  /** Assistant usage */
  assistantUsage?: number;
  /** Metadata of the contract */
  createdAt: Timestamp;
  updatedAt?: Timestamp;
};
