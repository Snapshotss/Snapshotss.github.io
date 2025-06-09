


(()=>{
    //1.-arributos, 2.-constructor,
    // 3.-metodos, 4.-getters y setters
 class Manager {
  
    constructor(public name: string, public id: number, public phoneNo: number, public location: string) {
    this.name = name;
    this.id = id;
    this.phoneNo = phoneNo;
    this.location = location;
  }

  purchaseInventory(): void {}
  recordComplaints(): void {}
  manageStaff(): void {}
}

class Inventory {
  constructor(public type: string, public status: string) {
    this.type = type;
    this.status = status;
  }
}

class Chef {
  constructor(public name: string, public id: number, public location: string) {
    this.name = name;
    this.id = id;
    this.location = location;
  }

  takeOrders(): void {}
}

class FoodItem {
  constructor(public id: number, public name: string) {
    this.id = id;
    this.name = name;
  }
}

class Guest {
  

  constructor(public name: string,public id: number, public phoneNo: number,public address: string, public roomNo: number) {
    this.name = name;
    this.id = id;
    this.phoneNo = phoneNo;
    this.address = address;
    this.roomNo = roomNo;
  }

  checkIn(): void {}
  checkOut(): void {}
  payBill(): void {}
  orderFood(): void {}
  submitFeedback(): void {}
}

class Housekeeping {
 

  constructor(public name: string, public id: number, public  location: string) {
    this.name = name;
    this.id = id;
    this.location = location;
  }

  cleanRoom(): void {}
}

class Receptionist {
  constructor(public name: string, public id: number,public  phoneNo: number,public  location: string) {
    this.name = name;
    this.id = id;
    this.phoneNo = phoneNo;
    this.location = location;
  }

  checkRoomAvailability(): void {}
  bookRoom(): void {}
  generateBill(): void {}
  acceptCustomerFeedback(): void {}
}

class Room {
  constructor(public roomNo: number,public  location: string) {
    this.roomNo = roomNo;
    this.location = location;
  }
}

class Bill {
 constructor(public billNo: number,public  guestName: string) {
    this.billNo = billNo;
    this.guestName = guestName;
  }
}

})();
