import React, { useRef, useState } from 'react';
import { ActivityIndicator, Keyboard, Pressable, ScrollView, StatusBar, Text, TextInput, View } from 'react-native';
import { consultarCep, formatarCep } from './rsc/funcoes';
import styles from './rsc/estilo';

export default function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(false);
  const consultaEmAndamento = useRef(false);

  async function pesquisar() {
    if (consultaEmAndamento.current) return;
    consultaEmAndamento.current = true;
    Keyboard.dismiss();
    setCarregando(true);
    setEndereco(null);
    setMensagem('');
    try {
      const resultado = await consultarCep(cep);
      setEndereco(resultado);
      if (!resultado) setMensagem('CEP não encontrado. Confira os números e tente novamente.');
    } catch (erro) {
      setMensagem(erro.message);
    } finally {
      consultaEmAndamento.current = false;
      setCarregando(false);
    }
  }

  function editarCep(valor) {
    setCep(formatarCep(valor));
    setEndereco(null);
    setMensagem('');
  }

  return (
    <ScrollView style={styles.tela} contentContainerStyle={styles.pagina} keyboardShouldPersistTaps="handled">
      <StatusBar barStyle="dark-content" />
      <View style={styles.conteudo}>
        <View style={styles.cabecalho}>
          <Text accessible={false} style={styles.selo}>✉</Text>
          <Text accessibilityRole="header" style={styles.titulo}>Consulta de CEP</Text>
          <Text style={styles.texto}>Digite um CEP para encontrar o endereço.</Text>
        </View>
        <View style={styles.formulario}>
          <Text style={styles.rotulo}>CEP</Text>
          <TextInput
            accessibilityLabel="CEP"
            style={styles.campo}
            value={cep}
            onChangeText={editarCep}
            onSubmitEditing={pesquisar}
            placeholder="Ex. 01310-100"
            placeholderTextColor="#7b5e58"
            keyboardType="number-pad"
            returnKeyType="search"
            editable={!carregando}
          />
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={carregando ? 'Consultando CEP' : 'Buscar endereço'}
            accessibilityState={{ disabled: carregando, busy: carregando }}
            disabled={carregando}
            onPress={pesquisar}
            style={({ pressed }) => [styles.botao, (pressed || carregando) && styles.botaoInativo]}
          >
            {carregando ? <ActivityIndicator color="#fff7f7" /> : <Text style={styles.textoBotao}>Buscar endereço</Text>}
          </Pressable>
          {!!mensagem && <Text accessibilityRole="alert" style={styles.mensagem}>{mensagem}</Text>}
        </View>
        {endereco && (
          <View style={styles.resultado} accessibilityLiveRegion="polite">
            <Text accessibilityRole="header" style={styles.cep}>CEP {formatarCep(endereco.cep)}</Text>
            <Text style={styles.texto}>Rua: {endereco.street || 'Não informada'}</Text>
            <Text style={styles.texto}>Bairro: {endereco.neighborhood || 'Não informado'}</Text>
            <Text style={styles.texto}>Cidade: {endereco.city} / {endereco.state}</Text>
          </View>
        )}
        <Text style={styles.rodape}>Dados da BrasilAPI</Text>
      </View>
    </ScrollView>
  );
}
