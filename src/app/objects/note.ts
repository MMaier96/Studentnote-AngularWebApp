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

import {DataService} from "../Services/data.service";
export class Note{

    title: string;
    message: string;
    rating: number;
    creator: string;
    time: string;
    date: string;

    constructor(title, message, rating, teacher){
        this.title = title;
        this.message = message;
        this.rating = rating;
        let date = new Date();
        let substrDate =  date.getDate() + "." + date.getMonth() + "." + date.getFullYear();

        switch(date.getDay()){
            case 1: this.date = "Monday " + substrDate;
                break;
            case 2: this.date = "Tuesday " + substrDate;
                break;
            case 3: this.date = "Wednesday " + substrDate;
                break;
            case 4: this.date = "Thursday " + substrDate;
                break;
            case 5: this.date = "Friday " + substrDate;
                break;
            case 6: this.date = "Saturday " + substrDate;
                break;
            case 7: this.date = "Sunday " + substrDate;
                break;

        }
        this.time = date.getHours() + ":" + date.getMinutes();
        this.creator = teacher;

    }
}