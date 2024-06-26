import { useDispatch, useSelector } from 'react-redux';
import css from '../SearchBox/searchbox.module.css';
import { selectNameFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const filterData = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.searchboxWrapper}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        name="search"
        className={css.searchbox}
        value={filterData}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
