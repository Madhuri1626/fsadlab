import React from 'react'
import PropTypes from "prop-types"
function Props(props) {
  return (
    <div>
      <table>
        <tr>
          <th>Props name</th>
          <th>Value</th>
          <th>Valid</th>
        </tr>

        <tr>
          <td>Array</td>
          <td>{props.array}</td>
          <td>{props.array?"true":"false"}</td>
        </tr>

        <tr>
          <td>Boolean</td>
          <td>{props.num}</td>
          <td>{props.num?"true":"false"}</td>
        </tr>
      </table>
    </div>
  )
}
Props.propTypes={
  array:PropTypes.array,
  num:PropTypes.number,
  sr:PropTypes.string,
  Bool:PropTypes.bool
}
Props.defaultProps={
    array:[1,2,34,5],
    num:4,
    sr:"string",
    Bool:true,
}
export default Props
