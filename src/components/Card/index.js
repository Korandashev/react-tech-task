import React from 'react';
import Tag from '../Tag';

export default function Card({title, author, lang, tags}) {
    return (
        <a href="#" className="card">
            <div className="card__header">
                <h4>{title}</h4>
            </div>
            <div className="card__author">
                <span>{author}</span>
            </div>
            <div className="card__footer">
                <div className="tag-wrapper">
                    {tags.map((tag) => (
                        <Tag key={tag.id} {...tag} />
                    ))}
                    <Tag name={lang} />
                </div>
            </div>
        </a>
    );
}