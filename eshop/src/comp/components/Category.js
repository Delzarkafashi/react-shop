import React from 'react';

const Category = ({ Filter, allcateFilter }) => {
    return (
        <div className="category">
            <div className="header">
                <h3>All categories</h3>
            </div>
            <div className="box">
                <ul>
                    <li onClick={() => allcateFilter()}># All</li>
                    <li onClick={() => Filter("tv")}># tv</li>
                    <li onClick={() => Filter("laptop")}># laptop</li>
                    <li onClick={() => Filter("watch")}># watch</li>
                    <li onClick={() => Filter("speaker")}># speaker</li>
                    <li onClick={() => Filter("electronics")}># electronics</li>
                    <li onClick={() => Filter("headphone")}># headphone</li>
                    <li onClick={() => Filter("phone")}># phone</li>
                </ul>
            </div>
        </div>
    );
}

export default Category;
