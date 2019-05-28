import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Alert,
    TouchableWithoutFeedback as TWF
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class AddComent extends Component {
    state = {
        comment: '',
        editMode: false
    }

    handleAddComent = () => {
        Alert.alert("Adcionado", this.state.comment)
    }

    render() {
        let commentArea = null
        if (this.state.editMode) {
            commentArea = (
                <View style={styles.container}>
                    <TextInput placeholder='Pode comentar'
                        autoFocus={true} style={styles.input} value={this.state.comment}
                        onChangeText={(comment) => this.setState({ comment })} onSubmitEditing={this.handleAddComent} />
                    <TWF onPress={() => this.setState({ editMode: false })}>
                        <Icon name='times' size={15} color='#555' />
                    </TWF>
                </View>
            )
        } else {
            commentArea = (
                <TWF onPress={() => this.setState({ editMode: true })}>
                    <View style={styles.container}>
                        <Icon name='comment-o' size={25} color='#555' />
                        <Text style={styles.caption}>Adcionar comentário</Text>
                    </View>
                </TWF>
            )
        }
        return (
            <View style={{ flex: 1 }}>
                {commentArea}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#ccc'
    },
    input:{
        width: '90%'
    }
})