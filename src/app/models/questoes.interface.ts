export interface Questoes {
  mpCategoriaId: number;
  chamada: string;
  id: number;
  mpRespostas: [{
    categoriaId: number;
    id: number;
    questaoId: 0;
    resposta: string;
  }];
  ativo: boolean;
  mpCategoria: {
    ativo: boolean;
    banner:string;
    icone: string;
  }
  sexo: number;
  texto: string;
  tipoQuestionario: number;
  mpTopicoId: number;
  mpTopico: {
    titulo: string;
  };
}
