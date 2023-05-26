const objCardiologist = {
    age: "32",
    description: "Help me",
    bodyIndex: "12",
    doctor: "Cardiologist",
    fullName: "Artem Lyasenko",
    heartIll: "Ok",
    id: 170513,
    pressure: "120/80",
    title: "Heart ill",
    urgency: "High",
  };
  
  function assignValuesForm(obj, root) {
    let {
      title,
      description,
      doctor,
      urgency,
      fullName,
      pressure,
      bodyIndex,
      heartIll,
      age,
      id,
    } = obj;
    const valueDefault = new VisitCardiologist(
      title,
      description,
      urgency,
      fullName,
      pressure,
      bodyIndex,
      heartIll,
      age,
      id
    );
    valueDefault.renderSendForm(root);
  
    
  }
  
    // assignValuesForm(objCardiologist, document.body);
  
  const sendForm = document.querySelector(".send-form");
  // sendForm.addEventListener("submit", (event) => {
  //   event.preventDefault();
  //   let sendObj = new VisitCardiologist(
  //     sendForm.title.value,
  //     sendForm.description.value,
  //     sendForm.urgency.value,
  //     sendForm.name.value,
  //     sendForm.pressure.value,
  //     sendForm.bmi.value,
  //     sendForm.heartIll.value,
  //     sendForm.age.value
  //   );
  //   console.log(sendObj);
  //   // sendObj.sendToServer();
  // });
  
  sectionCards.addEventListener("click", (event) => {
    console.log(event.target);
    if (event.target.classList.contains("block-cards__edit")){
      let blockCard = event.target.closest(".block-card");
       console.log(blockCard.id);
    }
}
  )
  
  
    //  const sendCardId = 12321
  
    //  const targetCard = dataBase.map((data) => {
    //   if(data.id === sendCardId){
    //     assignValuesForm(data, document.body);
  
    //   }
    //  })
  
    