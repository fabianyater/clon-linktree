import { useEffect, useState } from "react";
import AddLinkForm from "../../components/AddLinkForm/AddLinkForm";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { Link } from "../../components/Links/Link";
import { useUser } from "../../context/UserProvider";
import { handleDeleteLink } from "../../utils/utils";
import styles from "./Admin.module.css";
import { useTheme } from "../../context/ThemeProvider";

const Admin = () => {
  const { isUserPresent } = useUser();
  const [links, setLinks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    setShowForm(false);
  }, [links]);

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem("links") || "[]");
    setLinks(storedLinks);
  }, [setLinks]);

  return (
    <>
      <div className={styles.bgTop}>
        <div className={styles.bgBottom}></div>
      </div>
      <div className={styles.container}>
        <Header />
        {isUserPresent() && (
          <>
            <div className={styles.addLink}>
              <Button
                text="Agregar enlace"
                showText
                fullWidth
                rounded
                onClick={() => setShowForm(!showForm)}
              />
              <div className={styles.formWrapper}>
                {showForm && <AddLinkForm setLinks={setLinks} />}
              </div>
            </div>
            <main>
              <ul className={styles.list}>
                {links.map((item, index) => {
                  return (
                    <li key={index} className={styles.listItem}>
                      <Link
                        icon={item.icon}
                        name={item.name}
                        link={item.path}
                        isVisible={item.isVisible}
                        onClick={() => handleDeleteLink(index, setLinks)}
                        alt=""
                      ></Link>
                    </li>
                  );
                })}
              </ul>
            </main>
          </>
        )}
      </div>
    </>
  );
};

export default Admin;
