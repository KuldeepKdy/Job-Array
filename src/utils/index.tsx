import qs from "query-string";

export const recruiterOnBoardFormControls = [
  {
    label: "Name",
    name: "name",
    placeholder: "Enter your name",
    componentType: "input",
  },
  {
    label: "Company Name",
    name: "companyName",
    placeholder: "Enter your company name",
    componentType: "input",
  },
  {
    label: "Company Role",
    name: "companyRole",
    placeholder: "Enter your company role",
    componentType: "input",
  },
];

export const intitalRecruiterFormData = {
  name: "",
  companyName: "",
  companyRole: "",
};
export const candidateOnBoardFormControls = [
  {
    label: "Resume",
    name: "resume",
    componentType: "file",
  },
  {
    label: "Name",
    name: "name",
    placeholder: "Enter your name",
    componentType: "input",
  },
  {
    label: "Current Company",
    name: "currentCompany",
    placeholder: "Enter your current company",
    componentType: "input",
  },
  {
    label: "Company Job Location",
    name: "companyJobLocation",
    placeholder: "Enter your current job location",
    componentType: "input",
  },
  {
    label: "Prefered Job Location",
    name: "preferedJobLocation",
    placeholder: "Enter your prefered job location",
    componentType: "input",
  },
  {
    label: "Current Salary",
    name: "currentSalary",
    placeholder: "Enter your current salary",
    componentType: "input",
  },
  {
    label: "Notice Period",
    name: "noticePeriod",
    placeholder: "Enter your notice period",
    componentType: "input",
  },
  {
    label: "Skills",
    name: "skills",
    placeholder: "Enter your skills",
    componentType: "input",
  },
  {
    label: "Previous Companies",
    name: "previousCompanies",
    placeholder: "Enter your previous comapanies",
    componentType: "input",
  },
  {
    label: "Total Experience",
    name: "totalExperience",
    placeholder: "Enter your total experience",
    componentType: "input",
  },
  {
    label: "College",
    name: "college",
    placeholder: "Enter your college",
    componentType: "input",
  },
  {
    label: "Collage Location",
    name: "collageLocation",
    placeholder: "Enter your collage location",
    componentType: "input",
  },
  {
    label: "Graduated Year",
    name: "graduatedYear",
    placeholder: "Enter your graduated year",
    componentType: "input",
  },
  {
    label: "Linkedin Profile",
    name: "linkedinProfile",
    placeholder: "Enter your linkedin profile",
    componentType: "input",
  },
  {
    label: "Github Profile",
    name: "githubProfile",
    placeholder: "Enter your github profile",
    componentType: "input",
  },
];

export const initialCandidateFormData = {
  resume: "",
  name: "",
  companyJobLocation: "",
  preferedJobLocation: "",
  currentSalary: "",
  noticePeriod: "",
  skills: "",
  currentCompany: "",
  previousCompanies: "",
  totalExperience: "",
  college: "",
  collageLocation: "",
  graduatedYear: "",
  linkedinProfile: "",
  githubProfile: "",
};

export const PostNewJobFormControls = [
  {
    label: "Company Name",
    name: "companyName",
    placeholder: "Enter your company name",
    componentType: "input",
    disabled: true,
  },
  {
    label: "Title",
    name: "title",
    placeholder: "Job Title",
    componentType: "input",
  },
  {
    label: "Type",
    name: "type",
    placeholder: "Job Type",
    componentType: "input",
  },
  {
    label: "Location",
    name: "location",
    placeholder: "Job Location",
    componentType: "input",
  },
  {
    label: "Experience",
    name: "experience",
    placeholder: "Experience",
    componentType: "input",
  },
  {
    label: "Description",
    name: "description",
    placeholder: "Description",
    componentType: "input",
  },
  {
    label: "Skills",
    name: "skills",
    placeholder: "Skills",
    componentType: "input",
  },
];

export const initialPostNewJobFormData = {
  companyName: "",
  title: "",
  type: "",
  location: "",
  experience: "",
  description: "",
  skills: "",
};

export const filterMenuDataArray = [
  {
    id: "companyName",
    label: "Company Name",
  },
  {
    id: "title",
    label: "Title",
  },
  {
    id: "type",
    label: "Type",
  },
  {
    id: "location",
    label: "Location",
  },
];

interface FormUrlQueryParams {
  [key: string]: string | string[];
}

export function formUrlQuery({ params, dataToAdd }: { params: string; dataToAdd: FormUrlQueryParams }) {
  const currentUrl = qs.parse(params);
  if (Object.keys(dataToAdd).length > 0) {
    Object.keys(dataToAdd).map((key: string) => {
      if (dataToAdd[key].length === 0) delete currentUrl[key];
      else currentUrl[key] = Array.isArray(dataToAdd[key]) ? dataToAdd[key].join(",") : dataToAdd[key];
    });
  }
  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    {
      skipNull: true,
    }
  );
}
