import { Platform, StyleSheet } from 'react-native';

const marrom = '#4c2d26';
const serif = Platform.select({ ios: 'Georgia', android: 'serif', default: 'Georgia, serif' });

export default StyleSheet.create({
  tela: { flex: 1, backgroundColor: '#fbecef' },
  pagina: { paddingHorizontal: 20, paddingTop: 72, paddingBottom: 40, alignItems: 'center' },
  conteudo: { width: '100%', maxWidth: 460 },
  cabecalho: { backgroundColor: '#f4d3dc', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 28 },
  selo: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#fff7f8', textAlign: 'center', textAlignVertical: 'center', lineHeight: 40, fontSize: 22, color: marrom, marginBottom: 16 },
  titulo: { color: marrom, fontFamily: serif, fontSize: 38, fontWeight: 'bold', lineHeight: 45 },
  texto: { color: '#6a4a42', fontSize: 15, lineHeight: 22 },
  formulario: { backgroundColor: '#fffafb', padding: 28, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  rotulo: { color: marrom, fontSize: 14, fontWeight: '700', marginBottom: 9 },
  campo: { minHeight: 54, borderWidth: 1, borderColor: '#be98a1', borderRadius: 14, paddingHorizontal: 16, color: marrom, fontSize: 18, backgroundColor: '#fff' },
  botao: { minHeight: 52, borderRadius: 14, backgroundColor: '#603a30', marginTop: 16, alignItems: 'center', justifyContent: 'center', padding: 10 },
  botaoInativo: { opacity: 0.75 },
  textoBotao: { color: '#fff7f7', fontSize: 16, fontWeight: '700' },
  mensagem: { marginTop: 16, color: '#754137', lineHeight: 22 },
  resultado: { marginTop: 20, padding: 24, borderRadius: 22, borderWidth: 1, borderColor: '#e6c3cc', backgroundColor: '#fffafb' },
  cep: { color: marrom, fontSize: 24, fontWeight: '700', marginBottom: 12, fontFamily: serif },
  rodape: { textAlign: 'center', marginTop: 20, color: '#735047', fontSize: 13 },
});
