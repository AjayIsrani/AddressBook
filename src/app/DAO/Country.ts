export class Country {

    CountryID: number;
    CountryName: string;
    CountryCode: string;
    UserID: number;
    Created: string;
    Modified: string;
   

    constructor(){
        this.CountryID = null;
        this.CountryName= "";
        this.CountryCode= "";
        this.UserID = null;
        this.Created= "";
        this.Modified= "";
    }
}