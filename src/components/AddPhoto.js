import React, { Component } from 'react'
import {
    View,
    TextInput,
    Alert,
    Image,
    Text,
    Dimensions,
    Platform,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import ImagePicker from 'react-native-image-picker'

export default class AddPhoto extends Component {
    state = {
        comment: '',
        image: null
    }

    pickImage = () => {
        ImagePicker.showImagePicker({
            title: 'Escolha sua imagem',
            maxHeight: 600,
            maxWidth: 800,
        }, (res) => {
            if (!res.didCancel) {
                this.setState({ image: { uri: res.uri, base64: res.data } })
            }
        })
    }

    save = async () => {
        Alert.alert("Foto adcionanda", this.state.comment)
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Compartilhe uma imagen</Text>
                    <View style={styles.imgContainer}>
                        <Image source={this.state.image} style={styles.image} />
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={styles.button}>
                        <Text style={styles.textButton}>Selecione sua imagen</Text>
                    </TouchableOpacity>
                    <TextInput placeholder='Adcione um comentário a sua foto' style={styles.input}
                        value={this.state.comment} onChangeText={comment => this.setState({ comment })} />
                    <TouchableOpacity onPress={this.save} style={styles.button}>
                        <Text style={styles.textButton}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title:{
        fontSize :20,
        fontWeight: 'bold',
        marginTop: Platform.OS === 'ios' ? 30 : 10,
    },
    imgContainer:{
        width: '90%',
        height : Dimensions.get('window').width /2,
        backgroundColor : '#eee',
        marginTop: 10
    },
    image:{
        width: '90%',
        height: Dimensions.get('window').width * 3/4,
        resizeMode: 'center'
    },
    button:{
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
    },
    textButton:{
        fontSize: 20,
        color: '#fff'
    },
    input:{
        marginTop:20,
        width: '90%'
    }

})
