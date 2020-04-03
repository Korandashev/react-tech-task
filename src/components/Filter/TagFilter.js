import React, {useState, useEffect} from 'react';
import filter from './Filter';

function TagFilter({updateFilter, tags, filters}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        clear()
    }, [tags]);

    useEffect(() => {
        if (!Object.keys(filters).length) clear();
    }, [filters]);

    const clear = () => {
        setItems(tags.map(x => ({label: x.name, value: x.id, isChecked: false})));
    };

    const handleChange = ({target}) => {
        const {checked, value} = target;
        let newTags = items.slice(0);
        newTags.forEach(language => {
            if (language.value === value) language.isChecked = checked
        });
        setItems(newTags);
        updateFilter(newTags.filter(x => x.isChecked).map(x => x.value));
    };

    return (
        <div className="filter-group">
            {items.map(({label, value, isChecked}, idx) => (
                <label key={idx} className="filter">
                    <input type="checkbox" name="tag" value={value} checked={isChecked} onChange={handleChange}/>
                    <span>{label}</span>
                </label>
            ))}
        </div>
    )
}

export default filter(TagFilter);