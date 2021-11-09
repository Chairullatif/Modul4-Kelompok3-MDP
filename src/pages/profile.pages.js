import React from 'react'; 
import {View, Text, Image, Alert, TouchableOpacity} from 'react-native'; 
import Style from '../stylessheets'; 
import axios from 'axios'; 
 
const {ProfileStyle} = Style; 
 
function ProfilePages() { 
  const githubUser = [
    "chairullatif",
    "AlbertoMathew",
    "ErlinSofi18",
    "iamghost19"
  ];
  const [data, setData] = React.useState(''); 
  const [user, setUser] = React.useState(githubUser[0]);
  const [count, setCount] = React.useState(0);
 
  React.useEffect(() => { 
    async function fetchData() { 
      const request = await axios 
        .get('https://api.github.com/users/' + user.toString()) 
        .then(res => setData(res.data)) 
        .catch(e => Alert.alert('Gagal!', e)); 
      return request; 
    } 
    fetchData(); 
  }, [user]); 
 
  const next = () => { 
    let i = count + 1;
    const username = githubUser[i];
    if (i == 3) {
      setCount(-1);
    } else {
      setCount(i);
    }
    setUser(username);
  }; 

  return ( 
    <View style={ProfileStyle.container}> 
      <View style={ProfileStyle.headerContainer}> 
       
        <Image 
          source={{ 
            uri: data.avatar_url, 
          }} 
          style={ProfileStyle.headerImage} 
        /> 

        <Text style={ProfileStyle.headerTXT} > 
          {data.name} 
        </Text> 
        
        <Text style={ProfileStyle.headerUsername}> 
          {data.login} 
        </Text> 

        <Text style={ProfileStyle.headerTXTDesc}>{'Repository: '+ data.public_repos
          +' | Followers: ' + data.followers + ' | Following: ' + data.following}</Text> 
      </View>

      <TouchableOpacity 
        style={ProfileStyle.bodyTouchable} 
        onPress={() => next()}> 
        <Text style={ProfileStyle.bodyTXT}>NEXT</Text> 
      </TouchableOpacity> 

    </View> 
  ); 
} 
 
export default ProfilePages; 