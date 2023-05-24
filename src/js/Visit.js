

export class Visit {
    constructor(title, description, urgency, fullName, id = null) {
        this.title = title;
        this.description = description;
        this.urgency = urgency;
        this.fullName = fullName
        this.id = id;
    }
};