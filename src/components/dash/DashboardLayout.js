import Sidebar from "./Sidebar";
import styles from './DashboardLayout.module.css'

function DashboardLayout({children}){

    return(
        <div className={styles.layout}>
            <Sidebar/>
            <main className={styles.content}>
                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;