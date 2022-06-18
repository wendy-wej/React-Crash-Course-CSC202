import React from 'react';
type Props = {
    name?: string;
    other?: string; //the question mark means that this is optional
}
const HelloWorld2: React.FC<Props> = (props) => {
    return (
        <div>
            <p>Hello {props.name}. Greetings from React with TypeScript</p> 
            </div>
    )
}
HelloWorld2.defaultProps = {
    name: "John"
}
export default HelloWorld2;