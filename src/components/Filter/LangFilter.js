import React, {useState, useEffect} from 'react';
import filter from './Filter';

function LangFilter({updateFilter, filters}) {
    const [items, setItems] = useState([
        {label: 'En', value: 'en', isChecked: false},
        {label: 'Ru', value: 'ru', isChecked: false},
    ]);

    useEffect(() => {
        if (!Object.keys(filters).length) clear();
    }, [filters]);

    const clear = () => {
        setItems(items.map(x => ({...x, isChecked: false})));
    };

    const handleChange = ({target}) => {
        const {checked, value} = target;
        let languages = items.slice(0);
        languages.forEach(language => {
            if (language.value === value) language.isChecked = checked
        });
        setItems(languages);
        updateFilter(languages.filter(x => x.isChecked).map(x => x.value));
    };

    return (
        <div className="filter-group">
            {items.map(({label, value, isChecked}, idx) => (
                <label key={idx} className="filter">
                    <input type="checkbox" name="lang" value={value} checked={isChecked} onChange={handleChange}/>
                    <span>{label}</span>
                </label>
            ))}
        </div>
    )
}

export default filter(LangFilter);