import React from 'react';

type cardProps = {
    title:string;
    url:string;
    description:string;
}

const Card = ({title, url, description}:cardProps) => {
    return (
        <div className={"bg-gray-200 text-right space-y-5 p-5 w-80"}>
            <p>{title}</p>
            <p>{url}</p>
            <p>{description}</p>
        </div>
    );
};

export default Card;