import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {changeFilter} from '../../redux/contacts-actions';
import { getFilter } from '../../redux/contacts-selectors';

import PropTypes from "prop-types";

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector((state) => getFilter(state));
  const onChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

   return (
   <label>
        Find contacts by name <input type="text" value={value} onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Filter;