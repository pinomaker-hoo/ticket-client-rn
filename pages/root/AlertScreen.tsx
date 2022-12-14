import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import constant from '../../common/constant';

export default function AlertScreen({navigation}: any) {
  const onPressHome = () => {
    navigation.navigate('Bottom');
  };

  const data = [
    '[μ λ³΄π€] λμμ€λλ λ€μ΄λ² κ°νΈ λ‘κ·ΈμΈμ΄ κ°λ₯ν©λλ€.',
    '[μ λ³΄π€] νμμ λ¨Ήκ³  μ£Όλ³ μΉ΄νμ°ΎκΈ°λ‘ κ°κΉμ΄ μΉ΄νλ₯Ό μ°Ύμλ³΄μΈμ!',
    '[κ²μν μλ΄π¨] κ²μν κΈ λ΄μ©μ μ¬νλΉλ°© λ° μμ€μ΄ ν¬ν¨λ  κ²½μ° κ΄λ¦¬μμ μν΄ μ­μ λ  μ μμ΅λλ€.',
    '[μ λ³΄π€] κΈ°λ³Έμ λ³΄ μμ μμ νλ‘ν μ¬μ§μ λ³κ²½ν  μ μμ΅λλ€.',
    '[μ΄λ²€νΈπ₯³] κ²μν νμνκ°κΈμ€ νλΆμ λ½μ μ€νλ²μ€ μΏ ν°μ λλ¦½λλ€.',
    '[μ λ³΄π€] ν¬μΈνΈ μΆ©μ μ λ§μ΄νμ΄μ§μμ κ°λ₯ν©λλ€!',
    '[μ λ³΄π€] λ©μΈνλ©΄μμ μ€λμ μλ¨νλ₯Ό λ³΄μΈμ!',
    '[μ΄λ²€νΈπ₯³] νμ 30ν μ΄μ κ΅¬λ§€μ νμ 1λ§€ μ¦μ !',
    'μ λ³΄π€] κ²μνμ μ±μλμμ λ€μ΄κ° λ³΄μ€ μ μμ΅λλ€!',
    '[μ λ³΄π€] μμ±μκ° μ΄ κ²μνμ λκΈμ λ¬μλ³΄μΈμ!',
    '[κ²μν μλ΄π¨] λΌλμ΄ λ  λ§ν κ²μκΈμ κ΄λ¦¬μμ μν΄ μ­μ λ  μλ μμ΅λλ€.',
    '[μ λ³΄π€] μκΆμ λ©μΈνλ©΄μμ κ΅¬λ§€, μ¬μ© κ°λ₯ν©λλ€.',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={onPressHome}>
          <Image
            style={styles.back}
            source={require('../../assets/back.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <ScrollView>
          {data.map((item: any, index: number) => (
            <View style={styles.textBox} key={index}>
              <Text style={styles.text}>{item}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  headerBtn: {
    marginLeft: 30,
  },
  body: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 15,
    marginTop: -50,
    color: 'grey',
  },
  back: {
    width: 30,
    height: 30,
  },
  textBox: {
    width: constant.width * 0.9,
    borderBottomWidth: 1,
    borderColor: 'black',
    height: 60,
    justifyContent: 'center',
  },
  text: {},
});
