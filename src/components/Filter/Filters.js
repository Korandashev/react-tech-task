import React, {useState, useEffect} from 'react';

export default function Filters({children, onChange, className}) {
    const [filters, setFilters] = useState({});

    useEffect(() => {
        onChange(filters);
    }, [filters]);

    const updateFilters = (name, value) => {
        setFilters({...filters, [name]: value});
    };

    const clearFilters = () => {
        setFilters({});
    };

    return (
        <div className={className}>
            {React.Children.toArray(
                children.map(child => React.cloneElement(child, {filters, updateFilters, clearFilters}))
            )}
        </div>
    );
}