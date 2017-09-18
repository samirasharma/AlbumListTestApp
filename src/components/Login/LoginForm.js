import React , {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';

export default class LoginForm extends Component{
	render(){
		return(
			<View style = {styles.container}>
			<View style = {styles.contentContainer}>
			<TextInput
				placeholder = "username or email"
				placeholderTextColor = "rgba(255,255,255,0.7)" 
				style = {styles.input}/>
			<TextInput 
				placeholder = "password"
				secureTextEntry
				placeholderTextColor = "rgba(255,255,255,0.7)" 
				style = {styles.input}/>
			<TouchableOpacity style = {styles.buttonContainer}>
				<Text style = {styles.buttonText}> LOGIN</Text>
			</TouchableOpacity>
			</View>
			</View>

			);
		}
	}

	const styles = StyleSheet.create({
		container :{
			padding: 20,
			height : 100
		},
		input :{
			height : 40,
			backgroundColor : 'rgba(255,255,255,0.2)', 
			marginBottom:10
		},
		contentContainer :{
			flex :1
		},
		buttonContainer :{
			backgroundColor : '#2980b9', 
			paddingVertical : 10
		}, 
		buttonText :{
			textAlign :'center', 
			color :'#FFF', 
			fontWeight : '700'
		}
	});