import { Form, useSubmit } from "react-router-dom";
import { useAllDataContext } from "../pages/HomeLayout";

const SearchContainer = () => {
  const { searchValues } = useAllDataContext();
  const search = searchValues;
  const submit = useSubmit();

  const debounce = (onChange) => { 
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 2000);
    };
  };
  return (
    <div>
      <Form>
        <input
          type="search"
          name="search"
          placeholder="Search Transaction"
          defaultValue={search}
          onChange={debounce((form) => {
            submit(form);
          })}
        />
      </Form>
    </div>
  );
};

export default SearchContainer;
