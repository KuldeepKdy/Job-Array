import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-full flex items-center justify-center py-8 md:py-10">
      <SignUp />
    </div>
  );
}
