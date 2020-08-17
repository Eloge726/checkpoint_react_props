import React from 'react';
import PropTypes from 'prop-types'

const  Profil = (props) => {
    return (<>
    
    <img src={props.img} alt='im3'/>
    <p>Fullname:{ props.fullname}</p>
    <p>Bio: {props.bio}</p>
    <p>Profession :{props.profession}</p>
    <button onClick={props.myfunc}>Alert</button>
    </>  );
}
 Profil.propType={
     fullname:PropTypes.string,
 }
export default  Profil;