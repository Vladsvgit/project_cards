import { Visit } from "./Visit.js";
export class VisitDentist extends Visit {
    constructor(title, description, urgency, fullName, status, lastVisitDate, id) {
        super(title, description, urgency, fullName, status, id);
        this.lastVisitDate = lastVisitDate
    }
    sendToServer() {
        console.log(this);
        fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(this)
        })
            .then(response => response.json())
            .then(response => console.log(response))
    }

    editVisit (id) {
        
    }
};