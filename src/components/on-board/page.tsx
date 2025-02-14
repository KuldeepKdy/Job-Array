"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CommonForm from "../common-form/page";
import { createProfileAction } from "@/actions/index";
import {
  candidateOnBoardFormControls,
  initialCandidateFormData,
  intitalRecruiterFormData,
  recruiterOnBoardFormControls,
} from "@/utils/index";
import { useUser } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";

// Supabase connection
const supabaseUrl = "https://wzapditlogmdsweecqnx.supabase.co";
const supabaseKey =
  process.env.SUPABASE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6YXBkaXRsb2dtZHN3ZWVjcW54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwMjI2MjgsImV4cCI6MjA1NDU5ODYyOH0.aA3AXtW_b6DwmK4UJE8OdVWGRfRx3liUYxYmgbLzpPI";
const supabase = createClient(supabaseUrl, supabaseKey);

function OnBoard() {
  const currentAuthUser = useUser();
  const { user } = currentAuthUser;
  const [currentTab, setCurrentTab] = useState("candidate");
  const [recruiterformData, setRecruiterFormData] = useState<{
    [key: string]: string | File;
  }>(intitalRecruiterFormData);
  const [candidateformData, setCandidateFormData] = useState<{
    [key: string]: string | File;
  }>(initialCandidateFormData);

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleUploadPdfToSupabase = async () => {
    if (file) {
      const { data, error } = await supabase.storage
        .from("job-board-public")
        .upload(`/public/${file.name}/${new Date()}`, file, {
          cacheControl: "3600",
          upsert: false,
        });
      console.log(data, error);
      if (data) {
        setCandidateFormData({ ...candidateformData, resume: data.path });
      }
    }
  };

  useEffect(() => {
    if (file) handleUploadPdfToSupabase();
  }, [file]);
  const handleTabChange = (value: string) => {
    setCurrentTab(value);
  };
  // console.log(recruiterformData, "recruiter form data");

  function handleRecruiterFormValid() {
    return (
      recruiterformData &&
      typeof recruiterformData.name === "string" &&
      recruiterformData.name.trim() !== "" &&
      typeof recruiterformData.companyName === "string" &&
      recruiterformData.companyName.trim() !== "" &&
      typeof recruiterformData.companyRole === "string" &&
      recruiterformData.companyRole.trim() !== ""
    );
  }

  function handleCandidateFormValid() {
    return Object.keys(candidateformData).every(
      (key) =>
        typeof candidateformData[key] === "string" &&
        candidateformData[key].trim() !== ""
    );
  }

  async function createProfile() {
    const data =
      currentTab === "candidate"
        ? {
            candidateInfo: candidateformData,
            role: "candidate",
            isPremiumUser: false,
            userId: user?.id,
            email: user?.primaryEmailAddress?.emailAddress,
          }
        : {
            recruiterInfo: recruiterformData,
            role: "recruiter",
            isPremiumUser: false,
            userId: user?.id,
            email: user?.primaryEmailAddress?.emailAddress,
          };
    await createProfileAction(data, "/onboard");
  }
  // console.log(candidateformData, "candidate form data");
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
        <TabsContent value="candidate">
          <CommonForm
            formControls={candidateOnBoardFormControls}
            buttonText={"OnBoard as candidate"}
            formData={candidateformData}
            setFormData={setCandidateFormData}
            handleFileChange={handleFileChange}
            isBtnDisabled={!handleCandidateFormValid()}
            action={createProfile}
          />
        </TabsContent>
        <TabsContent value="recruiter">
          <CommonForm
            formControls={recruiterOnBoardFormControls}
            buttonText={"OnBoard as recruiter"}
            formData={recruiterformData}
            setFormData={setRecruiterFormData}
            isBtnDisabled={!handleRecruiterFormValid()}
            action={createProfile}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default OnBoard;
