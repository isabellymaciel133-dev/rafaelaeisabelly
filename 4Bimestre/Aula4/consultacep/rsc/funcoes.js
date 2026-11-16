export function formatarCep(valor) {
  return valor.replace(/\D/g, '').slice(0, 8).replace(/^(\d{5})(\d)/, '$1-$2');
}

export async function consultarCep(valor) {
  const cep = valor.replace(/\D/g, '');
  if (cep.length !== 8) {
    throw new Error('Digite os oito números do CEP.');
  }

  const controlador = new AbortController();
  const tempoLimite = setTimeout(() => controlador.abort(), 10000);
  try {
    const resposta = await fetch('https://brasilapi.com.br/api/cep/v1/' + cep, {
      signal: controlador.signal,
    });
    if (resposta.status === 404) return null;
    if (!resposta.ok) throw new Error('Falha na consulta');
    return await resposta.json();
  } catch {
    throw new Error('Não foi possível consultar o CEP agora. Tente novamente.');
  } finally {
    clearTimeout(tempoLimite);
  }
}
