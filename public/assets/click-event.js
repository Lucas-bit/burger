$('.created-buttons').onClick((event) => {
    event.preventDefault();
     burger.update(this.id, (callBack) => {
    console.log(callBack)
  })})
