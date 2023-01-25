import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View, Share } from "react-native";
import epicteto from "../Frases/epicteto";
import frases from "../Frases/frases";
import marcoAurelio from "../Frases/marcoAurelio";
import seneca from "../Frases/seneca";
import styles from "./styles";

export default function Secundaria(props) {

    const frasesCompiladas = marcoAurelio.concat(epicteto).concat(frases).concat(seneca);
    let fraseSorteada = Math.floor(Math.random() * frasesCompiladas.length);
    let [frase, setFrase] = useState('Bem-vindo(a)! \n\n\n');

    function mudarFrase() {
        setFrase(frasesCompiladas[fraseSorteada]);
    }

    const compartilhar = async () => {
        await Share.share({
            message: frase
        })
    }

    return (
        <ImageBackground source={require('../img/fundoEstoicism2.jpg')} style={styles.container}>

            <Text style={styles.tittle}>Frases Estoicas</Text>
            <Image style={styles.image} source={require('../img/estoicismoBranco.png')} />

            <Text style={styles.frase}>{frase}</Text>

            <View style={styles.container2}>

                <TouchableOpacity
                    style={styles.buttonCompartilhar}
                    onPress={compartilhar}>
                    <Ionicons name="share-social" size={26} color="blue" />
                </TouchableOpacity>

                <View style={styles.areaButtons}>

                    <TouchableOpacity
                        style={styles.buttonVoltar}
                        onPress={props.fechar}>
                        <Text style={styles.textButton}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonMudar}
                        onPress={mudarFrase}>
                        <Text style={styles.textButton}>Trocar </Text>
                        <Ionicons name='reload-sharp' size={26} color="black" />
                    </TouchableOpacity>
                </View>

            </View>
        </ImageBackground>
    )
}