import { render } from '@testing-library/react';
import JobList from './JobList';

it("checkJobListRender", () => {
    const rows = [];
    const {queryByTitle} = render(<JobList rows={rows}></JobList>)
    const jobList = queryByTitle("Job List");
    expect(jobList).toBeTruthy();

});