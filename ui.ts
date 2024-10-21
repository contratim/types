import { CTParagraph } from "./doc/ct";

export type UICTParagraph = CTParagraph & {
  prefix?: string;
  editable?: boolean;
  deleted?: boolean;
  virtual?: boolean;
};

export interface ParagraphWriteChange {
  type: "paragraph-create" | "paragraph-update";
  messageId?: string;
  paragraph: UICTParagraph;
  after: UICTParagraph;
}

export interface ParagraphDeleteChange {
  type: "paragraph-delete";
  paragraph: UICTParagraph;
}

export type DocumentChange = ParagraphWriteChange | ParagraphDeleteChange;
