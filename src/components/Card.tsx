import React from 'react';
import '../assets/style/Cards.scss';

type Link = {
    href: string,
    text: string
}

type CardProps = {
    children?: string | React.Component[] | never[],
    title: string,
    sub?: string,
    subLinks?: Link[]
}

const generateLinks = (links: Link[]) => links.map(({href, text}, i) => (<h6 key={i}><a href={href} key={i}>{text}</a></h6>));

const Card = ({children, title, sub, subLinks}: CardProps) => (<div className="card">
    <div className="title">
        <h2>{title}</h2>
        <h4>{sub}</h4>
        {subLinks !== undefined
            ? (<div className="links">{  generateLinks(subLinks) }</div>)
            : ""
        }
    </div>
    <p>{children}</p>
</div>);

export default Card;
