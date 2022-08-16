//console.log(data)
// function toHTML() {
//     // let template = ''
//     // data.forEach(product => {
//     //     template += `<div> ${product.title}</div>`
//     // })
//     // return template
//     const toHTMLcard=product => {
//         `<div> ${product.title}</div>`}
//     return data.map(toHTMLcard).join('')
// }
// //console.log(toHTML())
// function filterBy(search ='') {
//         if(!search.trim()) {return data}
//         return data.filter( product =>{
//             return product.title.toLowerCase().
//             includes(search.toLowerCase())
//         }) 
            

// }
//console.log(filterBy('acer'))
class ProductService {

    constructor(products = []) {
      this.products = products
    }
  
    filterBy(search = '') {
      if (!search.trim()) return this.products
  
      return this.products.filter(product => {
        return product.title.toLowerCase().includes(search.toLowerCase())
      })
    }
  
    get(index) {
      return this.products[index]
    }
  
    getById(id) {
      return this.products.find(product => {
        return product.id === id
      })
    }
  }