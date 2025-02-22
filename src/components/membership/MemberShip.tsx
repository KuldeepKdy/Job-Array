"use client";
import { membershipPlans } from "@/utils";
import CommonCard from "../CommonCard";
import JobIcon from "../JobIcon";
import { Button } from "../ui/button";
import { createPaymentAction, createPriceIdAction } from "@/actions";

interface membershipInterface {
  profileInfo: {
    userId: string;
    role: string;
    email: string;
    isPreminumUser: boolean;
    memberShipType: string;
    memberShipStartDate: string;
    memberShipEndDate: string;
    recruiterInfo: {
      name: string;
      companyName: string;
      companyRole: string;
    };
    candidateInfo: {
      name: string;
      currentJobLocation: string;
      preferedJobLocation: string;
      currentSalary: string;
      noticePeriod: string;
      skills: string;
      currentCompany: string;
      previousCompanies: string;
      totalExperience: string;
      college: string;
      collageLocation: string;
      graduatedYear: string;
      linkedinProfile: string;
      githubProfile: string;
      resume: string;
    };
  };
  Plan: { heading: string; price: number; type: string };
}

const MemberShip = ({ profileInfo }: membershipInterface) => {
  async function handlePayment(Plan: {
    heading: string;
    price: number;
    type: string;
  }) {
    const extractPriceId = await createPriceIdAction(Plan?.price);
    // console.log(extractPriceId);
    if (extractPriceId) {
      sessionStorage.setItem("currentaplan", JSON.stringify(Plan));
      const result = await createPaymentAction({
        lineItems: [
          {
            price: extractPriceId?.id,
            quantity: 1,
          },
        ],
      });
    }
  }
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-baseline justify-between border border-b pb-6 pt-24">
        <h1 className="text-4xl font-bold tracking-tighter text-gray-950">
          Choose Your Best Plan
        </h1>
      </div>
      <div className=" py-20 pb-24 pt-6">
        <div className="container mx-auto p-0 space-y-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {membershipPlans.map((plan, index) => (
              <CommonCard
                key={index}
                icon={
                  <div className="flex justify-between">
                    <div>
                      <JobIcon />
                    </div>
                    <h1 className="font-bold text-xl">{plan?.heading}</h1>
                  </div>
                }
                title={`${plan?.price} /yr`}
                description={plan?.type}
                footerContent={
                  <Button
                    onClick={() => {
                      handlePayment(plan);
                      // console.log(plan);
                    }}
                    className=" disabled:opacity-65 flex h-11 items-center justify-center px-5"
                  >
                    Get Premium
                  </Button>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberShip;
