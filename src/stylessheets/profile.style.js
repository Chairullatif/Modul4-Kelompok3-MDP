import {StyleSheet} from 'react-native'; 
 
export default StyleSheet.create({ 
  container: { 
    flex: 1, 
  }, 
  headerContainer: { 
    backgroundColor: '#aa1', 
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30, 
    alignItems: 'center', 
    paddingTop: 20,
    paddingBottom: 30, 
  }, 
  headerImage: { 
    height: 120, 
    width: 120, 
    borderRadius: 60, 
    marginVertical: 10,   }, 
  headerTXT: { 
    fontSize: 24,
    fontWeight: 'bold', 
    color: '#fff', 
  }, 
  headerTXTDesc: { 
    fontSize: 14,
    color: '#fff', 
  }, 
  headerUsername: {
    fontSize: 12, 
    color: '#fff', 
  }, 
  bodyTouchable: { 
    alignSelf: 'center', 
    backgroundColor: '#1a4', 
    paddingHorizontal: 20, 
    paddingVertical: 5, 
    borderRadius: 10, 
    margin: 20, 
  }, 
  bodyTXT: { 
    color: '#efd', 
    fontSize: 20, 
  }, 
}); 