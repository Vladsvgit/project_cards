import { Visit } from "./Visit.js";

export class VisitTherapist extends Visit {
    constructor(purpose, description, urgency, fullName, age) {
        super(purpose, description, urgency, fullName);
        this.age = age
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
                doctor: 'Therapist',
                title: this.title,
                description: this.description,
                urgency: this.urgency,
                fullName: this.fullName,
                status: "Open",
                age: this.age
            })
        })
            .then(response => response.json())
            .then(response => console.log(response))
    }
};