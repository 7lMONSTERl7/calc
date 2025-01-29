import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, View, Image, TouchableOpacity,TextInput, Button } from 'react-native';

export default function App() {
  const [prompt,setPrompt] = useState('')
  const [numSystem,setNumSystem] = useState('dec')
  const [theme,setTheme] = useState(false)
  const numSystems = ['dec','bin','hexa']

  function changeNumSystem(){
    setNumSystem(numSystems[(numSystems.indexOf(numSystem) + 1) % numSystems.length])
  }

  function isBinary(num){
    for (let e of num){
      if (e != '0' & e != "1"){
        return false
      }
    }
    return true
  }

  function remove(){
    setPrompt(prompt.slice(0, -1))
  }
  function calcutate(){
    setPrompt(''+eval(prompt))
  }

  function convertToDec(){
    if (numSystem == "hexa"){return ""+parseInt(prompt, 16)}
    else if (numSystem == "bin"){if (isBinary(prompt)){return ''+parseInt(prompt, 2)}else{return prompt}}
    return prompt
  }

  function convertToBinary(){
    
    if (numSystem == "dec"){return ''+Number(prompt).toString(2)}
    else if (numSystem == "hexa"){return ''+parseInt(prompt, 16).toString(2)}
    return prompt
  }

  function convertToHex(){
    if (numSystem == "dec"){return ''+Number(prompt).toString(16).toUpperCase()}
    else if (numSystem == "bin"){if(isBinary(prompt)){return ''+parseInt(prompt, 2).toString(16)}else{return prompt}}
    return prompt
  } 

  return (
    <View style={[styles.container,{backgroundColor: theme ? '#000' : "#fff",}]}>
      <View style={[styles.navbar,{backgroundColor: theme ? '#111': "#eee",}]}>
        <Image source={require('./assets/logo.png')} style={{ width: 50, height: 50 }} />
        <Text style={{ color: theme ? '#fff' : '#000', fontWeight: 'bold' }}> | | MONSTER CALCULATOR | | </Text>
        <TouchableOpacity onPress={()=>{setTheme(!theme)}} style={[styles.ligh,{backgroundColor: theme ? '#fff': "#000",}]}><Text style={{color: theme ? '#000': "#fff",}}>{theme ? 'Light' : "Dark"}</Text></TouchableOpacity>
      </View>
      <ScrollView>
      <View style={styles.body}>
        <View style={styles.inputs}>
          <TextInput style={[styles.input,{color: theme ? "#fff" : "#000",}]} placeholder='0' placeholderTextColor='#fff' editable={false} value={prompt}></TextInput>
        </View>
        
          <View style={styles.btns}>
            <TouchableOpacity style={styles.button} onPress={() => setPrompt(prompt+'7')}>
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setPrompt(prompt+'8')}>
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setPrompt(prompt+'9')}>
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setPrompt(prompt+'*')}>
              <Text style={styles.buttonText}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setPrompt(prompt+'-')}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setPrompt(prompt+'4')}>
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setPrompt(prompt+'5')}>
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setPrompt(prompt+'6')}>
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setPrompt(prompt+'/')}>
              <Text style={styles.buttonText}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setPrompt(prompt+'+')}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setPrompt(prompt+'1')}>
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setPrompt(prompt+'2')}>
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setPrompt(prompt+'3')}>
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setPrompt(prompt+'**')}>
              <Text style={styles.buttonText}>**</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setPrompt(prompt+'//')}>
              <Text style={styles.buttonText}>//</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.equal]} onPress={() => {calcutate()}}>
              <Text style={styles.buttonText}>=</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setPrompt(prompt+'0')}>
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setPrompt(prompt+'.')}>
              <Text style={styles.buttonText}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => remove()}>
              <Text style={styles.buttonText}> {'<--'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setPrompt('')}>
              <Text style={styles.buttonText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setPrompt(convertToDec())}>
              <Text style={styles.buttonText}>Dec</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setPrompt(convertToBinary())}>
              <Text style={styles.buttonText}>Bin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setPrompt(convertToHex())}>
              <Text style={styles.buttonText}>Hexa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => changeNumSystem()}>
              <Text style={styles.buttonText}>{numSystem}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{ color: '#fff', fontWeight: 'bold',display: numSystem == "hexa"?'flex':"none", }]} onPress={() => setPrompt(prompt+'A')}>
              <Text style={styles.buttonText}>A</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{ color: '#fff', fontWeight: 'bold',display: numSystem == "hexa"?'flex':"none", }]} onPress={() => setPrompt(prompt+'B')}>
              <Text style={styles.buttonText}>B</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{ color: '#fff', fontWeight: 'bold',display: numSystem == "hexa"?'flex':"none", }]} onPress={() => setPrompt(prompt+'C')}>
              <Text style={styles.buttonText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{ color: '#fff', fontWeight: 'bold',display: numSystem == "hexa"?'flex':"none", }]} onPress={() => setPrompt(prompt+'D')}>
              <Text style={styles.buttonText}>D</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{ color: '#fff', fontWeight: 'bold',display: numSystem == "hexa"?'flex':"none", }]} onPress={() => setPrompt(prompt+'E')}>
              <Text style={styles.buttonText}>E</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{ color: '#fff', fontWeight: 'bold',display: numSystem == "hexa"?'flex':"none", }]} onPress={() => setPrompt(prompt+'F')}>
              <Text style={styles.buttonText}>F</Text>
            </TouchableOpacity>
            
          </View>
        
        <View style={[styles.footer,{backgroundColor: theme ? '#111': "#eee",}]}>
          <Image source={require('./assets/logo.png')} style={{ width: 50, height: 50 }} />
          <Text style={{ color: '#6200EE', fontSize: 20 }}> | | @CP 2025: Gharbi Oussama</Text>
        </View>
        
      </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ligh:{
    width: 80,
    height: 40,
    position: 'absolute',
    right: 12,
    top: "100%",
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 40,
    height: 80,
    width: '100%',
    position: 'relative',
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100%',
  },
  inputs: {
    marginTop: '10%',
    width: '100%',
    height: 100,
    borderColor: '#6200EE', 
    borderWidth: 4, 
    borderStyle:'solid',
    borderRadius: 8,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    backgroundColor: '#rgba(255,255,255,0.7)',
  },
  input: {
    fontSize: 30,

    fontWeight: 'bold',
    width: '100%',
    height: '100%',

  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
    borderCurve: 54,
    width: '100%',
    marginTop: '5%',
    backgroundColor: '#rgba(255,255,255,0.7)',
    borderRadius: 35,
    borderColor: '#6200EE', 
    borderWidth: 4, 
    borderStyle: 'solid',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#6200EE',
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    marginHorizontal: 5,
    marginVertical: 15,
    borderColor: '#fff', 
    borderWidth: 2, 
    borderStyle: 'solid',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  equal:{
    width: 185,
    borderRadius: 12,
  },
  footer:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 48,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
