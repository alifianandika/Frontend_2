/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
// var users;

const users = [ {
  name : "Andika",
  age : 21,
  major : "Software Eingeneer",
},
{
  name : "Febi",
  age : 19,
  major : "Software Eingeneer",
},
{
  name : "Mariam",
  age : 20,
  major : "Cyber Security",
},
{
  name : "Amien",
  age : 20,
  major : "Cyber Security",
},
{
  name : "Faruq",
  age : 21,
  major : "Cyber Security",
}];


/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
// function all() {}

const all = function(users){
  for(const user of users){
    console.log(user);
  }
}


/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
// function store(user) {}

//opsi 1
const store = (tambah) => users.push(tambah);

//opsi 2
const store = function tambah() {
  const nampil = users.push();
  return nampil;
}


/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
// function update(index, user) {}

const update = (index, user) => {
  const user = users[index];
  return user;
}

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
// function destroy(index) {}

const destroy = (index) => {
  const user = users.splice(index,1);
  return user;

}

//Mohon maaf kakak kalo salah ... 

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
