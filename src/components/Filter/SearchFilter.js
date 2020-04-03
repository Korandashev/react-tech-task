import React, {useState, useEffect} from 'react';
import filter from './Filter';
import useDebounce from '../../helpers/useDebounce';

function InputFilters({updateFilter, filters}) {
    const [value, setValue] = useState('');
    const debouncedValue = useDebounce(value, 500);

    useEffect(() => {
        if (!Object.keys(filters).length) setValue('');
    }, [filters]);

    useEffect(() => {
        updateFilter(debouncedValue);
    }, [debouncedValue]);

    const handleChange = ({target}) => {
        setValue(target.value);
    };

    return (
        <div className="filter-group">
            <input type="text" value={value} onChange={handleChange} className="filter"/>
        </div>
    )
}

export default filter(InputFilters);