/*	=========================================
 *	==	StudentNote WebEngeneering Project ==
 *	=========================================
 *
 *	Group:			Marcel Maier, Florian Keilhofer, Lukas Weber, Peter Fischer
 *	Developer:		Marcel Maier
 *	Mail:			mar.maier.16@lehre.mosbach.dhbw.de
 *	Created:		13th-July-2017
 *	Finished:		20th-July-2017
 *	Created for: 	DHBW - Project - 2nd Semester 
 *	
 *	Licenses:
 *		Fonts:    - Font Awesome 4.2.0 by @davegandy - http://fontawesome.io - @fontawesome
 *				  - Google Open Fonts (Lato, Roboto)
 *
 *		CSS:	  - StarRating: FreeToUseLicense (MIT) from cssscript.com
 * 							  
 */

import {Address} from "./address";
import {Note} from "./note";

export class Student{
    editMode: boolean = false;
    forename: string;
    surname: string;
    className: string;
    picpath: string;
    age: number;
    address: Address;
    notes: Note[];

    constructor(forename, surname, className, age, street, house, zip, city, picpath){
        this.forename = forename;
        this.surname = surname;
        this.className = className;
        this.picpath = picpath;
        this.age = age;
        this.address = new Address(street, house, zip, city);
        this.notes = [];
    }
}
