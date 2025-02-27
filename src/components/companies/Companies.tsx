"use client";

interface CompaniesInterface {
  jobsList: Array<{
    companyName: string;
    title: string;
    location: string;
    type: string;
    experience: string;
    description: string;
    skills: string;
    recruiterId: string;
    applicants: {
      name: string;
      email: string;
      userId: string;
      status: string;
    }[];
  }>;
}
const Companies = ({ jobsList }: CompaniesInterface) => {
  // console.log(jobsList);
  const createUniqueSetOfCompanies = [
    ...new Set(
      jobsList
        .filter(
          (jobItem) =>
            jobItem?.companyName && jobItem?.companyName.trim() !== ""
        )
        .map((item) => item?.companyName)
    ),
  ];
  console.log(createUniqueSetOfCompanies);
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-baseline justify-between border-b pb-6 pt-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          BrowseCompanies
        </h1>
      </div>
      <div className="pt-6 pb-24">
        <div className="grid grid-cols-1 gap-x-8  gap-y-10 lg:grid-cols-3">
          <div className="lg:col-span-4">
            <div className="container mx-auto p-0 space-y-8">
              <div className="grid grid-cols-1 gap-x-8  gap-y-10 lg:grid-cols-3">
                {createUniqueSetOfCompanies &&
                createUniqueSetOfCompanies.length > 0
                  ? createUniqueSetOfCompanies.map((companyName) => )
                  : "No Companies Found"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
