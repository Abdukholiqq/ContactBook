import { useState } from "react";
import Input from "./input";

const Form = () => {
  const [data, setdata] = useState([
    {
      title: "Lorem ipsum dolo",
      relation: "Qarindosh",
      phone: "+998909335134",
    },
  ]);

  const [state, setState] = useState({
    title: "",
    relation: "",
    phone: "",
  });

  const onChangehandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const addPost = (e) => {
    e.preventDefault();

    setdata([...data, { ...state }]);

    setState({ title: "", relation: "", phone: "" });
  };

  return (
    <main className="d-flex container mt-5 gap-4">
      <form className="d-flex flex-column w-50" onSubmit={addPost}>
        <h3 className="mb-2 text-primary">Add New Contact</h3>

        <Input
          type={"text"}
          value={state.title}
          name={"title"}
          onChangehandler={onChangehandler}
          placeholder={"Name"}
        />
        <Input
          type={"text"}
          value={state.relation}
          name={"relation"}
          onChangehandler={onChangehandler}
          placeholder={"RelationShip"}
        />
        <Input
          type={"Number"}
          value={state.phone}
          name={"phone"}
          onChangehandler={onChangehandler}
          placeholder={"Phone Number"}
        />

        <button className="btn w-100 p-1 bg-primary text-light">
          Add to Contact
        </button>
      </form>

      <div className="contacts w-50 ">
        <h2 className="text-center text-primary">All Contacts</h2>
        {data.map((item) => {
          return (
            <div
              key={item.title}
              className=" mt-2 p-3 rounded-2 border-2 shadow">
              <h3>{item.title}</h3>
              <p className="text-success">{item.relation}</p>
              <a className="text-decoration-none" href="tel:{item.phone}">
                {item.phone}
              </a>
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default Form;
