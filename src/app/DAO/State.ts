export class State {

    StateID: number;
    CountryID: number;
    StateName: string;
    CountryName: string;
    UserID: number;
    Created: string;
    Modified: string;
   

    constructor(){
        this.StateID = null;
        this.CountryID= null;
        this.StateName= "";
        this.CountryName= "";
        this.UserID = null;
        this.Created= "";
        this.Modified= "";
    }
}