import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
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

          <RegisterForm user={user} />

          <p className="copyright py-12"> © {new Date().getFullYear()} KeumbuHealth</p>
        </div>
      </section>

      <Image
        src="/assets/images/more-info.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;