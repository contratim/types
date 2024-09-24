export interface AsaasCustomer {
  object: "customer";
  id: string;
  dateCreated: string;
  name: string;
  email: string;
  phone: string;
  mobilePhone: string;
  address: string;
  addressNumber: string;
  complement: string;
  province: string;
  city: string;
  cityName: string;
  state: string;
  country: string;
  postalCode: string;
  cpfCnpj: string;
  personType: "FISICA";
  deleted: false;
  additionalEmails: string;
  externalReference: string;
  notificationDisabled: false;
  observations: string;
}

export interface CreateCustomerRequest {
  name: string;
  cpfCnpj: string;
  externalReference: string;
  email?: string;
  phone?: string;
  mobilePhone?: string;
  address?: string;
  addressNumber?: string;
  complement?: string;
  province?: string;
  postalCode?: string;
  notificationDisabled?: boolean;
  // additionalEmails: string;
  // municipalInscription: string;
  // stateInscription: string;
  // observations: string;
  // groupName: string;
  // company: string;
}
