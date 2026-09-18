import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={estilos.pagina}>
      <StatusBar style="dark" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={estilos.cabecalho}>
          <Ionicons name="chevron-back" size={28} color="#111111" />
          <Text style={estilos.nomeCabecalho}>codefive</Text>
          <Ionicons name="menu" size={27} color="#111111" />
        </View>

        <View style={estilos.perfil}>
          <View style={estilos.linhaPerfil}>
            <View style={estilos.anelAvatar}>
              <View style={estilos.avatar}>
                <MaterialCommunityIcons name="code-braces" size={42} color="#171717" />
              </View>
            </View>

            <View style={estilos.estatistica}>
              <Text style={estilos.numeroEstatistica}>6.956</Text>
              <Text style={estilos.rotuloEstatistica}>Publicações</Text>
            </View>
            <View style={estilos.estatistica}>
              <Text style={estilos.numeroEstatistica}>27,7m</Text>
              <Text style={estilos.rotuloEstatistica}>Seguidores</Text>
            </View>
            <View style={estilos.estatistica}>
              <Text style={estilos.numeroEstatistica}>219</Text>
              <Text style={estilos.rotuloEstatistica}>A seguir</Text>
            </View>
          </View>

          <Text style={estilos.nomePerfil}>codefive</Text>
          <Text style={estilos.categoria}>Agência criativa</Text>
          <Text style={estilos.descricao}>O seu site dos sonhos, está no sítio certo. ■</Text>
          <Text style={estilos.link}>codefive.pt</Text>

          <View style={estilos.amigos}>
            <View style={estilos.avataresAmigos}>
              <Image style={[estilos.avatarAmigo, estilos.avatarAmigoFundo]} source={{ uri: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=100&q=80' }} />
              <Image style={[estilos.avatarAmigo, estilos.avatarAmigoSobreposto]} source={{ uri: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=100&q=80' }} />
            </View>
            <Text style={estilos.textoAmigos}>Seguido por joaocorreia09 e mais 16 amigos</Text>
          </View>

          <View style={estilos.linhaBotoes}>
            <Pressable style={estilos.botaoPrincipal}><Text style={estilos.textoBotaoPrincipal}>Seguir</Text></Pressable>
            <Pressable style={estilos.botaoSecundario}><Text style={estilos.textoBotaoSecundario}>Mensagem</Text></Pressable>
            <Pressable style={estilos.botaoSecundario}><Text style={estilos.textoBotaoSecundario}>Contactar</Text></Pressable>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={estilos.listaAtalhos}>
          <View style={estilos.atalho}><View style={estilos.iconeAtalho}><MaterialCommunityIcons name="lightbulb-outline" size={28} color="#dfff37" /></View><Text style={estilos.tituloAtalho}>Dicas</Text></View>
          <View style={estilos.atalho}><View style={estilos.iconeAtalho}><MaterialCommunityIcons name="briefcase-outline" size={28} color="#dfff37" /></View><Text style={estilos.tituloAtalho}>Portfólio</Text></View>
          <View style={estilos.atalho}><View style={estilos.iconeAtalho}><Ionicons name="apps" size={28} color="#dfff37" /></View><Text style={estilos.tituloAtalho}>Recursos</Text></View>
          <View style={estilos.atalho}><View style={estilos.iconeAtalho}><MaterialCommunityIcons name="cursor-default-click-outline" size={28} color="#dfff37" /></View><Text style={estilos.tituloAtalho}>UI Básico</Text></View>
          <View style={estilos.atalho}><View style={estilos.iconeAtalho}><MaterialCommunityIcons name="web" size={28} color="#dfff37" /></View><Text style={estilos.tituloAtalho}>Web Design</Text></View>
        </ScrollView>

        <View style={estilos.abas}>
          <View style={[estilos.aba, estilos.abaAtiva]}><Ionicons name="grid-outline" size={24} color="#171717" /></View>
          <View style={estilos.aba}><MaterialCommunityIcons name="movie-open-outline" size={24} color="#777777" /></View>
          <View style={estilos.aba}><Ionicons name="person-outline" size={24} color="#777777" /></View>
        </View>

        <View style={estilos.gradePublicacoes}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80' }} style={estilos.imagemPublicacao} />
          <Image source={{ uri: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80' }} style={estilos.imagemPublicacao} />
          <Image source={{ uri: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80' }} style={estilos.imagemPublicacao} />
          <Image source={{ uri: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500&q=80' }} style={estilos.imagemPublicacao} />
          <Image source={{ uri: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80' }} style={estilos.imagemPublicacao} />
          <Image source={{ uri: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=500&q=80' }} style={estilos.imagemPublicacao} />
          <Image source={{ uri: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80' }} style={estilos.imagemPublicacao} />
          <Image source={{ uri: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=500&q=80' }} style={estilos.imagemPublicacao} />
          <Image source={{ uri: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=80' }} style={estilos.imagemPublicacao} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  pagina: { backgroundColor: '#ffffff', flex: 1 },
  cabecalho: { alignItems: 'center', flexDirection: 'row', height: 52, justifyContent: 'space-between', paddingHorizontal: 16 },
  nomeCabecalho: { color: '#111111', fontSize: 16, fontWeight: '800' },
  perfil: { paddingHorizontal: 16 },
  linhaPerfil: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  anelAvatar: { alignItems: 'center', backgroundColor: '#ed36a6', borderRadius: 42, height: 78, justifyContent: 'center', width: 78 },
  avatar: { alignItems: 'center', backgroundColor: '#ddf93a', borderColor: '#ffffff', borderRadius: 37, borderWidth: 3, height: 74, justifyContent: 'center', width: 74 },
  estatistica: { alignItems: 'center', flex: 1, marginLeft: 4 },
  numeroEstatistica: { color: '#111111', fontSize: 15, fontWeight: '800' },
  rotuloEstatistica: { color: '#4b4b4b', fontSize: 10, marginTop: 2 },
  nomePerfil: { color: '#151515', fontSize: 13, fontWeight: '800', marginTop: 12 },
  categoria: { color: '#6d6d6d', fontSize: 12, marginTop: 2 },
  descricao: { color: '#202020', fontSize: 12, marginTop: 3 },
  link: { color: '#2563eb', fontSize: 12, fontWeight: '600', marginTop: 2 },
  amigos: { alignItems: 'center', flexDirection: 'row', marginTop: 9 },
  avataresAmigos: { height: 24, width: 42 },
  avatarAmigo: { borderColor: '#ffffff', borderRadius: 12, borderWidth: 1.5, height: 24, position: 'absolute', width: 24 },
  avatarAmigoFundo: { left: 0 },
  avatarAmigoSobreposto: { left: 17 },
  textoAmigos: { color: '#292929', flex: 1, fontSize: 10, marginLeft: 4 },
  linhaBotoes: { flexDirection: 'row', gap: 6, marginTop: 12 },
  botaoPrincipal: { alignItems: 'center', backgroundColor: '#1398f5', borderRadius: 7, flex: 1, justifyContent: 'center', minHeight: 32 },
  botaoSecundario: { alignItems: 'center', backgroundColor: '#efefef', borderRadius: 7, flex: 1, justifyContent: 'center', minHeight: 32 },
  textoBotaoPrincipal: { color: '#ffffff', fontSize: 11, fontWeight: '700' },
  textoBotaoSecundario: { color: '#202020', fontSize: 11, fontWeight: '700' },
  listaAtalhos: { gap: 14, paddingHorizontal: 16, paddingTop: 17 },
  atalho: { alignItems: 'center', width: 58 },
  iconeAtalho: { alignItems: 'center', backgroundColor: '#161616', borderColor: '#dadada', borderRadius: 29, borderWidth: 1, height: 56, justifyContent: 'center', width: 56 },
  tituloAtalho: { color: '#303030', fontSize: 9, marginTop: 5, textAlign: 'center' },
  abas: { borderBottomColor: '#eeeeee', borderBottomWidth: StyleSheet.hairlineWidth, flexDirection: 'row', marginTop: 15 },
  aba: { alignItems: 'center', flex: 1, justifyContent: 'center', paddingBottom: 9, paddingTop: 5 },
  abaAtiva: { borderBottomColor: '#171717', borderBottomWidth: 1.5 },
  gradePublicacoes: { flexDirection: 'row', flexWrap: 'wrap', gap: 2, marginTop: 2 },
  imagemPublicacao: { aspectRatio: 1, height: undefined, width: '32.9%' },
});