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

export interface RunAssistantRequest {
  contractId: string;
  text: string;
  textContext?: string;
}

export interface RunAssistantSuccessResponse {
  messages: string[];
}

export type RunAssistantResponse = RunAssistantSuccessResponse | ErrorResponse;
