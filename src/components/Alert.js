import React from 'react'

export default function Alert(props) {
  return (

    props.alerthaiye && <div>
      <div class={`alert alert-${props.alerthaiye.cat} alert-dismissible fade show hamaraalert`} role="alert">
        <strong>{props.alerthaiye.main}</strong> {props.alerthaiye.msg}
      </div>
    </div>
  )
}
