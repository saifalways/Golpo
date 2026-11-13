import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Setting = () => {


    let data = useSelector((state) => state.counter.value);
  let navigate = useNavigate();
  useEffect(() => {
    if (data == null) {
      navigate("/login");
    }
  }, []);

  return (
    <div>Setting</div>
  )
}

export default Setting