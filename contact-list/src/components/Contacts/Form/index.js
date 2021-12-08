import { useEffect, useState } from "react";

function Form({addContact, contacts}) {
 
  const initialFormValues = { fullname: "", phone_number: "" }
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {

    setForm(initialFormValues)

  }, [contacts])

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const onSubmit = (e) => {
    e.preventDefault(); // Form işlemi submit olduğunda, default olarak sayfa kendini yeniliyor. Bunu engellemek için preventDefault kullanıdık.
    
    if (form.fullname === "" || form.phone_number === "") {

        return false;
    }

    addContact([...contacts, form])

    // setForm(initialFormValues) ---> Inputu temizlemek için kullanılabilir ya da bu işlem useEfffect içinde ayrıca yapılabilir(CONTACT DEĞİŞTİĞİNDE)
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          onChange={onChangeInput}
          value={form.fullname}
          placeholder="Fullname"
          name="fullname"
        />
      </div>
      <div>
        <input
          onChange={onChangeInput}
          value={form.phone_number}
          placeholder="Phone Number"
          name="phone_number"
        />
      </div>
      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;

