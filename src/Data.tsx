import {Gql, Chain} from "./generated/graphql-zeus"
import usePromise from 'react-use-promise';
import * as React from "react";


function GqlWithAuth(tokenOrKey: string){
    return Chain('https://tuatradevelop.azurewebsites.net/api/967a1ba6-64a5-4fd2-ad5d-fd0a0d3651c0/793680466/0/gql', 
                {headers: {Authorization: `Bearer ${tokenOrKey}`}});
}

export function DataRenderer() {
  const [result, error, state] =
    usePromise(() =>
    GqlWithAuth("abc").query({
        UserProfileTest: [{},{A: true, B: true, Date: true, Postcode: true}]
      })
      , [null]);

  if(result){
    return <div>
      {result.UserProfileTest.map(u => <div>
      <span>{u.A}</span>
      <span>{u.B}</span>
      <span>{u.Date}</span>
      <span>{u.Postcode}</span>
          </div>)}
    </div>
  }
  return <div></div>
}