export type Run = {
  type: "run";
  children: {
    type: "text";
    value: string;
  }[];
  styleId?: string | null;
  styleName?: string | null;
  isBold?: boolean;
  isUnderline?: boolean;
  isItalic?: boolean;
  isStrikethrough?: boolean;
  isAllCaps?: boolean;
  isSmallCaps?: boolean;
  verticalAlignment: "baseline" | string;
  font?: string | null;
  fontSize: string | null;
  highlight?: string | null;
};

export type Paragraph = {
  type: "paragraph";
  id: string;
  children: Run[];
  styleId: string | null;
  styleName: string | null;
  numbering: null | {
    isOrdered: boolean;
    level: string;
  };
  alignment: string | null;
  indent: {
    start: string | null;
    end: string | null;
    firstLine: string | null;
    hanging: string | null;
  };
};

export type Table = {
  type: "table";
  children: TableRow[];
  styleId: string | null;
  styleName: string | null;
};

export type TableRow = {
  type: "tableRow";
  children: TableCell[];
  isHeader: boolean;
};

export type TableCell = {
  type: "tableCell";
  children: Paragraph[];
  colSpan: number;
  rowSpan: number;
};

// export type Note = {
//   type: "note";
//   children: {
//     type: "text";
//     text: string;
//   }[];
// };

// export type Comment = {
//   type: "comment";
//   children: {
//     type: "text";
//     text: string;
//   }[];
// };

export type Document = {
  type: "document";
  children: (Paragraph | Table)[];
  // notes: Note[];
  // comments: Comment[];
};
