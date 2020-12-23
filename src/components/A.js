import {Component} from 'react';

import { B } from './B'; 

import './a.css';

export class A extends Component{ // Named Export
    //1. Property
    
    //2. Constructor

    //3. Method
    //Every Class Component Must have render Method
    render(){
        return <h2 className="a">Hello <span className="b">Khushansh</span><B /></h2>
    }
}
//export default A;
