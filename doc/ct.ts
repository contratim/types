import { Paragraph, Table } from "../docx";

export type CTDocumentChild = CTParagraph | CTTable;

export type CTDocument = {
  children: CTDocumentChild[];
};

export type CTParagraphType = "clause" | "forum" | "part";

export type CTParagraph = {
  type: "paragraph";
  paragraph: Paragraph;
  id: string;
  paragraphType?: CTParagraphType;
  descendantOf?: CTParagraphType;
  numbering?: {
    level: number;
    ordered: boolean;
  };
};

export type CTTable = {
  type: "table";
  table: Table;
};
