export type MetaRequest = {
  version: string | null;
  platform?: "mobile" | "web";
  ip?: string;
};

export interface BaseRequest {
  meta: MetaRequest;
}
export interface ErrorResponse {
  error: string;
}

// accept ownership
export interface AcceptOwnershipRequest extends BaseRequest {
  contractId: string;
  accessToken: string;
}

export interface AcceptOwnershipSuccessResponse {}

export type AcceptOwnershipResponse =
  | AcceptOwnershipSuccessResponse
  | ErrorResponse;

// run assistant
export interface RunAssistantRequest extends BaseRequest {
  contractId: string;
  paragraphId: string;
  text: string;
  textContext?: string;
}

export interface RunAssistantSuccessResponse {
  messages: string[];
}

export type RunAssistantResponse = RunAssistantSuccessResponse | ErrorResponse;

// export document
export interface ExportContractRequest extends BaseRequest {
  contractId: string;
}

export interface ExportContractSuccessResponse {
  path: string;
}

export type ExportContractResponse =
  | ExportContractSuccessResponse
  | ErrorResponse;
