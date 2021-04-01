import React from 'react';
import Box from '@material-ui/core/Box';
import { Dropdown, Image } from 'semantic-ui-react'


const options = [
      {key:1, text:"Ayushi", value:"Ayushi"},
      {key:2, text:"Viraj", value:"Viraj"},
      {key:3, text:"Pom Pom", value:"Pom Pom"},
      {key:4, text:"Viru", value:"Viru"},
      {key:5, text:"Choice 5", value:5}
  ]

function App() {


  return (
    <Box paddingLeft={2} paddingRight={2} >
        <Box borderBottom={1} padding={4} style={{borderColor:'#a9a9a9'}} >
        <h1>New Template</h1>
        </Box>
        <Box bgcolor="white" boxShadow={3} margin={2}>
            <Box display="flex" justifyContent="center"  margin={3} padding={4}>
                <Dropdown placeholder='Select tags' fluid multiple search selection options={options}>
                </Dropdown>
            </Box>
        </Box>

        <Box bgcolor="white" boxShadow={3} margin={2}>
            <Box display="flex" justifyContent="center"  margin={3} padding={4}>
                <Image src='https://d33wubrfki0l68.cloudfront.net/01981b3d2afe367c9657500bd10dccc8fd4f7d73/db6a7/img/form-builder-demo-2.gif' fluid />
            </Box>
        </Box>
    </Box>
  );
}

export default App;