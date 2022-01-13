import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { setCurrentSelectedValues } from '../actions/dropDownActions';

const options = [
  {
    id: '0',
    value: 'All',
    label: 'All projects',
    category: 'all',
  },
  {
    id: '1',
    value: 'Web Development',
    label: 'Web Development',
    category: 'wd',
  },
  {
    id: '3',
    value: 'Design',
    label: 'Design',
    category: 'de',
  },
];

const DropDown = () => {
  const dispatch = useDispatch();
  const handleValue = (value) => {
    dispatch(setCurrentSelectedValues(value));
  };
  return (
    <div className="dropDown">
      <Select
        isLoading={false}
        options={options}
        placeholder="Select at project"
        onChange={handleValue}
      />
      <p>{}</p>
    </div>
  );
};

export default DropDown;
