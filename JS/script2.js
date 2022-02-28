class Car {

    constructor(model, year, power, color) {
      this.model = model;
      this.year = year;
      this.power = power;
      this.color = color;
    }

  
    showInfo() {
        document.write(`
            Модель: ${this.model}<br>
            Год выпуска: ${this.year}<br>
            Мощность: ${this.power} kW<br>
            Цвет: ${this.color}<br>
        `)
    }
}

class Electro extends Car {
    constructor(model, year, power, color, battery) {
      super(model, year, power, color);
      this.battery = battery;
    }

    showInfo() {
        super.showInfo();
        document.write(`Батарея: ${this.battery}<br>`);
    }

    promote() {
        document.write(`С ${this.model} сохрони экологию.`)
    }

  }
  
const bugatti = new Car('Bugatti Alfa', 2022, 1600, 'Синий <br>');
bugatti.showInfo();

const nio = new Electro("ES8", 2021, 650, 'Белый', 1000);
nio.showInfo();
nio.promote();