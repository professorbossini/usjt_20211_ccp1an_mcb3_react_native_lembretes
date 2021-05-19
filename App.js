import React, { useState } from 'react';
import { 
  Button,
  FlatList, 
  ScrollView, 
  StyleSheet, 
  Text, 
  TextInput, 
  View 
} from 'react-native';

export default function App() {
  
  const [lembrete, setLembrete] = useState('');
  const [lembretes, setLembretes] = useState([]);
  const [contador, setContador] = useState(0);

  const capturarLembrete = (oQueOUsuarioDigitou) => {
    setLembrete(oQueOUsuarioDigitou);
  }

  const adicionarLembrete = () => {
    setLembretes(lembretes => {
      setContador(contador + 1);
      return [{key: contador.toString(), value:lembrete}, ...lembretes]
    });
    setLembrete('');
  }

  return (
    <View style={styles.container}>

      <View style={styles.lembreteInputView}>
        {/* usuário irá inserir lembretes aqui */}
        <TextInput
          placeholder="Lembrar..."
          style={styles.lembreteTextInput}
          onChangeText={capturarLembrete}
          value={lembrete}
        />
        <Button 
          title="Adicionar um lembrete"
          onPress={() => adicionarLembrete()}
        />
      </View>

        <FlatList 
          data={lembretes}
          renderItem={
            lembrete => (
              <View style={styles.itemNaLista}>
                <Text>{lembrete.item.value}</Text>
              </View>
            )
          }
        />
      
      </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: { 
        padding: 50 
      },
      lembreteInputView: {
        marginBottom: 16
      },
      lembreteTextInput: { 
        borderBottomColor: '#CCC', 
        borderBottomWidth: 2,
        marginBottom: 8, 
        padding: 8, 
        textAlign: 
        'center' 
      },
      itemNaLista: {
        padding: 16,
        backgroundColor: '#EEE',
        borderColor: '#CCC',
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 12,
        alignItems: 'center'
      }
    });
    
    // <ScrollView>
    //   <View>
    //     {
    //       /*Aqui será exibida a lista de lembretes*/
    //       lembretes.map((elemento) => 
    //           <View style={styles.itemNaLista}>
    //             <Text style={{fontSize: 16}}>
    //               {elemento}
    //             </Text>
    //           </View>
    //       )
    //     }
    //   </View>
    // </ScrollView>