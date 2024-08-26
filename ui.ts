import { Paragraph } from "./docx";

export interface UIParagraph {
  p: Paragraph;
  prefix?: string;
  virtual?: boolean;
  siblings?: boolean;
  editable?: boolean;
  deleted?: boolean;
}

export interface ParagraphWriteChange {
  type: "paragraph-create" | "paragraph-update";
  messageId?: string;
  paragraph: UIParagraph;
  after: UIParagraph;
}

export interface ParagraphDeleteChange {
  type: "paragraph-delete";
  paragraph: UIParagraph;
}

export type DocumentChange = ParagraphWriteChange | ParagraphDeleteChange;
