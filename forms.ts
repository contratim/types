export type FormFieldValue = string | number | boolean;
export type GenericFormData = {
  [key: string]: FormFieldValue;
};

export type PropertyKey = {
  type: "string";
  title: string;
  description?: string;
  format?: string;
  enum?: string[];
  required?: boolean;
  classNames?: string;
};

export type Properties = {
  [key: string]: PropertyKey;
};

export type FormSchema = {
  formClassNames?: string;
  properties: Properties;
};

export type Widget = "address" | "person" | "statecity" | "gender";

export type BaseForm = {
  type: "base";
  /** the title must be informed to display the form step heading */
  scope?: string;
  title: string;
  description?: string;
  schema?: FormSchema;
  widget?: Widget;
  formData?: object;
};

export type FormWithScope = {
  type: "scope";
  forms: BaseForm[];
  items: number;
};

export type FormItem = BaseForm | FormWithScope;

export type TemplateForms = FormItem[];
