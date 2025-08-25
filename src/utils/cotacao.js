/**
 * Converte um valor em dólar para real usando a cotação atual.
 * @param {number} valorEmDolar
 * @returns {Promise<string>} Valor formatado em reais
 */
export default function converterDolarParaReal(valorEmDolar) {
  return fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
    .then(res => res.json())
    .then(data => {
      const cotacao = parseFloat(data.USDBRL.bid);
      const valorConvertido = valorEmDolar * cotacao;
      return `R$ ${valorConvertido.toFixed(2).replace('.', ',')}`;
    })
    .catch(() => 'Erro ao obter cotação');
}
