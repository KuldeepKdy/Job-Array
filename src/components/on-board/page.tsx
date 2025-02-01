"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CommonForm from "../common-form/page";
import {
  intitalRecruiterFormData,
  recruiterOnBoardFormControls,
} from "@/utils/index";

function OnBoard() {
  const [currentTab, setCurrentTab] = useState("candidate");
  const [recruiterformData, setRecruiterFormData] = useState(
    intitalRecruiterFormData
  );

  const handleTabChange = (value: string) => {
    setCurrentTab(value);
  };
  return (
    <div className="bg-white">
      <Tabs value={currentTab} onValueChange={handleTabChange}>
        <div className="w-full">
          <div className="flex items-baseline justify-between border-b pb-6 pt-24 ">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Welcome to OnBoarding
            </h1>
            <TabsList>
              <TabsTrigger value="candidate">Candidate</TabsTrigger>
              <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
            </TabsList>
          </div>
        </div>
        <TabsContent value="candidate">candidate</TabsContent>
        <TabsContent value="recruiter">
          <CommonForm
            formControls={recruiterOnBoardFormControls}
            buttonText={"OnBoard as recruiter"}
            formData={recruiterformData}
            setFormData={setRecruiterFormData}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default OnBoard;
