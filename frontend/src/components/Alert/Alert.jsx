import React from 'react'
import "./Alert.css";

function Alert(props) {
    if (!props.alert) {
        return null; // Don't render anything if alert is null
      }
  return (
    <div className={`alert alert-${props.alert.type}  alert-dismissible fade show` }  role="alert">
      <strong>{props.alert.type}</strong>: {props.alert.msg}
    </div>
     
  )
}


export default Alert; 