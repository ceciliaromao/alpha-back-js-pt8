document.getElementById('save-btn').addEventListener('click', Save);
const msg = document.querySelector('#msg');
let user = {};
let birthDate;

function verifyName(name) {
  if (name == "" || name.length < 5 || !name.includes(" ")) {
    throw 'Field “name” is invalid!';
  }
}

function verifyBirthdate(day, month, year) {
  if (isNaN(day) || day < 1 ) {
    throw 'Field “birthdate” is invalid!';
  }

  if (isNaN(month) || month < 1 || month > 12) {
    throw 'Field “birthdate” is invalid!';
  }

  if (isNaN(year) || year < 1920 || year > 2022) {
    throw 'Field “birthdate” is invalid!';
  }

  if (month == 2) {
    if (day > 29) {
      throw 'Field “birthdate” is invalid!';
    } else if (day == 29 && year % 4 != 0) {
      throw 'Field “birthdate” is invalid!';
    }
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    if (day > 30) {
      throw 'Field “birthdate” is invalid!';
    }
  } else {
    if (day > 31) {
      throw 'Field “birthdate” is invalid!';
    }
  }

  const now = new Date;
  const today = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  birthDate = new Date(year, month - 1, day);
  if (today.getTime() < birthDate.getTime()) {
    throw 'Field “birthDate” is invalid!';
  }
}

function verifyWeight(weight) {
  if (isNaN(weight) || weight <= 0) {
    throw 'Field “weight” is invalid!';
  }
}

function verifyHeight(height) {
  if (isNaN(height) || height <= 0) {
    throw 'Field “height” is invalid!';
  }
  const numero = parseInt(height, 10);
  if (height - numero !== 0) {
    throw 'Field “height” is invalid!';
  }
}

function verifyGender(gender) {
  if (!(gender === 'male' || gender === 'female')) {
    throw 'Field “gender” is invalid!';
  }
}

function Save() {
  const name = document.querySelector("#name").value;
  const day = parseInt(document.querySelector("#birthday").value, 10);
  const month = parseInt(document.querySelector("#birthmonth").value, 10);
  const year = parseInt(document.querySelector("#birthyear").value, 10);
  const weight = parseFloat(document.querySelector('#weight').value.replace(",", ".")).toFixed(3);
  const height = parseFloat(document.querySelector('#height').value);
  const gender = document.querySelector("#gender").value;
  msg.textContent = '';


  try {
    verifyName(name);
  } catch (err) {
    msg.textContent = err;
    document.querySelector("#results").style.display = 'none';
    return false;
  }

  try {
    verifyBirthdate(day, month, year);
  } catch (err) {
    msg.textContent = err;
    document.querySelector("#results").style.display = 'none';
    return false;
  }

  try {
    verifyWeight(weight);
  } catch (err) {
    msg.textContent = err;
    document.querySelector("#results").style.display = 'none';
    return false;
  }

  try {
    verifyHeight(height);
  } catch (err) {
    msg.textContent = err;
    document.querySelector("#results").style.display = 'none';
    return false;
  }

  try {
    verifyGender(gender);
  } catch (err) {
    msg.textContent = err;
    document.querySelector("#results").style.display = 'none';
    return false;
  }

  user = {
    "name": name,
    "birthDate": birthDate.toLocaleDateString(),
    "weight": weight,
    "height": height,
    "gender": gender
  }

  document.querySelector("#name-result").textContent = `name:  ${user.name}`;
  document.querySelector("#date-result").textContent = `birthDate:  ${user.birthDate}`;
  document.querySelector("#weight-result").textContent = `weight:  ${user.weight}`;
  document.querySelector("#height-result").textContent = `height:  ${user.height}`;
  document.querySelector("#gender-result").textContent = `gender:  ${user.gender}`;
  document.querySelector("#results").style.display = 'flex';


  console.log(user);
  msg.textContent = JSON.stringify(user);
}  