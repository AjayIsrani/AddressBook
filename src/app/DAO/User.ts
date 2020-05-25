export class User {
    UserID     : number;
    UserName    : string;
    Password	: string;
    FullName	: string;
    Address	    : string;
    PinCode	    : string;
    MobileNo	: string;
    EmailID	    : string;
    FaceBookID	: string;
    LinkedinID	: string;
    BirthDate	: string;
    Created: string;
    Modified: string;
    NewPassword : string;
    ReTypePassword : string;
   

    constructor(){
        this.UserID     = null;
        this.UserName	= "";
        this.Password	= "";
        this.FullName	= "";
        this.Address	= "";
        this.PinCode	= "";
        this.MobileNo	= "";
        this.EmailID	= "";
        this.FaceBookID	= "";
        this.LinkedinID	= "";
        this.BirthDate	= "";
        this.Created    = "";
        this.Modified   = "";
        this.NewPassword = "";
        this.ReTypePassword = "";
    }
}