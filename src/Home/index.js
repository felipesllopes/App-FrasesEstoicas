import React, { useState } from "react";
import { Image, ImageBackground, Modal, SafeAreaView, Text, TouchableOpacity } from "react-native";
import Secundaria from "../Modal";
import styles from "./styles";

export default function Principal() {

    let [modalVisible, setModalVisible] = useState(false);

    function entrar() {
        setModalVisible(true);
    }

    function sair(visible) {
        setModalVisible(visible);
    }

    return (
        <ImageBackground source={require('../img/fundo2.jpg')} style={styles.container}>

            <Text style={styles.tittle}>Frases Estoicas</Text>

            <Image
                style={styles.image}
                source={require('../img/estoicismoBranco.png')}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={entrar}
            >
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>

            <Modal
                animationType="fade"
                visible={modalVisible}
            >
                <SafeAreaView style={styles.modal}>
                    <Secundaria
                        fechar={() => sair(false)}
                    />
                </SafeAreaView>
            </Modal>

        </ImageBackground>
    )
}