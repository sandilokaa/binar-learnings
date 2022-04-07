class App {
  constructor() {
    //this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.driverType = document.getElementById("driverType");
    this.dateInput = document.getElementById("dateInput");
    this.timeInput = document.getElementById("timeInput");
    this.capacityInput = document.getElementById("capacityInput");
  }

  async init() {
    await this.load();

    // Register click listener
    // this.clearButton.addEventListener("click", (e) => {
    //   e.preventDefault();
    //   let child = this.carContainerElement.firstElementChild;

    //   while (child) {
    //     child.remove();
    //     child = this.carContainerElement.firstElementChild;
    //   }
    //   // return false;
    // });
    this.loadButton.onclick = this.run;
  }

  run = () => {

    const node = document.createElement("div");
    node.className = "row";
    this.carContainerElement.className = "container";
    const newDiv = document.createElement("div");
    newDiv.className = "container";
    node.appendChild(newDiv);

    const line = document.createElement("div");
    line.className= "row";
    this.carContainerElement.appendChild(line);

    const driverTypeValue = this.driverType.value;
    const dateInputValue = this.dateInput.value;
    const timeInputValue = this.timeInput.value;
    const capacityInputValue = this.capacityInput.value;
    
    console.log(timeInputValue);
    
    Car.list
      .filter((car) => {
        console.log(car.availableAt.toISOString()); // toISOString untuk mengubah tanggal menjadi string
        console.log(car.availableAt.toISOString().substring(11, 16));
        console.log(
          car.availableAt.toISOString().substring(0, 10) == dateInputValue &&
            car.availableAt.toISOString().substring(11, 16) < timeInputValue
        );
        if (
          car.capacity === parseInt(capacityInputValue) &&
          car.available === Boolean(driverTypeValue) &&
          car.availableAt.toISOString().substring(0, 10) == dateInputValue &&
          car.availableAt.toISOString().substring(11, 16) < timeInputValue
        ) {
          console.log(car);
          return car;
        }
      })
      .map((car) => {
        const col = document.createElement("div");
        col.className = "col-4";
        col.innerHTML = car.render();
        baris.appendChild(col);
      });
    // Car.list.forEach((car) => {
    //   const node = document.createElement("div");
    //   node.innerHTML = car.render();
    //   this.carContainerElement.appendChild(node);
    // });

};

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  // clear = (e) => {
  //   console.log(e);
  //   e.preventDefault();
  //   let child = this.carContainerElement.firstElementChild;

  //   while (child) {
  //     child.remove();
  //     child = this.carContainerElement.firstElementChild;
  //   }
  // };
}
