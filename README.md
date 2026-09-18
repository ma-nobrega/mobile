# Projeto Expo para alunos

Base limpa em **React Native com Expo**, usando somente JavaScript.

## Como executar

```bash
npm start
```

Depois, leia o QR Code com o Expo Go ou use uma das opções do terminal:

```bash
npm run android
npm run web
```

Para acessar no navegador, abra [http://localhost:19006](http://localhost:19006) após executar `npm run web`.

## Estrutura

```text
src/
  components/  # Componentes reutilizáveis
  screens/     # Telas do aplicativo
  services/    # Chamadas a APIs e regras de integração
App.js         # Ponto de entrada
```

Comece editando `src/screens/HomeScreen.js`.

## Bibliotecas incluídas

- `@expo/vector-icons`: ícones prontos para usar.
- `@react-navigation/native` e `@react-navigation/native-stack`: navegação entre telas.
- `expo-image`: imagens com carregamento otimizado.
- `expo-linear-gradient`: fundos em gradiente.
- `expo-font`: fontes personalizadas.
- `expo-haptics`: vibração e feedback tátil.
- `expo-secure-store`: armazenamento local seguro (por exemplo, token de login).
- `@react-native-async-storage/async-storage`: armazenamento local simples.
- `react-native-safe-area-context` e `react-native-screens`: dependências da navegação e layout nativo.

O projeto já usa `SafeAreaProvider` e `SafeAreaView` de `react-native-safe-area-context`, evitando a API depreciada do React Native.

### Exemplo de ícone

```js
import { Ionicons } from '@expo/vector-icons';

<Ionicons name="home" size={24} color="#111827" />
```
