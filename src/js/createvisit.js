class Visit {
    constructor(purpose, discription, urgency, fullName) {
        this.purpose = purpose;
        this.discription = discription;
        this.urgency = urgency;
        this.fullName = fullName
    }
};

class VisitDentist extends Visit {
    constructor(purpose, discription, urgency, fullName, lastVisitDate) {
        super(purpose, discription, urgency, fullName);
        this.lastVisitDate = lastVisitDate
    }
};

class VisitCardiologist extends Visit {
    constructor(purpose, discription, urgency, fullName, presure, bodyIndex, heartIllness, age) {
        super(purpose, discription, urgency, fullName);
        this.presure = presure;
        this.bodyIndex = bodyIndex;
        heartIllness = heartIllness;
        this.age = age
    }
};

class VisitTherapist extends Visit {
    constructor(purpose, discription, urgency, fullName, age) {
        super(purpose, discription, urgency, fullName);
        this.age = age
    }
};

const visit = new Visit();
const visitDentist = new VisitDentist();
const visitCardiologist = new VisitCardiologist();
const visitTherapist = new VisitTherapist();