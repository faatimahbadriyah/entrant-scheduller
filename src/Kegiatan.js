import React from 'react';
import { Text,  Image, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Card, CardItem, Body, Icon} from 'native-base';

export default class Kegiatan extends React.Component{

	static navigationOptions={
	    headerTitle:(
            <Image source={require('../assets/logo.png')} style={{marginLeft: 20, width: 103, height: 30}} />
        )
	}

    constructor(props){
        super(props),
        this.state={
        }
    }

    render(){
        const {nama, kegiatan} = this.props.navigation.state.params 
        var today = new Date();
        var cstMonth = new Array('Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember');
        var tgl = today.getUTCDate();
        var month = cstMonth[today.getUTCMonth()];
        var year = today.getUTCFullYear();
        var date = tgl + " "+ month +" "+ year;
        var days = new Array('Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu');
        var day  = days[today.getDay()];
           
        return(
            <Container style={{paddingHorizontal: 10}}>
                <View style={{alignItems:'center', justifyContent:'center',marginVertical: 20}}>
                    <Text style={{fontSize: 20}}>DAFTAR KEGIATAN</Text>
                    <Text style={{fontSize: 16, fontWeight:'bold'}}>{nama}</Text>
                </View>
                <View style={{borderBottomWidth: 2, borderColor: '#2dd6ba'}}>
                    <Text style={{fontSize: 18, padding: 5}}>{day}, {date}</Text>
                </View>
                <ScrollView>
                    {
                        kegiatan.map((val,key) => {
                            return <Card key={key}>
                                <CardItem>
                                    <Body>
                                        <Text style={{fontSize: 16, marginBottom: 10}}>{val.name}</Text>
                                        <Text style={{fontSize: 10}}>{val.start}-{val.end}</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        })
                    }
                </ScrollView>
            </Container>
        )
    }
}