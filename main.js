const pessoa = {};

function adicionarPessoa(nome, salario, idade, possuiDiploma) {
  // Verifica se os tipos de dados são válidos
  if (typeof nome === 'string' && typeof salario === 'number' && typeof idade === 'number' && typeof possuiDiploma === 'boolean') {
    pessoa.nome = nome;
    pessoa.salario = salario;
    pessoa.idade = idade;
    pessoa.possuiDiploma = possuiDiploma;
    console.log('Pessoa adicionada:', pessoa);
  } else {
    console.log('Tipos de dados inválidos.');
  }
}

// Adicionando pessoas
adicionarPessoa('Fulano', 2500, 35, true);
adicionarPessoa('Ciclano', '2500', 25, false);
adicionarPessoa('Beltrano', 3000, 30);
