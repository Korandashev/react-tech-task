import React from 'react';

export default function filter(WrappedComponent) {
    return class extends React.Component {
        updateFilter(value) {
            this.props.updateFilters(this.props.filterName, value);
        }

        clearFilters() {
            this.props.clearFilters();
        }

        render() {
            const props = {
                ...this.props,
                updateFilter: this.updateFilter.bind(this),
                clearFilters: this.clearFilters.bind(this)
            };
            return <WrappedComponent {...props} />;
        }
    }
}