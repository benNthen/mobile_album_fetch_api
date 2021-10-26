import React from 'react';
import axios from 'axios';
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Button,
  Modal,
  FlatList,
} from 'react-native';
import cover from './music_cd.png';


class App extends React.Component{

  constructor(){
    super();
    this.state = {
      modalOneshow:false,
      modalTwoshow:false,
      show: false,
      id:0,
      image:0,
      photos:[],
      users:[],
      albums:[],
    };

  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=50')
    .then(resp => resp.data)
    .then((data) => {
      this.setState({photos: data});
    }).then(
      axios.get('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.data)
    .then((data) => {
      this.setState({users: data});
    }).then(
      axios.get('https://jsonplaceholder.typicode.com/albums?_limit=10')
      .then(resp => resp.data)
      .then((data) => {
        this.setState({albums:data});
      }))
    );
  }

  render(){
    return (
      <View>
        <ScrollView>
        {this.state.albums.map((album, i) =>(
              <View style={{flex: 1, marginLeft: 81}} key= {i}>
                    {this.state.users.map(user => {
                      if (user.id === album.userId){
                        return (
                          <TouchableOpacity onPress={() => {this.setState({modalOneshow:true})}}>
                            <Image source={cover} style={{width:200, height:100}} />
                            <Text>Title: "{album.title}"</Text>
                            {this.state.users.map(user => {
                              if (user.id === album.userId){
                                return (
                                  <Text>Owner: {user.name}</Text>
                                );
                              } else {
                                return null;
                              }
                            })}
                            <Modal
                              transparent={true}
                              visible={this.state.modalOneshow}
                            >
                              <View>
                              <Button title="close" onPress={() =>{this.setState({modalOneshow:false, modalTwoshow:false})}} />
                              <FlatList
                                numColumns={5}
                                data={this.state.photos}
                                keyExtractor = {item => item.id}
                                renderItem={({ item }) => {
                                  if (item.albumId){
                                    return (
                                      <View style={{ flex: 1}}>
                                      <TouchableOpacity onPress={() => {this.setState({ modalTwoshow:true, image:item.url, id:item.albumId})}}>
                                      <Image
                                        source={{uri:item.thumbnailUrl}}
                                        style={{width:78, height:100, marginHorizontal: 0.25, marginVertical:0.25}}
                                      />
                                      </TouchableOpacity>
                                      </View>
                                    );
                                  }
                                  else {
                                    return (
                                      <View style={{ flex: 1}}>
                                      <Image
                                        source={{uri:item.thumbnailUrl}}
                                        style={{width:0, height:0, marginHorizontal: 0.05, marginVertical:0.05}}
                                      />
                                      </View>
                                    );
                                  }
                                }}
                                />
                              </View>
                            </Modal>
                            <Modal
                              transparent={true}
                              visible={this.state.modalTwoshow}
                            >
                              <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                                <Image
                                  source={{uri:this.state.image}}
                                  style={{width:300, height:300}}
                                />
                                <Button title="close" onPress={() =>{this.setState({modalTwoshow:false})}} />
                              </View>
                            </Modal>
                          </TouchableOpacity>
                        );
                      } else {
                        return null;
                      }
                    })}

              </View>
            ))}
        </ScrollView>
      </View>
    );
  };
};

export default App;
