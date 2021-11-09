import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import Style from '../stylessheets';

const {HomeStyle} = Style;

function HomePages() {
  const data = [
    {
      id: 1,
      nama: 'Alberto Mathew Christopher',
      nim: '21120118170002',
      kelompok: '03',
    },
    {
      id: 2,
      nama: 'Chairullatif Aji Sadewa 2',
      nim: '21120119120015',
      kelompok: '03',
    },
    {
      id: 3,
      nama: 'Erlin Sofia Sitohang',
      nim: '21120119120014',
      kelompok: '03',
    },
    {
      id: 4,
      nama: 'Mohammad Rifqi Satriamas',
      nim: '21120119130115',
      kelompok: '03',
    },
  ];

  const ListItemNama = dataPassing => {
    return (
      <View
        style={
          dataPassing.dataNama.id % 2 === 1
            ? HomeStyle.itemListContainerGanjil
            : HomeStyle.itemListContainerGenap
        }>

        <View>
          <View style={
            dataPassing.dataNama.id % 2 === 1
            ? HomeStyle.itemListGarisA
            : HomeStyle.itemListGarisB
          } />
        </View>

        <View style={HomeStyle.itemListContent}>
          <Text style={HomeStyle.itemListTXT}>
            {'Nama : ' + dataPassing.dataNama.nama}
          </Text>
          <Text style={HomeStyle.itemListTXT}>
            {'NIM : ' + dataPassing.dataNama.nim}
          </Text>
          <Text style={HomeStyle.itemListTXT}>
            {'Kelompok : ' + dataPassing.dataNama.kelompok}
          </Text>
        </View>

      </View>
    );
  };

  return (
    <View style={HomeStyle.container}>
      <View style={HomeStyle.headerContainer}>
        <Image
          source={{
            uri: 'https://bit.ly/39BPh9p',
          }}
          style={HomeStyle.headerImage}
        />
        <Text style={HomeStyle.headerTXT}>
          PRAKTIKUM MDP MODUL 4 KELOMPOK 03
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        legacyImplementation={false}
        data={data}
        renderItem={({item}) => <ListItemNama dataNama={item} />}
        keyExtractor={item => item.id}
        style={HomeStyle.flatlist}
      />
    </View>
  );
}
export default HomePages;
