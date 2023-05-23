

export class Visit {
    constructor(title, description, urgency, fullName, status = "Open") {
        this.title = title;
        this.description = description;
        this.urgency = urgency;
        this.fullName = fullName;
        this.status = status;
        //this.id = id
    }

};