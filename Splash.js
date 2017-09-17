import React, {Component} from 'react';
import {View, Text, StyleSheet } from 'react-native';
export default class  extends Component{
	render(){
		return(
			<View style ={styles.wrapper}>
			<View>
			<Text style = {styles.title}> Reminder Application</Text>
			</View>
			<View >
			<Text style = {styles.subtitle}> FirstReact native application </Text>
			</View>
			</View>
			);
		}
	}
	const styles = StyleSheet.create({
		wrapper : {
			backgroundColor:'green', 
			flex : 1, 
			alignItems:'center', 
			justifyContent:'center'},
		title :{
			color :'white', 
			fontSize :35,
			fontWeight  :'bold'
		}, 
		subtitle:{
			color :'white', 
			fontSize: 16
		}
	});