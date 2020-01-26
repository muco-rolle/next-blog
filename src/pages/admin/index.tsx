import { DashboardPage } from '@back-office-pages';
import { withAuth } from '@utils';

function Dashboard() {
    return <DashboardPage />;
}

export default withAuth(Dashboard);
