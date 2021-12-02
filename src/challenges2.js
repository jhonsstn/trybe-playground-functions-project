// Desafio 10
function techList(technologies, name) {
  let list = [];
  if (technologies.length !== 0) {
    let sortedTechs = technologies.sort();
    list = [];
    for (let i = 0; i < sortedTechs.length; i += 1) {
      let obj = { tech: sortedTechs[i], name };
      list.push(obj);
    }
  } else {
    return 'Vazio!';
  }
  return list;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
