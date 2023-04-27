import React, {useContext } from 'react';
import {
    TouchableOpacity,
    View,
    FlatList,
    RefreshControl,
  } from 'react-native';

import { APIContext } from '../../contexts/apiContext';
import Card from '../components/Card';
import ErrorMessage from '../components/Error/error';
import Loading from '../components/Loading/loading';

export default UsersList = ({navigation}) => {
    const {users,loading,listEnd,error,getMoreItem,refreshing,getRefresh} = useContext(APIContext);
    return (
      <View >
                { error && 
                  <ErrorMessage message={error} />
                }
                {!loading ? 
                <View>
                <FlatList 
                    data={users}          
                    renderItem={({item}) => 
                      <>
                      <TouchableOpacity onPress={() => navigation.navigate('UserDetail', {id: item.postId})}>
                        <Card item={item} />
                      </TouchableOpacity>
                      </>
                    }
                    keyExtractor={item=>item.postId}
                    refreshControl={
                      <RefreshControl refreshing={refreshing} onRefresh={()=>{getRefresh()}} />
                    }
                    onEndReached={()=>{getMoreItem()}}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={
                        listEnd &&  
                        <Loading style={{paddingVertical:20}} />
                    }
                />
                </View>
                    :
                        <Loading style={{paddingVertical:20}} />
                }
         </View>
    );
} 