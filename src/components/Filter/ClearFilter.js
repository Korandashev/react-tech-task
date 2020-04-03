import React from 'react';
import filter from './Filter';

function ClearFilter({clearFilters}) {
    return (
        <div className="filter-group">
            <div className="filter">
                <button type="button" onClick={clearFilters}>Reset filters</button>
            </div>
        </div>
    )
}

export default filter(ClearFilter);