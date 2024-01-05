import { useUser } from "../../context/UserProvider";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./AddUserForm.module.css";

const AddUserForm = ({ setUserInfo }) => {
  const { setUser, handlePreviewImage } = useUser();

  const handleAddUser = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const { fullName, userName, description } = Object.fromEntries(
      data.entries()
    );

    const file = data.get("picture");
    const pictureBase64 = file ? await toBase64(file) : "";

    const newUser = {
      fullname: fullName,
      username: `@${userName}`,
      description: description,
      picture: pictureBase64,
    };

    setUserInfo(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);

    form.reset();
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  return (
    <form onSubmit={handleAddUser} className={styles.form}>
      <Input name="fullName" type="text" placeholder="Fabian Yate" />
      <Input name="userName" type="text" placeholder="fabianyr" />
      <Input name="description" type="text" placeholder="Backend developer" />
      <Input name="picture" type="file" onChange={handlePreviewImage} />
      <Button type="submit" text="Guardar" showText />
    </form>
  );
};

export default AddUserForm;
