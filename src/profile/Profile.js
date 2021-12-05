import React from 'react'
import PropTypes from "prop-types";
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Profile = (props) => {
    
    
  
    return (
        
        <Container >
        <Card  sx={{ minWidth: 275 }}>
        <CardContent style={{marginTop:"200"}}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.fullName}
          </Typography>
         
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.profession}
          </Typography>
          <Typography variant="body2">
          {props.bio}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"onClick={() => props.alertMyInput(`My name is ${props.fullName}`)}> Click Me</Button>
        </CardActions>
      </Card>
      </Container>
      

    );
    }
    
  Profile.defaultProps={
    fullName:"Ons Jabeur",
    bio:"is a Tunisian professional tennis player who has a career-high WTA ranking of No.16, achieved on 27 September 2021. In 2021, she created history by becoming the first Arab woman to win a WTA tour title. She has a WTA Tour-high 44 match victories this season.",
   profession:"professional tennis player" 

  };

        
Profile.propTypes = {
    fullName:PropTypes.string,
 profession: PropTypes.string,
   alertMyInput: PropTypes.func,
bio:PropTypes.string,
children: PropTypes.element.isRequired
   };


export default Profile
       