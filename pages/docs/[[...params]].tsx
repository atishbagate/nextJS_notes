import { useRouter } from 'next/router'
import React from 'react'
import Condition1 from './condition1';
import Condition2 from './condition2';

interface Props {}

function Doc(props: Props) {
    const router = useRouter();
    const {} = props
    const {params = []} = router.query;
    console.log("params is ", params);
      
        if (params.length === 2) { 
               return  <Condition1 /> 
        }
        else if(params.length === 1 ){ 
              return  <Condition2/> 
        }
        else{
           return <h2>This is Default Page Rendering.</h2>
        } 
}

export default Doc
