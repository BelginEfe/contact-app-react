import {useState, useEffect} from "react";

function List({ contacts }) {

    const [filterText, setFilterText] = useState("");

    const onChangeFilterText = (e) => {
        setFilterText(e.target.value)
    }

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLowerCase());
        })
    })

  return (
    <div>

        <input 
        value={filterText}
        placeholder="Filter Contact" 
        onChange={onChangeFilterText}
        />
        
        <ul className="list">
            {
                filtered.map((e, i) => (
                    <li key={i}>
                        <span>{e.fullname}</span>
                        <span>{e.phone_number}</span>
                    </li>
                ))
            }
        </ul>
        <p>Total Contacts ({filtered.length})</p>
    </div>
  );
}

export default List;
