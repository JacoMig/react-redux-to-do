import React from 'react'
import FilterLink from './filterlink' 


const filterlinks = () => (
    <div className="filterlinks">
        <FilterLink actiontype={'SHOW_ALL'} title="All" />
        <FilterLink actiontype={'SHOW_COMPLETED'} title="Completed" />
        <FilterLink actiontype={'SHOW_UNCOMPLETED'} title="Uncompleted" />
    </div>
)


export default filterlinks