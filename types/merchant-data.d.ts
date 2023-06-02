/* tslint:disable:all */

export type MerchantData = {
  publicMerchantId: string;
  configId: string;
  country: string;
  merchantType: string;
  documentType?: string;
  taxId?: string;
  socialReason?: string;
  naturalPerson?: NamePerson;
  mcc?: string;
  economicActivityId?: string;
  industryType?: string;
  constitutionDate?: number;
  webSite?: string;
  companyType?: string;
  gracePeriod?: number;
  [k: string]: any;
};

export interface NamePerson {
  name?: string;
  lastname?: string;
  [k: string]: any;
}
