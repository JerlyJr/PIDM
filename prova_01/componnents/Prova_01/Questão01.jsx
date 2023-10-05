import { Text, View, SectionList, StyleSheet, Button } from "react-native";
import DadosCompra from "./dados";

const Questão01 = () =>{
    return(
        <View style={styles.container}>
            <SectionList
            sections={DadosCompra}
            renderItem={({item}) => (
                
                <View>
                    <Button 
                    title="abrir"
                    />
                <View style={styles.item}>
                    <Text style={styles.title}>{item.nome}</Text>
                    <Text style={styles.valor}>{item.valor}</Text>
                    <Text style={styles.hora}>{item.hora}</Text>
                </View>
                </View>
            )}
            renderSectionHeader={({section: {title}}) => (
                <Text style={styles.header}>{title}</Text>)}            
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      paddingLeft: 20,
      paddingRight: 20,
      
    },
    header: {
      fontSize: 16,
      color: "lightgray",
      paddingTop: 12,
      paddingBottom: 12
      
    },
    item: {
        marginVertical: 8,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        flexGrow: 3,
        width: "100%",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 20,
        color: "white",
        width: "50%"

    },
    hora: {
        fontSize: 16,
        color: "white",
        width: 400
    },
    valor: {
        fontSize: 20,
        color: "white",
        flex: 1,
        width: "50%",
        textAlign: "right"
    },
  });

export default Questão01