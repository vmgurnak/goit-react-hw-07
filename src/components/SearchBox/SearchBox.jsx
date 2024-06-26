import css from './SearchBox.module.css';

import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const filters = useSelector(state => state.filters.name);
  // const filters = useSelector(selectNameFilter());

  const dispatch = useDispatch();

  const onChange = evt => dispatch(changeFilter(evt.target.value));

  return (
    <div className={css.searchBoxWrap}>
      <p className={css.searchBoxTitle}>Find contacts by name</p>
      <input
        className={css.searchBoxInput}
        type="text"
        value={filters}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
