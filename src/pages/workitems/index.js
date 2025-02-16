import { Grid, Card, CardHeader, CardContent } from '@mui/material';
import WorkItemsTable from 'sections/admin/workitems-list/WorkItemsTable';

const WorkItemsPage = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Card>
                    <CardHeader 
                        title="Work Items" 
                        subheader="Tüm projelerdeki work item'ları görüntüle ve filtrele"
                    />
                    <CardContent>
                        <WorkItemsTable />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default WorkItemsPage; 
