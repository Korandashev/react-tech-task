import React, {useState, useEffect} from 'react';
import {API_URL} from '../../constants/api';
import Card from '../Card';
import Filters from '../Filter/Filters';
import LangFilter from '../Filter/LangFilter';
import TagFilter from '../Filter/TagFilter';
import SearchFilter from '../Filter/SearchFilter';
import ClearFilter from '../Filter/ClearFilter';

export default function CardsPage() {
    const [tags, setTags] = useState([]);
    const [reports, setReports] = useState([]);

    useEffect(() => {
        loadTags();
        loadReports();
    }, []);

    const loadTags = () => {
        fetch(`${API_URL}/reports/tags`, {method: 'GET'})
            .then((response) => response.json())
            .then((data) => {
                setTags(data);
            });
    };

    const loadReports = (filters = {}) => {
        fetch(`${API_URL}/reports/list`, {method: 'GET', data: filters})
            .then((response) => response.json())
            .then((data) => {
                setReports(data);
            });
    };

    const handleChangeFilter = (filters) => {
        loadReports(filters);
    };

    return (
        <>
            <div className="container-fluid">
                <Filters className="filter-wrapper" onChange={handleChangeFilter}>
                    <LangFilter filterName="lang" />
                    <TagFilter filterName="tags" tags={tags} />
                    <SearchFilter filterName="search" />
                    <ClearFilter />
                </Filters>
            </div>
            <div className="container">
                <div className="card-wrapper">
                    {reports.map((report) => (
                        <Card key={report.id} {...report}/>
                    ))}
                </div>
            </div>
        </>
    );
}