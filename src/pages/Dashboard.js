
import DashboardLayout from "../components/dash/DashboardLayout";
import Card from "../components/dash/Card";

function Dashboard(){

    return(
        <DashboardLayout>
            <h1>Dashboard</h1>

            <div style={{display:"flex", gap: "20px", marginTop: "20px"}}>
                <Card titulo="Total de Alunos" valor="120"/>
                <Card titulo="Livros Cadastrados" valor="58"/>
                <Card titulo="Emprestimos Ativos" valor="12"/>
            </div>
        </DashboardLayout>
    );
}

export default Dashboard;