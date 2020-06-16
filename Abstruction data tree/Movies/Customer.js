class Customer {
    constructor() {
        this.customres = [];
        this.customerSize = 0;
    }

    addCustomer(name) {
        return (this.customres[++this.customerSize] = name);
    }
}

module.exports = Customer;
