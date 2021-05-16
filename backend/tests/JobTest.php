<?php

class JobTest extends TestCase
{
    /**
     * /jobs [GET]
     */
    public function testShouldReturnAllJobs(){

        $this->get("api/v1/jobs", []);
        $this->seeStatusCode(200);
    }

    /**
     * /jobs/id [GET]
     */
    public function testShouldReturnJob(){
        $this->get("api/v1/jobs/1", []);
        $this->seeStatusCode(200);
        
    }

}