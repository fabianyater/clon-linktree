import { useState } from "react";
import { useTheme } from "../../context/ThemeProvider";
import { fetchIcon } from "../../services/fetchIcons";
import { getNameFromUrl } from "../../utils/utils";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./AddLinkForm.module.css";

const AddLinkForm = ({ setLinks }) => {
  const { theme } = useTheme();
  const [name, setName] = useState("");

  const handleOnSumbit = async (event) => {
    event.preventDefault();
    const url = event.currentTarget.url.value;
    const urlName = getNameFromUrl(url);
    const icon = await fetchIcon(urlName);

    const newLink = { name: urlName, icon, path: url, isVisible: true };

    setLinks((previousLinks) => {
      const updatedLinks = [newLink, ...previousLinks];
      localStorage.setItem("links", JSON.stringify(updatedLinks));
      return updatedLinks;
    });

    event.currentTarget.reset();
  };

  const handleUrlChange = (event) =>
    setName(getNameFromUrl(event.target.value));

  return (
    <form className={styles.form} onSubmit={handleOnSumbit}>
      <Input
        name="url"
        onChange={handleUrlChange}
        type="url"
        placeholder="URL"
      />
      <Input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Nombre"
      />
      <Button
        theme={theme}
        type="submit"
        rounded
        showText={false}
        icon="plus"
      />
    </form>
  );
};

export default AddLinkForm;
