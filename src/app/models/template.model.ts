import { Contacts } from "./contacts.model";
import { Skill } from "./skill.model";

export class Template {

    constructor (
        public name : string,
        public photo : any,
        //public contacts  : any,
        //NEW
        public contacts : Contacts,

        public summary : string,
        public projects : string, 
        //public skills : string,
        //NEW 
        public skills : Skill[], 

        public languages : string,
        public experience : string
     ) { }

}
