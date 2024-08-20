export interface ErrorResponse {
  error: string;
}

export interface AcceptOwnershipRequest {
  contractId: string;
  accessToken: string;
}

export interface AcceptOwnershipSuccessResponse {}

export type AcceptOwnershipResponse =
  | AcceptOwnershipSuccessResponse
  | ErrorResponse;

export type MetaRequest = {
  version: string | null;
  platform?: "mobile" | "web";
  ip?: string;
};
export interface RunAssistantRequest {
  contractId: string;
  paragraphId: string;
  text: string;
  textContext?: string;
  meta: MetaRequest;
}

export interface RunAssistantSuccessResponse {
  messages: string[];
}

export type RunAssistantResponse = RunAssistantSuccessResponse | ErrorResponse;
