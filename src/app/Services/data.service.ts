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
 
import {Injectable} from "@angular/core";

@Injectable()
export class DataService {

	//[START]TESTDATA
		classesTestData: string = `[{"editMode":false,"students":[{"editMode":false,"forename":"max","surname":"schuster","className":"5B","picpath":"http://www.todayallnews.com/wp-content/uploads/2017/03/images-1.jpg","age":"15","address":{"street":"derweg","house":"3","zip":"342523","city":"hochhausen"},"notes":[]},{"editMode":false,"forename":"arnold","surname":"günther","className":"5B","picpath":"https://www.phillipsbrooks.org/uploaded/new_site_buildout/student-life/Student-Life-2.png","age":"8","address":{"street":"lange Straße","house":"1","zip":"46568","city":"GroßesDorf"},"notes":[]}],"name":"5B","picpath":"http://www.spektrum.de/fm/912/thumbnails/Lehrerin_fotolia20007622_Contrastwerkstatt.jpg.1566915.jpg","classTeacher":"florian schenk","classSpeaker":"max schuster","classFolder":"arnold günther"},{"editMode":false,"students":[{"editMode":false,"forename":"Anne","surname":"Dunning","className":"8A","picpath":"http://www.schulegossau.ch/de/images/598859b6c76be.jpg","age":"8","address":{"street":"Neue Straße","house":"1","zip":"76968","city":"Geroldshofen"},"notes":[{"title":"Super Hausaufgabe","message":"Unerstaunt gute Lösung präsentiert.","rating":5,"date":"Tuesday 5.8.2017","time":"12:46","creator":"marcel maier "},{"title":"Erklärung für Mitschülern ","message":"Sozial","rating":5,"date":"Tuesday 5.8.2017","time":"12:47","creator":"marcel maier "},{"title":"Beim Klauen erwischt","message":"Hat Stifte vom Nachbarn geklaut und wollte es nicht zugeben!","rating":2,"date":"Tuesday 5.8.2017","time":"12:48","creator":"marcel maier "}]},{"editMode":false,"forename":"Kerstin","surname":"Groß","className":"8A","picpath":"https://t2.ftcdn.net/jpg/00/18/99/05/400_F_18990535_GFRP5V8oYCvQ5mUiLdgxT13AxFDu1FF7.jpg","age":"6","address":{"street":"Musterweg","house":"33","zip":"83493","city":"Musterstadt"},"notes":[]}],"name":"8A","picpath":"http://www.elternwissen.com/fileadmin/content/shopseiten/m%C3%BCndliche_mitarbeit-__contrastwerkstatt_-_Fotolia.com.jpg","classTeacher":"lukas weber","classSpeaker":"Anne Dunning","classFolder":"Kerstin Groß"},{"editMode":false,"students":[{"editMode":false,"forename":"Ming Wing Ying Yang","surname":"Ling","className":"9C","picpath":"http://vetecusa.org/media/upload/tintuc/asian-college-student-400x400-530.jpg","age":"24","address":{"street":"nextstreet","house":"45","zip":"48663","city":"Churchville"},"notes":[]},{"editMode":false,"forename":"Susanne","surname":"Klein","className":"9C","picpath":"https://thumbs.dreamstime.com/t/portrait-happy-smiling-teenage-schoolgirl-25660103.jpg","age":"9","address":{"street":"WasWeißIch","house":"55","zip":"41532","city":"Großstadt"},"notes":[{"title":"Beim Rauchen erwischt!","message":"Hat in der Pause geraucht. Eltern wurden kontaktiert!!!","rating":1,"date":"Tuesday 5.8.2017","time":"12:46","creator":"marcel maier "},{"title":"Hausaufgaben vergessen","message":"Hausaufgaben wurden heute vergessen. Zum wiederholten mal.","rating":2,"date":"Tuesday 5.8.2017","time":"12:47","creator":"marcel maier "},{"title":"Zu spät erschienen","message":"Kam zum wiederholten Mal zu Spät zum unterricht!","rating":2,"date":"Tuesday 5.8.2017","time":"12:49","creator":"marcel maier "},{"title":"Gute Mitarbeit","message":"Hat heute sehr gute Mitarbeit geleistet","rating":4,"date":"Tuesday 5.8.2017","time":"12:49","creator":"marcel maier "}]}],"name":"9C","picpath":"http://www.elternwissen.com/fileadmin/content/lehrertypen-teil2.png","classTeacher":"marcel maier","classSpeaker":"Ming Wing Ying Yang Ling","classFolder":"Susanne Klein"}]`;
		currentusertestData: string = `{"editMode":false,"forename":"marcel","surname":"maier","password":"dev","mail":"marcelmaier@mail.com","age":"20","picpath":"http://3fmkzq190q5dl6bkw3q7q87c.wpengine.netdna-cdn.com/wp-content/uploads/2016/02/KevinSpacey-v31.jpg","address":{"street":"Street9","house":"9","zip":"78942","city":"CIty"}}`;
		studentsTestData: string = `[{"editMode":false,"forename":"max","surname":"schuster","className":"5B","picpath":"http://www.todayallnews.com/wp-content/uploads/2017/03/images-1.jpg","age":"15","address":{"street":"derweg","house":"3","zip":"342523","city":"hochhausen"},"notes":[]},{"editMode":false,"forename":"Ming Wing Ying Yang","surname":"Ling","className":"9C","picpath":"http://vetecusa.org/media/upload/tintuc/asian-college-student-400x400-530.jpg","age":"24","address":{"street":"nextstreet","house":"45","zip":"48663","city":"Churchville"},"notes":[]},{"editMode":false,"forename":"arnold","surname":"günther","className":"5B","picpath":"https://www.phillipsbrooks.org/uploaded/new_site_buildout/student-life/Student-Life-2.png","age":"8","address":{"street":"lange Straße","house":"1","zip":"46568","city":"GroßesDorf"},"notes":[]},{"editMode":false,"forename":"Anne","surname":"Dunning","className":"8A","picpath":"http://www.schulegossau.ch/de/images/598859b6c76be.jpg","age":"8","address":{"street":"Neue Straße","house":"1","zip":"76968","city":"Geroldshofen"},"notes":[{"title":"Super Hausaufgabe","message":"Unerstaunt gute Lösung präsentiert.","rating":5,"date":"Tuesday 5.8.2017","time":"12:46","creator":"marcel maier "},{"title":"Erklärung für Mitschülern ","message":"Sozial","rating":5,"date":"Tuesday 5.8.2017","time":"12:47","creator":"marcel maier "},{"title":"Beim Klauen erwischt","message":"Hat Stifte vom Nachbarn geklaut und wollte es nicht zugeben!","rating":2,"date":"Tuesday 5.8.2017","time":"12:48","creator":"marcel maier "}]},{"editMode":false,"forename":"Susanne","surname":"Klein","className":"9C","picpath":"https://thumbs.dreamstime.com/t/portrait-happy-smiling-teenage-schoolgirl-25660103.jpg","age":"9","address":{"street":"WasWeißIch","house":"55","zip":"41532","city":"Großstadt"},"notes":[{"title":"Beim Rauchen erwischt!","message":"Hat in der Pause geraucht. Eltern wurden kontaktiert!!!","rating":1,"date":"Tuesday 5.8.2017","time":"12:46","creator":"marcel maier "},{"title":"Hausaufgaben vergessen","message":"Hausaufgaben wurden heute vergessen. Zum wiederholten mal.","rating":2,"date":"Tuesday 5.8.2017","time":"12:47","creator":"marcel maier "},{"title":"Zu spät erschienen","message":"Kam zum wiederholten Mal zu Spät zum unterricht!","rating":2,"date":"Tuesday 5.8.2017","time":"12:49","creator":"marcel maier "},{"title":"Gute Mitarbeit","message":"Hat heute sehr gute Mitarbeit geleistet","rating":4,"date":"Tuesday 5.8.2017","time":"12:49","creator":"marcel maier "}]},{"editMode":false,"forename":"Kerstin","surname":"Groß","className":"8A","picpath":"https://t2.ftcdn.net/jpg/00/18/99/05/400_F_18990535_GFRP5V8oYCvQ5mUiLdgxT13AxFDu1FF7.jpg","age":"6","address":{"street":"Musterweg","house":"33","zip":"83493","city":"Musterstadt"},"notes":[]}]`;
		teachersTestData: string = `[{"editMode":false,"forename":"marcel","surname":"maier","password":"dev","mail":"marcelmaier@mail.com","age":"20","picpath":"http://3fmkzq190q5dl6bkw3q7q87c.wpengine.netdna-cdn.com/wp-content/uploads/2016/02/KevinSpacey-v31.jpg","address":{"street":"Street9","house":"9","zip":"78942","city":"CIty"}},{"editMode":false,"forename":"lukas","surname":"weber","password":"dev","mail":"lukas.weber@mail.com","age":"40","picpath":"http://1.bp.blogspot.com/-XzGIEqJVxA0/VkQ5DPsS9LI/AAAAAAAANvM/iZWG9lURUDY/s1600/guru%2Bsolo.jpeg","address":{"street":"anotherstreet","house":"56","zip":"48642","city":"CoolCity"}},{"editMode":false,"forename":"florian","surname":"schenk","password":"dev","mail":"florian.schenk@mail.com","age":"28","picpath":"https://cdn.theconversation.com/files/46553/width240x240/8m9r4j7s-1397630216.jpg","address":{"street":"secondstreedyo","house":"54","zip":"43586","city":"Ciiiiiiiittyyy"}}]`;
	//[END]TESTDATA
    
	
	//CreateNotes
		setStudentForNote(student){
			localStorage.setItem("studentForNote", JSON.stringify(student));
		}

