import { IContactInformation } from "./contactInformation";
import { IPaymentInformation } from "./paymentInformation";
import { IPersonalInformation } from "./personalInformation";

export interface IPaymentGateway {
    personalInformation: IPersonalInformation;
    contactInformation: IContactInformation;
    paymentInformation: IPaymentInformation;
}