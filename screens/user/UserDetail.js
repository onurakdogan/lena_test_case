import React, { useContext } from 'react';
import {ScrollView,View,} from 'react-native';

import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

import { APIContext } from '../../contexts/apiContext';
 
  export default UserDetail = ({navigation, route}) => {
  
    const {width} = useWindowDimensions();
    const {users} = useContext(APIContext);
    const {id} = route.params;
    const index = users.findIndex(item => item.postId === id);

    return (
        <View>  
          <ScrollView style={{padding:20}}>
              <View style={{marginBottom:40}}>
                    <RenderHtml
                      contentWidth={width}
                      source={{html:users[index].content}}
                    /> 
              </View>
          </ScrollView>      
        </View>
    );
}
