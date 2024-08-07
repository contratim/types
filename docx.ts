export type SimpleRun = {
  type: "run";
  text: string;
  styleName: string | null;
  bold: boolean;
};

export type SimpleParagraph = {
  type: "paragraph";
  children: SimpleRun[];
  styleName: string | null;
  numbering: null | {
    isOrdered: boolean;
    level: string;
  };
};

export type SimpleDocument = {
  type: "document";
  children: SimpleParagraph[];
};

export type Run = {
  type: "run";
  children: {
    type: "text";
    value: string;
  }[];
  styleId: string | null;
  styleName: string | null;
  isBold: boolean;
  isUnderline: boolean;
  isItalic: boolean;
  isStrikethrough: boolean;
  isAllCaps: boolean;
  isSmallCaps: boolean;
  verticalAlignment: "baseline" | string;
  font: string | null;
  fontSize: string | null;
  highlight: string | null;
};

export type Paragraph = {
  type: "paragraph";
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
  children: Paragraph[];
  // notes: Note[];
  // comments: Comment[];
};
