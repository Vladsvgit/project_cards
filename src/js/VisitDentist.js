import { Visit } from "./Visit.js";
export class VisitDentist extends Visit {
    constructor(title, description, urgency, fullName, lastVisitDate) {
        super(title, description, urgency, fullName);
        this.lastVisitDate = lastVisitDate
    }
    sendToServer() {
        // console.log(this);
        fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                doctor: 'Dentist',
                title: this.title,
                description: this.description,
                urgency: this.urgency,
                fullName: this.fullName,
                status: "Open",
                lastVisitDate: this.lastVisitDate
            })
        })
            .then(response => response.json())
            .then(response => console.log(response))
    }
};