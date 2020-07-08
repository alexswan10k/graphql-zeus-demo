import {Gql, ScalarResolver} from "./generated/graphql-zeus"
import usePromise from 'react-use-promise';
import * as React from "react";

const q = Gql.query({
  UserProfileTest: [{},{A: true, B: true}]
})



export function DataRenderer() {
  const [result, error, state] =
    usePromise(() =>
      Gql.query({
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