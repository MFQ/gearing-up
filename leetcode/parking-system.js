/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
  this.big = big;
  this.medium = medium;
  this.small = small;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  switch (carType) {
    case 1:
      result = this.big > 0;
      this.big = this.big - 1;
      break;
    case 2:
      result = this.medium > 0;
      this.medium = this.medium - 1;
      break;
    case 3:
      result = this.small > 0;
      this.small = this.small - 1;
      break;
    default:
      result = null;
      break;
  }
  return result;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
