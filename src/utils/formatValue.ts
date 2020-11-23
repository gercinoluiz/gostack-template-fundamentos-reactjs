const formatValue = (value: number): string =>

// Muito bom! Formatar valores
  Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: "BRL"
  }).format(value); // TODO

export default formatValue;
