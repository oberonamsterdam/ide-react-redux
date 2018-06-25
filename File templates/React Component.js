// @flow

import React, { Component } from 'react';

#set($name = ${StringUtils.capitalizeFirstLetter(${NAME})})
#set($propType = $name + "Props")
type $propType = {
    
};

class $name extends Component {
    props: $propType;
    
    render() {
        return (null);
    }
}

export default $name;