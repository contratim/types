import { Paragraph } from "./docx";

export interface UIParagraph {
  p: Paragraph;
  prefix?: string;
  virtual?: boolean;
  siblings?: boolean;
  editable?: boolean;
  deleted?: boolean;
}

export interface ParagraphCreateChange {
  type: "paragraph-create";
  paragraph: UIParagraph;
  after: UIParagraph;
}

export interface ParagraphDeleteChange {
  type: "paragraph-delete";
  paragraph: UIParagraph;
}

export type DocumentChange = ParagraphCreateChange | ParagraphDeleteChange;
