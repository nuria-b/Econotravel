import React from "react";
import {GiGorilla} from 'react-icons/gi';
import { Link } from "react-router-dom";

export default function Menu(){
      return (
        <ul>
          <li>
            <button>
              <Link to='/login'><button><GiGorilla /></button></Link>
            </button>
            <section>
              {" "}
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </section>
          </li>
        </ul>
      ) 
}
  