import './App.css'
import { Avatar } from './components/Avatar/Avatar';
import { Link } from './components/Links/Link';
import { Links } from './utils/links';
import { User } from './utils/user';

function App() {
  return (
    <>
      <div className='container'>
        <header>
          <Avatar
            img={User.image}
            fullname={User.name}
            username={User.username}
            description={User.description}
          />
        </header>
        <main>
          <ul>
            {Links.map((item) => {
              return (
                <li>
                  <Link
                    key={item.id}
                    image={item.icon}
                    name={item.name}
                    link={item.link}
                    alt=""
                  ></Link>
                </li>
              );
            })}
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
