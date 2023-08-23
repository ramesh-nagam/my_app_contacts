let user = { name: "Venkatesh", profession: "Training" };

console.log(user.name);
console.log(user.profession);
console.log(user['name']);
//let { name: username, profession } = user;
//console.log(username)
//console.log(profession)

let users = ["venkatesh", "training"];
let [name, profession] = users;
console.log(name);
console.log(profession)

function useState() {
  let contacts = 0;
  return [
    count,
    function setCount(newCount) {
      this.count = newCount
    }
  ]
}

const [count, setCount] = useState();
console.log(count);
setCount(1);
console.log(count);