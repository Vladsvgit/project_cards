import {createCardApi, deleteCardApi} from "./api.js";

export class Visit {
<<<<<<< HEAD
    constructor(title, description, urgency, fullName, status = "Open") {
        this.title = title;
        this.description = description;
        this.urgency = urgency;
        this.fullName = fullName;
        this.status = status;
        //this.id = id
=======
    constructor(doctor, title, description, urgency, fullName, status = "Open", id) {
        this.doctor = doctor;
        this.title = title;
        this.description = description;
        this.urgency = urgency;
        this.fullName = fullName
        this.status = status;
        this.id = id;
    }

    sendToServer() {
        createCardApi(Object.assign({}, this));
    }
    // renderCard(){

    // }
    deleteVisit(id) {
        deleteCardApi(id)



>>>>>>> develop-main
    }

};