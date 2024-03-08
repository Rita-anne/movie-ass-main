import React ,{useState,useEffect}from 'react';
import { StatusBar } from 'expo-status-bar';
import { Icon } from 'react-native-elements';
import { Button, ScrollView, StyleSheet, Text, View,Image, Pressable } from 'react-native';

export default function Action({navigation}) {


const[movie,setmovie]=useState([])
const [movie2,setmovie2]=useState([])
const [movie3,setmovie3]=useState([])
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWIxMDBmMzY0MGM1ZDU2NDkzOTgyYjU0YmU4ZjdmOCIsInN1YiI6IjY1ZDg2ZDg2YTI4NGViMDE4NTg3ZmEyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bBG1lo4fPNahfs-ewwWV-hmmBAir7MBeqH62yweqAGo'
  }
};
useEffect(()=>{
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(response => response.json())
  .then((response)=>{
    setmovie(response.results)
    console.log(response.results)
  } )
  
    
  .catch(err => console.error(err));
},[])

useEffect(()=>{
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then((response)=>{
    setmovie2(response.results)
    console.log(response.results)})
  .catch(err => console.error(err));
},[])


  return (
    <View style={styles.container}>
        <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap',padding:20,marginTop:10}} >
          <Icon name='arrow-left' type='material-community' color='#f9be02' size={35} /> 
        <Pressable  onPress={()=>navigation.navigate('MyList')}>
        <Text style={{color:'white',fontSize:30,marginHorizontal:20}} >Action</Text>
        </Pressable>
        </View>
        <ScrollView>
        <View >
        <Image style={{width:400,height:250,}}source={require('./assets/action.jpg')} />
      <StatusBar style="auto" />
      </View>
      <View>
        <Text style={{color:'white',fontSize:20,fontWeight:'500'}}>Jumanji:The Next Level</Text>
        <Text style={{color:'white',fontSize:18,fontWeight:'100'}} > When the world is under attack from creatures who hurt their human prey by sound , a teenager. </Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap',marginTop:10}} >
        <Pressable>
          <View style={{display:'flex',backgroundColor:'#f9be02',flexDirection:'row',flexWrap:'wrap',borderWidth:1,paddingLeft:40,paddingRight:40,paddingBottom:10,paddingTop:10,marginHorizontal:20}} >
          <Icon name='play-outline' type='material-community' />
        <Text style={{backgroundColor:'#f9be02'}}>Play</Text>
        </View>
        </Pressable>
        <Pressable>
          <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap',borderWidth:1,borderColor:'white',paddingLeft:40,paddingRight:40,paddingBottom:10,paddingTop:10,marginHorizontal:30}} >
          <Icon name='plus' color='#f9be02' type='material-community'/>
        <Text style={{color:'white',}} >MyList</Text>
        </View>
        </Pressable>
        </View>
        <View>
          <Text style={{color:'white',margin:8,fontSize:20}}>U.S Action Movies</Text>
         </View>
         <ScrollView horizontal={true}>
                    {movie.map((item) =>
                        <Image key={item.id} style={{width:250,height:150,marginHorizontal:5,borderRadius:10}} source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}} />
                   ) }
            </ScrollView>
             <View>
            <Text style={{color:'white',margin:8,fontSize:20}}>Muvi Originals Action</Text>
             </View>
            <ScrollView horizontal={true}>
                  {movie2.map((item) =>
                   <Image key={item.id} style={{width:250,height:150,marginHorizontal:5,borderRadius:10}} source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}} />
                   )}
            </ScrollView>
             <View>
          <Text style={{color:'white',margin:8,fontSize:20}}>More Movies</Text>
         </View>
            <ScrollView horizontal={true}>
                    {movie.map((item) =>
                        <Image key={item.id} style={{width:250,height:150,marginHorizontal:5,borderRadius:10}} source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}} />
                   ) }
            </ScrollView>
           </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
     backgroundColor:'#1a1a1a',
   
  },
});
