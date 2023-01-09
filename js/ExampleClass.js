export default class ExampleClass {
    constructor() {
      if (this.constructor.instance) {
        return this.constructor.instance;
      }
      this.constructor.instance = this;
    }
  
    /**
     * @name ExampleClass#setData
     * Role of this function is to set data
     * @param {Object} data
     */
    setData(data) {
      this.data = data;
    }
  
    /**
     * @name ExampleClass#getData
     * Role of this function is to get data
     * @returns {Object} data
     */
    getData() {
      return this.data;
    }
  }