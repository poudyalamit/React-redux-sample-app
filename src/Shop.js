import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './State';
const Shop = () => {
  const dispatch =useDispatch();
  const balance=useSelector(state=>state.amount)
  const {withdraw,deposit} =bindActionCreators(actionCreators,dispatch);
  return (
    <div>
        <h2>Deposit/Withdraw Money</h2>
        {/* to do using dispatch */}
       {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdraw(100))}}>-</button>
       Update Balance
       <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.deposit(100))}}>+</button> */}       
       <button className="btn btn-primary mx-2" onClick={()=>{withdraw(100 )}}>-</button>
       Update Balance [{balance}]
        <button className="btn btn-primary mx-2" onClick={()=>{deposit(100)}}>+</button>
    </div>
  )
}

export default Shop
