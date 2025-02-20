import styled from 'styled-components';
import { Image, View, Text, TextInput, TouchableOpacity } from 'react-native';

 export const Colors = {
    primary: '#189de4',
    second: '#242444',
    tertiary: '#4c7101',
    white: '#ffffff',
    brand: '#00008b',

}

const {primary, second, tertiary, white, brand} = Colors


export const MyContainer = styled.View`
    flex:1;
    padding: 25px;
    padding-top: 10px;
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`

export const PageLogo = styled.Image`
    padding: 10px;
`

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${second};
    padding: 10px;
`

export const SubTitle = styled.Text`
    font-size: 20px;
    text-align: center;
    color: ${primary};
    padding: 10px;
`

export const FormArea = styled.View`
    width: 90%;
`

export const MyTextBox = styled.TextInput`
    background-color: ${second};
    padding: 10px;
    padding-left: 40px;
    padding-right: 40px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: ${white};

`

export const MyButton = styled.TouchableOpacity`
    padding: 10px;
    margin-top: 10px;
    background-color: ${primary};
    justify-content: center;
    border-radius: 10px;
    width: 100px;
    height: 40px;
`

export const ButtonArea = styled.View`
    width: 70%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 40px;
    margin-left: 40px;
`

export const MyButtonText = styled.Text`
    font-size: 15px;
    text-align: center;
    color: ${white};
`