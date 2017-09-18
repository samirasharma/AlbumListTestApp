import React , {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LoginForm from './LoginForm';
export default class Login extends Component{
	render(){
		return(
			<View style = {styles.container}>
				<View style = {styles.textContainer}>
					<Text style = {styles.text}>Login</Text>
				</View>
				<View style = {styles.formContainer}>
					<LoginForm/>
				</View>
			</View>

		);
	}
}

const styles = StyleSheet.create({
	container :{
		flex :1, 
		backgroundColor :'#3498db' 
	}, 
	textContainer :{
		alignItems :'center',
		flexGrow : 1, 
		justifyContent :'center'
	},
	text :{
		color :'white',
		fontSize :35,
		fontWeight  :'bold'
	}, 
	formContainer :{
		justifyContent :'center',
		marginBottom : 200
	}
});