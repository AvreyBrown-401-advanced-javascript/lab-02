'use strict';

class List {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  
  /**
   * Returns an index
   * 
   * @returns {number} The Index
   */

  reindex() {
    let data = Object.keys(this.data).sort().reduce((acc,val,idx) => {
      acc[idx] = this.data[val];
      return acc;
    },{});

    this.length = Object.keys(data).length;
    this.data = data;
  }

  /**
 * Pushes item onto List
 * 
 * @param {number} item 
 * @returns {number} the length of the List
 */

  push(item) {
    if ( arguments.length === 1 ) {
      this.data[this.length++] = item;
    }
    return this.length;
  }

  /**
 * Removes an item from the List
 * 
 * @returns {number}  the item
 */

  pop() {
    if ( ! this.length ) { return undefined; }
    let item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  /**
 * removes items from the List
 * 
 * @returns {number} returns the removed value
 */

  shift() {
    if ( ! this.data[0] ) { return undefined; }
    let item = this.data[0];
    delete this.data[0];
    this.reindex();
    return item;
  }

  /**
 * adds items to the beginning of the List
 * 
 * @param {number} item 
 * @returns {number} the length of the List
 */

  unshift(item) {
    this.data[-1] = item;
    this.reindex();
    return this.length;
  }

  /**
 * Loops over the values in the List
 *
 * @param {function} callback
 */

  forEach(callback) {
    if ( this.length ) {
      for (let i = 0; i <= this.length - 1; i++) {
        callback(this[i], i);
      }
    }
  }

  /**
 * Runs a function over every item in the List
 * 
 * @param {function} callback
 * @returns {object} the resulting List
 */

  map(callback) {
    if ( ! this.length ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      result.push(callback(this.data[i], i));
    }
    return result;
  }

  /**
 * Runs a function over every item in the List
 * 
 * @param {function} callback
 * @returns {object} The resulting List
 */

  filter(callback) {
    if ( ! this.length ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      if (callback(this.data[i])) {
        result.push(this.data[i]);
      }
    }
    return result;
  }

  /**
 * Runs a function over every item in the List
 * 
 * @param {function} callback
 * @param {number} state
 * @returns {number}  
 */

  reduce(callback, state) {
    if ( ! this.length ) { return undefined; }
    for (let i = 0; i <= this.length - 1; i++) {
      state = callback(state,this.data[i], i);
    }
    return state;
  }

}

module.exports = List;