		resetStudentForNote(){
			localStorage.removeItem("studentForNote");
		}

		getStudentForNote(){
			return JSON.parse(localStorage.getItem("studentForNote"));
		}

    //EditNotes
		setStudentForEditNote(student){
			localStorage.setItem("studentForEditNote", JSON.stringify(student));
		}
		setIndexForNoteEdit(index){
			localStorage.setItem("indexForNoteEdit", JSON.stringify(index));
		}

		resetStudentForEditNote(){
			localStorage.removeItem("studentForEditNote");
		}
		resetIndexForNoteEdit(){
			localStorage.removeItem("indexForNoteEdit");
		}

		getStudentForEditNote(){
			return JSON.parse(localStorage.getItem("studentForEditNote"));
		}
		getIndexForNoteEdit(){
			return JSON.parse(localStorage.getItem("indexForNoteEdit"));
		}

    //Profile
		setStudentForProfile(student){
			localStorage.setItem("studentForProfile", JSON.stringify(student));
		}

		resetStudentForProfile(){
			localStorage.removeItem("studentForProfile");
		}

		getStudentForProfile(){
			return JSON.parse(localStorage.getItem("studentForProfile"));
		}


    //Classses

        setClasses(classes){
            localStorage.setItem("classes", JSON.stringify(classes));
        }
		
        getClasses(){
            return JSON.parse(localStorage.getItem("classes"));
        }

    //Students

        setStudents(students){
            localStorage.setItem("students", JSON.stringify(students));
        }
		
        getStudents(){
            return JSON.parse(localStorage.getItem("students"));
        }

    //Teachers

        setTechers(teacherList){
            localStorage.setItem("teachers", JSON.stringify(teacherList));
        }
        getTechers(){
            return JSON.parse(localStorage.getItem("teachers"));
        }

    //current user (user is a teacher as well)

        setCurrentUser(teacher){
            localStorage.setItem("currentuser", JSON.stringify(teacher));
        }

        getCurrentUser(){
            return JSON.parse(localStorage.getItem("currentuser"));
        }

        removeCurrentUser(){
            localStorage.removeItem("currentuser");
        }
		
	//setTestData
		setTestData(){
			localStorage.setItem("classes", this.classesTestData);
			localStorage.setItem("students", this.studentsTestData);
			localStorage.setItem("teachers", this.teachersTestData);
			localStorage.setItem("currentuser", this.currentusertestData);
		}
}