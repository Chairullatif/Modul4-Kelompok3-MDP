import {StyleSheet} from 'react-native'; 
 
export default StyleSheet.create({ 
  container: { 
    flex: 1, 
  }, 
  headerContainer: { 
    backgroundColor: '#cd6600', 
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30, 
    alignItems: 'center', 
    paddingBottom: 10, 
    marginBottom: 4,
  }, 
  headerImage: { 
    height: 120, 
    width: 100, 
  }, 
  headerTXT: { 
    color: '#fff', 
    fontWeight: 'bold', 
  }, 
  flatlist: { 
    flex: 1, 
    marginHorizontal: 10, 
  }, 
  itemListContainerGanjil: { 
    height: 100, 
    marginTop: 4,
    backgroundColor: '#00ced1', 
    marginVertical: 5, 
    borderRadius: 20, 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 20,   }, 
  itemListContainerGenap: { 
    height: 100, 
    marginTop:4,
    backgroundColor: '#ffcba4', 
    marginVertical: 5, 
    borderRadius: 20, 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
  }, 
  itemListContent: { 
    marginLeft: 10, 
  }, 
  itemListGarisA: { 
    backgroundColor: '#ff7f00', 
    width: 5, 
    height: '70%', 
  }, 
  itemListGarisB: { 
    backgroundColor: '#da3287', 
    width: 5, 
    height: '70%', 
  }, 
  itemListTXT: { 
    color: '#2f4f4f', 
    marginVertical: 2, 
    fontWeight: 'bold', 
    fontSize: 17, 
  }, 
}); 