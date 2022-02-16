import Nav from "./Nav";
import Header from "./Header";
import Meta from "./Meta";
import styles from "../styles/Layout.module.css";
const Layout = ({children}) =>{
    return(
        // it will shows on every page that uses this layout.
       <>
       <Meta />
       <Nav></Nav>
        <div className={styles.container}>
           <main className={styles.main}>
               <Header></Header>
             {children}
           </main>
        </div>
       </>
    )
}

export default Layout