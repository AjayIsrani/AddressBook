export class Contact {

    ContactID               : number;
    ContactCategoryID       : number;
    ContactName             : string;
    Address                 : string;
    Pincode                 : string;
    CityID                  : number;
    StateID                 : number;
    CountryID               : number;
    EmailAddress            : string;
    MobileNo                : string;
    FaceBookID              : string;
    LinkedinID              : string;
    ContactCategoryName     : string;
    CityName                : string;
    StateName               : string;
    CountryName             : string;
    UserID                  : number;
    Created                 : string;
    Modified                : string;


    constructor() {
        this.ContactID          = null;
        this.ContactCategoryID  = null;
        this.ContactName        = "";
        this.Pincode            = "";
        this.CityID             = null;
        this.StateID            = null;
        this.CountryID          = null;
        this.EmailAddress       = "";
        this.MobileNo           = "";
        this.FaceBookID         = "";
        this.LinkedinID         = "";
        this.ContactCategoryName= "";
        this.CityName           = "";
        this.StateName          = "";
        this.CountryName        = "";
        this.UserID             = null;
        this.Created            = "";
        this.Modified           = "";
    }
}