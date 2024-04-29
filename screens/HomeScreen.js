import React, {useEffect,useState} from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput, ScrollView, FlatList, PanResponder } from 'react-native'
import { Icon, FAB } from '@rneui/themed';

  const HomeScreen = ({ navigation }) => {

    const [search, setSearch] = useState("");
    let [selected, setSelect] = useState('In Progress');
    const [searchText, setSearchText] = useState('');

    const updateSearch = (search) => {
      setSearch(search);
    };

    let DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Finish Design',
        description: 'Complete the current design for the mobile application using Figma',
        duedate: '26 Apr 2024',
        status: 'To Do',
        priority: 'Low'
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Authentication',
        description: 'Code the authentication endpoint and add password requirements',
        duedate: '29 Apr 2024',
        status: 'In Progress',
        priority: 'High'
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Code functionality',
        description: 'Code all functionality for adding, deleting and editing tasks',
        duedate: '24 Apr 2024',
        status: 'To Do',
        priority: 'Medium'
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d92',
        title: 'Deploy Database',
        description: 'Deploy the current DB changes',
        duedate: '24 Apr 2024',
        status: 'In Progress',
        priority: 'Medium'
      },
      {
        id: '58694a0f-3da1-472p-bd96-145571e29d72',
        title: 'Write unit test',
        description: 'TUnit tests for where applicable',
        duedate: '01 May 2024',
        status: 'Completed',
        priority: 'High'
      },
    ];

    const [dataList, setData] = useState(DATA.filter(x=>x.status===selected));

    useEffect(()=>{
      if(emptyList()){
        setData(DATA);
        return
      }
      searchTask();
    },[searchText])
    
    const emptyList = () =>{
      return searchText === ''? true: false
    };

    handleFilter = (filter) => {
      selected = setSelect(filter)
      setData(DATA.filter(x=>x.status===filter))   
    }

    const searchTask = () =>{
      setData(
      DATA.filter(item =>{
       return (item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1) && item.status===selected;
      })
      )
   };

   const handleDeleteItem = (id) => {
    const updatedData = DATA.filter((item) => item.id !== id);
    setData(updatedData);
  };

   const panResponder = (id) => {
    let dx = 0;

    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        dx = gestureState.dx;
      },
      onPanResponderRelease: (_, gestureState) => {
        if (dx > 50) {
          // Swipe right threshold, you can adjust this value
          handleDeleteItem(id);
        }
      },
    });
  };

   const handleSelectTask = (item) => {
    console.log(item)
   }

   handleAdd = () => {
    navigation.navigate('Add')
   }

    const Item = ({id, title, description, duedate, priority}) => (
      <View style={styles.taskItem} {...panResponder(id).panHandlers}>
        <Text style={styles.taskTitle}>{title}</Text>
        <Text style={styles.taskDescription}>{description}</Text>
        <View style={styles.detailContainer}>
          <Icon name='schedule' style={styles.dateIcon}/>
          <Text style={styles.taskDuedate}>{duedate}</Text>
          {/* <Icon name='list' style={styles.priorityIcon}/> */}
          <Text style={priority === 'High' ? styles.highPriority : priority === 'Medium' ? styles.mediumPriority : styles.lowPriority }>{priority}</Text>
        </View>
      </View>
    );

    return (
      <View style={styles.mainContainer}>
      <View style={styles.headerContainer}> 
         <View style={styles.nameContainer}>
              <Text style={styles.greeting}>Hello,</Text>
              <Text style={styles.userInfo}>Bongani</Text>
          </View>
          <View style={styles.imageContainer}>
              <Image style={styles.avatar} source={require("../assets/splash.png")}></Image>
          </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.searchContainer}>
          <Icon name='search' style={styles.searchIcon}/>
          <TextInput style={styles.searchBar} placeholder='Search' onChangeText={(t) => setSearchText(t)}></TextInput>
        </View>
          <View style={styles.buttonGroup}>
              <TouchableOpacity style={selected == 'In Progress' ? styles.buttonFilter : styles.buttonFilterOutline} onPress={() => handleFilter('In Progress')} >
                  <Text style={selected === 'In Progress' ? styles.buttonFilterText : styles.buttonFilterTextOutline}>In Progress</Text>
              </TouchableOpacity>
              <TouchableOpacity style={selected == 'To Do' ? styles.buttonFilter : styles.buttonFilterOutline} onPress={() => handleFilter('To Do')}>
                  <Text style={selected === 'To Do' ? styles.buttonFilterText : styles.buttonFilterTextOutline}>To Do</Text>
              </TouchableOpacity>
              <TouchableOpacity style={selected == 'Completed' ? styles.buttonFilter : styles.buttonFilterOutline} onPress={() => handleFilter('Completed')}>
                  <Text style={selected === 'Completed' ? styles.buttonFilterText : styles.buttonFilterTextOutline}>Completed</Text>
              </TouchableOpacity>
          </View> 
      </View>
      <View style={styles.flatList}>
        <FlatList 
          data={dataList}
          extraData={dataList}
          renderItem={
            ({item}) => 
            <Item title={item.title} description={item.description} duedate={item.duedate} priority={item.priority}  />
          }
          keyExtractor={item => item.id}
        />
      </View>
      <FAB placement="right" size='large' icon={{ name: 'add', color: 'white' }} color="#7F11A5" onPress={() => handleAdd()} />
     </View>

    )
  }

export default HomeScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10
  },
  nameContainer: {
    padding: 5
  },
  greeting: {
    fontSize: 16,
    color: "black",
    fontWeight: "300",
  },
  userInfo: {
    fontSize: 18,
    color: "black",
    fontWeight: "600"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 23,
    borderWidth: 2,
    borderColor: "gray",
    marginBottom: 10,
  },
  bodyContainer: {
    padding: 5
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchIcon: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBar: {
    margin: 5,
    borderRadius: 30,
    borderColor: 'lightgray',
    borderWidth: 2,
    width: '90%',
    height: 40,
    padding: 10
  },
  headingText: {
    padding: 5,
    fontSize: 25,
    fontWeight: 500
  },
  buttonGroup: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  buttonFilter: {
    backgroundColor: '#7F11A5',
    borderRadius: 30,
    width: '30%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonFilterText: {
    color: '#fff',
    fontSize: 14,
  },
  buttonFilterOutline: {
    backgroundColor: '#fff',
    borderRadius: 30,
    width: '30%',
    height: 40,
    borderWidth: 1,
    borderColor: '#7F11A5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonFilterTextOutline: {
    color: '#7F11A5',
    fontSize: 14,
  },
  flatList: {
  },
  taskItem: {
    backgroundColor: '#fff',
    width: '100%',
    height: 150,
    borderRadius: 10,
    margin: 10,
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: 600,
    padding: 5
  },
  taskDescription: {
    fontSize: 14,
    padding: 5,
  },
  detailContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },
  dateIcon: {
    padding: 5,
  },
  taskDuedate: {
    paddingRight: 180,
  },
  highPriority: {
    borderColor: '#FF002E',
    borderWidth: 1,
    padding: 2,
    color: '#FF002E',
    borderRadius: 5,
    fontSize: 15
  },
  mediumPriority: {
    borderColor: '#FFC804',
    borderWidth: 1,
    padding: 2,
    color: '#FFC804',
    borderRadius: 5,
    fontSize: 15
  },
  lowPriority: {
    borderColor: '#00CF08',
    borderWidth: 1,
    padding: 2,
    color: '#00CF08',
    borderRadius: 5,
    fontSize: 15
  },
})
