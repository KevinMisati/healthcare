import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

const Home = async ({ searchParams }: SearchParamProps) => {
  const {admin} =  await searchParams
  const isAdmin = admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Link 
            style={{width:"2000px"}}
            href="/"
          >
            <Image
              src="/assets/icons/keumbu-logo.png"
              height={1000}
              width={1000}
              alt="patient"
              className="mb-12 h-14 w-fit"
            />
          </Link>
          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © {new Date().getFullYear()} KeumbuHealth
            </p>
            <Link href="?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding.webp"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default Home;