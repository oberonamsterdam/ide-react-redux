// @flow

import React from 'react';

#set($name = ${StringUtils.capitalizeFirstLetter(${NAME})})
#set($propType = $name + "Props")
type $propType = {
    
};

const $name = (props: $propType) => (
    null
);

export default $name;