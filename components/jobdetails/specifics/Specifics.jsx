import React from 'react'
import { View, Text } from 'react-native'

import styles from './specifics.style'

const Specifics=({title,points})=>(
  <View style={styles.container}>
    <Text style={styles.title}>
      {title}
    </Text>
    <View>
      {points.map((item,id)=>(
        <View style={styles.pointWrapper} key={id}>
        <Text style={styles.pointDot}/>
        <Text style={styles.pointText}>{item}</Text>
        </View>
      ))}
    </View>
  </View>
)

export default Specifics