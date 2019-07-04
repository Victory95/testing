import React, { Component } from "react";
import {StyleSheet, FlatList, Text, View, Image} from "react-native";

export default class Absensi extends Component {

    static navigationOptions = 
    {
        title: 'Absen Murid',
        headerStyle:{
          backgroundColor:'#00BFFF',
        },
        headerTitleStyle:{
            color:'white'
        },
        headerTintColor:'white'
        
      };

    constructor(props) {
        super(props);
        
        const {navigation}=this.props;
        this.state = {
          GridListItems: [
            { name: "Patrick", image:'https://www.pngfind.com/pngs/m/15-157900_patrick-star-png-patrick-star-season-1-transparent.png'},
            { name: "Jimmy Neutron", image:'https://vignette.wikia.nocookie.net/poohadventures/images/1/1b/Jimmy_neutron.jpg/revision/latest?cb=20160212185406' },
            { name: "Dora The Explorer", image:'https://vignette.wikia.nocookie.net/doratheexplorer/images/3/3f/Dorapresent.png/revision/latest?cb=20190617231332' },
            { name: "Timmy", image:'https://media2.giphy.com/media/l3q2SVUuImX8NFF3q/giphy.gif' },
            { name: "Saitama", image:'https://vignette.wikia.nocookie.net/vsbattles/images/0/0c/Saitama_one_punch.png/revision/latest?cb=20190125003222' },
            { name: "Naruto", image:'https://icon2.kisspng.com/20171221/hzw/naruto-png-clipart-picture-5a3bbb098ea059.8448080015138639455842.jpg'},
            { name: "Diego", image:'https://www.stickpng.com/assets/images/5aa66bf37603fc558cffbed1.png' },
            { name: "Luffy", image:'https://cdn.imgbin.com/20/22/18/imgbin-monkey-d-luffy-one-piece-pirate-warriors-chibi-trafalgar-d-water-law-one-piece-chibi-xqst0WyE1RRm5q1BV5K3PBt1H.jpg' },
            { name: "Spongebob", image:'http://pngimg.com/uploads/spongebob/spongebob_PNG38.png' },
            { name: "Squidward", image:'https://img1.pngdownload.id/20190212/fg/kisspng-squidward-tentacles-patrick-star-image-dab-portabl-ftestickers-squidward-dab-dance-5c62c9ab85e494.9309980915499780275484.jpg' },
            { name: "Tayo", image:'https://banner2.kisspng.com/20180804/lxf/kisspng-tayo-the-little-bus-season-1-birthday-cake-birth-5b66653b7c9909.6167646015334372435104.jpg' },
            { name: "Minion", image:'http://assets.stickpng.com/thumbs/586612f17d90850fc3ce2a4f.png' },
            { name: "Simpson", image:'http://pngimg.com/uploads/simpsons/simpsons_PNG12.png' },
            { name: "Shandy", image:'https://4.bp.blogspot.com/-4G9pWTPjOXc/WVprG17VdgI/AAAAAAAAG5k/wzhpuAR-Ep4ttRpF1YPF8Zj5URH_RhtHQCLcBGAs/s1600/205a%252520-%252520Whirly%252520Brains%252520%2528496%2529.png' },
            { name: "Mr.Crab", image:'https://vignette.wikia.nocookie.net/spongebob-new-fanon/images/0/0f/Eugene_H._Krabs.png/revision/latest?cb=20190124021559' },
            { name: "Plankton", image:'https://banner2.kisspng.com/20180611/yjt/kisspng-plankton-and-karen-sticker-telegram-clip-art-5b1ebc61b1c431.5708010615287409617281.jpg' },
          ]
        };
    }

GetGridViewItem(item) {
    this.props.navigation.navigate(item)
  }

  render() {
  return (
    <View style={styles.container}>
      <FlatList
         data={ this.state.GridListItems }
         renderItem={ ({item}) =>
           <View style={styles.GridViewContainer}>
              <Image style={styles.GridImageView}
                  source={{uri: item.image,}}>
              </Image>
            <Text style={styles.GridViewTextLayout} onPress={this.GetGridViewItem.bind(this, item.name)} > {item.name} </Text>
           </View> }
      />
    </View>
 );
  }
}

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#fff"
    },
    headerText: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      fontWeight: "bold"
    },
    GridViewContainer: {
     flex:1,
     justifyContent: 'flex-start',
     alignItems: 'center',
     height: 100,
     margin: 5,
     backgroundColor: '#00BFFF',
     borderRadius:5,
     flexDirection:'row'
  },
  GridViewTextLayout: {
     fontSize: 15,
     fontWeight: 'bold',
     justifyContent: 'center',
     color: '#FFFFFF',
     padding: 10,
   },
   GridImageView: {
    height:80,
    width:60,
    marginLeft:15
  }
  });