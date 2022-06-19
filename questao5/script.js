document.querySelector("#btn").addEventListener("click", Show);

function Show() {
  let obj = {};
  obj = { "Atributo com espaços": 1 };

  console.log(obj);
  console.log(obj["Atributo com espaços"]);
  console.log(Object.values(obj)[0]);

  Object.defineProperties(obj,
    {
      'Atributo com espaços': {
        value: 2,
        writable: true
      }
    });

  console.log(obj);
  console.log(obj["Atributo com espaços"]);
  console.log(Object.values(obj)[0]);
}