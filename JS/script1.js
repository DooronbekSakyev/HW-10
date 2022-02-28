class Restaurant {
    constructor(name, cusineType, served = 0) {
      this.name = name;
      this.cusineType = cusineType;
      this.served = served;
    }
  
    showInfo() {
      document.write(`<br><h3>Restaurant: ${this.name} </h3><br>
       <h3>Cuisine type: ${this.cusineType} </h3><br>`);
    }
  
    // 0 - sun
    // 1 = mon
    // 2 = tue
    // 3 = wed
    // 4 = thu
    // 5 = fri
    // 6 = sat
  
    isOpen() {
      let currentHour = new Date().getHours();
      let currentDay = new Date().getDay();
  
      if (currentDay === 6 || currentDay === 0) {
        document.write(`<h3>${this.name} is closed </h3>`);
      } else {
        if (currentHour > 9 && currentHour < 22) {
          document.write(`<h3>${this.name} is open </h3>`);
        } else {
          document.write(`<h3>${this.name} is closed </h3><br>`);
        }
      }
    };
  
    setStatus(status) {
      this.isOpen = status;
    }
  
    serve() {
      this.served++
    }
  
    setServed(num) {
      this.served = this.served + num;
    }
  
    showTotalServed() {
      document.write(`<h3>Total served: ${this.served} </h3>`)
    }
  }
  
  const banquet = new Restaurant("Atavalo", "Italian");
  
  banquet.showInfo();
  banquet.isOpen();
  
  banquet.serve();
  banquet.serve();
  banquet.serve();
  banquet.serve();
  banquet.setServed(50);
  banquet.showTotalServed();