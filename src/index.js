class Sorter {
  constructor(element, index, indices) {
    // your implementation
    element = this.element;
    index = this.index;
    this.compareFunction = (a,b) => a-b;
    this.array = [];
  }

  add(element) {
    // your implementation
    this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    let indinces = [];
    let mass = [];
    for(let i=0;i<indices.length;i++){
      if(indices[i]>indices[indices.length-1]){
        indices.reverse();
      }

        mass.push(this.array[indices[i]]);

    }
    mass.sort(this.compareFunction);
    for(let i=0;i<indices.length;i++){
      this.array.splice(indices[i], 1, mass[i]);
    }

  }

  setComparator(compareFunction) {
    this.compareFunction=compareFunction;
  }
}

module.exports = Sorter;
