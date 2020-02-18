// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/




// \/ All of your javascript should go here \/

let somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("You waited a long time! ")
  }, 60 * 100);
})

somePromise.then(msj => {
  alert(msj)
})