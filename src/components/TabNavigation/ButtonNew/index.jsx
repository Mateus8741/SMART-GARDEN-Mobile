import React from "react";
import * as Styles from './styles';
import { Entypo } from "@expo/vector-icons";

export default function ButtonNew({size, color}) {
  return (
    <Styles.Container>
        <Entypo name="plus" size={size} color ={color}/>
    </Styles.Container> 
  )
}
