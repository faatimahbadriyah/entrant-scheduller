import React from 'react';
import { Text,  Image, TouchableOpacity, Modal, View, StyleSheet } from 'react-native';
import { List, ListItem, Body, Left, Fab, Thumbnail, Icon, Container, Button, Form, Item, Input, Label } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class Peserta extends React.Component{

	static navigationOptions={
	    headerTitle:(
            <Image source={require('../assets/logo.png')} style={{marginLeft: 20, width: 103, height: 30}} />
        )
	}

	constructor(props){
        super(props),
        this.state={
            datas:[
            	{
            		nama: 'Doh Kyung Soo',
            		kegiatan: [
            			{name:'Mengaji di madrasah', start:'08.00', end:'09.30'},
            			{name:'Berangkat sekolah', start:'13.00', end:'17.30'},
            			{name:'Makan malam', start:'18.15', end:'18.45'},
            		]
            	},
            	{
            		nama: 'Al Ghazali',
            		kegiatan: [
            			{name:'Meeting klien', start:'08.00', end:'09.00'},
            		]
            	},
            	{
            		nama: 'Edward Cullen',
            		kegiatan: [
            			{name:'Rapat organisasi', start:'07.00', end:'07.20'},
            			{name:'Shooting iklan shampo', start:'08.40', end:'11.00'},
            			{name:'Makan siang', start:'13.45', end:'14.00'},
            			{name:'Mengaji sore', start:'15.00', end:'16.30'},
            			{name:'Main', start:'17.00', end:'17.30'},
            			{name:'Makan malam', start:'18.45', end:'19.00'},
            			{name:'Mengerjakan Tugas', start:'19.45', end:'20.30'},
            			{name:'Tidur', start:'20.45', end:'04.00'},
            		]
            	},
            	{
            		nama: 'Sania Dewi',
            		kegiatan: [
            			{name:'Mengaji pagi', start:'07.00', end:'08.30'},
            			{name:'Berangkat sekolah', start:'09.00', end:'13.30'},
            			{name:'Makan siang', start:'13.45', end:'14.00'},
            			{name:'Mengaji sore', start:'15.00', end:'16.30'},
            			{name:'Main', start:'17.00', end:'17.30'},
            			{name:'Makan malam', start:'18.45', end:'19.00'},
            		]
            	}
            ],              
            active: false,
          	modalVisible: false,
        }
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render(){
    	const {active, datas, modalVisible} = this.state
        return(
        	<Container>
        		<View style={{alignItems:'center', justifyContent:'center',marginVertical: 20}}>
        			<Text style={{fontSize: 20}}>DAFTAR PESERTA</Text>
        		</View>
	            <ScrollView>
	            	<List>
	            		{
	            			datas.map((val, key) => {
		            			return <ListItem key={key} thumbnail button onPress={()=>this.props.navigation.navigate('Kegiatan', {nama: val.nama, kegiatan: val.kegiatan})}>
		            				<Left>
										<Thumbnail square source={{ uri: `https://ui-avatars.com/api/?name=${val.nama.split(' ').join('+')}&background=2dd6ba&color=fff` }} />
									</Left>
									<Body>
										<Text>{val.nama}</Text>
									</Body>
		            			</ListItem>
		            		})
	            		}
	            	</List>
	            </ScrollView>
	            <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => this.setModalVisible(false)}
                    >
                    <View style={styles.container}>
	                    <View style={styles.innerContainerTransparentStyle}>
	                        <Button
	                            transparent
	                            onPress={() => this.setModalVisible(!this.state.modalVisible)}
	                            style={styles.buttonClose}
	                        ><Icon style={styles.iconClose} type="FontAwesome" name="remove"/></Button>
                            <Form style={{marginTop: 35, padding: 10}}>
				                <Label>Nama Peserta</Label>
	                            <Item regular style={{marginVertical:5, marginLeft: 0}}>
					                <Input />
					            </Item>
				                <Label style={{marginTop: 10}}>Kegiatan</Label>
					            <Item regular style={{marginVertical:5, marginLeft: 0}}>
					                <Input />
					            </Item>
                                <Button block style={styles.btn} onPress={() => this.setModalVisible(false)}>
                                    <Text style={styles.textBtn}>SUBMIT</Text>
                                </Button>
                            </Form>
	                    </View>
                    </View>
                </Modal>
            	<Fab
                    active={active}
                    direction="left"
                    containerStyle={{ }}
                    style={{ backgroundColor: '#2dd6ba' }}
                    position="bottomRight"
                    onPress={() => this.setState({ modalVisible: true })}>
                    <Icon name='plus' type='MaterialCommunityIcons' />
                </Fab>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    innerContainerTransparentStyle: {
        backgroundColor: '#fff',
        padding: 10,
        width: 300
    },   
    btn:{
        backgroundColor: '#2dd6ba', 
        marginTop: 30,
    },
    buttonClose: {
        position: 'absolute',
        top: 1,
        right: 0,
        zIndex: 1,
    },
    iconClose:{
        color: '#2dd6ba',        
    },    
  	textBtn: {
        color: '#fff',
        fontSize: 18
  	},
})