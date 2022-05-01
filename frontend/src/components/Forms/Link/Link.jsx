import { useState } from "react";

const Link = (props) => {
    const { onLinkData, onValid } = props;
    const [links, setLinks] = useState([
        {
            name: "",
            url: ""
        },
    ]);
    const inputChangeHandler = (e, index) => {
        const data = [...links];
        data[index][e.target.name] = e.target.value;
        setLinks(data)
    };
    const addHandler = () => {
        setLinks(previous => {
            return [...previous, {
                name: "",
                url: ""
            }]
        })
    }
    const removeHandler = (index) => {
        if (index > 0) {
            const data = [...links];
            data.splice(index, 1);
            setLinks(data);
        }
    }
    const submitHandler = (e) => {
        e.preventDefault();
        onValid(true);
        onLinkData(links);
    }
    return ( 
        <form className="mx-4" onSubmit={submitHandler}>
            {links.map((link, index) => {
                return (
                    <section key={index}>
                        <div className="mb-4">
                            <label htmlFor="name" className="cursor-pointer">Link Name</label>
                            <input type="text" id="name" name="name" className="input"
                                value={link.name} onChange={(e) => inputChangeHandler(e, index)} required/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="url" className="cursor-pointer">Url</label>
                            <input type="url" id="url" name="url" className="input"
                                value={link.url} onChange={(e) => inputChangeHandler(e, index)} required/>
                        </div>
                        <div className="flex flex-row justify-center space-x-4">
                            <button type="button" className="bg-red-400 px-2 py-1" onClick={() => addHandler()}>ADD</button>
                            <button type="button" className="bg-red-400 px-2 py-1" onClick={() => removeHandler(index)}>REMOVE</button>
                        </div>   
                    </section>
                )
            })}
            <button type="submit" className="button mb-4">Send First</button>
        </form>
     );
}
 
export default Link;