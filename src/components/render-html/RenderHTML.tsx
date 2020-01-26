import React from 'react';

interface IRenderHTMLProps {
    content: string;
}

export const RenderHTML = (props: IRenderHTMLProps) => {
    return <div dangerouslySetInnerHTML={{ __html: props.content }} />;
};
