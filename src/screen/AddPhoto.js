import React, { Component } from 'react'
import {
    View,
    TextInput,
    Image,
    Text,
    Dimensions,
    Platform,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import ImagePicker from 'react-native-image-picker'

import { addPost } from '../store/actions/postsActions'
import { connect } from 'react-redux'

class AddPhoto extends Component {

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
        this.props.onAddPost(
            {
                id: Math.random(),
                nickname: this.props.name,
                email: this.props.email,
                image: this.state.image,
                comments: [{
                    nickname: this.props.name,
                    comment: this.state.comment
                }]
            })
        this.setState({ image: null, comment: '' })
        this.props.navigation.navigate('Feed')
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: Platform.OS === 'ios' ? 30 : 10,
    },
    imgContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#eee',
        marginTop: 10
    },
    image: {
        width: '90%',
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'center'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
    },
    textButton: {
        fontSize: 20,
        color: '#fff'
    },
    input: {
        marginTop: 20,
        width: '90%'
    }

})

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)