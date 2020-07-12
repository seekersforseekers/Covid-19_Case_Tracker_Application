import React from 'react';
import Cards from './Cards/Cards';
import Charts  from './Charts/Charts';
import CountryPicker  from './CountryPicker/CountryPicker';
import styles from './App.module.css'

import { render } from '@testing-library/react'; //aded itself
import {fetchData} from './api'


class App  extends React.Component {
  state={
    data:{}
  }
  async componentDidMount(){

    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
  }
  render(){
const{data}=this.state;
  return (
    <div className={styles.container} >
     <Cards data={data}/>
     <Charts/>
     <CountryPicker/>
    </div>
  );
}
}

export default App;
